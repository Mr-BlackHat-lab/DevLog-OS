export type Themeconfig ={
    id: string;
    label: string;
};

export const DEFAULT_THEME = "mocha";

export const THEMES: Themeconfig[] = [
    { id: "mocha", label: "Mocha"},
    { id:"latte", label: "Latte"},
    { id:"frappe", label: "Frappe"},
    { id:"macchiato", label: "Macchiato"},

    // additional themes add here in feature
    // { id:"drakula", label: "dracula"},
];

export const THEME_KEY = "theme";
