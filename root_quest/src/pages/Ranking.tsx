import Back from "../components/global/Back";
import Button from "../components/global/Button";

function Ranking() {

    const handleEffect = () => {
        console.log('Opa')
    }

    return (
        <div className="bg-colorBase h-full w-full flex justify-start items-center flex-col">
           oooo
           <Button text="Opa Madrid" handleFunction={handleEffect}/>
           <Back/>
        </div>
    )
}

export default Ranking;