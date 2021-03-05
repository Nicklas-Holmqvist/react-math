import Input from "./Input";


function Subtraction() {

    const inputType = 'number';
    const inputPlaceholder = 'Ditt svar'

    const randomNumber = () => {
        const number = Math.floor(Math.random()*20+1)

        return number
    }

    const numberOne=randomNumber();
    const numberTwo=randomNumber();

    return(
        <div className="addition">
            <h2>Subtration</h2>    
            <p>{numberOne} - {numberTwo}</p>
            <Input inputType={inputType} inputPlaceholder={inputPlaceholder}/>
        </div>
    )
}

export default Subtraction