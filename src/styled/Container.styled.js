import styled, {css} from 'styled-components';

const StyledContainer = styled.div`
    margin: auto;
    max-width: 1400px;

    display:${props => props.flex===true && `flex`};
    justify-content: space-between;
    align-items: center;
`

export default StyledContainer;