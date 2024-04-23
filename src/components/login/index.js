import Logo from '../../images/Logo.svg'
import './index.css'

function Login () {
    return (
        <div>
            <header className='header'></header>
            
            <div className='div-logo'>
                <img src={Logo} alt='logo' className='logo'></img>
            </div>

            <div className='div-phrase'>
                <h2 className='conecte-se'>Conecte-se</h2>
                <h2 className='a-sua-conta'>à sua conta</h2>
            </div>
            
            <div className='div-caixa'>
                <form className='forms-login'>
                    <input type='email' placeholder='Email' id='email' className='input-login'></input>
                    <input type='password' placeholder='Senha' id='senha' className='input-login'></input>
                    <input type='submit' className='entrar'></input>
                </form>
            </div>
        </div>
    )
}

export default Login;
