import { useState } from 'react';
import './Votes.css';

interface Props {
    flavor1: string;
    flavor2: string;
    flavor3: string;
    color1: string;
    color2: string;
    color3: string;
}

function Votes({flavor1, flavor2, flavor3, color1, color2, color3}: Props) {
const [flavor1Vote, setFlavor1Vote] = useState(0);
const [flavor2Vote, setFlavor2Vote] = useState(0);
const [flavor3Vote, setFlavor3Vote] = useState(0);
let flavor1Bar: number = 0;
let flavor2Bar: number = 0;
let flavor3Bar: number = 0;

if (flavor1Vote > 0) {
    flavor1Bar = (flavor1Vote / (flavor1Vote + flavor2Vote + flavor3Vote )) * 100;
};
if (flavor2Vote > 0) {
    flavor2Bar = (flavor2Vote / (flavor1Vote + flavor2Vote + flavor3Vote )) * 100;
};
if (flavor3Vote > 0) {
    flavor3Bar = (flavor3Vote / (flavor1Vote + flavor2Vote + flavor3Vote )) * 100;
};

    return (
        <div className="Votes">
            <h2>Vote Here</h2>
        <div className="button-container">
            <button onClick={() => {setFlavor1Vote(flavor1Vote + 1)}}>{flavor1}</button>
            <button onClick={() => {setFlavor2Vote(flavor2Vote + 1)}}>{flavor2}</button>
            <button onClick={() => {setFlavor3Vote(flavor3Vote + 1)}}>{flavor3}</button>
        </div>
        <div className="bar-container">
            <p style={flavor1Vote < 1 && flavor2Vote < 1 && flavor3Vote < 1 ? {visibility: 'visible'} : {display: 'none'}}>No votes yet.</p>
            <div className="flavor-1-container" style={flavor1Vote < 1 ? {display: 'none'} : {visibility: 'visible'}}>
                <p>{flavor1}: {flavor1Vote} ({flavor1Bar.toFixed(1)}%)</p>
                <div className="bar" style={{width: `${flavor1Bar}%`, backgroundColor:`${color1}`}}></div>
            </div>
            <div className="flavor-2-container" style= {flavor2Vote < 1 ? {display: 'none'} : {visibility: 'visible'}}>
                <p>{flavor2}: {flavor2Vote} ({flavor2Bar.toFixed(1)}%)</p>
                <div className="bar" style={{width: `${flavor2Bar}%`, backgroundColor:`${color2}`}}></div>
            </div>
            <div className="flavor-3-container" style= {flavor3Vote < 1 ? {display: 'none'} : {visibility: 'visible'}}>
                <p>{flavor3}: {flavor3Vote} ({flavor3Bar.toFixed(1)}%)</p>
                <div className="bar" style={{width: `${flavor3Bar}%`, backgroundColor:`${color3}`}}></div>
            </div>
        </div>
        </div>
    );
}

export default Votes;