// import Input from "./Input";
import { useState } from 'react';

interface Props {
    value:number
    numberOne:number
    numberTwo:number
}


function Addition(props:Props) {

    const [value, setValue] = useState('')


    // const inputType = 'number';
    // const inputPlaceholder = 'Ditt svar'

    const handleChange = (e:any) => {
        setValue(e.target.value)
    }

    const handleSubmit = (evt:any) => {
        evt.preventDefault();
        correctAnswer(props.value)
        alert(`jadu ${value}`)
    }

    const randomNumber = () => {
        const number = Math.floor(Math.random()*20+1)
        return number
    }

    const numberOne = randomNumber()
    const numberTwo = randomNumber()

    const numberTotal = numberOne + numberTwo

    const correctAnswer = (value:number) => {
        if( numberTotal == value) {
            alert('nooo')
        } else {
            alert('yeeeeah')
        }

    }

    return(
        <div className="addition">
            <h2>Addition</h2>    
            <p>{numberOne} + {numberTwo}</p>
            <form onSubmit={handleSubmit}>
                <input type="number" value={value} onChange={handleChange}/>
                <input type="submit" value='Tryck'/>
            </form>
            {/* <Input inputType={inputType} inputPlaceholder={inputPlaceholder}/> */}
           
        </div>
    )
}

export default Addition