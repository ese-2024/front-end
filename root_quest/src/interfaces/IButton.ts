export interface IButton {
    text: string;
    handleFunction: () => void;
}

export interface IButtonRedirect {
    text: string;
    pathBack: string;
}

export interface IBack {
    pathBack: string;
}

export interface IButtonHulk {
    text: string;
    handleFunction: () => void;
}