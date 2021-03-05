
import Addition from "./Addition";
import ChooseMath from "./ChooseMath";
import StartScreen from "./StartScreen";
import Subtraction from "./Subtraction";


function Layout() {
    return (
        <>
            <StartScreen />
            <ChooseMath />
            <Addition />
            <Subtraction />
        </>        
    )
}

export default Layout;