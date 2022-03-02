import styled from 'styled-components'

const StyledTodosList = styled.div`
    display: flex;
    flex-direction: column;
    @media(max-width: 550px) {
        input.list{
            font-size: 0.8rem
        }
        .button-complete,
        .button-delete,
        .button-edit{
            font-size: 1rem
        }
    }
`
export default StyledTodosList