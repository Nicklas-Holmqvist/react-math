import SetName from "./SetName";
import ColorBtn from "./ColorBtn";


function StartScreen() {
    return(
        <>
            <h1>Layout</h1>
            <SetName />
            <div className="colors">
                <ColorBtn color='#EEEFFF' btnColor='+'/>
                <ColorBtn color='#333999' btnColor='+'/>
                <ColorBtn color='#999333' btnColor='+'/>
                <ColorBtn color='#FFFEEE' btnColor='+'/>
            </div>
        </>
    )
}

export default StartScreen