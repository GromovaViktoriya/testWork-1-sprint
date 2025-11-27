import React from 'react';
import './App.css';
import {Button} from "./components/Button";
import {Screen} from "./components/Screen";
import styled from "styled-components";


function App() {
    const [count, setCount] = React.useState<number>(0);

    const incCount = () => {
        if (count === 5) return;
        setCount((prevState)=> prevState + 1);
    }
    const resetCount = () => {
        if (count !== 0) {
            setCount(0)
        }
    }

    return (
        <StyledApp className="App">
            <Screen count={count}/>
            <StyledButtonWrapper>
                <Button name="inc" onClick={incCount} count={count}/>
                <Button name="reset" onClick={resetCount} count={count}/>
            </StyledButtonWrapper>
        </StyledApp>
    );
}

const StyledApp = styled.div`
    width: 130px;
    padding: 10px;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    color: #242b35;
    border: 1px solid #62d9fb;
    border-radius: 5px;

    transform: scale(5);
`

const StyledButtonWrapper = styled.div`
    width: 100%;
    padding: 10px;
    border: 1px solid #62d9fb;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    gap: 10px;
`

export default App;
