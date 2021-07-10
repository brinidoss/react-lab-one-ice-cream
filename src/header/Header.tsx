import './Header.css';

interface Props {
    user: string;
}

function Header({user}: Props) {
    
    return (
        <header className="Header">
            <div className="heading">
                <h1>Ice Cream Wars</h1>
                <h4>Welcome {user}</h4>
            </div>
        </header>
    );
}

export default Header;