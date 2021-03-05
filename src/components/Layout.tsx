
import Addition from "./Addition";
import ChooseMath from "./ChooseMath";
import StartScreen from "./StartScreen";
import Subtraction from "./Subtraction";

import { Switch, Route, BrowserRouter } from "react-router-dom";


function Layout() {
    return (
        <BrowserRouter>
            <>
                <Switch>        
                    <Route exact path='/' component={StartScreen} />
                    <Route path='/ChooseMath' component={ChooseMath} />
                    <Route path='/Addition' component={Addition} />
                    <Route path='/Subtraction' component={Subtraction} />
                </Switch>
            </>       
        </BrowserRouter> 
    )
}

export default Layout;