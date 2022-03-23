import styled from 'styled-components';

const StyledContainer = styled.div`
    margin: auto;
    max-width: 1300px;
    padding: 1rem 2rem;
    display:${props => props.flex===true && `flex`};
    justify-content: space-between;
    align-items: center;
`

export default StyledContainer;