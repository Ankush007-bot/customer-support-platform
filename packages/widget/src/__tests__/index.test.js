/* eslint-env jest */

let mockCallbacks = {};

const mockSocket = {
  on: jest.fn((event, cb) => {
    mockCallbacks[event] = cb;
  }),
  emit: jest.fn(),
};

jest.mock('../socket', () => ({ socket: mockSocket }));
jest.mock('../core/bootstrap', () => ({
  bootstrap: jest.fn(() => ({ shadowRoot: 'mock-shadow', config: {} })),
}));
jest.mock('../ui/chatbutton', () => ({ createChatButton: jest.fn() }));
jest.mock('../ui/ChatWindow', () => ({ createChatWindow: jest.fn() }));
jest.mock('../ui/messages', () => ({
  addAgentMessage: jest.fn(),
  showTyping: jest.fn(),
  hideTyping: jest.fn(),
}));

describe('packages/widget/src/index.js', () => {
  beforeEach(() => {
    jest.resetModules();
    mockCallbacks = {};
    mockSocket.on.mockClear();
    mockSocket.emit.mockClear();
    localStorage.clear();
    delete window.__CHATBOT_INITIALIZED__;
  });

  test('emits session:init and stores session id when none exists', async () => {
    document.readyState = 'complete';

    // Import module under test (mocks are applied above)
    await import('../index.js');

    expect(mockSocket.emit).toHaveBeenCalledWith(
      'session:init',
      expect.objectContaining({ sessionId: expect.any(String) })
    );

    const emittedSession = mockSocket.emit.mock.calls[0][1].sessionId;
    const stored = localStorage.getItem('chat_session_id');
    expect(stored).toBeTruthy();
    expect(emittedSession).toBe(stored);
  });

  test('does not initialize when window.__CHATBOT_INITIALIZED__ is true', async () => {
    document.readyState = 'complete';
    window.__CHATBOT_INITIALIZED__ = true;

    const { bootstrap } = await import('../core/bootstrap');
    await import('../index.js');

    expect(bootstrap).not.toHaveBeenCalled();
    expect(mockSocket.emit).not.toHaveBeenCalled();
  });

  test('binds socket events and calls UI helpers', async () => {
    document.readyState = 'complete';

    const messages = await import('../ui/messages');
    const { showTyping, hideTyping, addAgentMessage } = messages;

    await import('../index.js');

    // simulate agent:typing
    expect(typeof mockCallbacks['agent:typing']).toBe('function');
    mockCallbacks['agent:typing']();
    expect(showTyping).toHaveBeenCalledWith('mock-shadow');

    // simulate agent:message
    expect(typeof mockCallbacks['agent:message']).toBe('function');
    mockCallbacks['agent:message']({ text: 'hello' });
    expect(hideTyping).toHaveBeenCalledWith('mock-shadow');
    expect(addAgentMessage).toHaveBeenCalledWith('mock-shadow', 'hello');
  });
});
