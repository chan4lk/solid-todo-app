import { createStore } from "solid-js/store";
import { Todo } from "./Todo";

export function TodoList() {
    const [state, setState] = createStore({
        value: '',
        todos: []
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

    return <div>
        <h1>Todo App</h1>
        <input value={state.value} onChange={onChange} /> <button onClick={addTodo}>+</button>
        <For each={state.todos}>{todo => (<Todo toggle={toggleCompleted} item={todo} />)}</For>

    </div>
}