import { useState } from 'react'; // Import useState
import axios from 'axios';

function Create() {
    const [task, setTask] = useState(""); // Properly initialize useState

    const handleAdd = () => {
        axios.post('http://localhost:3001/add', { task: task }) // Corrected URL and key
            .then(result => console.log(result))
            .catch(err => console.log(err));
    }

    return (
        <div>
            <input 
                type="text" 
                placeholder="Enter Task" 
                onChange={(e) => setTask(e.target.value)} 
                value={task} // Optional: Bind the input value to task state
            />
            <button type="button" onClick={handleAdd}>Add</button>
        </div>
    )
}

export default Create;
