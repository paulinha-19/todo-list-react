import styled from "styled-components";

const StyledListTotal = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1rem 0;

    @media (min-width: 426px) and (max-width: 550px){
        p{
            font-size: 0.8rem;
            font-weight: 500;
        }
    }
    @media (min-width: 320px) and (max-width: 426px){
        p{
            font-size: 0.6rem;
            font-weight: 500;
        }
    }
`
export default StyledListTotal
