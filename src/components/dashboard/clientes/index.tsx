import React from "react";
import './style.css'
import img from '../../../assets/img/user.jpeg'
import PersonAddIcon from '@mui/icons-material/PersonAdd';


import { useState } from "react";

const clientes =
[
    {
        nome :'NOME 1',
        telefone : '(XX) XXXXX-XXXX',
        instagram:'Instagram 1',
        organizacao :'Org 1'
    },
    {
        nome :'NOME 2',
        telefone : '(XX) XXXXX-XXXX',
        instagram:'Instagram 2',
        organizacao :'Org 2'
    },
    {
        nome :'NOME 3',
        telefone : '(XX) XXXXX-XXXX',
        instagram:'Instagram 3',
        organizacao :'Org 3'
    },
    {
        nome :'NOME 4',
        telefone : '(XX) XXXXX-XXXX',
        instagram:'Instagram 4',
        organizacao :'Org 4'
    },
    {
        nome :'NOME 5',
        telefone : '(XX) XXXXX-XXXX',
        instagram:'Instagram 5',
        organizacao :'Org 5'
    },
    {
        nome :'NOME 6',
        telefone : '(XX) XXXXX-XXXX',
        instagram:'Instagram 6',
        organizacao :'Org 6'
    }
]


const Clientes = (data:any,setData:any, dataEdit:any,isOpen:any, onClose:any) => {

    return (
        <div className="clientes">           
            {clientes.map((cliente)=>(
             <div className="cliente">                 
                <div className="cliente__info">
                    <div className="cliente__name"> {cliente.nome}</div>
                    <div className="cliente__telefone"> {cliente.telefone} </div>
                    <div className="cliente__instagram"> {cliente.instagram} </div>
                    <div className="cliente__organizacao"> {cliente.organizacao} </div>                     
                </div>
             </div>   
            ))}
            <button className="addCliente" >
                <PersonAddIcon />                  
                <div className="addCliente_nameBtn">Adicionar</div>
            </button>
            {/* <div className="clientes__nextPage">
                Proximo    
            </div> */}

        </div>

    )
}

export default Clientes