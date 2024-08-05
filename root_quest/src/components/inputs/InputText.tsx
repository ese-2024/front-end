import { IInputText } from "../../interfaces/IInput";

function InputText({type, text, name, placeholder, onChange, value}: IInputText) {

    return (
        <div className="w-full flex flex-col pt-4">
            <p className="pb-1 text-white font-chakra-regular">{text}*</p>
            <input type={type} name={name} placeholder={placeholder} value={value} onChange={onChange}
                className="outline-none bg-colorPopup w-full h-9 border-[1px] border-lineBorder rounded-md px-4 text-textC font-chakra-regular">        
            </input>
        </div>
    )
}

export default InputText;