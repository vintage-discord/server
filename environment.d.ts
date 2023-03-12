declare namespace NodeJS {
  export interface ProcessEnv {
    CLIENT_PORT: string;
    SERVER_PORT: string;
    DISCORD_CLIENT_ID: string;
    DISCORD_CLIENT_SECRET: string;
    DISCORD_REDIRECT_URI: string;
    DISCORD_API_VERSION: string;
    DISCORD_BOT_TOKEN: string;
    MONGO_URI: string;
  }
}
