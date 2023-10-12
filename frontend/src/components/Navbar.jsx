import { Link } from 'react-router-dom';
import LogoML from '../assets/HomeImgs/logo_ml.png';

const Navbar = () => {
    return (
        <header>
            <div className="container">
                <Link to="/" className="logo">
                    <img src={LogoML} alt="logo" className='logoMl' />  
                </Link>
                <button className="contactezNousBtt">Contacter-nous</button>
            </div>
        </header>
    )
}

export default Navbar