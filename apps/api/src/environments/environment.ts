import 'dotenv/config';

import { EnvironmentBase } from './environment.base';

export const environment: EnvironmentBase = {
  siteUrl: 'http://localhost:4200/#',
  production: false,
  expressPort: 7080,
  publicRegistration: true,
  cors: { credentials: true, origin: true },
  graphql: {
    subscriptions: true,
    trace: false,
    sandbox: true,
    introspection: true,
    csrfPrevention: true,
    uploads: {
      maxFileSize: 20_000_000, // 20 MB
      maxFiles: 5,
    },
  },
  jwtOptions: {
    secret: process.env.JWT_PRIVATE_KEY,
    signOptions: {
      algorithm: 'HS256',
      /**
       * The client will exchange the token every 30 minutes during active sessions
       * Refer to: `libs\common\src\lib\environment` for `EnvironmentDev.jwtExchangeInterval`
       */
      expiresIn: 3600, // 1 hour (in seconds)
    },
  },
  expiresInRememberMe: 7_776_000, // 90 days (in seconds)
  mail: {
    transport: {
      host: 'localhost',
      port: 1025,
      ignoreTLS: true,
      secure: false,
    },
    defaults: {
      from: '"No Reply" <no-reply@localhost>',
    },
    preview: true,
  },
  throttle: {
    limit: 2,
    ttl: 60,
    ignoreUserAgents: [/googlebot/gi, /bingbot/gi],
  },
  bcryptSalt: 12,
};
