import styled from 'styled-components';

const StyledArticle = styled.article`
    max-width: 1300px;
    margin: auto;
    padding: 3rem 2rem;
    color: rgb(var(--color-alfa));
    font-size: 1.8rem;  

    & header {
        margin-bottom: 2rem;
        font-style: italic;
        & h2 {
            font-size: 3.5rem;
        }
        & p {
            font-size:1.4rem;
            color: rgb(var(--color-beta));
        }
    }
    
    & p {
        margin-bottom: 1rem;
    }

    & img {
        display: block;
        margin: auto;
    }
`
export default StyledArticle;