import React from 'react';
import botao from './nav.module.css';

///botao hamburguer
export default function Menuh(){
    function verArvore(){
        let elemento = document.querySelectorAll('.tal');
        elemento[0].classList.toggle(botao.tran);
        elemento[1].classList.toggle(botao.hide);
        elemento[2].classList.toggle(botao.tran);
    }
    return(
        
            <svg onClick={verArvore} height="40" width="50" id="bot" className={botao.bot_h}>
                <path className={'tal '} d="M 5 5 l 40 0" stroke="white" stroke-width="2" fill="none" />
                <path className={'tal '} d="M 20 20 l 25 0"  stroke="white" stroke-width="2" fill="none" />
                <path className={'tal '} d="M 5 35 l 40 0" stroke="white" stroke-width="2" fill="none" />
                {/* <path className={botao.tran} d="M 35 35 l 10 0" stroke="white" stroke-width="2" fill="none" /> */}
            </svg>
            
       
    )
}
    