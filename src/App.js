import "./App.css";
import React from "react";
import FormInput from "./Components/FormInput";
import { useDispatch, useSelector } from "react-redux";
import { SignIn, SignOut } from "./Redux/ActionCreator";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import TodoList from "./Components/TodoList";
import AxiosTestPage from "./Components/AxiosTestPage";
import { Redirect, useHistory, useLocation } from "react-router-dom";

const App = () => {
  return (
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
        <Route path="/axios">
          <AxiosTestPage />
        </Route>
      </Switch>
    </Router>
  );
};
export default App;

// ProvideAuth, AuthButton, ProtectedRoute, FakeAuth,
// auth = createContext(useProvideAuth), [user, setUser] = useState

/** For more details on
 * `authContext`, `ProvideAuth`, `useAuth` and `useProvideAuth`
 * refer to: https://usehooks.com/useAuth/
 */

function useAuth() {
  return useSelector((state) => state.isLoggedIn);
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
          history.push("/homei");
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
