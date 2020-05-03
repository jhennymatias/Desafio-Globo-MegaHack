import React, {useState, Fragment} from 'react';
import {Link, useHistory} from 'react-router-dom';
import api from '../../services/api'
import './style.css';

function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const history = useHistory();

  async function handleLogin(e){
    e.preventDefault();
    
    const data  = {
      email,
      senha,
    };

    try{
      await api.post('users',data)
      history.push('/feed');
    }catch(err){
      alert("Erro ao logar")
    }
    
  }
  
  return ( 
    <Fragment className="container">
      <form onSubmit= {handleLogin}>
        <h1>Login</h1>
               
        <input 
          value = {email}
          onChange = {e => setEmail(e.target.value)} 
          placeholder="E-mail"/>
                
        <input 
          value = {senha}
          onChange = {e => setSenha(e.target.value)} 
          placeholder="Senha"/>
                
        <button type="submit" className= "btn">Entrar</button>
               
        <Link className = "link" to = "/register"> Não tenho cadastro</Link>
        <Link className = "link" to = "/register"> Esqueci minha senha</Link>
      </form>
    </Fragment>
  );
}

export default Login;