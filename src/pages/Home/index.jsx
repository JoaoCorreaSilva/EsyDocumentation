import React from "react";
import LocalButton from "../../assets/components/LocalButton";
import { Link } from "react-router-dom";

import "./style.css";

import { GrSearch } from "react-icons/gr"; // import para a lupinha de pesquisa
import { IoMoonOutline } from "react-icons/io5"; // para a lua
import { IoSunnyOutline } from "react-icons/io5"; // para o sol

export default function Home() {
    const handleClick = () => {
        alert("botão deu certo família :)");
    };

    return (
        <div>
            <div className="navbar">
                <div className="navbar-area">
                    <div className="logotype">
                        <p className="bosch">BOSCH</p>
                        <p className="esy">ESY</p>
                    </div>

                    <div className="links">
                        <a href="#">Docs</a>
                        <a href="#">Guia do Usuário</a>
                        <a href="#">Desenvolvedores</a>
                    </div>
                </div>

                <div className="navbar-area">
                    <div className="search-bar">
                        <GrSearch />
                        <input
                            type="text"
                            placeholder="Pesquisar na documentação..."
                        // value={searchTerm}
                        // onChange={handleSearch}
                        />
                    </div>

                    {/* está fora do container pq resolveu dar piti*/}
                    <div className="system-mode">
                        <IoSunnyOutline size={22} />
                        <IoMoonOutline size={22} />

                        {/* help me jesus */}
                    </div>
                </div>
            </div>
            <main>
                <div className="logotype">
                    <p className="bosch">BOSCH</p>
                    <p className="esy">ESY</p>
                </div>
                <h1 className="slogan">O jeito Esy de planejar e gerenciar seus eventos</h1>
                <p>ESY Event System é o gerenciador de eventos da Bosch Campinas. Criado com o intuito de unificar o 
                    planejamento de eventos da planta e facilitar o dia a dia dos gestores e colaboradores, nossa ferramenta 
                    conta com funcionalidades que axiliam desde o momento da criação, até a divulgação e finalização dos 
                    eventos. Confira mais a seguir.</p>
            </main>


            
            <LocalButton text="teste aqui" onClick={handleClick} />

            <Link to="/docs">
                <button>Docs</button>
            </Link>
        </div>
    );
}
