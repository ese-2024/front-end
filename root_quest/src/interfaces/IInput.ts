import { ChangeEvent } from "react";

export interface IInputText {
    type: string;
    text: string;
    name: string;
    placeholder: string;
    value?: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}