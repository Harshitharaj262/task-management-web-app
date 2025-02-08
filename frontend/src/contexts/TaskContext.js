import {useEffect, createContext, useContext, useReducer} from 'react'
const TaskContext = createContext()

const emptyData={
    tasks:[]
}

function taskDataReducer(state, action) {
  switch (action.type) {
      case "tasks":
          return { ...state, tasks: Array.isArray(action.value) ? action.value : [...state.tasks, action.value] };
      
      default:
          throw new Error(`Unhandled action type: ${action.type}`);
  }
}

function TaskDataProvider({children}){
    const [state, dispatch] = useReducer(taskDataReducer, emptyData);
    const value = {
        state,
        dispatch,
      };
    return(
        <TaskContext.Provider value={value}>{children}</TaskContext.Provider>
    )

}

const useTaskData=()=>{
    const context = useContext(TaskContext)
    if(!context){
        throw new Error("useTaskData must ne within a TaskDataProvider")
    }
    return context
}

export {TaskDataProvider, useTaskData}