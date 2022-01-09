import "./App.css";
import { useHistory } from "react-router-dom";
import Button from "@mui/material/Button";
import { Switch, Route } from "react-router-dom";
import { AppBar, Toolbar } from "@mui/material";
import { Home } from "./Home";
import { Success } from "./success";
import { SignUp } from "./createUser";
import { Users } from "./UsersList";
import { UserInfo } from "./userInfo";
import { Edit } from "./editUser";

export default function App() {
  const history = useHistory();
  return (
    <div className="App">
      <AppBar
        position="static"
        style={{ marginBottom: "24px" }}
        color="transparent"
      >
        <Toolbar>
          <Button
            variant="text"
            color="inherit"
            onClick={() => history.push("/signUp")}
          >
            Create User
          </Button>

          <Button
            variant="text"
            color="inherit"
            onClick={() => history.push("/usersList")}
          >
            List Users
          </Button>
        </Toolbar>
      </AppBar>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/signUp">
          <SignUp />
        </Route>
        <Route path="/success">
          <Success />
        </Route>
        <Route path="/usersList">
          <Users />
        </Route>
        <Route path="/UserInfo/:index">
          <UserInfo />
        </Route>
        <Route path="/movies/edit/:index">
          <Edit />
        </Route>
      </Switch>
    </div>
  );
}
