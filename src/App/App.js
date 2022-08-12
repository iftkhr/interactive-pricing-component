import './App.css';

function App() {
  return (
    <div className="App">
      <div className="circles">
        <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
          <g fill="none" fill-rule="evenodd" stroke="#CFD8EF">
            <circle className='circle1' cx="63" cy="82" r="62.5"/>
            <circle className='circle2' cx="105" cy="41" r="40.5" />
          </g>
        </svg>
      </div>
      <div className='text'>
        <div className="main-text"> 
          Simple, traffic-based pricing
        </div>
        <div className="sub-text"> 
          Sign-up for our 30-day trial. No credit card required. 
        </div>
      </div>
    </div>
  );
}

export default App;
