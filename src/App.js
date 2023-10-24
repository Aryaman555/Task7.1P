import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './Routes/HomePage';
import Login from './Routes/LoginPage';
import Signup from './Routes/Signup';

function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path='/' element={<Homepage />} />
                    <Route path="/login" element={<Login />} />
                    <Route path='/signup' element={<Signup />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;