import styled from 'styled-components';

const StyledEvents = styled.article`
    max-width: 1300px;
    margin: auto;
    padding: 3rem 2rem 0;
    color: rgb(var(--color-alfa));

    & h2 {
        margin-bottom: 2rem;
        font-style: italic;
        font-size: 3rem;
    }
        &>div {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
        }
        & section {
            margin-top:1rem;
            order: 1;
            width: 100%;
        }

    & li {
        margin-bottom: 1rem;
        list-style: none;
        
        & a {
            text-decoration: none;
            color: rgb(var(--color-alfa));
    
            &:hover {
                color: #3430D0;
            }
        }
        & p {
            font-size:1.4rem;
            color: rgb(var(--color-beta));
        }
    }

    @media (min-width:762px) {
        & h2 {
            font-size: 4rem;
        }
       
        &>div {
            flex-wrap: nowrap;
        }
        & section {
            order: -1;
            width: 55%;
        }
    }

`
export default StyledEvents;