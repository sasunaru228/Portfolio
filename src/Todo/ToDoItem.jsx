export default function ToDoItem({item, handleItemDelete, handleCheckboxChange}) {
    return (
        <div>
            <span>{item.name}</span>
            <input
                type="checkbox"
                checked={item.completed}
                onChange={() => {
                    handleCheckboxChange(item.id)
                }}
            />
            <button onClick={(e) => {
                e.preventDefault()
                handleItemDelete(item.id)
            }}>Удалить</button>
        </div>
    )
}