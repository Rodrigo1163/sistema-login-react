import React from "react";
import "./style.css"
export default function Login(){
    return (
        <div>
            <form>
                <h2>Faça o seu login</h2>
                <input placeholder="E-mail"/>
                <input placeholder="Password"/>
                <button>Entrar!</button>
                <footer>
                    <p>Não possui conta? </p>
                    <a href="#">Cadastre-se </a>
                </footer>
            </form>
        </div>
    )

}