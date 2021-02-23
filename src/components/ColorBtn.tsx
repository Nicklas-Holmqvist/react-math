import { CSSProperties } from "react"

interface Props {
    btnColor:string,
    color:string,

}

function ColorBtn(props: Props) {

    return(
        <>
        <button style={colorBtnStyle}>{props.btnColor}</button>
        </>
    )
}

export default ColorBtn

const colorBtnStyle: CSSProperties = {
    backgroundColor: '#FF6699',
}