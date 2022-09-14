import React, {useEffect, useRef, useState} from "react";
import Todo from "./Todo.jsx";

export default function TodoList() {
    let refTodo = useRef();
    const [todo, setTodo] = useState([
        {
            text: "Lavar la ropa",
            isDone: false
        }
    ]);

    const addTodo = () => {
        console.info("Agregando TODO:", refTodo.current.value);

        setTodo(todo => [...todo, {
            text: refTodo.current.value,
            isDone: false
        }]);

    }

    useEffect(() => {

        return () => {
            refTodo.current.value = ""
        }

    }, [todo])



    return (
        <>
            <section>
                <form action="">
                    <div className="mb-3">
                        <label htmlFor="txtTodo" className="form-label">Add New Task</label>
                        <input type="text" className="form-control" name="txtTodo"
                               placeholder="Add todo" ref={refTodo} />
                    </div>
                    <div className="mb-3">
                        <button type="button" className="btn btn-success" id="btnAddTodo" onClick={addTodo}>Add Todo</button>
                    </div>
                </form>
            </section>

            <div className="card">
                <div className="card-header">
                    Team Tasks
                </div>
                <div className="card-body">
                    <section id="containerTodo">
                        {
                            todo.map((v) => <Todo task={v.text} /> )
                        }
                    </section>
                </div>
            </div>

        </>
    )
}