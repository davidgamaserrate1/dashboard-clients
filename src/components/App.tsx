import React from "react";
import './style.css'
import UserMenu from "./userMenu";
import Cabecalho from "./cabecalho";
import Dashboard from "./dashboard";

const App = () => {
    return (
        <div className="app">
            <Cabecalho />
            < UserMenu />
            < Dashboard />
        </div>
    )
}

export default App