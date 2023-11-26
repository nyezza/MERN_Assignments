import React from 'react'
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1>Notes for professionals</h1>
      <div className="home-buttons">
        <button
          onClick={() => {
            navigate("/notes/new");
          }}
          className="button primary"
        >
          Start Scribbling
        </button>
        <button
          onClick={() => {
            navigate("/notes");
          }}
          className="button secondary"
        >
          View Notes
        </button>
      </div>
    </div>
  );
}

export default Home