declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production'
    PORT: string
    MONGODB_URI: string
    NEXTAUTH_SECRET: string
    NEXTAUTH_URL: string
    NEXTAUTH_REDIRECT_URI: string
    NEXTAUTH_SIGN_IN_URI: string
    AUTH0_ISSUER_BASE_URL: string
    AUTH0_CLIENT_ID: string
    AUTH0_CLIENT_SECRET: string
    GITHUB_CLIENT_ID: string
    GITHUB_CLIENT_SECRET: string
    GOOGLE_CLIENT_ID: string
    GOOGLE_CLIENT_SECRET: string
    JWT_SECRET: string
  }
}
