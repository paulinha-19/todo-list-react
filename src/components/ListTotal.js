import React from 'react'
import StyledListTotal from './styles/styledListTotal'

const ListTotal = (props) => {
  return (
    <StyledListTotal>
      <p className='task-total-footer'>
        Total: {props.listTotal} {props.listTotal <= 1 ? "tarefa" : "tarefas"}
      </p>
      <p className='task-complete-footer'>
        Concluída: {props.listDone}
      </p>
      <p className='task-open-footer'>
        Em aberto: {props.listTotal - props.listDone} {props.listTotal - props.listDone <= 1 ? "tarefa" : "tarefas"}
      </p>
    </StyledListTotal>
  )
}
export default ListTotal