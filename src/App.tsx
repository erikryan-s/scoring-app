import "./App.scss";
import Counter from "./components/Counter";

const App = () => {
    return (
        <div id="main">
            <Counter title={"Team 1"} initialCount={0} />
            <Counter title={"Team 2"} initialCount={0} />
        </div>
    );
};

export default App;
