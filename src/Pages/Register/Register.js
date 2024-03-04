import Footer from '../../Components/Footer/Footer.js';
import Header from '../../Components/Header/Header.js';
import './Register.css';

function Register()
{
    return (
        <div className='LoginContainer'>
           <Header/>
           <div className='LoginForm'>
              <h4>REGISTER</h4>
              <hr style={{marginTop:"30px"}}/>
              <div className='Form' style={{height:"250px"}}>
                 <h3>FILL IN THE DETAILS</h3>
                 <div className='textBoxes'>
                    <input type='name' placeholder='Name'/>
                    <input type='email' placeholder='Email'/>
                 </div>
                 <div className='textBoxes'>
                    <input type='password' placeholder='Password'/>
                    <input type='text' placeholder='Confirm Password'/>
                 </div>
                 <div className='buttons'>
                 <button type='submit'>Register</button>
                 <button type='submit'>Login</button>
                 </div>
              </div>
           </div>
           <Footer/>
        </div>
    );
}

export default Register;