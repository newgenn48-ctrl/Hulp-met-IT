// Global type definitions

// Microsoft Clarity Analytics
declare global {
  interface Window {
    clarity?: {
      (action: string, ...args: any[]): void;
      q?: any[];
    };
  }
}

export {};