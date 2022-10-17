import { Route, BrowserRouter, Routes as Switch } from "react-router-dom";

//importing pages ✨
import Home from "../pages/home/home";

const Routes = () => {
    return (
        <BrowserRouter>

                <Switch>

                    <Route path="/" element={<Home/>}/>
        
                </Switch>

        </BrowserRouter>
    )
}

export default Routes