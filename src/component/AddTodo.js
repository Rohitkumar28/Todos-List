import React, { useState } from "react";

const AddTodo = (props) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const submit = (e) => {
        e.preventDefault(); // by of this page not be reload
        if(!title || !desc){
            alert("Title and description cannot be blank");
        } 
        else {
            props.addTodo(title, desc);
            setTitle("");
            setDesc("");
        }
    }
  
    return (
        <div className="container">
            <form onSubmit={submit}>
                <h3 className="py-3">Todos List</h3>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Add Todos</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" id="title" aria-describedby="emailHelp"/>
                </div>  
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Todo Description</label>
                    <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)} className="form-control" id="desc"/>
                </div>
                <button type="submit" className="btn btn-sm btn-success">Add Todo</button>
            </form>
        </div>
    );
};

export default AddTodo;