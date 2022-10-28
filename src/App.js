import "./App.css";
import About from "./components/About";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <main>
        <About />
      </main>
    </div>
  );
}

export default App;
