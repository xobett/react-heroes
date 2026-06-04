import { useMessages } from '../context/messageContext'

export default function Messages() {
    const {messages, clearMessages} = useMessages();

    return (
    <div>
        <div className="flex gap-3">
            <h2 className='text-2xl'>Messages</h2>
            <button onClick={clearMessages} className="p-2 bg-slate-700 text-white rounded-lg cursor-pointer">Clear messages</button>
        </div>

        {messages.map((message, index) => (
            <div key={index} className='my-2'>
                {message}
            </div>
        ))}
    </div>
  )
}
