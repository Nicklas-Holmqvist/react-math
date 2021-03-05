import { CSSProperties } from "react"

interface Props {
    btnColor:string,
    color:string,

}

function ColorBtn(props: Props) {

    const colorBtnStyle: CSSProperties = {
        backgroundColor: props.color,
    }

    return(
        <button style={colorBtnStyle}>{props.btnColor}</button>        
    )
}

export default ColorBtn

