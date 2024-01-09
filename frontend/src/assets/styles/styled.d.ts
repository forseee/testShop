import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      error: string;
      background: {
        white: string;
        main: string;
      };
      fonts: {
        white: string;
        grey: string;
      };
    };

    fontSize: {
      xs:string;
      small: string;
      medium: string;
      large: string;
    };

    lineHeight: {
      small: string;
      medium: string;
      large: string;
    };

    media: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
    // in ms
    durations: {
      ms300: number;
    };

    // z-index
    order: {
      header: number;
      modal: number;
      footer: number;
    };
  }
}
