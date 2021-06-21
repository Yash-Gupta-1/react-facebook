import './App.css';
import Header from './components/Header';
import './Utility.css';
import LeftBody from './components/LeftBody';
import FeedBody from './components/FeedBody';
import RightBody from './components/RightBody';

function App() {
  return (
    <div className="app">
      <Header />

      <div className="appBody">
        {/* Left */}
        <div className="appLeft">
          <LeftBody />
        </div>
        {/* Feed */}
        <div className="appFeed">
          <FeedBody />
        </div>
        {/* Right */}
        <div className="appRight">
          <RightBody />
        </div>
      </div>
    </div>
  );
}

export default App;
