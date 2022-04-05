import styled from 'styled-components';

const StyledButton = styled.button`
    position: absolute;
    left: 0;
    width: 15rem;
    padding: 1rem 3rem;
    background-color: rgba(var(--color-contrast), 0.7);
    border: none;
    border: 1px solid rgb(var(--color-contrast));
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    font-size: 1.4rem;
    color: rgb(var(--color-font));
    transition: linear 0.3s;
    &:hover {
        transform: scale(1.1);
        cursor: pointer;
    }
`

export default StyledButton;