import styled from 'styled-components'

export const TagForm = styled.form`
    display: flex;
    justify-content: space-between;
    margin-bottom: 4rem;
    input{
        background-color: #1C2122;
    }
    @media(max-width: 550px) {
        input{
            max-width: 200px;
            padding: 10px;
            font-size: 15px;
        }
        .button-add{
            font-size: 15px;
        }
  } 
`