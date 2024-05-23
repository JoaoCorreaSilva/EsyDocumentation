import { React, useState } from "react";
import LocalButton from "../../assets/components/LocalButton";
import { Link } from "react-router-dom";

import { AiOutlineRight } from 'react-icons/ai';

import "./style.css";

import { GrSearch } from "react-icons/gr"; // import para a lupinha de pesquisa
import { IoMoonOutline } from "react-icons/io5"; // para a lua
import { IoSunnyOutline } from "react-icons/io5"; // para o sol

export default function Home() {
    const handleClick = () => {
        alert("botão deu certo família :)");
    };

    // configs da sidebar
    const [expandedItem, setExpandedItem] = useState(null);

    const toggleSubMenu = (item) => {
        setExpandedItem(prevItem => (prevItem === item ? null : item));
    };


    //teste de burguer
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <div className="navbar">
                <div className="navbar-area">
                    <div className="logotype">
                        <p className="bosch">BOSCH</p>
                        <p className="esy">ESY</p>
                    </div>

                    <div className={`links ${isOpen ? 'open' : ''}`}>
                        <a href="#">Docs</a>
                        <a href="#">Guia do Usuário</a>
                        <a href="#">Desenvolvedores</a>
                    </div>

                    <div className="hamburger" onClick={toggleMenu}>
                        &#9776;
                    </div>
                </div>
            </div>
            <main>
                <div className="logotype">
                    <p className="bosch">BOSCH</p>
                    <p className="esy">ESY</p>
                </div>
                <h1 className="slogan">O jeito Esy de planejar e gerenciar seus eventos</h1>

                <div className="btns">
                    <button className="primary-btn">Cadastre-se</button>
                    <button className="secondary-btn">Documentação</button>
                </div>

                <p>ESY Event System é o gerenciador de eventos da Bosch Campinas. Criado com o intuito de unificar o
                    planejamento de eventos da planta e facilitar o dia a dia dos gestores e colaboradores, nossa ferramenta
                    conta com funcionalidades que auxiliam desde o momento da criação, até a divulgação e finalização dos
                    eventos. Confira mais a seguir.</p>

                <section className="container-section-1">
                    <div className="container-section-child">
                        <img src="src\assets\images\event_creation_screen.png" alt="scr" />
                        <text>
                            <h2>Criação de eventos</h2>
                            <p>Em apenas uma única tela é possível criar um evento e já disponibilizá-lo aos colaboradores da sua equipe.</p>
                        </text>
                    </div>
                    <div className="container-section-child">
                        <text>
                            <h2>Dashboard para medir e visualizar o sucesso do evento</h2>
                            <p>Um dashboard que mede o sucesso do evento oferece uma visão rápida e abrangente das métricas-chave, como
                                participação, feedback e pontos de destaque, ajudando os gestores a entenderem melhor o impacto de suas
                                iniciativas.</p>
                        </text>
                        <img src="src\assets\images\event_analysis_dashboard_default_state.png" alt="scr" />
                    </div>
                    <div className="container-section-child">
                        <img src="src\assets\images\ticket_reservation_screen_contracted.png" alt="scr" />
                        <text>
                            <h2>Reserva prévia do ticket e autenticação do participante na entrada do evento</h2>
                            <p>A reserva antecipada de ingressos e a autenticação na entrada garantem uma experiência fluida e segura
                                para os participantes, facilitando o controle de acesso e evitando problemas de superlotação.</p>
                        </text>
                    </div>
                    <div className="container-section-child">
                        <text>
                            <h2>Calendário interno com os eventos do mês</h2>
                            <p>Um calendário interno lista todos os eventos disponíveis no mês, facilitando a coordenação de atividades,
                                gerenciamento e otimização do tempo.</p>
                        </text>
                        <img src="src\assets\images\schedule_screen.png" alt="scr" />
                    </div>
                </section>
                <section className="container-section-2">
                    <h3>Por que usar o ESY?</h3>

                    <div className="cards">
                        <div className="gradient-container-1">
                            <div className="container-section-child">
                                <h1 className="text-gradient">Memórias</h1>
                                <p>Tenha acesso às memórias de diversos momentos ocorridos em eventos aqui na planta de Campinas</p>
                            </div>
                        </div>

                        <div className="gradient-container-2">
                            <div className="container-section-child">
                                <h1 className="title-text-cental"><div className="text-gradient">Informação</div> facilitada</h1>
                                <p>Fique por dentro dos eventos que estão ocorrendo e participe daqueles que você se interessar</p>
                            </div>
                        </div>
                        <div className="gradient-container-3">
                            <div className="container-section-child">
                                <h1 className="title-text-cental"><div className="text-gradient">Conhecimento</div> nunca é demais</h1>
                                <p>Participe de palestras e workshops e tenha a oportunidade única de aprender mais com cada um deles</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="container-section-3">
                    <h1>Faça Networking</h1>
                    <p>Participar dos eventos Bosch oferece inúmeras vantagens, sendo uma delas a oportunidade de expandir sua
                        rede de network. Ao interagir com colegas de trabalho, líderes, e outros profissionais do setor durante
                        esses eventos, você tem a chance de estabelecer novas conexões, trocar experiências e construir
                        relacionamentos valiosos. Essa ampliação da rede de contatos enriquece seu conhecimento e visão sobre
                        diferentes aspectos da Bosch.</p>

                    <div className="slider">
                        <div className="slide-track">
                            {[...Array(18)].map((_, index) => (
                                <div className="slide" key={index}>
                                    <img src={`src/assets/images/image-${index % 6 + 1}.png`} alt="" />
                                </div>
                            ))}
                        </div>

                    </div>
                </section>
                <section className="container-section-4">
                    <div className="faq-container">
                        <h1>Perguntas Frequentes</h1>
                        <div
                            className={`menu-item ${expandedItem === "accountConfig" ? "active" : ""}`}
                            onClick={() => toggleSubMenu("accountConfig")}
                        >
                            <p>Como configuro minha conta?</p>
                            <span className={`arrow ${expandedItem === "accountConfig" ? "active" : ""}`}>
                                <AiOutlineRight />
                            </span>
                        </div>
                        {expandedItem === "accountConfig" && (
                            <div className="sub-menu">
                                <p>Para configurar sua conta ou preferências vá até a a aba “Configurações”, que se encontra no menu lateral. Na tela de configurações você pode alterar idioma, cores do sistema, email, senha, e nome de perfil. </p>
                            </div>
                        )}

                        <div
                            className={`menu-item ${expandedItem === "passwordRecovery" ? "active" : ""}`}
                            onClick={() => toggleSubMenu("passwordRecovery")}
                        >
                            <p>Como posso recuperar minha senha?</p>
                            <span className={`arrow ${expandedItem === "accountConfig" ? "active" : ""}`}>
                                <AiOutlineRight />
                            </span>
                        </div>
                        {expandedItem === "passwordRecovery" && (
                            <div className="sub-menu">
                                <p>Para recuperar sua senha, preencha o campo de e-mail na tela de login e clique no link “Esqueci minha senha” e um código de confirmação será enviado no seu e-mail para que você possa redefinir sua senha.</p>
                            </div>
                        )}

                        <div
                            className={`menu-item ${expandedItem === "newSession" ? "active" : ""}`}
                            onClick={() => toggleSubMenu("newSession")}
                        >
                            <p>Como faço para iniciar uma nova sessão?</p>
                            <span className={`arrow ${expandedItem === "accountConfig" ? "active" : ""}`}>
                                <AiOutlineRight />
                            </span>
                        </div>
                        {expandedItem === "newSession" && (
                            <div className="sub-menu">
                                <p>Para iniciar uma nova sessão, basta clicar em “Log out” no menu lateral, e confirmar que ser sair da sessão. Após isso você será redirecionado para a tela de login.</p>
                            </div>
                        )}

                        <div
                            className={`menu-item ${expandedItem === "techSupport" ? "active" : ""}`}
                            onClick={() => toggleSubMenu("techSupport")}
                        >
                            <p>Como obter suporte técnico?</p>
                            <span className={`arrow ${expandedItem === "accountConfig" ? "active" : ""}`}>
                                <AiOutlineRight />
                            </span>
                        </div>
                        {expandedItem === "techSupport" && (
                            <div className="sub-menu">
                                <p>Para obter suporte técnico envie e-mail para o endereço Esy.bosch.br@gmail.com com o assunto correspondente no corpo do e-mail.</p>
                            </div>
                        )}

                        <div
                            className={`menu-item ${expandedItem === "notificationSetup" ? "active" : ""}`}
                            onClick={() => toggleSubMenu("notificationSetup")}
                        >
                            <p>Como configuro notificações ou alertas do ESY?</p>
                            <span className={`arrow ${expandedItem === "accountConfig" ? "active" : ""}`}>
                                <AiOutlineRight />
                            </span>
                        </div>
                        {expandedItem === "notificationSetup" && (
                            <div className="sub-menu">
                                <p>Para configurar permissões de notificações e alertas, vá na aba de configurações e vá até a última sessão “Notificações e Alertas”</p>
                            </div>
                        )}
                    </div>
                    <div className="image-faq-container"></div>
                </section>
            </main>

            <footer>
                <div className="logo-footer">
                    <p>BOSCH</p>
                    <p>ESY</p>
                </div>
                <div className="center">
                    <p>© Robert Bosch Ltda. 2024, todos os direitos reservados</p>
                </div>
                <div className="contact">
                    <p>Esy.bosch.br@gmail.com</p>
                </div>
            </footer>

            {/* <LocalButton text="teste aqui" onClick={handleClick} />

            <Link to="/docs">
                <button>Docs</button>
            </Link> */}
        </div>
    );
}