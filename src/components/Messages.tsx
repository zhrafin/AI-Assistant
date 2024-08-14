import { type Message as TMessage } from "ai/react"

interface MessagesProps{
    messages: TMessage[]
}

export const Messages = ({messages}: MessagesProps) => {
    return(
        <div className="flex max-h-[calc(100vh-3.5rem-7rem)]"></div>
    )
}