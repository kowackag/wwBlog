import styled from 'styled-components';

const StyledArticle = styled.article`
    max-width: 1300px;
    margin: auto;
    padding: 2rem;
    color: rgb(var(--color-alfa));
    font-size: 1.6rem;  

    & header {
        margin: 3.5rem 0;
        font-style: italic;
        & h2 {
            font-size: 3rem;
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
        max-width:100%;
    }
    & figcaption {
        text-align: center;
        font-style: italic;
        font-size: 1.4rem
    }
`
export default StyledArticle;