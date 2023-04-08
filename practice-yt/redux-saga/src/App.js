import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserList from "./components/UserList";

function App() {
  const users = useSelector((state) => state.users);
  console.log(users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "GET_USER" });
  }, [dispatch]);
  return (
    <>
      <UserList users={users} />
    </>
  );
}

export default App;
