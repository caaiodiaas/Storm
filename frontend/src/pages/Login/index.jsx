import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { auth } from "../../shared/services";
import NavbarLogin from "../../components/NavbarLogin";
import '../Login/login.css'

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {login} = auth()

  async function handleLogin(e){

    e.preventDefault();

    try{
      const resLogin = await login({email, password});
      console.log('resLogin', resLogin);
      navigate("/");
  } catch (error) {
    console.log("error: ", error);
    if (error.status === 401){
      alert("Login ou senha inválidos!");
    } 
  }
}

  return(
    <div className="corpoLogin">

      <div className="right"></div>

      <div className="left">
        <NavbarLogin />

        <form className="formulario" onSubmit={handleLogin}>
          <h1>storm</h1>

          <div className="areaFormulario">
            <h1>Faça <strong>Login</strong> na sua conta</h1>

            <div className="email">
              <label for="floatingEmail">Email</label><br />
              <input type="email" id="floatingEmail" value={email} onChange={e => setEmail(e.target.value)}/>
            </div>

            <div className="senha">
              <label for="floatingAssunto">Senha</label><br />
              <input type="password" id="floatingPassword" value={password} onChange={e => setPassword(e.target.value)}/>
            </div>

              <button className="botao" type="submit" >Entrar</button>
            
            <label>É novo por aqui? <Link className="Link" to="/cadastro">Cadastre-se</Link></label>
          
          </div>

        </form>

      </div>
      
    </div>
  );
};

export default Login;
