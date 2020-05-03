import React, {useState, Fragment} from 'react';
import './style.css'
import {FiMenu} from "react-icons/fi";
import noticia from "../../assets/news.jpeg"
import no from "../../assets/cidade.jpg"
import back from "../../assets/back.jpg"
export default function Feed() {
    return(
        <Fragment className="content">
            <div className="headerFeed">
                <div className="menu">
                    <FiMenu size={25}/>
                </div>
                <p>Globo.com</p>
            </div>
            <div className="news-list">
                <div className="news">
                    <img className="imagem" alt="Add"src={noticia}/>
                    <div className="texto">
                        ettet
                    </div>
                </div>
                <div className="news">
                    <img className="imagem" src={no}/>
                </div>
                <div className="news">
                    <img className="imagem" src={back}/>
                </div>
            </div>
        </Fragment>
    );
}