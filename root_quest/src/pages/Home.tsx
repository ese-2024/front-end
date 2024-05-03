import TypeAndDelete from "../components/TypeAndDelete";
import LogoLinux from "../../public/LogoLinux.png";

function Home() {

    return (
        <div className="bg-colorBase h-full w-full flex justify-start items-center flex-col">
            <div className="pt-10 w-11/12 flex items-center justify-between h-24">
                <h1 className="font-chakra-medium text-4xl text-hulk uppercase">ROOT QUEST</h1>
                <button className="w-32 h-11 border-[3px] border-hulk rounded-lg flex items-center justify-center font-chakra-medium hover:font-chakra-semibold text-hulk text-lg hover:bg-hulk transition-all ease-in hover:text-colorBase">Login</button>
            </div>
            <div className="w-11/12 h-full flex">
                <div className="w-9/12 flex items-start justify-center flex-col h-full">
                    <div className="w-full font-chakra-bold text-6xl 2xl:text-8xl text-textC uppercase">
                        Desbloqueie o Poder <br/> dos Comandos <br/><span className="text-hulk">Linux</span>.
                    </div>
                    <div className="h-36 w-8/12 font-chakra-bold text-4xl text-textC uppercase"><TypeAndDelete text="Pratique assuntos complexos de Forma Prática e Divertida!" /></div>
                </div>
                <div className="w-4/12 h-5/6 flex items-end justify-end">
                    <img src={LogoLinux} className=""></img>    
                </div>
            </div>
        </div>
    )
}

export default Home;