# Server
The server provides **real-time messaging** and **user management** using **RESTful APIs** and **Socket.io** for live updates.

When you run `yarn start`, the API is available at:
```bash
http://localhost:4000/api
```
The Socket.io server runs at:
```bash
http://localhost:4000
```
---
## 1. Authentication API
### **Login a user**
Request:

```text
POST /api/auth/login
```
Request Body:
```json
{
  "username": "john_doe"
}
```
Sample Response:
```json
{
  "id": "b3f02c5e-90df-4c18-9373-0cf8e9d20f8b",
  "username": "john_doe",
  "online": true
}
```
Errors:
```json
{
  "error": "Username is required"
}
```
### **Logout a user**
Request:

```text
POST /api/auth/logout
```
Request Body:
```json
{
  "userId": "b3f02c5e-90df-4c18-9373-0cf8e9d20f8b"
}
```
Sample Response:
```json
[
  {
    "id": "c9d6f2a1-49a6-4e1a-93c2-d3e2c8a96d42",
    "username": "another_user",
    "online": true
  }
]
```
Errors:
```json
{
  "error": "User ID is required"
}
```
---
## 2. Messages API
### **Send a message**

Request:

```text
POST /api/messages
```
Request Body:
```json
{
  "user": {
    "id": "b3f02c5e-90df-4c18-9373-0cf8e9d20f8b",
    "username": "john_doe"
  },
  "message": "Hello, world!"
}
```
Sample Response:
```json
{
  "id": "a1b2c3d4-e5f6-7890-1234-56789abcdef0",
  "user": {
    "id": "b3f02c5e-90df-4c18-9373-0cf8e9d20f8b",
    "username": "john_doe"
  },
  "message": "Hello, world!",
  "timestamp": 1707456000000
}
```
Errors:
```json
{
  "error": "Invalid request"
}
```
### **Get chat history**

Request:

```text
GET /api/messages/history
```
Sample Response:
```json
[
  {
    "id": "a1b2c3d4-e5f6-7890-1234-56789abcdef0",
    "user": {
      "id": "b3f02c5e-90df-4c18-9373-0cf8e9d20f8b",
      "username": "john_doe"
    },
    "message": "Hello, world!",
    "timestamp": 1707456000000
  }
]
```
### **Get unread messages for a user**

Request:

```text
GET /api/messages/unread/:userId
```
Sample Response:
```json
[
  {
    "chatId": "12345",
    "lastMessage": {
      "id": "a1b2c3d4-e5f6-7890-1234-56789abcdef0",
      "user": {
        "id": "c9d6f2a1-49a6-4e1a-93c2-d3e2c8a96d42",
        "username": "another_user"
      },
      "message": "Hey, what's up?",
      "timestamp": 1707456100000
    },
    "unreadCount": 2
  }
]
```
### **Delete a message**

Request:

```text
DELETE /api/messages/:messageId
```
Sample Response:
```json
[
  {
    "id": "b3f02c5e-90df-4c18-9373-0cf8e9d20f8b",
    "user": {
      "id": "c9d6f2a1-49a6-4e1a-93c2-d3e2c8a96d42",
      "username": "another_user"
    },
    "message": "Hey, what's up?",
    "timestamp": 1707456100000
  }
]
```
---
## 3. Users API
### **Get online users**
Request:
```text
GET /api/users/online
```
Sample Response:
```json
[
  {
    "id": "b3f02c5e-90df-4c18-9373-0cf8e9d20f8b",
    "username": "john_doe",
    "online": true
  },
  {
    "id": "c9d6f2a1-49a6-4e1a-93c2-d3e2c8a96d42",
    "username": "another_user",
    "online": true
  }
]
```
---
## 4. Socket.io API Documentation
The **WebSocket API** enables real-time communication between users in the chat system. It allows users to **login**, **send messages**, **receive chat history**, **see online users**, and **manage unread messages**.

**WebSocket Server URL:**
```bash
http://localhost:4000
```
---
### **User Login**
The server will generate a unique `id` for each user and mark them as online.

Request:
```text
EVENT: user:login
```
Payload:
```json
john_doe
```
Sample Response:
```json
EVENT: usersOnline
[
  {
    "id": "b3f02c5e-90df-4c18-9373-0cf8e9d20f8b",
    "username": "john_doe",
    "online": true
  }
]
```
Errors
```json
EVENT: error
{
  "message": "Username is already taken"
}
```
### **Send Message**
Request:
```text
EVENT: message:send
```
Payload:
```json
Hello, everyone!
```
Sample Response:
```json
EVENT: message:receive
{
  "id": "a1b2c3d4-e5f6-7890-1234-56789abcdef0",
  "user": {
    "id": "b3f02c5e-90df-4c18-9373-0cf8e9d20f8b",
    "username": "john_doe"
  },
  "message": "Hello, everyone!",
  "timestamp": 1707456000000
}
```
Errors:
```json
EVENT: error
{
  "message": "User not logged in"
}
```
### **Get Chat History (on connection)**
Request:
```text
EVENT: chatHistory
```
Sample Response:
```json
EVENT: chatHistory
[
  {
    "id": "a1b2c3d4-e5f6-7890-1234-56789abcdef0",
    "user": {
      "id": "b3f02c5e-90df-4c18-9373-0cf8e9d20f8b",
      "username": "john_doe"
    },
    "message": "Hello, world!",
    "timestamp": 1707456000000
  }
]
```
### **Get Unread Messages (on login)**
Request:
```text
EVENT: unreadMessages
```
Sample Response:
```json
EVENT: unreadMessages
[
  {
    "chatId": "12345",
    "lastMessage": {
      "id": "a1b2c3d4-e5f6-7890-1234-56789abcdef0",
      "user": {
        "id": "c9d6f2a1-49a6-4e1a-93c2-d3e2c8a96d42",
        "username": "another_user"
      },
      "message": "Hey, what's up?",
      "timestamp": 1707456100000
    },
    "unreadCount": 2
  }
]
```
### **Mark Messages as Read**
Request:
```text
EVENT: message:read
```
Sample Response:
```json
EVENT: unreadMessages
[]
```
### **User Disconnect**
Request:
```text
EVENT: disconnect
```
Sample Response:
```json
EVENT: usersOnline
[]
```