export function Todo({ item, toggle }) {
    const onChange = e => {
        toggle(item);
    }
    return (
        <div class="p-3 flex mb-2 items-center gap-2">
            <label className="inline-flex items-center mr-4">
                <input className="form-checkbox" type="checkbox" onChange={onChange} checked={item.completed} />
            </label>
            <p className={`w-full text-3xl ${item.completed ? 'line-through' : ''} text-green`}>{item.title}</p>
        </div>
    )
}