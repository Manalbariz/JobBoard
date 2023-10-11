import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <header>
            <div className="container">
                <Link to="/" className="logo">
                    <h1>M&L Jobs</h1>
                </Link>
            </div>
        </header>
    )
}

export default Navbar