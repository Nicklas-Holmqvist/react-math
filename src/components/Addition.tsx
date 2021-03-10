// import Input from "./Input";
import {  useState } from 'react';

interface Props {
    value:number
    
}

interface State {
    numberOne: number
    numberTwo: number
    value: number
    numberTotal: number
}

const randomNumber = () => {
    const number = Math.floor(Math.random()*20+1)
    return number
}


function Addition(props:Props, state:State) {

    const [value, setValue] = useState(0)
    const [numberOne, setNumberOne] = useState(randomNumber())
    const [numberTwo, setNumberTwo] = useState(randomNumber())
   

    const handleChange = (e:any) => {
        Number(setValue(e.target.value))
    }

    const handleSubmit = (evt:any) => {
        correctAnswer(props.value)
        evt.preventDefault();
    }

    const newValues = () => {
        setNumberOne(randomNumber())
        setNumberTwo(randomNumber())
    }

    const correctAnswer = (props:number) => {
        const totalValue = (numberOne + numberTwo)
        console.log(totalValue)
        console.log(value)
        if( totalValue == value) {
            newValues()
            alert('Äntligen satt den!!!')
        } else {
            alert('yeeeeah')
            newValues()
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