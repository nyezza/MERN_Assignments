import Header from './Components/Header';
import Navigation from './Components/Navigation';
import Main from './Components/Main';
import SubContent from './Components/SubContents';
import Advertisement from './Components/Advertisement';


function App() {
  return (
    <div className="AppBlock">
      <Header />
      <div style={{ display: 'flex'}}>
        <Navigation />
        <Main>
            <div className='adv'>
              <div style={{ display: 'flex'}}>
                <SubContent />
                <SubContent />
                <SubContent />
              </div>
              <Advertisement />
            </div >
        </Main>
      </div>
    </div>
  );
}

export default App;