import { useState } from 'react';
import Logo from '../../images/Logo.svg';
import './index.css';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

export async function VerificaLogin() {
    const  [email, setEmail] = useState('')
    const  [senha, setSenha] = useState('')
    
    const tb_cadastro = prisma.tb_cadastro.findUnique({
        where: {
            email: email,
            senha: senha,
        }
    })
}

function Login () {
    return (
        <div>
            <div>
                <header className='header'></header>
            </div>
            
            <div>
                <div className='div-logo'>
                    <span>
                        <img src={Logo} alt='logo' className='logo'></img>
                    </span>
                </div>

                <div className='div-phrase'>
                    <h2 className='conecte-se'>Conecte-se</h2>
                    <h2 className='a-sua-conta'>à sua conta</h2>
                </div>
                
                <div className='div-caixa'>
                    <form className='forms-login'>
                        <input type='email' placeholder='Email' id='email' className='input-login'></input>
                        <input type='password' placeholder='Senha' id='senha' className='input-login'></input>
                        <button className='bt-entrar'>Entrar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;
