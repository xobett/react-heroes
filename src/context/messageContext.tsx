import { createContext, useState, type ReactNode } from "react";

type MessageContextType = {
    messages: string[];
    addMessage: (message:string) => void;
    clearMessages: () => void;
};

const MessageContext = createContext<MessageContextType | undefined>(undefined);

const MessageProvider = ({children} : {children:ReactNode}) => {
    const [messages, setMessages] = useState<string[]>([]);

    const addMessage = (message:string) => {
        setMessages((prevMessages) => [...prevMessages, message]);
    }

    const clearMessages = () => {
        setMessages([]);
    }

    return (
        <MessageContext.Provider value={{messages, addMessage, clearMessages}}>
            {children}
        </MessageContext.Provider>
    )
}

export default MessageProvider;