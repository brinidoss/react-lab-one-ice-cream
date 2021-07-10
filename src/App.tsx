import Header from './header/Header';
import AdDesigner from './adDesigner/AdDesigner';
import Votes from './votes/Votes';
import Ad from './ad/Ad';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header user="Sora"/>
      <div className="ad-component-container">
        <Ad flavor="Sea Salt" fontSize={40} darkTheme={false}/>
        <Ad flavor="Paopu Fruit" fontSize={40} darkTheme={true}/>
        <Ad flavor="Royalberry" fontSize={40} darkTheme={false}/>
      </div>
      <main>
        <AdDesigner/>
        <Votes flavor1="Sea Salt" flavor2="Paopu Fruit" flavor3="Royalberry" color1="rgb(168, 241, 242)" color2="rgb(255, 255, 138)" color3="rgb(237, 104, 149)"/>
    </main>
    </div>
  );
}

export default App;
