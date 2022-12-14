import React from "react";
import './style.css'
import img from '../../../assets/img/user.png'
import PersonAddIcon from '@mui/icons-material/PersonAdd';

const Clientes = () => {
    return (
        <div className="clientes">

            <div className="cliente">
                <img className="cliente__img" src={img} />
                <div className="cliente__info">
                    <div className="cliente__name"> Nome</div>
                    <div className="cliente__telefone"> (XX) XXXXX-XXXX </div>
                </div>
            </div>
            <div className="cliente">
                <img className="cliente__img" src={img} />
                <div className="cliente__info">
                    <div className="cliente__name"> Nome</div>
                    <div className="cliente__telefone"> (XX) XXXXX-XXXX </div>
                </div>
            </div>
            <div className="cliente">
                <img className="cliente__img" src={img} />
                <div className="cliente__info">
                    <div className="cliente__name"> Nome</div>
                    <div className="cliente__telefone"> (XX) XXXXX-XXXX </div>
                </div>
            </div>
            <div className="cliente">
                <img className="cliente__img" src={img} />
                <div className="cliente__info">
                    <div className="cliente__name"> Nome</div>
                    <div className="cliente__telefone"> (XX) XXXXX-XXXX </div>
                </div>
            </div>
            <div className="cliente">
                <img className="cliente__img" src={img} />
                <div className="cliente__info">
                    <div className="cliente__name"> Nome</div>
                    <div className="cliente__telefone"> (XX) XXXXX-XXXX </div>
                </div>
            </div>
            <div className="cliente">
                <img className="cliente__img" src={img} />
                <div className="cliente__info">
                    <div className="cliente__name"> Nome</div>
                    <div className="cliente__telefone"> (XX) XXXXX-XXXX </div>
                </div>
            </div>

            <button className="addCliente" >
                <PersonAddIcon /> </button>
        </div>

    )
}

export default Clientes