import React from "react";

function Todo({task}) {
    return (
        <>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" name="chkTodo" />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        {task}
                    </label>
            </div>
        </>
    );
}

export default Todo;