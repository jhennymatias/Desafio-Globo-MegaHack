import React, {useState, Fragment} from 'react';
import './style.css';


function Register() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  return ( 
    <Fragment className="container">
      <form>
        <h1>Cadastro</h1>

        <input 
          value = {nome}
          onChange = {e => setNome(e.target.value)} 
          placeholder="Nome"/>

        <input 
          value = {email}
          onChange = {e => setEmail(e.target.value)} 
          placeholder="E-mail"/>

        <input 
          value = {senha}
          onChange = {e => setSenha(e.target.value)} 
          placeholder="Senha"/>

        <button type="submit" className= "btn">Cadastrar</button>
      </form>
    </Fragment>
  );
}

export default Register;