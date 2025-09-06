import { useState, useRef, useEffect } from "react";
import { Send, Paperclip, MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ChatMessage } from "./ChatMessage";
import { ChatWelcome } from "./ChatWelcome";

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'ai';
  timestamp: Date;
  isTyping?: boolean;
}

// Replace with your Replit backend URL
const BACKEND_URL = "https://your-repl-name.username.repl.co/chat";

export function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, newMessage]);
    setInputValue("");
    setIsTyping(true);

    try {
      const response = await fetch(BACKEND_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: newMessage.content })
      });

      const data = await response.json();

      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: data.reply || "Sorry, I could not get an answer.",
        sender: 'ai',
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, aiResponse]);

    } catch (error) {
      console.error("Error connecting to backend:", error);

      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: "Sorry, I cannot connect to the backend right now.",
        sender: 'ai',
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, aiResponse]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="flex flex-col h-full bg-background">
      {/* Chat Header */}
      <div className="px-6 py-4 border-b border-border bg-surface-elevated">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-text-primary">Legal Assistant Chat</h2>
            <p className="text-sm text-text-secondary">Ask questions about legal matters, contracts, and case law</p>
          </div>
          <Button variant="ghost" size="sm">
            <MoreVertical className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {messages.length === 0 ? (
          <ChatWelcome />
        ) : (
          <>
            {messages.map((message) => (
              <ChatMessage key={message.id} message={message} />
            ))}
            {isTyping && (
              <ChatMessage
                message={{
                  id: 'typing',
                  content: '',
                  sender: 'ai',
                  timestamp: new Date(),
                  isTyping: true,
                }}
              />
            )}
          </>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-6 border-t border-border bg-surface-elevated">
        <div className="flex items-end gap-3">
          <Button variant="ghost" size="sm" className="hover:bg-surface-hover">
            <Paperclip className="w-4 h-4" />
          </Button>
          
          <div className="flex-1 relative">
            <Textarea
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask a legal question or describe your case..."
              className="min-h-[60px] max-h-32 resize-none input-premium pr-12"
            />
            <Button
              onClick={handleSendMessage}
              disabled={!inputValue.trim()}
              className="absolute bottom-2 right-2 h-8 w-8 p-0 bg-gradient-primary hover:bg-primary-hover btn-premium"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
        
        <p className="text-xs text-text-tertiary mt-2">
          Press Enter to send • Shift + Enter for new line
        </p>
      </div>
    </div>
  );
}
