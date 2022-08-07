import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Dashboard, Tasks, Register, Login, Profile, NotFound } from './pages'
import { Header } from './components'
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <>
      <Router>
        <div className='container'>
          <Header />

          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<NotFound />} />

          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
