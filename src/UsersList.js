import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { Button } from "@mui/material";
import { useHistory } from "react-router-dom";
import { GlobalContext } from "./globalState";
import { useContext } from "react";
import EditIcon from "@mui/icons-material/Edit";
import InfoIcon from "@mui/icons-material/Info";
const CartItem = ({ user, index }) => {
  const history = useHistory();

  return (
    <div className="cart-content-child">
      <ListItem>
        <h3 style={{ margin: "2rem" }}>{user.name}</h3>
        <Button
          variant="text"
          color="inherit"
          style={{ marginLeft: "auto" }}
          onClick={() => history.push("/UserInfo/" + index)}
        >
          <InfoIcon />
        </Button>
        <Button
          variant="text"
          color="inherit"
          onClick={() => history.push("/movies/edit/" + index)}
        >
          <EditIcon />
        </Button>
      </ListItem>
    </div>
  );
};
export function Users() {
  const { users } = useContext(GlobalContext);

  return (
    <List>
      <div className="list">
      <h1>User List</h1>
        {users.map((item, index) => (
          <CartItem user={item} key={index} index={index} />
        ))}
      </div>
    </List>
  );
}
