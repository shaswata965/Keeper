import React, {useState} from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Input from "./Input.jsx";
import Card from "./Card.jsx";

function App() {
    const [title,
        setTitle] = useState("");
    const [content,
        setContent] = useState("");

    const [note,
        setNote] = useState([
        {
            head: "Creating Title",
            note: "Input Title and Content then press Add button."
        },
        {
            head:"Deleting Title ",
            note:"Click On The Delete Button"
        }
    ])

    function handleTitle(event) {
        const {value} = event.target;
        setTitle(value);

    }

    function handleContent(event) {
        const {value} = event.target;
        setContent(value);

    }

    function handleClick(){
        setNote((prevValue)=>{ return([...prevValue,{head:title,note:content}]); })
    }

    function deleteNote(id){
        setNote((prevValue)=>{
            return(prevValue.filter((item,index)=>{return(index !==id)}));
        })
    }

    console.log(note);

    return (
        <div className="flexbox"><Header/>
        <Input onTitle={handleTitle} onContent={handleContent} onClick={handleClick} title={title} content={content} />

  {note.map((note,index) => { return(<Card title={note.head} content={note.note} key={index} id={index} onClick={deleteNote} />); } )} 
            <Footer/></div>
    );
}

export default App;