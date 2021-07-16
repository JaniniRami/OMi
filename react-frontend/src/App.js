import './App.css';
import BtnBack from './components/BtnBack';
import Bar from './components/Bar';
import Bar2 from './components/Bar2';
import Controls from './components/Controls';
import Intro from './components/Intro';
import PageWrap from './components/PageWrap';
import Top from './components/Top';
import About from './components/About';
import About2 from './components/About2';

function App() {
  
  return (
    <div className="App">

      
      <PageWrap>
        <Bar2 />
        <Intro></Intro>
      </PageWrap>

      <PageWrap c = "black">
        <BtnBack />
        <Controls />
      </PageWrap>

      <PageWrap c = "adapt">
        <About2 />
      </PageWrap>

    </div>
  );
}

export default App;
