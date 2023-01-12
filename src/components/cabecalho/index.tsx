import React from "react";
import './style.css'
import SearchIcon from '@mui/icons-material/Search';
import PersonSearchOutlinedIcon from '@mui/icons-material/PersonSearchOutlined';

const Cabecalho = () => {
    return (
        <header className="cabecalho">
            <nav className="menu">
                <label className="menu__label">
                    <input className="menu__input" type="text" id="searchUser" name="search" placeholder="Pesquisar"></input>
                    <SearchIcon className="menu__search" />
                </label>

            </nav>
        </header>
    )
}

export default Cabecalho