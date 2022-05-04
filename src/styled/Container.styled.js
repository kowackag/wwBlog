import styled from 'styled-components';

const StyledContainer = styled.div`
    margin: auto;
    max-width: 1300px;
    padding: 1rem 2rem;
    justify-content: space-between;
    align-items: center;

    @media (min-width:762px) {
        display:${props => props.flex===true && `flex`};
    }

`

export default StyledContainer;