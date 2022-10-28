import { Route, BrowserRouter, Routes as Switch } from "react-router-dom";

//importing pages ✨
import Login from "../pages/login/login";
import Home from "../pages/home/home";
import Create from "../pages/create/create";
import Read from "../pages/read/read";

const Routes = () => {
    return (
        <BrowserRouter>

                <Switch>

                    <Route path="/" element={<Login/>}/>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/cadastrar" element={<Create/>}/>
                    <Route path="/visualizar" element={<Read/>}/>

                </Switch>

        </BrowserRouter>
    )
}

export default Routes