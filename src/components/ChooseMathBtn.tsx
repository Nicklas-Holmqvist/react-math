import { CSSProperties } from "react"

interface Props {
    type:string
}

function ChooseMathBtn(props:Props) {
    return(
        <p style={btnStyle}>{props.type}</p>
    )
}

const btnStyle: CSSProperties = {
    height: '3rem',
    width: '3rem',
    textAlign: 'center',
    border: '1px black solid'

}

export default ChooseMathBtn