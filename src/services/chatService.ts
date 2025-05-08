import { CHAT_PRIMERS } from '../config';

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export class ChatService {
  private cvContent: string;

  constructor(cvContent: string) {
    this.cvContent = cvContent;
  }

  async testConnection(): Promise<boolean> {
    try {
      const response = await fetch('http://localhost:5000/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: 'Test connection',
          mode: 'academic'
        })
      });
      return response.ok;
    } catch (error) {
      console.error('Connection test failed:', error);
      return false;
    }
  }

  async sendMessage(message: string, mode: 'academic' | 'professional' | 'personal'): Promise<string> {
    try {
      const response = await fetch('http://localhost:5000/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message,
          mode,
          cv_content: this.cvContent
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data.response;
    } catch (error) {
      console.error('Error sending message:', error);
      throw error;
    }
  }
}

const CHAT_PRIMERS = {
  greeting: "Hello! I'm your CV chatbot. How can I help you today?",
  professional: "I have experience in software development, focusing on web technologies and AI.",
  academic: "I hold a degree in Computer Science with a focus on artificial intelligence.",
  personal: "In my free time, I enjoy coding, reading tech blogs, and contributing to open-source projects."
};

export const getChatResponse = async (message: string): Promise<string> => {
  try {
    const response = await fetch('http://localhost:5000/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data.response;
  } catch (error) {
    console.error('Error:', error);
    return "I'm sorry, I'm having trouble connecting to the server. Please try again later.";
  }
};

export const getInitialMessage = (): string => {
  return CHAT_PRIMERS.greeting;
}; 