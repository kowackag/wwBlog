import styled from 'styled-components';

const StyledHome = styled.article`
    max-width: 1300px;
    margin: auto;
    color: rgb(var(--color-alfa));

    & .title {
        margin: 3rem 0;
        font-style: italic;
        font-size: 4rem;
    }

    & .photo {
        margin-right: 4rem;
        width: 400px;
        height: auto;
        float: left;
    }
`
export default StyledHome;
