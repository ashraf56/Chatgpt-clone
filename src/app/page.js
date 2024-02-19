'use client'
import Chats from "./component/Chats/Chats";
import main from "@/utill/gpt";
import { useState } from "react";
import Topnav from "./component/Topnav/Topnav";
import { FaArrowUp } from "react-icons/fa";
export default function Home() {

    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    const handleSendMessage = async () => {

        if (input !== '') {
            try {
                const text = input
                setInput('')
                setMessages([
                    ...messages, { role: 'user', content: text }
                ])
                const response = await main(text);
                setMessages([...messages, { role: 'user', content: text }, { role: 'assistant', content: response }]);
                setInput('');
            } catch (error) {
                console.error('Error:', error);
            }
        }

    };
    console.log(messages);

    return (
        <main >

            <Topnav></Topnav>
            <div className="flex  flex-col items-center justify-between relative ">


                <div className={`w-full mt-5 h-[450px] ${messages.length === 0 ? '' : 'scrollbar-thin  overflow-y-scroll'} `}>
                    {messages?.map((msg, index) => (
                        <Chats key={index} msg={msg} />
                    ))}
                </div>
                <div className="fixed bottom-4 text-center">
                    <div className="flex mx-10 text-center w-[300px] lg:w-[600px] px-3 my-5 items-center rounded-2xl border ">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Type your message..."
                            className="h-11 bg-transparent  w-full  max-w-3xl  outline-0"
                        />
                        <button className="btn btn-ghost btn-sm" disabled={input === ''} onClick={handleSendMessage}><FaArrowUp /></button>

                    </div>
                    <span className="text-xs">ChatGPT can make mistakes. Consider checking important information.</span>
                </div>

            </div>
        </main>
    );
}
