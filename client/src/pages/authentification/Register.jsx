import React from 'react'
import './assets/css/common.css'
import logo from './assets/images/logo.png'
import backendUrl from '../../lib/GlobalVariable.ts'

export default function Register() {

    const register =
        <>
            <div className="main-container" style={{ marginTop : '12%' }}>
                <div className="card p-3 d-flex flex-column">
                    <div className="w-100 d-flex flex-column justify-content-center align-items-center">
                        <img src={ logo } alt="logo" className="logo" />
                            <h1 className="text-center">Création compte</h1>
                    </div>
                    <form action="/login" method="post" className="mt-3">
                        <div className="input-container">
                            <input type="text" className="input" name="first_name" id="first_name" placeholder="Nom"
                                   maxLength="50" required/>
                        </div>
                        <div className="input-container">
                            <input type="text" className="input" name="last_name" id="last_name" placeholder="Prénom"
                                   maxLength="50" required/>
                        </div>
                        <div className="input-container">
                            <input type="text" className="input" name="address" id="address" placeholder="Address"
                                   required/>
                        </div>
                        <div className="input-container">
                            <input type="number" className="input" name="phone" id="phone" placeholder="Telephone"
                                   required/>
                        </div>

                        <div className="input-container">
                            <input type="email" className="input" name="email" id="email" placeholder="Email" required/>
                        </div>
                        <div className="input-container">
                            <input type="password" className="input" name="password" id="password"
                                   placeholder="Mot de passe" required/>
                        </div>

                        <div className="input-container">
                            <input type="password" className="input" name="password2" id="password2"
                                   placeholder="Retaper le Mot de passe" required/>
                        </div>

                        <input type="submit" className="btn btn-success" value="Confirmer" />
                    </form>

                    <div className="d-flex justify-content-center mt-3">
                        <a href="/login" className="text-center">Se Connecter</a>
                    </div>
                </div>
            </div>
        </>

    return (register)
}