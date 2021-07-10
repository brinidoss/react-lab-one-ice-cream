import '../adDesigner/AdDesigner.css'

interface Props {
    flavor: string;
    fontSize: number;
    darkTheme: boolean;
}



function Ad({flavor, fontSize, darkTheme}: Props) {
let addClass = "";

if (darkTheme === false) {
    addClass = 'light';
} else {
    addClass = 'dark';
}

    return (
        <div className={`ad-container ${addClass}`}>
            <p>Vote For</p>
            <h4 style= {{fontSize: `${fontSize}px`}}>{flavor}</h4>
        </div>
    );
}

export default Ad;