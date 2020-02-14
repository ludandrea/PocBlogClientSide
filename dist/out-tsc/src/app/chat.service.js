import { __decorate } from "tslib";
import { EventEmitter, Injectable } from '@angular/core';
import { HubConnectionBuilder } from '@aspnet/signalr';
let ChatService = class ChatService {
    constructor() {
        this.messageReceived = new EventEmitter();
        this.connectionEstablished = new EventEmitter();
        this.connectionIsEstablished = false;
        this.createConnection();
        this.registerOnServerEvents();
        this.startConnection();
    }
    sendMessage(message) {
        this._hubConnection.invoke('NewMessage', message);
    }
    createConnection() {
        this._hubConnection = new HubConnectionBuilder()
            .withUrl('https://localhost:44315/chat')
            .build();
    }
    startConnection() {
        this._hubConnection
            .start()
            .then(() => {
            this.connectionIsEstablished = true;
            console.log('Hub connection started');
            this.connectionEstablished.emit(true);
        })
            .catch(err => {
            console.log('Error while establishing connection, retrying...');
            setTimeout(() => { this.startConnection(); }, 5000);
        });
    }
    registerOnServerEvents() {
        this._hubConnection.on('MessageReceived', (data) => {
            this.messageReceived.emit(data);
        });
    }
};
ChatService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], ChatService);
export { ChatService };
//# sourceMappingURL=chat.service.js.map