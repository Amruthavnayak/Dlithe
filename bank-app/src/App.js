import React, { useState, useEffect, createContext, useContext } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";

const UserContext = createContext();

const Navbar = () => (
  <nav className="navbar">
    <Link to="/" className="nav-link">Home</Link>
    <Link to="/register" className="nav-link">Register</Link>
    <Link to="/services" className="nav-link">Services</Link>
    <Link to="/profile" className="nav-link">Profile</Link>
  </nav>
);

const Home = () => (
  <div className="container">
    <h1>Welcome to Our Website</h1>
    <p>Your one-stop platform for services and transactions.</p>
    <Link to="/register" className="btn">Get Started</Link>
  </div>
);

const Register = () => {
  const { setUser } = useContext(UserContext);
  const [name, setName] = useState("");

  const handleRegister = () => {
    setUser({ name });
  };

  return (
    <div className="container">
      <h2>Register</h2>
      <input type="text" placeholder="Enter Name" onChange={(e) => setName(e.target.value)} className="input" />
      <button onClick={handleRegister} className="btn">Register</button>
      <Link to="/services" className="btn">Continue</Link>
    </div>
  );
};

const Services = () => (
  <div className="container">
    <h2>Our Services</h2>
    <Link to="/profile" className="btn">Profile</Link>
    <Link to="/transaction" className="btn">Transaction History</Link>
  </div>
);

const Profile = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="container">
      <h2>Profile</h2>
      <p>Name: {user?.name || "Guest"}</p>
    </div>
  );
};

const Transaction = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    setTransactions(["Deposit $100", "Withdraw $50"]);
  }, []);

  return (
    <div className="container">
      <h2>Transaction History</h2>
      <ul>{transactions.map((t, i) => (<li key={i}>{t}</li>))}</ul>
    </div>
  );
};

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/services" element={<Services />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/transaction" element={<Transaction />} />
        </Routes>
      </Router>
    </UserContext.Provider>
  );
};

export default App;