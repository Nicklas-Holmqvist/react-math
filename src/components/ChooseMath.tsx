import { CSSProperties } from "react";
import { Link } from "react-router-dom";
import ChooseMathBtn from "./ChooseMathBtn";

function ChooseMath() {
    return (
        <>
            <p>math</p>
            <div className="chooseType">
                <Link to="/Addition" style={BtnStyle}>
                    <ChooseMathBtn type='+' />
                </Link>
                <Link to="/Subtraction" style={BtnStyle}>
                    <ChooseMathBtn type='-' />
                </Link>
                <Link to="/Addition" style={BtnStyle}>
                    <ChooseMathBtn type='x' />
                </Link>
                <Link to="/Addition" style={BtnStyle}>
                    <ChooseMathBtn type='/' />
                </Link>
            </div>
        </>
    )
}

export default ChooseMath;

const BtnStyle: CSSProperties = {
    textDecoration: 'none',
    color: 'inherit',
    textAlign: 'center'
}