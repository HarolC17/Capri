import { Link, useNavigate } from 'react-router-dom';
import { isAuthenticated, isAdmin, getUser, logout } from '../utils/auth';
import './Navbar.css';

function Navbar() {
    const navigate = useNavigate();
    const user = getUser();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    🌸 Perfumería Capri
                </Link>

                <ul className="navbar-menu">
                    <li>
                        <Link to="/">Catálogo</Link>
                    </li>

                    {isAuthenticated() && (
                        <>
                            <li>
                                <Link to="/cart">🛒 Carrito</Link>
                            </li>
                            <li>
                                <Link to="/orders">📦 Mis Pedidos</Link>
                            </li>
                        </>
                    )}

                    {isAdmin() && (
                        <li>
                            <Link to="/admin" className="admin-link">
                                ⚙️ Admin
                            </Link>
                        </li>
                    )}
                </ul>

                <div className="navbar-user">
                    {isAuthenticated() ? (
                        <>
                            <span className="user-name">Hola, {user.nombre}</span>
                            <button onClick={handleLogout} className="btn-logout">
                                Cerrar Sesión
                            </button>
                        </>
                    ) : (
                        <Link to="/login" className="btn-login">
                            Iniciar Sesión
                        </Link>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
