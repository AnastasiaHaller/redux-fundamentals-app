import classes from "./Header.module.css";
import { useSelector, useDispatch } from "react-redux";
import { userAuthActions } from "../store/index";

const Header = () => {

  const dispatchFunction = useDispatch();
  const isUserLogedIn = useSelector((state) => state.auth.isUserLogedIn);

  const sighOutHandler = () => {
    dispatchFunction(userAuthActions.signOut());
  };

  return (
    <header className={classes.header}>
      <h1>Redux</h1>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          {isUserLogedIn && <li>
            <a href="/">My sales</a>
          </li>}
          <li>
            <a href="/">About us</a>
          </li>
          <li>
            <a href="/">Contacts</a>
          </li>
          <li>
            {isUserLogedIn && <button onClick={sighOutHandler}>Log out</button>}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
