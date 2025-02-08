import {useEffect, createContext, useContext, useReducer} from 'react'
const TaskContext = createContext()

const emptyData={
    tasks:[]
}

function TaskDataProvider({children}){
    const value={
        tasks:emptyData.tasks
    }
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