import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './components/HomePage';
import NewPage from './components/NewPage';
import "./App.css";
import { DataProvider } from './components/DataContext';

function App() {
  return (
    <Router>
      <DataProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/newpage" element={<NewPage />} />
        </Routes>
      </DataProvider>
    </Router>
  );
}

export default App;
