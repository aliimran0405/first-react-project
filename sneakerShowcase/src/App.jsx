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

// TODO 1: Change map() method from Card component to Home.jsx and add PropTypes so that the component is more reusable
// TODO 2: Add ShoePage functionality
// TODO 3: Check styling

export default App
