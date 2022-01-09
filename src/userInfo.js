import { useContext } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "./globalState";

export function UserInfo() {
  const { users } = useContext(GlobalContext);

  const { index } = useParams();
  const userinfo = users[index];
  console.log(userinfo);

  return (
    <div>
      <h1>Profile</h1>
      <h4>Name: {userinfo.name}</h4>
      <h5>Email: {userinfo.email}</h5>
    </div>
  );
}
