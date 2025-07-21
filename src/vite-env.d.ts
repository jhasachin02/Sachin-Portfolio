/// <reference types="vite/client" />
/// <reference path="./global.d.ts" />

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'ion-icon': {
        name?: string;
        color?: string;
        size?: string;
        [key: string]: any;
      };
    }
  }
}
/// <reference path="./types/ionicons.d.ts" />
