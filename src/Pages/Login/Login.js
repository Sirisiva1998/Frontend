import Footer from '../../Components/Footer/Footer.js';
import Header from '../../Components/Header/Header.js';
import './Login.css';

function Login()
{
    return (
        <div className='LoginContainer'>
           <Header/>
           <div className='LoginForm'>
              <h4>LOGIN</h4>
              <hr/>
              <div className='Form'>
                 <h3>FILL IN THE DETAILS</h3>
                 <div className='textBoxes'>
                    <input type='email' placeholder='Email'/>
                    <input type='password' placeholder='Password'/>
                 </div>
                 <div className='buttons'>
                 <button type='submit'>Login</button>
                 <button type='submit'>Register</button>
                 </div>
                
              </div>
           </div>
           <Footer/>
        </div>
    );
}

export default Login;