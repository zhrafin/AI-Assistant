import { type Message as TMessage } from "ai/react"
import { Message } from "./Message"
import { MessageSquare } from "lucide-react"

interface MessagesProps{
    messages: TMessage[]
}

export const Messages = ({messages}: MessagesProps) => {
    return(
        <div className="flex max-h-[calc(100vh-3.5rem-7rem)] flex-1 flex-col overflow-y-auto">
            {messages ? (messages.map((message , i)=> (
                <Message key={i} content={message.content} isUserMessage={message.role==="user"}/>
            ))
            ) : (<div className="flex-1 flex flex-col items-center justify-center gap-2">
                <MessageSquare className="size-8 texy-blue-500"/>
                <h3>You're all set!</h3>
            </div>) }
        </div>
    )
}