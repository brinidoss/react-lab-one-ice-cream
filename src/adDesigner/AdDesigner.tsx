import { useState } from 'react';
import Ad from '../ad/Ad';
import './AdDesigner.css';

function AdDesigner() {
    const [flavor, setFlavor] = useState("Sea Salt");
    const [darkTheme, setDarkTheme] = useState(false);
    const [fontSize, setFontSize] = useState(40);
   
    return(
        <div className="AdDesigner">
            <h2>Ad Designer</h2>
            <Ad flavor={flavor} fontSize={fontSize} darkTheme={darkTheme}/>
            <h5>What to Support</h5>
            <div className="flavor-container">
                <button className="flavorButton" onClick={() => {setFlavor("Sea Salt")}} disabled={flavor === "Sea Salt" ? true : false}>Sea Salt</button>
                <button className="flavorButton" onClick={() => {setFlavor("Paopu Fruit")}} disabled={flavor === "Paopu Fruit" ? true : false}>Paopu Fruit</button>
                <button className="flavorButton" onClick={() => {setFlavor("Royalberry")}} disabled={flavor === "Royalberry" ? true : false}>Royalberry</button>
            </div>
            <h5>Color Theme</h5>
            <div className="theme-container">
                <button onClick={() => {setDarkTheme(false)}} disabled={darkTheme === false ? true : false}>Light</button>
                <button onClick={() => {setDarkTheme(true)}} disabled={darkTheme === true ? true : false}>Dark</button>
            </div>
            <h5>Font Size</h5>
            <div className="font-container">
                <button onClick={() => {setFontSize(fontSize - 1)}}>Down</button>
                <div className="font-box">
                  <p>{fontSize}</p>  
                </div>
                
                <button onClick={() => {setFontSize(fontSize + 1)}}>Up</button>
            </div>
            
        </div>
    );
}



export default AdDesigner;