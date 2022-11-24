import * as React from "react";
import { useUserContext } from "./UserContext/UserContext";
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";
import { Container } from "@mui/material";
import { useSelector } from "react-redux";

const Home = () => {
  const { isLogged, users } = useUserContext();

  const money = useSelector((state) => state.money.value);

  if (!isLogged) {
    return <div>Homie</div>;
  }
  return (
    <div className="card">
      <Container align="center">
        <Avatar alt="avatar" src={users[0].avatar} />
        {users[0].name} {users[0].surname}
        <br />
      </Container>

      <Link to="/money">Money</Link>
      <div>
        <br />
        {money}
        <br />
      </div>
    </div>
  );
};

export default Home;
