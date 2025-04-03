import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/header/header'
import Input from './components/input/input'
import TaskComponent from './components/task/task'
import { Task } from './types/Task'


function App() {

  const [tasks, setTasks] = useState<Task[]>([])
  const [tasksChange, setTasksChange] = useState<Task[]>([])
  const [countTask, setCountTask] = useState<number>(0)
  const [countFinishedTasks, setCountFinishedTasks] = useState<number>(0)

  const HandleTasksSubmit = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault()
    setTasks(tasksChange)

  }

  const handleTaskChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()

    const newTask = {
      task: e.target.value,
      finished: false
    }
    setTasksChange([...tasks, newTask])
  }

  const handleCountTasks = () => {
    setCountTask(tasks.length)
  }

  const handleCountFinishedTasks = () => {

    const tasksFinishedArray = tasks.filter(task => task.finished == true)
    setCountFinishedTasks(tasksFinishedArray.length)
  }

  const handleTaskFinishedChange = (index: number) => {
    const updatedTasks = tasks.map((task, i) => {
      if (i === index) {
        return {
          ...task,
          finished: !task.finished
        }
      }
      return task
    })
    setTasks(updatedTasks)
  }

  const handleDeleteTask = (index: number) => {
    const updatedTasks = tasks.filter((_, i) => i !== index)
    setTasks(updatedTasks)
  }

  useEffect(() => {
    handleCountTasks()
    handleCountFinishedTasks()
  }, [tasks])

  return (
    <section className='main-menu'>
      <Header />
      <div className='create-task-area'>
        <form onSubmit={HandleTasksSubmit}>
          <Input label='Create your task' type='text' placeholder='Add your new task' onChange={handleTaskChange} />
          <button type='submit'>Create</button>
        </form>
      </div>

      <div className='todolist-tasks-area'>
        <div className='tasks-counters'>
          <div className='created-tasks'>
            <h3>Created Tasks</h3>
            <p>{countTask}</p>
          </div>

          <div className='tasks-finished'>
            <h3>Finished Tasks</h3>
            <p>{countFinishedTasks} de {countTask}</p>
          </div>
        </div>
        <div className='tasks-container'>
          {tasks && tasks.length > 0 ? tasks.map((task, index) =>
            <TaskComponent
              key={index}
              task={task.task}
              taskFinished={task.finished}
              onTaskFinishedChange={() => handleTaskFinishedChange(index)}
              handleDeleteTask={() => handleDeleteTask(index)}
            />) :
            <div><p className='empty-task-msn'>Tasks Not Found</p></div>}


        </div>
      </div>
    </section>
  )
}

export default App
