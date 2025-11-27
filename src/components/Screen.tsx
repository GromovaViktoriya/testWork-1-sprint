import * as React from 'react';
import styled from "styled-components";

type ScreenProps = {
    count: number;
};

export const Screen = ({count}: ScreenProps) => {
    return (
        <StyledScreen>
            <h2 className={count === 5 ? 'CountFive' : ''}>{count}</h2>
        </StyledScreen>
    );
};

const StyledScreen = styled.div`
    width: 100%;
    height: 45px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #62d9fb;

    h2.CountFive {
        transform: scale(1.25);
        color: red;
    }
`