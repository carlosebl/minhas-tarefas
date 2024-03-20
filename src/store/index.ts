import { configureStore } from '@reduxjs/toolkit'
import tarefasReducer from './reducers/tarefa'

const store = configureStore({
  reducer: {
    tarefas: tarefasReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>

export default store
