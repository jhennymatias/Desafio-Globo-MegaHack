import React, {useState, Fragment} from 'react';
import './style.css'
import {FiMenu} from "react-icons/fi";
import noticia from "../../assets/news.jpeg"
import {Link, useHistory} from 'react-router-dom';

export default function Feed() {
    return(
        <Fragment>
            <div className="tudo">
                <div className="headerWelcome">
                    <h1>Bem vindo a Globo</h1>
                    <p>Estamos passando por algumas mudanças</p>
                    <Link className="btn" to="/topics">Começar</Link>
                </div>
            </div>
            
        </Fragment>
    );
}