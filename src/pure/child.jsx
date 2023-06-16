import React, { useRef } from 'react';

const Child = ({ name, send, update }) => {

    const messageRef = useRef("")
    const nameRef  = useRef("")

    const pressBtn = () => {
        const text = messageRef.current.value
        alert(`Text: ${text}`)

    }

    const pressBtnParams = (text) => {
        alert(`Text:${text}`)
    }

    const submitName = (e) => {
        e.preventDefault()
        update(nameRef.current.value)
    }

    return (
        <div style={{ background: "lightGrey", padding: "5px" }}>
            <p onMouseOver={() => console.log("Mouse Over")}>Hello {name}</p>
            <button onClick={pressBtn}>
                button 1
            </button>
            <button onClick={() => pressBtnParams("Hello")}>
                button 2
            </button>
            <button onClick={() => console.log("Button pressed")}>
                button 3
            </button>
            
            <input placeholder='Send a text to father' 
                onFocus={ () => console.log("Input focused") }
                onChange={ ((e) => console.log("Input change", e.target.value)) }
                onCopy={ () => console.log("Copied text fron input") }
                ref={messageRef}>
            </input>
            <button onClick={() => send(`Hello ${messageRef.current.value}`)}>
                Send Message
            </button>
            <div style={{ marginTop: "20px",  }}>
                <form onSubmit={submitName}>
                    <input 
                        placeholder='New name'
                        ref={nameRef}
                    />
                    <button type='submit'>Update name</button>
                </form>
            </div>
        </div>
    );
}

export default Child;
