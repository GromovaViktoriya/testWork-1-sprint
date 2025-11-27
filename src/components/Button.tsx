import styled from "styled-components";

type ButtonProps = {
    name: string;
    onClick: () => void;
    count: number;
};

export const Button = ({name, onClick, count}: ButtonProps) => {
    return (
        <StyledButton
            className={name === 'reset' && count === 0 ? 'Disabled' : name === 'inc' && count === 5 ? 'Disabled' : ''}
            onClick={onClick}>
            {name}
        </StyledButton>
    );
};

const StyledButton = styled.button`
    padding: 2px 7px;
    background-color: #62d9fb;
    outline: none;
    border: none;
    box-shadow: none;
    border-radius: 5px;
    cursor: pointer;

    &.Disabled {
        background-color: #427083;
        cursor: auto;
    }
`