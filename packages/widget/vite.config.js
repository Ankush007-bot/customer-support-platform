import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.js',   // <-- make sure correct path
      name: 'ChatbotWidget',
      formats: ['umd'],
      fileName: () => 'widget.js'
    }
  }
});
