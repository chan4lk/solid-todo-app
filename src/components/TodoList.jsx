
import { Todo } from "./Todo";
import { useStore } from "./Todo.state";

export function TodoList() {

    const { state, addTodo, onChange, toggleCompleted } = useStore();

    return <div className="grid grid-col-12 mt-4">
        <h1 className="shadow-2xl px-4 py-3 text-2xl text-blue-500 font-bold">Todo App</h1>
        <div className="flex gap-2 p-3">
            <input placeholder="Add Todo here" className="flex-8 shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker" value={state.value} onChange={onChange} />
            <button className="flex-2 bg-blue-500 text-white px-4 py-3 rounded-2xl hover:bg-pink-500" onClick={addTodo}>Add</button>
        </div>
        <div className="grid grid-cols-2 gap-3">
            <For each={state.todos}>{todo => (<Todo toggle={toggleCompleted} item={todo} />)}</For>
        </div>

    </div>
}