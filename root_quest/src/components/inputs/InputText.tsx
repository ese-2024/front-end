import { useState } from "react";
import { IInputText } from "../../interfaces/IInput";

function InputText({text, name, placeholder}: IInputText) {

    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };
    return (
        <div className="w-full flex flex-col pt-4">
            <p className="pb-1 text-white font-chakra-regular">{text}*</p>
            <input type="text" name={name} placeholder={placeholder} value={inputValue} onChange={handleInputChange}
                className="outline-none bg-colorPopup w-full h-9 border-[1px] border-lineBorder rounded-md px-4 text-textC font-chakra-regular">        
            </input>
        </div>
    )
}

export default InputText;