import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import Footer from './components/Footer'

function App() {
    const [showAddTask, setShowAddTask] = useState(false)
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: 'This was built using React',
            day: 'June 15',
            reminder: true
        },
        {
            id: 2,
            text: 'Have fun with this',
            day: 'June 15',
            reminder: true
        },
        {
            id: 3,
            text: 'Follow me below',
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
            {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>:'No Tasks'}
            <Footer />
        </div>
    );
}

export default App;
