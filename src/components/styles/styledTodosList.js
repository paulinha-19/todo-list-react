import styled from 'styled-components'

const StyledTodosList = styled.div`
    display: flex;
    flex-direction: column;
    @media (min-width: 426px) and (max-width: 550px) {
        input.list{
            font-size: 0.8rem;
        }
        .button-complete,
        .button-delete,
        .button-edit{
            font-size: 1rem;
        }
    }

    @media (min-width: 320px) and (max-width: 426px){
        input.list{
            font-size: 0.8rem;
        }
        .button-complete,
        .button-delete,
        .button-edit{
            font-size: 0.8rem;
        }
    }
`
export default StyledTodosList