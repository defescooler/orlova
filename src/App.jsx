import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Recipes from './pages/Recipes';
import RecipeDetail from './pages/RecipeDetail';
import IndividualConsultations from './pages/IndividualConsultations';
import SchoolSupport from './pages/SchoolSupport';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/recipes/:id" element={<RecipeDetail />} />
            <Route path="/individual-consultations" element={<IndividualConsultations />} />
            <Route path="/school-support" element={<SchoolSupport />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
