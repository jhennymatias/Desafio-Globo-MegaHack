import React, {useEffect, useState, Fragment} from 'react';
import './style.css'
import {Link, useHistory} from 'react-router-dom';
import api from '../../services/api'
import {FiPlusCircle} from 'react-icons/fi';

//img --------------------------------------


export default function Topics() {
        return ( 
        <Fragment>
            <div className = "container">
                <h1>Globo.com</h1>
                <p>Clique <FiPlusCircle/> das plataformas Globo a qual você possui interesse! Quando terminar a seleção clique em Confirmar</p>
                <ul>
                    <li className= "g1">
                        <strong>g1</strong>
                        <Link className="link-topics" to="/subtopics"><FiPlusCircle/></Link>
                    </li>
                    <li className= "ge">
                        <strong>ge</strong>
                        <FiPlusCircle/>
                    </li>
                    <li className= "gshow">
                        <strong>gshow</strong>
                        <FiPlusCircle/>
                    </li>
                    <li className= "tech">
                        <strong>tech</strong>
                        <FiPlusCircle/>
                    </li>
                    <li className= "videos">
                        <strong>videos</strong>
                        <FiPlusCircle/>
                    </li>
                </ul>
                <button className="btn">Confirmar</button> 
            </div>
        </Fragment>
    );
}