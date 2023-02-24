import './App.css';
import { connect } from "react-redux";
import MyCrossword from './Crossword';
import { ImageContainer } from './components/Image';
import { CurrentClueContainer } from './components/CurrentClue';

function App() {
  return (
    <div className="App">
      <div style={{ width: '100%' }}>
        <div>
        </div>
        <CurrentClueContainer />
        <MyCrossword />
      </div>;
    </div>
  );
}

export default App;
