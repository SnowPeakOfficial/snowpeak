declare module '@marsidev/react-turnstile' {
  import * as React from 'react';

  export interface TurnstileProps {
    siteKey: string;
    onSuccess?: (token: string) => void;
    options?: Record<string, unknown>;
    className?: string;
  }

  export const Turnstile: React.FC<TurnstileProps>;
}


