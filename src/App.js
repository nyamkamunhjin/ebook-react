import { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import UserAPI from './api/UserAPI';
import './App.css';
import Login from './components/Auth/Login';
import Book from './components/Book/Book';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import context from './context/context';
import Cookies from 'universal-cookie';

function App() {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);

  const getUser = async (token) => {
    const { data, err } = await UserAPI.getUser(token);

    if (err) {
      console.error(err);
      console.log('getUser error');
    } else {
      setUser(data);
    }
  };

  const logIn = ({ token, expires }) => {
    console.log({ token, expires });
    new Cookies().set('token', token, {
      path: '/',
      expires: new Date(expires),
    });
    setToken(token);
    getUser(token);
  };

  const logOut = () => {
    new Cookies().remove('token');
    setToken(null);
    setUser(null);
  };

  useEffect(() => {
    const token = new Cookies().get('token');

    if (token) {
      getUser(token);
      setToken(token);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <context.Provider
        value={{
          token,
          user,
          logIn,
          logOut,
          setUser,
        }}
      >
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/book/:id" component={Book} exact />
            <Route path="/shop" component={null} />
            <Route path="/about" component={null} />
            <Route path="/service" component={null} />
            <Route path="/contact" component={null} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={null} />
            <Route path="/dashboard" component={null} />
            <Route path="/signout" component={null} />
          </Switch>
        </BrowserRouter>
      </context.Provider>
    </div>
  );
}

export default App;
