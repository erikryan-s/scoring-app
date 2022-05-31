import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        colors: {
            background: string;
            teamOne: string;
            teamOneBorder: string;
            teamTwo: string;
            teamTwoBorder: string;
            resetBackground: string;
            resetBorder: string;
            grey: string;
            white: string;
        };
    }
}
