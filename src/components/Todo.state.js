import { createStore } from "solid-js/store";

export const useStore = () => {
    const [state, setState] = createStore({
        value: '',
        todos: [
            {
                title: 'Sample', completed: false
            }
        ]
    });

    const addTodo = () => {
        setState(
            {
                todos: [
                    ...state.todos,
                    { title: state.value, completed: false }
                ],
                value: ''
            })
    }

    const onChange = (e) => setState('value', e.target.value);

    const toggleCompleted = todo => {
        const todos = [...state.todos];
        const index = todos.findIndex(t => t.title === todo.title);

        setState('todos', [index], 'completed', c => !c);
    }

    return {
        state,
        addTodo,
        onChange,
        toggleCompleted
    }
}