import styled from 'styled-components'

export const ClassNameContainer = styled.div`
    background-color: #1c2122;
    /* width: 100%; */
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const ClassNameAppWrapper = styled.div`
    background-color: #454849;
    min-width: 450px;
    /* min-height: 500px; */
    padding: 2rem;
    margin: 2rem 0;
    border-radius: 10px;
    box-shadow: 3px 6px 40px #000;
    @media (min-width: 426px) and (max-width: 550px){
        min-width: 400px;
    }
    @media (min-width: 320px) and (max-width: 426px){
        min-width: 320px;
    }
`