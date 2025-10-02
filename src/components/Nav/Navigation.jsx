import './Navigation.css';


function Navigation(props) {
    return (
        <nav className="navbar">
            <div className='nav-container'>
                <div className="nav-brand">
                    <h2>{props.brand || "Laptop Store"}</h2>
                </div>
                <ul className="nav-links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#products">Products</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
            </ul>
            </div>
        </nav>
    );
}

export default Navigation;