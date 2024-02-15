import './App.css';
import Title from './Title';

function App() {
  return (
    <>
      <div style={{ width: "90vw", maxWidth: "1296px", margin: "auto", marginTop: "5vh" }}>
        <Title />
        <p style={{ color: "#D1D2D3", fontSize: "5vh" }}>
          In the realm of code, a developer delves deep, <br />
          Crafting digital worlds, where dreams do leap. <br />
          Focused and absorbed, in the task at hand,<br />
          Till a ping disrupts, like a shifting sand.<br />
          <br />
          <span className='highlight'>@here</span> the Slack notification chimes,<br />
          Breaking the flow, disrupting the rhyme.<br />
          Lost in the chatter, the code now blurred,<br />
          Disturbed from their focus, the rhythm deterred.<br />
        </p>
      </div>
    </>
  );
}

export default App;
