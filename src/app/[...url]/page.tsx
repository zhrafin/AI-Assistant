import { ragChat } from "@/lib/rag-chat";
import { Console } from "console"
import { Component } from "react";

interface PageProps{
    params:{
        url: string | string[] | undefined
    }
}

function reconstructUrl({url}: {url:string[]}){
    const decodedComponents = url.map((component)=>decodeURIComponent(component))
    return decodedComponents.join("/")
}

const Page = ({ params }: PageProps) =>{
    const  reconstructedUrl = reconstructUrl({ url : params.url as string[] })
    console.log(params)
    
    //await ragChat.context.add()


    return <p>hello</p>
    
}

export default Page