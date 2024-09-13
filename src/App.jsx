import React, { useState } from 'react'; 
import { BrowserRouter as Router, Routes, Route, Link, Outlet, Navigate } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
// DemoRouter Component for the main routing
function DemoRouter() {
  const navigate = useNavigate(); // Use useNavigate hook to get the navigate function
// 
  const handleNavigate= () => {
    navigate("games"); 
  };
  return (
    <div>
      <h2>Welcome to the DemoRouter Page</h2>
      <nav >
        <ul>
          <li>
            <button onClick ={handleNavigate} >
              Game List</button>
          </li>
          <li>
            <Link to="game-details">Game Details</Link>
          </li>
        </ul>
      </nav>
      {/* Outlet to render nested routes */}
      <Outlet />
    </div>
  );
}

// GameDetails Component for nested routing example
function GameDetails() {
  return (
    <div>
      <h3>Details of the Selected Game</h3>
      <p>This is where game details will be displayed.</p>
    </div>
  );
}

function App() {
  const [games, setGames] = useState([
    { id: 1, name: "football", price: "1200" },
    { id: 2, name: "football 1", price: "1300" },
    { id: 3, name: "football 2", price: "1400" },
  ]);

  return (
    <div className="text-3xl text-center bg-slate-400 ">
      <p>These are the price lists of some gaming instruments</p>
      
      {games.map((game) => {
        return (
          <div key={game.id} className="bg-indigo-400 rounded-xl text-white m-4 p-4">
            <h2 className="text-2xl font-bold">{game.name}</h2>
            <p className="text-lg">{game.price} price</p>
          </div>
        );
      })}

      {/* Main Router */}
      <Router>
        <Routes>
          {/* Main Route for DemoRouter with nested routes */}
          <Route path="/" element={<DemoRouter />}>
            {/* Nested routes under DemoRouter */}
            <Route path="games" element={<GamesList games={games} />} />
            <Route path="game-details" element={<GameDetails />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

// GamesList Component to display a list of games
function GamesList({ games }) {
  return (
    <div>
      <h3>Games List</h3>
      {games.map((game) => (
        <div key={game.id}>
          <p>{game.name} - {game.price}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
