import { FC, useState } from "react";
import { ThemeProvider } from "styled-components";
import theme from "./theme/theme";
import {
    StyledCounter,
    TeamName,
    ScoreCount,
    ScoreButtons,
    Button,
    Reset,
    ResetButton,
} from "./StyledCounter";

interface IProps {
    title: string;
    initialCount: number;
    isTeamOne: boolean;
}

const Counter: FC<IProps> = ({ title, initialCount }) => {
    const [count, setCount] = useState(initialCount);

    const increase = () => {
        if (count === 25) {
            alert("Winner!");
            return;
        }
        setCount(count + 1);
    };

    const decrease = () => {
        if (count === 0) {
            return;
        }
        setCount(count - 1);
    };

    const reset = () => {
        setCount(0);
    };

    return (
        <ThemeProvider theme={theme}>
            <StyledCounter>
                <TeamName isTeamOne={props.isTeamOne}>{title}</TeamName>
                <ScoreCount isTeamOne={true}>{count}</ScoreCount>
                <ScoreButtons>
                    <Button isTeamOne={true} onClick={() => increase()}>
                        +
                    </Button>
                    <Button isTeamOne={true} onClick={() => decrease()}>
                        -
                    </Button>
                </ScoreButtons>
                <Reset>
                    <ResetButton onClick={() => reset()}>reset</ResetButton>
                </Reset>
            </StyledCounter>
        </ThemeProvider>
    );
};

export default Counter;
