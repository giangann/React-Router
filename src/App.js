import "./App.css";
import React from "react";
import FormInput from "./Components/FormInput";
import { useDispatch, useSelector } from "react-redux";
import {
  HandleCheck,
  HandleDelete,
  SignIn,
  SignOut,
} from "./Redux/ActionCreator";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import TodoList from "./Components/TodoList";
import { useContext, createContext, useState } from "react";
import { Redirect, useHistory, useLocation } from "react-router-dom";
import { ConfigContext } from "antd/lib/config-provider";

const App = () => {
  return (
    <ProvideAuth>
      <Router>
        <div>
          <AuthButton />
          <Link to="/add_todo">Add Todo Task</Link>
          <br></br>
          <Link to="/home">ShowList</Link>
        </div>
        <Switch>
          <PrivateRoute path="/add_todo">
            <FormInput />
          </PrivateRoute>
          <Route path="/home">
            <TodoList />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
        </Switch>
      </Router>
    </ProvideAuth>
  );
};
export default App;

// ProvideAuth, AuthButton, ProtectedRoute, FakeAuth,
// auth = createContext(useProvideAuth), [user, setUser] = useState
const fakeAuth = {
  isAuthenticated: false,
  signin(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  },
};

/** For more details on
 * `authContext`, `ProvideAuth`, `useAuth` and `useProvideAuth`
 * refer to: https://usehooks.com/useAuth/
 */
const authContext = createContext();

function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

function useAuth() {
  return useSelector((state) => state.isLoggedIn);
}

function useProvideAuth() {
  const [user, setUser] = useState(null);

  const signin = (cb) => {
    return fakeAuth.signin(() => {
      setUser("user");
      cb();
    });
  };

  const signout = (cb) => {
    return fakeAuth.signout(() => {
      setUser(null);
      cb();
    });
  };

  return {
    user,
    signin,
    signout,
  };
}

function AuthButton() {
  let history = useHistory();
  let auth = useSelector((state) => state.isLoggedIn);

  const dispatch = useDispatch();

  return auth ? (
    <p>
      Welcome!{" "}
      <button
        onClick={() => {
          dispatch(SignOut());
          history.push("/homei")
        }}
      >
        Sign out
      </button>
    </p>
  ) : (
    <p>You are not logged in.</p>
  );
}

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
function PrivateRoute({ children, ...rest }) {
  let auth = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

function PublicPage() {
  return <h3>Public</h3>;
}

function ProtectedPage() {
  return <h3>Protected</h3>;
}

function LoginPage() {
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };

  const dispatch = useDispatch();

  return (
    <div>
      <p>You must log in to view the page at {from.pathname}</p>
      <button
        onClick={() => {
          dispatch(SignIn());
          history.replace(from);
        }}
      >
        Log in
      </button>
      <button>hey</button>
    </div>
  );
}
