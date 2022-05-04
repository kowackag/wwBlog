import styled from 'styled-components';

const StyledHome = styled.article`
    max-width: 1300px;
    margin: auto;
    padding: 0 2rem;
    color: rgb(var(--color-alfa));

    & .title {
        padding: 0 2rem;
        margin: 3rem 0;
        font-style: italic;
        font-size: 3rem;
    }

    & .arctica {
        max-width: 100%;
    }

    & .photo {
        margin-right: 2rem;
        height: auto;
        float: left;
    }

    @media (min-width: 762px) {
        & .title {
            font-size: 4rem;
        }
    }
`
export default StyledHome;
