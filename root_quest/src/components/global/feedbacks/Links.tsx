import CloseIcon from "../../../../public/icons/CloseIcon";
import Button from "../buttons/Button";

interface ILink {
  id: number;
  title: string;
  link: string;
}

interface ILinksProps {
  materials: ILink[];
  onClose: () => void;
}

const Links: React.FC<ILinksProps> = ({ materials, onClose }) => {
  return (
    <div className="bg-colorPopup max-w-[400px] rounded-lg border-[1px] border-lineBorder flex items-center justify-center flex-col -mr-20">
        <div className="w-[400px] max-w-[400px] h-14 flex items-center justify-between flex-row px-4">
            <p className="font-chakra-regular uppercase text-2xl text-textC">Links Úteis</p>
            <button className="-mr-3 w-10 h-10 rounded-full hover:bg-colorSide flex items-center justify-center" onClick={onClose}>
            <CloseIcon />
            </button>
        </div>
        <div className="w-full h-[1px] bg-lineBorder"></div>
        <div className=""></div>
            <ol className="w-[90%] my-6 list-decimal text-lg">
                {materials.map((material, index) => (
                <li key={index} className="my-2 flex gap-x-4">
                    <p className="font-chakra-regular text-textC text-ellipsis text-nowrap overflow-hidden whitespace-nowrap w-[80%]">{material.title}:</p>
                    <a href={material.link} target="_blank" rel="noopener noreferrer" className="text-ellipsis text-nowrap overflow-hidden whitespace-nowrap w-[10%]">Link</a>
                </li>
                ))}
            </ol>
        <div className="w-[90%] mb-4">
            <Button text={'Fechar'} handleFunction={onClose} />
        </div>
    </div>
  );
};

export default Links;
