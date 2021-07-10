import './Header.css';

interface Props {
    user: string;
}

function Header({user}: Props) {
    return (
        <header className="Header">
            <h1>Ice Cream Wars</h1>
            <h4>Welcome {user}</h4>
        </header>
        
    );
}

export default Header;