import React, {useState} from 'react';
import navcss from './nav.module.css';
export default function Navbar(prop){
    
    const { situacao } = prop;
    const hide = {display: 'none'};
    const show = {display: 'block'};
    
    const [pessoa, setPessoa] = useState(hide);
    const [pjuridic, setPJuridic] = useState(hide);
    const [pfisica, setPfisica] = useState(hide);

    const [empre, setEmpre] = useState(hide);
    const [pPorte, setPporte] = useState(hide);
    const [gPorte, setGporte] = useState(hide);
    const [star, setStart] = useState(hide);

    const [Inst, setInst] = useState(hide);
    const [publica, setPublica] = useState(hide);
    const [ong, setOng] = useState(hide);
    return(
        <nav className={navcss.nav} style={situacao}>
            <h3>Menu</h3>
            <ul>
                <li onClick={()=>{setPessoa(show), setEmpre(hide), setInst(hide)}}>sou pessoa</li>
                <ul className={navcss.individuo} style={pessoa}>
                    <li onClick={()=>{ setPJuridic(show), setPfisica(hide) }} className={navcss.pessoa}>juridica</li>
                        <ul className={navcss.pessoa_c} style={pjuridic}>
                            <li>e quero:</li>
                            <li>constratar-lhe</li>
                            <li>tirar duvidas</li>
                        </ul>
                    <li onClick={()=>{ setPfisica(show), setPJuridic(hide) }} className={navcss.pessoa}>fisica</li>
                        <ul className={navcss.pessoa_c} style={pfisica}>
                            <li>e quero:</li>
                            <li>constratar-lhe</li>
                            <li>tirar duvidas</li>
                        </ul>
                </ul>
                <li onClick={()=>{setEmpre(show), setPessoa(hide), setInst(hide)}}>sou empresa</li>
                <ul className={navcss.individuo} style={empre}>
                    <li onClick={()=>{setPporte(show), setGporte(hide), setStart(hide)}} className={navcss.pessoa}>pequeno porte</li>
                        <ul className={navcss.pessoa_c} style={pPorte}>
                            <li>e quero:</li>
                            <li>constratar-lhe</li>
                            <li>tirar duvidas</li>
                        </ul>
                    <li className={navcss.pessoa} onClick={()=>{setGporte(show), setStart(hide), setPporte(hide)}}>grande porte</li>
                        <ul className={navcss.pessoa_c} style={gPorte}>
                            <li>e quero:</li>
                            <li>constratar-lhe</li>
                            <li>tirar duvidas</li>
                        </ul>
                        <li className={navcss.pessoa} onClick={()=>{setStart(show), setPporte(hide), setGporte(hide)}}>startup</li>
                        <ul className={navcss.pessoa_c} style={star}>
                            <li>e quero:</li>
                            <li>constratar-lhe</li>
                            <li>tirar duvidas</li>
                        </ul>
                </ul>
                <li onClick={()=>{setInst(show), setPessoa(hide), setEmpre(hide)}}>sou instituição</li>
                <ul className={navcss.individuo} style={Inst}>
                    <li className={navcss.pessoa} onClick={()=>{setPublica(show), setOng(hide)}}>governamental</li>
                        <ul className={navcss.pessoa_c} style={publica}>
                            <li>e quero:</li>
                            <li>constratar-lhe</li>
                            <li>tirar duvidas</li>
                        </ul>
                    <li className={navcss.pessoa} onClick={()=>{setOng(show), setPublica(hide)}}>ong</li>
                        <ul className={navcss.pessoa_c} style={ong}>
                            <li>e quero:</li>
                            <li>constratar-lhe</li>
                            <li>tirar duvidas</li>
                        </ul>
                </ul>
                <li>termos</li>
            </ul>
            <p className={navcss.versao}>v 1.0/11-11-2020</p>
        </nav>
    )
}