import "./styles.css";
import DemoApp from "./component/DemoApp";

export default function App() {
  return (
    <div className="App">
      <h1>Hello Learners</h1>
      <h2>Laearn useEffect</h2>
      <h3>
        Definataion :-{" "}
        <pre>
          he useEffect Hook allows you to perform side effects in your
          components.
        </pre>{" "}
      </h3>
      <h3>
        Synatax <pre>useEffect(funtion, dependencies?)</pre>{" "}
      </h3>
      <div className="compo">
        <DemoApp />
      </div>
    </div>
  );
}
