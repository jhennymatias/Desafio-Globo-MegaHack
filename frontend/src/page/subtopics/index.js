import React, {useEffect, useState, Fragment} from 'react';
import './style.css'
import {Link, useHistory} from 'react-router-dom';
import api from '../../services/api'
import {FiPlusCircle} from 'react-icons/fi';

//img --------------------------------------


export default function SubTopics() {
        return ( 
        <Fragment>
            <div className = "container-sub">
                <h1>g1</h1>
                <p>Selecione as áreas as quais você gostaria de ver notícias:</p>
                <ul>
                    <li className= "g1">
                        Economia
                    </li>
                    <li className= "g1">
                        Politica
                    </li>
                    <li className= "g1">
                        Educação
                    </li>
                    <li className= "g1">
                        Saúde
                    </li>
                </ul>
                <Link className="btn" to="/login">Confirmar</Link> 
            </div>
        </Fragment>
    );
}