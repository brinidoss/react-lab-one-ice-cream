import Header from './header/Header';
import AdDesigner from './adDesigner/AdDesigner';
import Votes from './votes/Votes';
import Ad from './ad/Ad';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header user="Sora"/>
      <Ad flavor="Sea Salt" fontSize={20} darkTheme={false}/>
      <Ad flavor="Paopu" fontSize={20} darkTheme={true}/>
      <Ad flavor="Royalberry" fontSize={20} darkTheme={false}/>
      <main>
        <AdDesigner/>
        <Votes/>
    </main>
    </div>
  );
}

export default App;
