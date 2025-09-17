// Environment variables type definitions
declare namespace NodeJS {
  interface ProcessEnv {
    // SMTP Configuration
    SMTP_HOST: string
    SMTP_PORT: string
    SMTP_SECURE: string
    SMTP_USER: string
    SMTP_PASS: string


    // Analytics
    NEXT_PUBLIC_CLARITY_PROJECT_ID?: string
    NEXT_PUBLIC_GTM_ID?: string

    // Environment
    NODE_ENV: 'development' | 'production' | 'test'

    // Backup
    BACKUP_ADMIN_EMAIL?: string
  }
}