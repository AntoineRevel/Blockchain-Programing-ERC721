import { useNavigate } from 'react-router-dom';
const Nav = () => {
    const navigate = useNavigate();

    return (
        <>
            <nav className="nav">
                <h1 onClick={() => navigate("/")}>ERC721</h1>
            </nav>
        </>
    );
};

export default Nav;