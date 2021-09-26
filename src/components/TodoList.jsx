
import { Todo } from "./Todo";
import { useStore } from "./Todo.state";

export function TodoList() {
    
    const { state, addTodo, onChange, toggleCompleted } = useStore();

    return <div>
        <h1>Todo App</h1>
        <input value={state.value} onChange={onChange} /> <button onClick={addTodo}>+</button>
        <For each={state.todos}>{todo => (<Todo toggle={toggleCompleted} item={todo} />)}</For>

    </div>
}