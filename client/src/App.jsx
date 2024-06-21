import React, { useState } from 'react';
import { Container, Row, Col, Form, Table, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import PackingDetails from './Pages/PackingDetails';
import PackingSlip from './Pages/PackingSlip';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/packing-details" element={<PackingDetails />} />
        <Route path="/packing-slip" element={<PackingSlip />} />
      </Routes>
    </Router>
  )
};

export default App;
