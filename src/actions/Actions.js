// Action
export const addTask = (name) => {
  return {
    type: 'ADD',
    taskName: name
  }
}
export const finishTask = (index) => {
  return {
    type: 'FINISH',
    atIndex: index
  }
}

export const deleteTask = (index) => {
  return {
    type: 'DELETE',
    atIndex: index
  }
}

