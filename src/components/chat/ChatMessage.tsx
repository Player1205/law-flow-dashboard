import { Scale, User } from "lucide-react";
import { format } from "date-fns";

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'ai';
  timestamp: Date;
  isTyping?: boolean;
}

interface ChatMessageProps {
  message: Message;
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.sender === 'user';

  if (message.isTyping) {
    return (
      <div className="flex items-start gap-3 animate-fade-in-up">
        <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center flex-shrink-0">
          <Scale className="w-4 h-4 text-text-on-primary" />
        </div>
        <div className="flex-1">
          <div className="card-premium p-4 max-w-2xl">
            <div className="flex items-center gap-1 message-typing">
              <div className="w-2 h-2 bg-text-secondary rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-text-secondary rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-2 h-2 bg-text-secondary rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex items-start gap-3 message-slide-in ${isUser ? 'flex-row-reverse' : ''}`}>
      <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
        isUser 
          ? 'bg-accent-blue' 
          : 'bg-gradient-primary'
      }`}>
        {isUser ? (
          <User className="w-4 h-4 text-text-on-primary" />
        ) : (
          <Scale className="w-4 h-4 text-text-on-primary" />
        )}
      </div>
      
      <div className="flex-1">
        <div className={`card-premium p-4 max-w-2xl ${
          isUser 
            ? 'ml-auto bg-accent-blue/5 border-accent-blue/20' 
            : 'bg-surface-elevated'
        }`}>
          <div className="space-y-2">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-sm font-medium text-text-primary">
                {isUser ? 'You' : 'Legal Assistant'}
              </span>
              <span className="text-xs text-text-tertiary">
                {format(message.timestamp, 'HH:mm')}
              </span>
            </div>
            
            <div className="prose prose-sm max-w-none text-text-primary">
              {message.content.split('\n').map((line, index) => {
                if (line.startsWith('**') && line.endsWith('**')) {
                  return (
                    <h4 key={index} className="font-semibold text-text-primary mt-3 mb-1">
                      {line.replace(/\*\*/g, '')}
                    </h4>
                  );
                }
                if (line.match(/^\d+\./)) {
                  return (
                    <p key={index} className="mb-2 pl-4">
                      {line}
                    </p>
                  );
                }
                return line ? (
                  <p key={index} className="mb-2">
                    {line}
                  </p>
                ) : (
                  <br key={index} />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}