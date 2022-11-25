import React from 'react';
import logoWhite from '../../assets/Images/logo-white.png';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="container">
      <section className="login">
        <img src={logoWhite} alt="logo black" width="100" />
        <form>
          <div class="mb-3">
            <label for="exampleName" class="form-label">Name</label>
            <input type="name" class="form-control" id="inputName" aria-describedby="emailHelp" required/>
          </div>
          <div class="mb-4">
            <label for="exampleEmail" class="form-label">Email</label>
            <input type="email" class="form-control" id="inputEmail" aria-describedby="emailHelp" required/>
          </div>
          <div className="btn__login">
            <button type="submit" class="btn btn-primary">Continuar</button>
            <hr></hr>
            <Link to="/home"><button type="submit" class="btn btn-primary">Entrar sin registro</button></Link>
          </div>
        </form>
      </section>
    </div>
  )
};

export default Login;