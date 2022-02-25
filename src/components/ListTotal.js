import React from 'react'

const ListTotal = (props) => {
  return (
    <div className='container-listTotal'>
      <p className='task-total-footer'>
        Total: {props.listTotal} {props.listTotal <= 1 ? "tarefa" : "tarefas"}
      </p>
      <p className='task-complete-footer'>
        Concluída: {props.listDone} {props.listDone <=1 ? "tarefa" : "tarefas"}
      </p>
      <p className='task-open-footer'>
        Em aberto: {props.listTotal - props.listDone} {props.listTotal - props.listDone <= 1 ? "tarefa" : "tarefas"}
      </p>
    </div>
  )
}
export default ListTotal