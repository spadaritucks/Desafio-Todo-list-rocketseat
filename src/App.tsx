import './App.css'
import Header from './components/header/header'
import Input from './components/input/input'

function App() {


  return (
    <section className='main-menu'>
      <Header />
      <div className='create-task-area'>
        <Input label='Create your task' type='text' placeholder='Add your new task' />
        <button>Create</button>
      </div>
    </section>
  )
}

export default App
