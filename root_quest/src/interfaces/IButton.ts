import { ReactNode } from "react";

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
    text: ReactNode; // Atualizado para ReactNode
    handleFunction: () => void;
    disabled?: boolean;
}