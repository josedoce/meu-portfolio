import React from 'react';
import Head from 'next/head'
import index from './_components/index_css/index.module.css';
import ScrollToTop from 'react-scroll-up';
export default function Home(){
    return (
       
            <div className={index.corpo}>
                <Head>
                    <title>Meu portfólio</title>
                </Head>
                <div className={index.conteudo}>
                    <h3 className={index.svg0}></h3>
                    <header className={index.blocos0}>
                        
                    </header>
                    <h3 className={index.svg1}></h3>
                    <div className={index.blocos1}>
                       
                            <div className={index.dados}>
                                <h3>Redes sociais e contato</h3>
                                <ul>
                                    <li className={index.social}><a href="https://www.github.com/josedoce">ver github</a></li>
                                    <li className={index.social}><a href="https://www.linkedin.com/in/joseildo-silva-14bb7817a">ver linkedin</a> </li>
                                    <li className={index.social}>josesamya@gmail.com</li>
                                </ul>
                            </div>
                            <div className={index.dados}>
                                    <img src="/cara.svg" width="150"/>
                                    <h4>joseildo silva</h4>
                                    <span>desenvolvedor fullstack</span>
                                    <span>Pernambuco / Recife / Brasil</span>
                            </div>
                            <div className={index.dados}>
                                    <h2>Eis-me aqui! </h2>
                                    <p>Me chamo Joseildo, tenho 22 anos e sempre gostei de tecnologia, principalmente das tenologias que envolvem navegadores web :B. Gosto muito do frontend, mas também venho amando o backend, busco sempre entender ao máximo como tudo se conecta, desde o cliente ao servidor e gosto também de oferecer funcionalidades que simplificam a vida do usuário. Comecei nessa jornada em meados do final do ano de 2017, e já me considero bem mais experiente comparado ao que eu era quando comecei kkkjkk como todo forasteiro, sempre começamos com nada em mente, mas com uma visão, a de querer aprender.</p>
                            </div>
                       
                    </div>
                    <h3 className={index.svg2}></h3>
                    <div className={index.blocos2}>
                        <h3 className={index.titulo_habi}>frontend</h3>
                        <div className={index.cate_habi}>
                            <div className={index.habi}>
                                <img className={index.img_habi} src="/habilidades/react_icon_130845.svg" width="60" height="60"/>
                                <p className={index.p_habi}>react</p>
                            </div>
                            <div className={index.habi}>
                                <img className={index.img_habi} style={{backgroundColor: "#20232a"}} src="/habilidades/rn_logo.svg" width="60" height="60"/>
                                <p className={index.p_habi}>react native</p>
                            </div>
                            <div className={index.habi}>
                                <img className={index.img_habi} src="/habilidades/javascript_icon_130900.svg" width="60" height="60"/>
                                <p className={index.p_habi}>javascript</p>
                            </div>
                            <div className={index.habi}>
                                <img className={index.img_habi} src="/habilidades/file_type_html_icon_130541.svg" width="60" height="60"/>
                                <p className={index.p_habi}>html</p>
                            </div>
                            <div className={index.habi}>
                                <img className={index.img_habi} src="/habilidades/file_type_css_icon_130661.svg" width="60" height="60"/>
                                <p className={index.p_habi}>css</p>
                            </div>
                        </div>
                        <h3 className={index.titulo_habi}>backend</h3>
                        <div className={index.cate_habi}>
                            <div className={index.habi}>
                                <img className={index.img_habi} style={{backgroundColor: "#333333"}} src="/habilidades/node.svg" width="60" height="60"/>
                                <p className={index.p_habi}>nodejs</p>
                            </div>
                            <div className={index.habi}>
                                <img className={index.img_habi} style={{backgroundColor: "#ffffff"}} src="/habilidades/next_js_logo_icon_145038.svg" width="60" height="60"/>
                                <p className={index.p_habi}>nextjs</p>
                            </div>
                            <div className={index.habi}>
                                <img className={index.img_habi} style={{backgroundColor: "#ffffff"}} src="/habilidades/file_type_php_icon_130266.svg" width="60" height="60"/>
                                <p className={index.p_habi}>php</p>
                            </div>
                        </div>

                        <h3 className={index.titulo_habi}>bancos de dados</h3>
                        <div className={index.cate_habi}>
                            <div className={index.habi}>
                                <img className={index.img_habi} src="/habilidades/sql.svg" width="60" height="60"/>
                                <p className={index.p_habi}>SQL</p>
                            </div>
                            <div className={index.habi}>
                                <img className={index.img_habi} src="/habilidades/mysql.svg" width="60" height="60"/>
                                <p className={index.p_habi}>MySql</p>
                            </div>
                            <div className={index.habi}>
                                <img className={index.img_habi} src="/habilidades/file_type_mongo_icon_130383.svg" width="60" height="60"/>
                                <p className={index.p_habi}>MongoDb</p>
                            </div>
                        </div>     
                    </div>
                    <h3 className={index.svg3}></h3>
                    <div className={index.blocos3}>
                        
                        <div className={index.projetos}>
                            <img className={index.img_projeto} src="/cara.svg"/>
                            <div className={index.projeto}>
                                <h3 className={index.titulo}>projeto desconhecido</h3>
                                <a className={index.vprojeto} href="">ver projeto</a>
                            </div>
                        </div>

                        <div className={index.projetos}>
                            <img className={index.img_projeto} src="/cara.svg"/>
                            <div className={index.projeto}>
                                <h3 className={index.titulo}>projeto desconhecido</h3>
                                <a className={index.vprojeto} href="">ver projeto</a>
                            </div>
                        </div>

                        <div className={index.projetos}>
                            <img className={index.img_projeto} src="/cara.svg"/>
                            <div className={index.projeto}>
                                <h3 className={index.titulo}>projeto desconhecido</h3>
                                <a className={index.vprojeto} href="">ver projeto</a>
                            </div>
                        </div>

                        <div className={index.projetos}>
                            <img className={index.img_projeto} src="/cara.svg"/>
                            <div className={index.projeto}>
                                <h3 className={index.titulo}>projeto desconhecido</h3>
                                <a className={index.vprojeto} href="">ver projeto</a>
                            </div>
                        </div>

                        <div className={index.projetos}>
                            <img className={index.img_projeto} src="/cara.svg"/>
                            <div className={index.projeto}>
                                <h3 className={index.titulo}>projeto desconhecido</h3>
                                <a className={index.vprojeto} href="">ver projeto</a>
                            </div>
                        </div>

                         <div className={index.projetos}>
                            <img className={index.img_projeto} src="/cara.svg"/>
                            <div className={index.projeto}>
                                <h3 className={index.titulo}>projeto desconhecido</h3>
                                <a className={index.vprojeto} href="">ver projeto</a>
                            </div>
                        </div>

                    </div>
                    <footer className={index.blocos4}>
                        <div className={index.rodape}>
                            <p>template desenvolvido por <a href="https://www.github.com/josedoce">josedoce</a></p>
                            <span>2020</span>
                        </div>
                    </footer>
                </div>
                <ScrollToTop 
                    showUnder={160} 
                    duration={1200}
                    style={{
                        position: 'fixed',
                        bottom: 20,
                        right: 20,
                        cursor: 'pointer',
                        transitionDuration: '0.2s',
                        transitionTimingFunction: 'linear',
                        transitionDelay: '0s'
                    }}>
                    <span className={index.botaoup}></span>
                </ScrollToTop>
            </div>
       
    )
}