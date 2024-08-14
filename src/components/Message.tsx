import { cn } from "@/lib/utils"

interface MessageProps{
    content: string
    isUserMessage: boolean
}

export const Message = ({content, isUserMessage}: MessageProps) => {
    return <div className={cn({
        "bg-zinc-800": isUserMessage,
        "bg-zinc-900/25":!isUserMessage
    })}>
        <div className="p-6">
            <div className="max-w-3xl mx-auto flex items-start gap-2.5">
                <div className={cn("size-10 shirnk-0 aspect-square rounded-full border border-zinc-700 bg-zinc-900 flex justify-center")}>
                    
                </div>
            </div>
        </div>
    </div>
}