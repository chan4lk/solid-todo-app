export function Todo({ item, toggle }) {
    const onChange = e => {
        toggle(item);
    }
    return (
        <div>
            <input type="checkbox" onChange={onChange} checked={item.completed} /> 
            {item.title}
        </div>
    )
}