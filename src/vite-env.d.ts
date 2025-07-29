/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_EMAILJS_PUBLIC_KEY: string
  readonly VITE_EMAILJS_SERVICE_ID: string
  readonly VITE_EMAILJS_TEMPLATE_ID: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

// Declare EmailJS on window object
declare global {
  interface Window {
    emailjs: any
  }
} 