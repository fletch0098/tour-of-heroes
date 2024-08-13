import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {

  // Message List
  messages: string[] = [];

  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }
}