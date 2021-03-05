import { Link } from "react-router-dom";

function SetName() {
    return (
        <>
            <p>Vad heter du?</p>
            <input type="text" placeholder="Skriv ditt namn här" />
            <Link to="/ChooseMath">
                <button>Starta</button>      
            </Link>      
        </>        
    )
}

export default SetName;