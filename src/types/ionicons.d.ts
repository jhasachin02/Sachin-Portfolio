declare global {
  namespace JSX {
    interface IntrinsicElements {
      'ion-icon': {
        name?: string;
        class?: string;
        style?: React.CSSProperties;
        size?: string;
        color?: string;
      };
    }
  }
}

export {};
