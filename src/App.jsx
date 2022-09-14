import {useState} from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import TodoList from "./components/TodoList.jsx";

function App() {
    const [count, setCount] = useState(0)

    return (
        <div className="App">

            <TodoList></TodoList>

        </div>
    )
}

export default App
