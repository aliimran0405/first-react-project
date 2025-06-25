import Home from './pages/Home.jsx'
import About from './pages/About.jsx';
import ShoePage from './pages/ShoePage.jsx';
import Nav from './Components/Nav.jsx';

import { Route, Routes} from 'react-router-dom';

function App() {

    return(
        <>
            <Nav />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/shoe/:shoeId' element={<ShoePage />} />
            </Routes>
        </>
    );
}

export default App
