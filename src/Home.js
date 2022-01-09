import { useHistory } from "react-router-dom";
import Button from "@mui/material/Button";

export function Home() {
  const history = useHistory();

  return (
    <div>
      <h2>Hello</h2>
      <div className="btn">
      <Button
        variant="text"
        color="inherit"
        onClick={() => history.push("/signUp")}
      >
        Add User
      </Button>
      </div>
    </div>
  );
}
