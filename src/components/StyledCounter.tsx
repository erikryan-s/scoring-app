import styled from "styled-components";

interface CounterProps {
    isTeamOne: boolean;
}

export const StyledCounter = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const TeamName = styled.h2<CounterProps>`
    color: ${(props) =>
        props.isTeamOne
            ? props.theme.colors.teamOne
            : props.theme.colors.teamTwo};
    font-size: 2.5rem;
    font-weight: 500;
`;

export const ScoreCount = styled.h3<CounterProps>`
    background-color: ${(props) =>
        props.isTeamOne
            ? props.theme.colors.teamOne
            : props.theme.colors.teamTwo};
    border: 2px solid
        ${(props) =>
            props.isTeamOne
                ? props.theme.colors.teamOneBorder
                : props.theme.colors.teamTwoBorder};
    border-radius: 5px;
    color: ${(props) => props.theme.colors.white};
    width: 90%;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 8rem;
    font-weight: 500;

    @media (max-width: 768px) {
        font-size: 5rem;
    }
`;

export const ScoreButtons = styled.div``;

export const Button = styled.button<CounterProps>`
    background-color: ${(props) =>
        props.isTeamOne
            ? props.theme.colors.teamOne
            : props.theme.colors.teamTwo};
    border: 2px solid
        ${(props) =>
            props.isTeamOne
                ? props.theme.colors.teamOneBorder
                : props.theme.colors.teamTwoBorder};
    border-radius: 5px;
    color: ${(props) => props.theme.colors.white};
    padding: 0px 20px;
    margin: 5px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 2rem;
    transition: all 0.3s;

    &:hover {
        transform: scale(0.95);
        opacity: 0.8;
    }
`;

export const Reset = styled.div``;

export const ResetButton = styled.button`
    background-color: ${(props) => props.theme.colors.resetBackground};
    border: 2px solid ${(props) => props.theme.colors.resetBorder};
    border-radius: 5px;
    padding: 0px 10px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 0.8rem;
    transition: all 0.3s;

    &:hover {
        transform: scale(0.95);
        opacity: 0.8;
    }
`;
