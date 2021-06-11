import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {
    const name = 'Bob'
    const [showAddTask, setShowAddTask] = useState(false)
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: 'Doctors Appointment',
            day: 'July 9 at 2:30pm',
            reminder: true
        },
        {
            id: 2,
            text: 'Hair cut',
            day: 'June 18 at 1:30pm',
            reminder: true
        },
        {
            id: 3,
            text: 'Groceries',
            day: 'June 10 at 8:00am',
            reminder: false,
        }
    ])

    // Add Task
    const addTask = (task) => {
        // console.log(task)
        const id = Math.floor(Math.random()*10000) + 1
        const newTask = { id, ...task}
        setTasks([...tasks, newTask])
    }

    // Delete Task
    const deleteTask = (id) => {
        console.log('delete', id)
        setTasks(tasks.filter((task) => task.id !== id))
    }

    const toggleReminder = (id) => {
        console.log('toggle', id)
        setTasks(tasks.map((task)=> task.id===id
        ?{...task, reminder:!task.reminder}:task))
    }

    return (
        <div className="container">
            <Header onAdd={()=>setShowAddTask(!showAddTask)} showAdd={showAddTask} title="Task Tracker"/>
            {showAddTask && <AddTask onAdd={addTask} />}
            <h2>Hello {name}</h2>
            {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>:'No Tasks'}
        </div>
    );
}

export default App;
