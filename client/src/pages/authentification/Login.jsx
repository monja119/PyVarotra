import React from 'react'
import './assets/css/common.css'
import logo from './assets/images/logo.png'

export default function Login() {
    const login =
       <>
           <div className="main-container">
                <div className="card p-3 d-flex flex-column">
                    <div className="w-100 d-flex flex-column justify-content-center align-items-center">
                        <img src={ logo } alt="logo" className="logo" />
                    </div>
                    <form action="/login" method="post" className="mt-3">

                        <div className="input-container">
                            <input type="email" className="input" name="email" id="email" placeholder="Email" required/>
                        </div>
                        <div className="input-container">
                            <input type="password" className="input" name="password" id="password"
                                   placeholder="Mot de passe" required/>
                        </div>

                        <input type="submit" className="btn btn-success" value="Se connecter" />
                    </form>

                    <div className="d-flex justify-content-center mt-3">
                        <a href="/register" className="text-center">Créer un compte</a>
                    </div>
                </div>
            </div>
        </>

    return (login)
}