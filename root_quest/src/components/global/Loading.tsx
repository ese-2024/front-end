import LoadingIcon from '../../../public/loader.png'

function Loading() {
    return (
        <p className="w-screen h-screen flex items-center justify-center ">
            <img src={LoadingIcon} className="animate-spin"></img>
        </p>
    )
}

export default Loading;