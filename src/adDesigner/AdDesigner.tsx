import { useState } from 'react';
import './AdDesigner.css';

function AdDesigner() {
    const [ad, setAd] = useState("Sea Salt");
    const [theme, setTheme] = useState(false);
    const [fontSize, setFontSize] = useState(20);
   
    let chosenTheme = "light";

    if (theme === false) {
        chosenTheme = "light"
    } else {
        chosenTheme = "dark";
    };

   
    return(
        <div className="AdDesigner">
            <h3>Ad Designer</h3>
            <div className={`ad-container ${chosenTheme}-${theme}`}>
                <p>Vote for</p>
                <h4 style= {{fontSize: `${fontSize}px`}}>{ad}</h4>
            </div>
            <h5>What to Support</h5>
            <div className="flavor-container">
                <button className="flavorButton" onClick={() => {setAd("Sea Salt")}} disabled={ad === "Sea Salt" ? true : false}>Sea Salt</button>
                <button className="flavorButton" onClick={() => {setAd("Paopu Fruit")}} disabled={ad === "Paopu Fruit" ? true : false}>Paopu Fruit</button>
                <button className="flavorButton" onClick={() => {setAd("Royalberry")}} disabled={ad === "Royalberry" ? true : false}>Royalberry</button>
            </div>
            <h5>Color Theme</h5>
            <div className="theme-container">
                <button onClick={() => {setTheme(false)}} disabled={theme === false ? true : false}>Light</button>
                <button onClick={() => {setTheme(true)}} disabled={theme === true ? true : false}>Dark</button>
            </div>
            <h5>Font Size</h5>
            <div className="font-container">
                <button onClick={() => {setFontSize(fontSize - 1)}}>Down</button>
                <p>{fontSize}</p>
                <button onClick={() => {setFontSize(fontSize + 1)}}>Up</button>
            </div>
            
        </div>
    );
}



export default AdDesigner;