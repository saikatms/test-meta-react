import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';

// Home component
const Home = () => (
  <div>
    <h1>Home Page</h1>
    <nav>
      <ul>
        <li><Link to="/page1?seatId=GEYTSORRGM5DG">Go to seat GEYTSORRGM5DG</Link></li>
        <li><Link to="/page2?seatId=GEYTQORRGQ5DCNI">Go to seat GEYTQORRGQ5DCNI</Link></li>
      </ul>
    </nav>
  </div>
);

// Page component that displays content from query string
const Page = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const content = searchParams.get('seatId') || 'No seatId provided';

  return (
    <div>
      <h1>Page Content</h1>
      <p>{content}</p>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

// Main App component
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page1" element={<Page />} />
        <Route path="/page2" element={<Page />} />
      </Routes>
    </Router>
  );
};

export default App;