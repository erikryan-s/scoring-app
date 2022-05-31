import "./App.scss";
import Counter from "./components/Counter";

const App = () => {
    return (
        <div className="app">
            <h1>🏐Scoreboard🏐</h1>
            <div className="scoreboard">
                <div className="teamOne">
                    <Counter title="Home" initialCount={0} isTeamOne={true} />
                </div>
                <div className="teamTwo">
                    <Counter title="Guest" initialCount={0} isTeamOne={false} />
                </div>
            </div>
        </div>
    );
};

export default App;
