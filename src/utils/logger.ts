import pino from 'pino';

const isServer = typeof window === 'undefined';
const isDev = process.env.NODE_ENV === 'development';

// pino-pretty runs as a worker-thread transport, which only exists on the
// server. In the browser pino falls back to its console-based build.
const logger = pino({
  level: process.env.NODE_ENV === 'test' ? 'silent' : 'info',
  ...(isServer && isDev ? { transport: { target: 'pino-pretty' } } : {}),
});

export default logger;
