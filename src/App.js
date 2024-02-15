import './App.css';
import Title from './Title';

function App() {
  return (
    <>
      <div style={{ width: "90vw", maxWidth: "1296px", margin: "auto", marginTop: "5vh" }}>
        <Title />

        <br />
        <br />
        <div style={{ display: "flex" }}>
          <div style={{ padding: "0.8vh" }}>
            <img src='/tldr.png' alt='tldr' style={{ height: "6vh", borderRadius: "20%" }}></img>
          </div>
          <div style={{ paddingLeft: "10px" }}>
            <p><b>TL;DR</b><br />
              With great power comes great responsibility. <br />
              Just because you can force Slack notification popups on everyone's laptop, you shouldn't abuse it for your own good. <br />
              Please think twice about it if you really want to use <b><span className='highlight'>@here</span></b>, <b><span className='highlight'>@channel</span></b> or <b><span className='highlight'>@everyone</span></b>.
            </p>
          </div>
        </div >

        <br />
        <br />
        <div style={{ display: "flex" }}>
          <div style={{ padding: "0.8vh" }}>
            <img src='/tldr.png' alt='tldr' style={{ height: "6vh", borderRadius: "20%" }}></img>
          </div>
          <div style={{ paddingLeft: "10px" }}>
            <p><b>Why did someone send me this link?</b><br />
              It seems like you ... <br />
              not relevant for the majority of notified people or no urgency to force a notification <br />
              reflect for yourself <br />
              Don't shoot the messenger ...
            </p>
          </div>
        </div >

        <br />
        <br />
        <div style={{ display: "flex" }}>
          <div style={{ padding: "0.8vh" }}>
            <img src='/tldr.png' alt='tldr' style={{ height: "6vh", borderRadius: "20%" }}></img>
          </div>
          <div style={{ paddingLeft: "10px" }}>
            <p><b>But you are exaggerating right here</b><br />
              For you it may seem like it, but ...
              disruption, loosing focus <br />
              sense of urgency, frustration because of ignorance<br />
            </p>
          </div>
        </div >

        <br />
        <br />
        <div style={{ display: "flex" }}>
          <div style={{ padding: "0.8vh" }}>
            <img src='/tldr.png' alt='tldr' style={{ height: "6vh", borderRadius: "20%" }}></img>
          </div>
          <div style={{ paddingLeft: "10px" }}>
            <p><b>When to use it</b><br />
              ✅need for instant response <br />
              ✅emergency broadcast<br />
              ✅urgent matter at hand<br />
            </p>
          </div>
        </div >

        <br />
        <br />
        <div style={{ display: "flex" }}>
          <div style={{ padding: "0.8vh" }}>
            <img src='/tldr.png' alt='tldr' style={{ height: "6vh", borderRadius: "20%" }}></img>
          </div>
          <div style={{ paddingLeft: "10px" }}>
            <p><b>When not to use it</b><br />
              ❌reminder<br />
              ❌irrelevant stuff <br />
              ❌things that only a small group of people are interested in<br />
            </p>
          </div>
        </div >
      </div >
    </>
  );
}

export default App;
