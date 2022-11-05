import * as React from "react";
import { useUserContext } from "./UserContext/UserContext";
import Avatar from "@mui/material/Avatar";

import { Container } from "@mui/material";

const Home = () => {
  const { isLogged, users } = useUserContext();

  if (!isLogged) {
    return <div>Homie</div>;
  }
  return (
    <div className="card">
      <Container align="center">
        <Avatar alt="avatar" src={users[0].avatar} />
        {users[0].name} {users[0].surname}
      </Container>
    </div>
  );
};

export default Home;
