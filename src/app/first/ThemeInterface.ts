export interface Theme {
    name: string;
    properties: any;
}

export const defaultTheme: Theme = {
    name: "defaultTheme",
    properties: {
        "--body-bg-color": "#fff",
        "--title-color": "orange",
        "--button-bg-color": "#fff",
        "--button-border-color": "orange",
        "--button-text-color": "orange",
        "--magic-box-bg-color": "#ffffff",
        "--magic-box-text-color": "orange"
    }
};

export const light: Theme = {
    name: "light",
    properties: {
        "--body-bg-color": "#DCDCDC",
        "--title-color": "#000080",
        "--button-bg-color": "#ADD8E6",
        "--button-border-color": "#ffffff",
        "--button-text-color": "#FFFFFF",
        "--magic-box-bg-color": "#ffffff",
        "--magic-box-text-color": "#483D8B"
    }
};

export const dark: Theme = {
    name: "dark",
    properties: {
        "--body-bg-color": "#000000",
        "--title-color": "#FFD700",
        "--button-bg-color": "#808080",
        "--button-border-color": "#FFFF00",
        "--button-text-color": "#FFFF00",
        "--magic-box-bg-color": "#2F4F4F",
        "--magic-box-text-color": "#DAA520"
    }
};
