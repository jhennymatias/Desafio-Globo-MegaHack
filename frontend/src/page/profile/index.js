import React, {useState, Fragment} from 'react';
import './style.css'
import {FiSmile, FiMenu, FiArrowRightCircle} from "react-icons/fi";
import noticia from "../../assets/news.jpeg"
import {Link, useHistory} from 'react-router-dom';

export default function Profile() {
    return(
        <Fragment className="content">
            <div className="headerFeed">
                <div className="menu">
                    <FiMenu size={25}/>
                </div>
                <p>Globo.com</p>
            </div>
            <div className="content">
                <FiSmile size={70}/>
                <h2>João da Silva</h2>
                <p>joao@gmail.com</p>
                <Link>Sair</Link>
                <ul>
                    <li>Trocar email <FiArrowRightCircle/></li>
                    <li>Alterar senha <FiArrowRightCircle/></li>
                    <li>Alterar dados <FiArrowRightCircle/></li>
                    <li>Alterar tópicos <FiArrowRightCircle/></li>

                </ul>
            </div>
        </Fragment>
    );
}