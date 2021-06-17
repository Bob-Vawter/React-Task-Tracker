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
            text: 'Dentist Appointment',
            day: 'Monday 3pm',
            reminder: true
        },
        {
            id: 2,
            text: 'Bocci Ball',
            day: 'Thursday 5pm',
            reminder: true
        },
        {
            id: 3,
            text: 'Beach Trip',
            day: 'Saturday at 8:00am',
            reminder: true,
        }
    ])

    // Add Task
    const addTask = (task) => {
        // console.log(task)
        const id = Math.floor(Math.random() * 10000) + 1
        const newTask = { id, ...task }
        setTasks([...tasks, newTask])
    }

    // Delete Task
    const deleteTask = (id) => {
        console.log('delete', id)
        setTasks(tasks.filter((task) => task.id !== id))
    }

    const clearTask = () => {
        console.log('Clear Pushed')
        setTasks(tasks.filter((task) => false))
    }


    //Quick way to add some default tasks to list
    const defaultTask = () => {
        console.log('Default Button')
        setTasks([{
            id:1,
            text: 'This was built using React',
            day: 'JS, CSS, HTML',
            reminder: true
        },
        {
            id: 2,
            text: 'Full Stack Developer',
            day: 'Have a great day',
            reminder: true
        },
        {
            id: 3,
            text: 'Follow me below',
            day: 'Portfolio, LinkedIn, Twitter, Github',
            reminder: true,
        }])
    }

    const toggleReminder = (id) => {
        // console.log('toggle', id)
        setTasks(tasks.map((task) => task.id === id
            ? { ...task, reminder: !task.reminder } : task))
    }

    return (
        <div>
            <div className="container">
                <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} title="Task Tracker" />
                {showAddTask && <AddTask onAdd={addTask} />}
                {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'No Tasks'}
            </div>
            <Footer onClear={clearTask} onDefault={defaultTask} />
        </div>
    );
}

export default App;
