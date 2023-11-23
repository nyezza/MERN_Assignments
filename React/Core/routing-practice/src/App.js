import './App.css';
import Home from './components/Home';
import Number from './components/Number';
import { Routes, Route} from "react-router-dom";

function App() {
    return (
        <fieldset>
            <div className="App">
            <Routes>
                <Route element={<Home />} path="/home"/>
                <Route element={<Number />} path="/:word" />
                <Route element={<Number />} path="/:word/:color/:bgCol" />
            </Routes>

            </div>
        </fieldset>
    );
}

export default App;