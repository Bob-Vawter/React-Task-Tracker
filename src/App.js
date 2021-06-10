import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {
    const name = 'Bob'
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

    // Delete Task
    const deleteTask = (id) => {
        console.log('delete', id)
        setTasks(tasks.filter((task) => task.id !== id))
    }

    return (
        <div className="container">
            <Header title="Header"/>
            <h2>Hello {name}</h2>
            {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} />:'No Tasks'}
        </div>
    );
}

export default App;
