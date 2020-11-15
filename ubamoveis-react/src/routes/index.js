import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import Moveis from "../pages/Moveis";
import Colchoes from "../pages/Colchoes";
import Sobre from "../pages/Sobre";
import Lojas from "../pages/Lojas";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/moveis" exact component={Moveis} />
      <Route path="/colchoes" exact component={Colchoes} />
      <Route path="/sobre" exact component={Sobre} />
      <Route path="/lojas" exact component={Lojas} />
    </Switch>
  );
}
