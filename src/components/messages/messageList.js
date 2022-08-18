import { useEffect, useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import { Message } from "./message"
import { MessageForm } from "./messageForm"
import "./messages.css"


export const MessageList = () => {
    const [messages, setMessages] = useState([])
    const [username, setUsername] = useState([])
    const navigate = useNavigate()
    useEffect(
        () => {
            fetch(`http://localhost:8088/messages?_expand=user`)
                .then(response => response.json())
                .then((messageArray) => {
                    setMessages(messageArray)
                })
            console.log("Initial state of messages", messages) 
        },
        [] 
    )
    return <>


        <article className="messages">
            <h3 className="messages__header">Messages</h3>
            {

                messages.map(
                    (message) => {
                        return <Message changeState={setMessages} message={message} />
                    }
                )
            }
            <MessageForm changeState={setMessages}/>
        </article>
    </>
}