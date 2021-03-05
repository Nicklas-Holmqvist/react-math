interface Props {
    inputType:string
    inputPlaceholder:string

}

function Input(props:Props) {

    const inputPlaceholder = props.inputPlaceholder;
    const inputType = props.inputType

    return(
        <input type={inputType} placeholder={inputPlaceholder}/>
    )
}

export default Input