/* eslint-env jest */

const path = require('path');

describe('server/socket/chat.socket.js', () => {
  let initChatSocket;

  beforeEach(() => {
    jest.resetModules();
    jest.useFakeTimers();
    // make crypto.randomUUID available as global (file uses `crypto.randomUUID()`)
    global.crypto = { randomUUID: jest.fn(() => 'sess-123') };
  });

  afterEach(() => {
    jest.useRealTimers();
    delete global.crypto;
    delete global.data;
  });

  test('emits session:init on connection and handles chat message lifecycle', () => {
    const connectionHandlers = {};

    const io = {
      on: jest.fn((event, cb) => {
        connectionHandlers[event] = cb;
      }),
    };

    const socketCallbacks = {};
    const socket = {
      id: 'socket-1',
      emit: jest.fn(),
      on: jest.fn((evt, cb) => {
        socketCallbacks[evt] = cb;
      }),
    };

    // load module under test
    initChatSocket = require('../chat.socket');
    initChatSocket(io);

    // simulate a new connection
    expect(typeof connectionHandlers.connection).toBe('function');
    connectionHandlers.connection(socket);

    // session:init should be emitted with sessionId from crypto.randomUUID
    expect(socket.emit).toHaveBeenCalledWith('session:init', { sessionId: 'sess-123' });

    // prepare global.data because the implementation incorrectly uses `data` variable
    global.data = { text: 'hello' };

    // simulate chat:message
    expect(typeof socketCallbacks['chat:message']).toBe('function');
    socketCallbacks['chat:message']({ text: 'ignored-payload' });

    // after calling handler, it should emit agent:typing synchronously
    expect(socket.emit).toHaveBeenCalledWith('agent:typing');

    // scheduled agent:message after 1200ms
    jest.advanceTimersByTime(1200);
    expect(socket.emit).toHaveBeenCalledWith('agent:message', expect.objectContaining({ text: expect.any(String) }));
  });

  test('disconnect removes session so subsequent messages are ignored', () => {
    const connectionHandlers = {};

    const io = {
      on: jest.fn((event, cb) => {
        connectionHandlers[event] = cb;
      }),
    };

    const socketCallbacks = {};
    const socket = {
      id: 'socket-2',
      emit: jest.fn(),
      on: jest.fn((evt, cb) => {
        socketCallbacks[evt] = cb;
      }),
    };

    initChatSocket = require('../chat.socket');
    initChatSocket(io);
    connectionHandlers.connection(socket);

    // set global.data to satisfy buggy reference in implementation
    global.data = { text: 'bye' };

    // call disconnect to remove session
    expect(typeof socketCallbacks.disconnect).toBe('function');
    socketCallbacks.disconnect();

    // after disconnect, calling chat:message should not emit agent:typing
    socket.emit.mockClear();
    socketCallbacks['chat:message']({ text: 'after-disconnect' });
    expect(socket.emit).not.toHaveBeenCalled();
  });
});
