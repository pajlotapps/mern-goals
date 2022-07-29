import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Dashboard, Register, Login } from './pages'
import { Header } from './components'

function App() {
  return (
    <>
      <Router>
        <div className='container'></div>
        <Header/>

        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
