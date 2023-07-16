export default function ErrorCard(props) {
    console.log(props.errorMessage)
    return (
        
        
        <div id='errorCard' className="w-[300px] mt-5 flex flex-col gap-8 justify-center items-center">
            <img
                src="https://media0.giphy.com/media/3o7aTskHEUdgCQAXde/giphy.gif?cid=ecf05e47gl82f27kau7f4uz6opod523rzpjl9kruda0k3i92&ep=v1_gifs_search&rid=giphy.gif&ct=g" alt="vincent vega lost" 
                className="w-full aspect-auto" 
            />
            <strong>
                {props.errorMessage == 'Parameter q is missing.' ?
                    `No location entered. Try again.` :
                    `Huh.. ${props.errorMessage}`
                }
            </strong>
        </div>
    )
}