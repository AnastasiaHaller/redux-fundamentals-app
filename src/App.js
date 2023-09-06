import Header from "./components/Header";
import Auth from "./components/Auth";
import Counter from "./components/Counter";
import UserProfile from "./components/UserProfile";
import { useSelector } from "react-redux";

function App() {

  const isUserLogedIn = useSelector((state) => state.auth.isUserLogedIn);

  return (
    <div>
      <Header />
      {!isUserLogedIn && <Auth />}
      {isUserLogedIn && <UserProfile />}
      <Counter />
    </div>
  );
}

export default App;
