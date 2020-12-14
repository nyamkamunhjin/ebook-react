import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={null} exact />
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
