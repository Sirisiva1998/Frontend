import './Header.css';
import logo from '../../Assets/logo.png';
import search from '../../Assets/search.png';
import homeIcon from '../../Assets/homeicon.png';
import cart from '../../Assets/cart.png';

function Header()
{
    return (
        <div class="HeaderContainer"> 
             <div class="SearchNavHeader">
               <img src={logo} width="90" height="90"/>
               <div class="SearchBar">
                <input type="text" name="SearchText" placeholder='Search By Author, title'/>
                <img src ={search} width="35" height="35"/>
               </div>
                <button type='button' onClick={()=>window.location.href="/Login"}>Login</button>
            </div>
             <div class="NavigationHeader">
                <img src={homeIcon} width='30' height='30'onClick={()=>window.location.href="/"}/>
                <div className='hoverButton'><h5>BestSellers</h5></div>
                <div className='hoverButton'><h5>New Arrivals</h5></div>
                <div className='hoverButton'><h5>Pre Orders</h5></div>
                <div className='hoverButton'><h5>Children & Young Adult</h5></div>
                <div className='hoverButton'><h5>Fiction & Non Fiction</h5></div>
                <div className='hoverButton'><h5>School Education</h5></div>
                <div className='hoverButton'><h5>Higher Education</h5></div>
                <div className='hoverButton'><h5>Games & Puzzles</h5></div>
                <img src={cart} width='30' height='30'/>
            </div>
        </div>
    );
}

export default Header;