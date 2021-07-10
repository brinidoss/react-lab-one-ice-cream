import Header from './header/Header';
import AdDesigner from './adDesigner/AdDesigner';
import Votes from './votes/Votes';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header user="Sora"/>
      <main>
        <AdDesigner/>
        <Votes/>
    </main>
    </div>
  );
}

export default App;
