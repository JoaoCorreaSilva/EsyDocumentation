import { React, useState } from "react";
import LocalButton from "../../assets/components/LocalButton";
import { Link } from "react-router-dom";

import { GrSearch } from "react-icons/gr"; // import para a lupinha de pesquisa
import { IoMoonOutline } from "react-icons/io5"; // para a lua
import { IoSunnyOutline } from "react-icons/io5"; // para o sol

import "./style.css";

export default function Docs() {
    const handleClick = () => {
        alert("botão deu certo família :)");
    };

    // configs da sidebar
    // State para controlar a visibilidade dos submenus
    const [expandedItems, setExpandedItems] = useState({});

    // Função para alternar a visibilidade do submenu
    const toggleSubMenu = (item) => {
        setExpandedItems({
            ...expandedItems,
            [item]: !expandedItems[item],
        });
    };

    // configs da navbar

    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    // Função para lidar com a mudança no termo de pesquisa
    const handleSearch = (event) => {
        const value = event.target.value;
        setSearchTerm(value);

        // Filtrar os dados com base no termo de pesquisa
        const filteredResults = data.filter((item) =>
            item.toLowerCase().includes(value.toLowerCase())
        );
        setSearchResults(filteredResults);
    };

    return (
        <>
            {/* navbar que deverá ser componentizada */}
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
                            value={searchTerm}
                            onChange={handleSearch}
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
            <div className="container-main">
                {/* sidebar que deverá ser componentizada e passados os valores por props */}
                <div className="sidebar">
                    <div
                        className="menu-item"
                        onClick={() => toggleSubMenu("overview")}
                    >
                        <p>Visão geral</p>
                    </div>
                    {expandedItems["overview"] && (
                        <div className="sub-menu">
                            <a href="#" className="sub-menu-item">
                                Introdução
                            </a>
                            <a href="#" className="sub-menu-item">
                                Propósito central
                            </a>
                            <a href="#" className="sub-menu-item">
                                Problemática motivadora
                            </a>
                        </div>
                    )}

                    <div
                        className="menu-item"
                        onClick={() => toggleSubMenu("documentation")}
                    >
                        <p>Documentação</p>
                    </div>
                    {expandedItems["documentation"] && (
                        <div className="sub-menu">
                            <a href="#" className="sub-menu-item">
                                Arquitetura de software
                            </a>
                            <a href="#" className="sub-menu-item">
                                Modelagem de dados
                            </a>
                            <a href="#" className="sub-menu-item">
                                Documentação de interface
                            </a>
                            <a href="#" className="sub-menu-item">
                                Tecnologias usadas no sistema
                            </a>
                            <a href="#" className="sub-menu-item">
                                Informações legais
                            </a>
                        </div>
                    )}

                    <div
                        className="menu-item"
                        onClick={() => toggleSubMenu("development")}
                    >
                        <p>Desenvolvimento</p>
                    </div>
                    {expandedItems["development"] && (
                        <div className="sub-menu">
                            <a href="#" className="sub-menu-item">
                                Guia do desenvolvedor
                            </a>
                            <a href="#" className="sub-menu-item">
                                Referências e recursos
                            </a>
                        </div>
                    )}

                    <div
                        className="menu-item"
                        onClick={() => toggleSubMenu("github")}
                    >
                        <p>Git Hub</p>
                    </div>
                    {expandedItems["github"] && (
                        <div className="sub-menu">
                            <a href="#" className="sub-menu-item">
                                Histórico de versões
                            </a>
                        </div>
                    )}

                    <div
                        className="menu-item"
                        onClick={() => toggleSubMenu("sprints")}
                    >
                        <p>Sprints e entregas</p>
                    </div>
                    {expandedItems["sprints"] && (
                        <div className="sub-menu">
                            <a href="#" className="sub-menu-item">
                                Sprint 1
                            </a>
                            <a href="#" className="sub-menu-item">
                                Sprint 2
                            </a>
                            <a href="#" className="sub-menu-item">
                                Sprint 3
                            </a>
                            <a href="#" className="sub-menu-item">
                                Melhorias futuras
                            </a>
                        </div>
                    )}
                </div>

                {/* <h1>Documentation</h1>
                <Link to="/home">
                    <button>Home</button>
                </Link> */}

                {/* Exibir os resultados da pesquisa */}
                <ul>
                    {searchResults.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </>
    );
}
