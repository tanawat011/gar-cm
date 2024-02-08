declare namespace NodeJS {
  interface ProcessEnv {
    // Define your environment variables here
    // Example:
    // API_KEY: string;
    // DATABASE_URL: string;

    NODE_ENV: 'development' | 'production'
    PORT: string
    NEXT_PUBLIC_URL_SERVER_GRAPHQL: string
    MONGODB_URI: string
    JWT_SECRET: string
    SERVER_SIDE_SESSION_NAME: string
    SERVER_SIDE_SESSION_SECRET: string
    AUTH0_SECRET: string
    AUTH0_BASE_URL: string
    AUTH0_BASE_URL_IP: string
    AUTH0_ISSUER_BASE_URL: string
    AUTH0_OAUTH_TOKEN_API_URL: string
    AUTH0_BASE_API_URL: string
    AUTH0_CLIENT_ID: string
    AUTH0_CLIENT_SECRET: string
  }
}
