import React from "react";
import LocalButton from "../../assets/components/LocalButton";
import { Link } from "react-router-dom";

export default function Home() {
    const handleClick = () => {
        alert("botão deu certo família :)");
    };

    return (
        <div>
            <h1>Welcome to home</h1>
            <LocalButton text="teste aqui" onClick={handleClick} />

            <Link to="/docs">
                <button>Docs</button>
            </Link>
        </div>
    );
}
