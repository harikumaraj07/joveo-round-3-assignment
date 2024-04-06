import {dataStore} from "../Config/localstorage"

export const getAllTodos = () => {
    return dataStore.getItem("todos");
}

export const getTodo = (todoId) => {
    dataStore.getItem("todos").then(todos => {
        return todos.find(items => items.id === todoId)
    });
}

export const addTodo = (todo) => {
    dataStore.getItem("todos").then((todos) => {
        return dataStore.setItem("todos", todos ? [todo] : [...todos, todo])
    })
}

export const removeTodo = (todoId) => {
    
    dataStore.getItem("todos").then((todos) => {
        return dataStore.setItem("todos", (todos || []).filter(item => item.id !== todoId))
    })
}

export const updateTodo = (todo) => {
    dataStore.getItem("todos").then((todos) => {
        return dataStore.setItem("todos", todos.map(item => item.id === todo.id ? todo : item))
    })
}