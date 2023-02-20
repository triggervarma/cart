import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import './app.module.css';

import Login from './components/Login';
import Home from './components/Home';

const AppRouting = () => {
  let routes = useRoutes([
    { path: '/', element: <Login /> },
    { path: '/home', element: <Home /> },
  ]);
  return routes;
};

const App = () => {
  return (
    <div className="app-container">
      <Router>
        <AppRouting />
      </Router>
    </div>
  );
};

export default App;
