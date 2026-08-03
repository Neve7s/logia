// ============================================================
// ChatIA.jsx — Chat con IA estilo cyberpunk usando NVIDIA API
// ============================================================

import { useState, useRef, useEffect } from 'react';
import { sendMessageToNvidia } from '../../services/nvidiaApi';
import { LOGIA_SYSTEM_PROMPT } from '../../data/knowledgeBase';
import './ChatIA.css';

const WELCOME_MESSAGE = {
  role: 'assistant',
  content: '¡Hola! Soy Lelo 🤖 Estoy aquí para ayudarte a conocer nuestra plataforma. Pregúntame sobre:\n\n• Módulos y funcionalidades\n• Planes y precios\n• Cómo empezar\n• Soporte técnico\n\n¿En qué puedo ayudarte hoy?'
};

const QUICK_QUESTIONS = [
  '¿Qué es LogIA?',
  '¿Cuáles son los precios?',
  '¿Cómo empiezo?',
  'Módulos disponibles'
];

export default function ChatIA() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([WELCOME_MESSAGE]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSend = async (text = inputValue) => {
    if (!text.trim() || isLoading) return;

    const userMessage = { role: 'user', content: text.trim() };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const response = await sendMessageToNvidia(text, messages, LOGIA_SYSTEM_PROMPT);
      const assistantMessage = { role: 'assistant', content: response };
      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error:', error);
      const errorMessage = { 
        role: 'assistant', 
        content: 'Lo siento, hubo un error de conexión. Por favor, intenta de nuevo o contacta a soporte por WhatsApp.'
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleQuickQuestion = (question) => {
    handleSend(question);
  };

  const clearChat = () => {
    setMessages([WELCOME_MESSAGE]);
  };

  return (
    <div className={`chat-ia-container ${isOpen ? 'open' : ''}`}>
      {/* Botón toggle */}
      <button 
        className="chat-ia-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Cerrar chat' : 'Abrir chat'}
      >
        <div className="chat-ia-toggle-glow"></div>
        <div className="chat-ia-toggle-icon">
          {isOpen ? (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          )}
        </div>
        <div className="chat-ia-toggle-pulse"></div>
      </button>

      {/* Ventana de chat */}
      <div className="chat-ia-window">
        {/* Header */}
        <div className="chat-ia-header">
          <div className="chat-ia-header-info">
            <div className="chat-ia-avatar">
              <span>🤖</span>
            </div>
            <div className="chat-ia-header-text">
              <h3>Lelo de LogIA</h3>
              <span className="chat-ia-status">
                <span className="status-dot"></span>
                En línea
              </span>
            </div>
          </div>
          <div className="chat-ia-header-actions">
            <button 
              className="chat-ia-clear-btn"
              onClick={clearChat}
              title="Limpiar chat"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mensajes */}
        <div className="chat-ia-messages">
          {messages.map((msg, index) => (
            <div 
              key={index} 
              className={`chat-ia-message ${msg.role === 'user' ? 'user' : 'assistant'}`}
            >
              <div className="message-avatar">
                {msg.role === 'user' ? '👤' : '🤖'}
              </div>
              <div className="message-content">
                <div className="message-bubble">
                  {msg.content.split('\n').map((line, i) => (
                    <span key={i}>{line}{i < msg.content.split('\n').length - 1 && <br />}</span>
                  ))}
                </div>
                <span className="message-time">
                  {new Date().toLocaleTimeString('es-PE', { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
            </div>
          ))}
          
          {isLoading && (
            <div className="chat-ia-message assistant">
              <div className="message-avatar">🤖</div>
              <div className="message-content">
                <div className="message-bubble typing">
                  <span className="typing-dot"></span>
                  <span className="typing-dot"></span>
                  <span className="typing-dot"></span>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Preguntas rápidas */}
        {messages.length <= 1 && (
          <div className="chat-ia-quick-questions">
            {QUICK_QUESTIONS.map((question, index) => (
              <button
                key={index}
                className="quick-question-btn"
                onClick={() => handleQuickQuestion(question)}
              >
                {question}
              </button>
            ))}
          </div>
        )}

        {/* Input */}
        <div className="chat-ia-input-container">
          <div className="chat-ia-input-wrapper">
            <input
              ref={inputRef}
              type="text"
              className="chat-ia-input"
              placeholder="Escribe tu pregunta..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              disabled={isLoading}
            />
            <button 
              className="chat-ia-send-btn"
              onClick={() => handleSend()}
              disabled={!inputValue.trim() || isLoading}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </div>
          <div className="chat-ia-footer">
            <span>Powered by NVIDIA AI</span>
          </div>
        </div>
      </div>
    </div>
  );
}
