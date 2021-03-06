import styled from "styled-components";

const StyledHeader = styled.h1`
    color: #fff;
    text-align: center;
    padding: 1rem 0 3rem 0;
    font-size: 1rem;
    @media (min-width: 426px) and (max-width: 550px) {
        font-size:0.8rem;
    }
    @media (min-width: 320px) and (max-width: 426px) {
        font-size:0.6rem;
  }
`
export default StyledHeader