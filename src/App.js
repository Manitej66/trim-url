import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { GeistProvider, CssBaseline } from "@geist-ui/react";
import Home from "./components/Home";
import Nav from "./components/Nav";
import { useState } from "react";
import Redirect from "./components/Redirect";

function App() {
  const [themeType, setThemeType] = useState("light");

  return (
    <Router>
      <GeistProvider themeType={themeType}>
        <CssBaseline />
        <Nav setThemeType={setThemeType} />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/:id" component={Redirect} />
        </Switch>
      </GeistProvider>
    </Router>
  );
}

export default App;
