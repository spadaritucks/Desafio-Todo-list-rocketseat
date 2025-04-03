import './task.css'

interface PostProps{
    task: string
    taskFinished: boolean
    onTaskFinishedChange: () => void
    handleDeleteTask : () => void
}

export default function TaskComponent ({task, taskFinished, onTaskFinishedChange, handleDeleteTask} : PostProps) {

    const handleFinishedTaskChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        onTaskFinishedChange()
    }

    return(
        <div className="task">
            <input 
                type="checkbox" 
                checked={taskFinished} 
                onChange={handleFinishedTaskChange}
            />
            <p>{task}</p>
            <span 
                className="material-symbols-outlined delete-icon"
                onClick={handleDeleteTask}
            >delete</span>
        </div>
    )
}