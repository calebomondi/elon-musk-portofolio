import { useContext } from "react";
import { About } from "./components/about/about";
import { Contact } from "./components/contact/contact";
import { Intro } from "./components/intro/intro";
import { ProductList } from "./components/productList/productList";
import { Toggle } from "./components/toggle/toggle";
import { ThemeContext } from "./context";

function App() {

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkmode;

  return (
    <div className="App" style={{backgroundColor: darkMode ? "#222" : "white", color: darkMode && "white"}}>
      <Toggle/>
      <Intro />
      <About />
      <ProductList />
      <Contact />
    </div>
  );
}

export default App;
