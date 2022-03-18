import styled from 'styled-components';

const StyledHome = styled.article`
    max-width: 1400px;
    margin: auto;
    color: rgb(var(--color-alfa));
    font-size: 1.8rem;

    & .title {
        margin: 3rem 0;
    }

    & .photo {
        margin-right: 4rem;
        width: 400px;
        height: auto;
        float: left;
    }
`
export default StyledHome;
