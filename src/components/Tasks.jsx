import NewTask from "./NewTask.jsx";

function Tasks({ onAdd, onDelete, tasks, projectId }) {
    const projectTask = tasks.filter((task) => task.projectId === projectId);
    return (
        <section>
            <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
            <NewTask onAdd={onAdd}/>
            {projectTask.length === 0 && <p className="text-stone-800 my-4">This project does not have any tasks yet.</p>}
            {projectTask.length > 0 &&
                <ul className="p-4 mt-8 rounded-md bg-stone-100">
                    {projectTask.map((data) => (
                        <li key={data.id} className="flex justify-between my-4">
                            <span>{data.task}</span>
                            <button className="text-stone-700 hover:text-red-500" onClick={() => onDelete(data.id)}>Clear</button>
                        </li>
                    ))}
                </ul>
            }
        </section>
    );
}

export default Tasks;