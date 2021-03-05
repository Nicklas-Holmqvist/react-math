import ChooseMathBtn from "./ChooseMathBtn";

function ChooseMath() {
    return (
        <>
            <p>math</p>
            <div className="chooseType">
                <ChooseMathBtn type='+' />
                <ChooseMathBtn type='-' />
                <ChooseMathBtn type='x' />
                <ChooseMathBtn type='/' />
            </div>
        </>
    )
}

export default ChooseMath;