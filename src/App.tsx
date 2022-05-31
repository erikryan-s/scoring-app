import "./App.scss";
import Counter from "./components/Counter";

const App = () => {
    return (
        <div className="app">
            <h1>
                <span>🏐</span>Scoreboard<span>🏐</span>
            </h1>
            <div className="scoreboard">
                <div className="teamOne">
                    <Counter initialCount={0} isTeamOne={true} />
                </div>
                <div className="teamTwo">
                    <Counter initialCount={0} isTeamOne={false} />
                </div>
            </div>
        </div>
    );
};

export default App;
