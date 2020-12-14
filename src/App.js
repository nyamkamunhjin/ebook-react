import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainNav from './components/MainNav/MainNav';
import Home from './components/Home/Home';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MainNav />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/shop" component={null} />
          <Route path="/about" component={null} />
          <Route path="/service" component={null} />
          <Route path="/contact" component={null} />
          <Route path="/login" component={null} />
          <Route path="/register" component={null} />
          <Route path="/dashboard" component={null} />
          <Route path="/signout" component={null} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
