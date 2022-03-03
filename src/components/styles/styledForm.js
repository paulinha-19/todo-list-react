import styled from 'styled-components'

export const TagForm = styled.form`
    display: flex;
    justify-content: space-between;
    margin-bottom: 4rem;
    input{
        background-color: #1C2122;
    }
    @media (min-width: 426px) and (max-width: 550px){
        input{
            max-width: 300px;
            padding: 10px;
        }
        .button-add,
        input{
            font-size: 1rem;
        }
    }
    @media (min-width: 320px) and (max-width: 426px){
        input{
            max-width: 180px;
            padding: 10px;
        }
        .button-add,
        input{
            font-size: 0.7rem;
        }
    }

  
`