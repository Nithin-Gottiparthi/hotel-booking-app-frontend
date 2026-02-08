import { useState } from 'react';
import { Icons } from '../../components/ui/Icons';

export default function Inbox() {
    const [selectedChat, setSelectedChat] = useState(1);
    const [input, setInput] = useState('');

    const chats = [
        {
            id: 1,
            name: 'Rajesh Kumar',
            role: 'Host',
            lastMessage: 'Sure, lat checkout is possible until 12 PM.',
            time: '10:30 AM',
            avatar: 'https://ui-avatars.com/api/?name=Rajesh+Kumar&background=0D1117&color=fff',
            messages: [
                { id: 1, sender: 'them', text: 'Hi! Thanks for booking Green Valley Farmhouse.', time: '10:00 AM' },
                { id: 2, sender: 'me', text: 'Hello Rajesh, we are excited! Is late checkout possible?', time: '10:15 AM' },
                { id: 3, sender: 'them', text: 'Sure, late checkout is possible until 12 PM.', time: '10:30 AM' },
            ]
        },
        {
            id: 2,
            name: 'Vibestey Support',
            role: 'Support',
            lastMessage: 'Your refund has been processed.',
            time: 'Yesterday',
            avatar: 'https://ui-avatars.com/api/?name=Vibestey+Support&background=indigo&color=fff',
            messages: [
                { id: 1, sender: 'me', text: 'I need to cancel my previous booking.', time: 'Yesterday' },
                { id: 2, sender: 'them', text: 'Your refund has been processed.', time: 'Yesterday' },
            ]
        }
    ];

    const activeChat = chats.find(c => c.id === selectedChat);

    const handleSend = (e) => {
        e.preventDefault();
        if (!input.trim()) return;
        // Mock send - in real app would API call
        alert(`Message sent: ${input}`);
        setInput('');
    };

    return (
        <div className="max-w-7xl mx-auto px-6 py-10 h-[calc(100vh-80px)]">
            <h1 className="text-3xl font-serif text-slate-900 mb-8">Inbox</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 bg-white border border-slate-200 rounded-2xl overflow-hidden h-full shadow-lg">

                {/* Chat List */}
                <div className="border-r border-slate-200 bg-slate-50 flex flex-col">
                    <div className="p-4 border-b border-slate-200">
                        <input
                            type="text"
                            placeholder="Search messages..."
                            className="w-full px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-indigo-500"
                        />
                    </div>
                    <div className="flex-1 overflow-y-auto">
                        {chats.map(chat => (
                            <div
                                key={chat.id}
                                onClick={() => setSelectedChat(chat.id)}
                                className={`p-4 flex items-center gap-3 cursor-pointer hover:bg-white transition-colors border-b border-slate-100 ${selectedChat === chat.id ? 'bg-white border-l-4 border-l-indigo-600' : ''}`}
                            >
                                <img src={chat.avatar} alt={chat.name} className="w-12 h-12 rounded-full" />
                                <div className="flex-1 min-w-0">
                                    <div className="flex justify-between items-baseline">
                                        <h4 className="font-bold text-slate-900 truncate">{chat.name}</h4>
                                        <span className="text-[10px] text-slate-400">{chat.time}</span>
                                    </div>
                                    <p className="text-xs text-slate-500 truncate">{chat.lastMessage}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Chat Window */}
                <div className="col-span-2 flex flex-col bg-white">
                    {/* Header */}
                    <div className="p-4 border-b border-slate-200 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <img src={activeChat.avatar} alt={activeChat.name} className="w-10 h-10 rounded-full" />
                            <div>
                                <h3 className="font-bold text-slate-900">{activeChat.name}</h3>
                                <span className="text-xs text-slate-500 uppercase tracking-wider">{activeChat.role}</span>
                            </div>
                        </div>
                        <button className="text-indigo-600 hover:text-indigo-800">
                            <Icons.Phone className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50/50">
                        {activeChat.messages.map(msg => (
                            <div key={msg.id} className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-[70%] px-5 py-3 rounded-2xl shadow-sm ${msg.sender === 'me' ? 'bg-indigo-600 text-white rounded-br-none' : 'bg-white text-slate-800 border border-slate-100 rounded-bl-none'}`}>
                                    <p className="text-sm">{msg.text}</p>
                                    <span className={`text-[10px] block mt-1 ${msg.sender === 'me' ? 'text-indigo-200 text-right' : 'text-slate-400'}`}>
                                        {msg.time}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Input */}
                    <form onSubmit={handleSend} className="p-4 border-t border-slate-200 bg-white">
                        <div className="flex items-center gap-2">
                            <button type="button" className="p-2 text-slate-400 hover:text-slate-600">
                                <Icons.Plus className="w-5 h-5" />
                            </button>
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Type a message..."
                                className="flex-1 bg-slate-100 px-4 py-3 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-indigo-100 transition-all"
                            />
                            <button type="submit" className="p-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 shadow-md">
                                <Icons.Send className="w-4 h-4" />
                            </button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
}
