import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className='flex-1'>
        <Outlet  />
      </main>
      <Footer />
    </div>
  );
}

export default App;
