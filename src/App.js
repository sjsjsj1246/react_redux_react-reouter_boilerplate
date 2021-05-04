import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/" component="hi" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
