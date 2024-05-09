import { ReactNode } from "react";

export interface IPopup {
    onClose: () => void;
    children: ReactNode;
}

export interface ICard {
    onClose: () => void;
    title: string;
    children: ReactNode;
}