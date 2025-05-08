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