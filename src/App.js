import './App.css';

function App() {
  return (
    <div className="main">
      <div className="content">
        <div className="top-container">
          <nav className="navbar">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
        
        <div className="bottom-container">
          <div className="left-side">
            <h1>Title 1</h1>
            <p>This is a paragraph of text under the title on the left side...</p>
          </div>
          <div className="right-side">
            <h1>Title 2</h1>
            <ul>
              <li>Project 1</li>
              <li>Project 2</li>
              <li>Project 3</li>
            </ul>
          </div>
          <div className="new-div">
          {/* This is the new div. You can add content here if needed. */}
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;