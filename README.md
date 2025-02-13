# Chat Assignment

1. **Clone the Repository**
   ```bash
   git clone https://github.com/nmeowt/nx-chat-assignment.git
   cd nx-chat-assignment
   ```
2. **Install Dependencies**

   ```bash
   pnpm install

   # run client and server apps
   pnpm start

   # run tests
   pnpm test
   ```

## **Description:**

Build a **simple 1-on-1 chat application** that allows users to **send and receive messages** in real-time.

- **Simulated login** (just enter a username, no authentication required).
- **Send & receive messages in real-time (1-on-1 chat only).**
- **Show previous messages between two users** when the page is refreshed.

## **Requirements:**

- The app must have a **simple, clean, and user-friendly UI**.
- The chat interface should be **responsive** and display messages clearly.
- Messages should appear instantly using **Socket.io for real-time updates**.
- When a user sends a message, **the recipient should receive it instantly**.
- Show **previous messages between two users** when the page is refreshed.
- Ensure **good UI/UX design**:
  - Messages should be **easily readable** with distinct styling for sender & receiver.
  - The chat input should be **intuitive to use**, with proper focus handling.
  - The UI should be **visually appealing** and follow basic design principles (spacing, colors, typography).

## **Optional Features (Bonus Points):**

- Use **any styling approach** (or none). Options: Tailwind, MUI, Styled Components, etc.
- Write **a couple of tests**—2 or 3 should be enough. No need for full test coverage.
- **Performance Optimization:**
  - Use **React.memo, useCallback** to prevent unnecessary re-renders.
  - Efficient state management using **React Context, Zustand, or Redux Toolkit**, depending on the complexity of the app.

## **Server / API**

- The server application is available at http://localhost:4000/api when you run `pnpm start`.
- **Real-time communication is powered by [Socket.io](https://socket.io/), and the frontend must connect to this server using Socket.io (not WebSocket API).**
- Please see the [API docs here](./server/README.md).

## Submitting your solution

1. **Source Code:**
   - Provide the link to your **public GitHub repository** containing all source code files for the **frontend of the Chat App**.
   - This should include:
     - All **React and TypeScript files** (for the frontend).
     - Any **assets, configurations, and dependencies** required to run the application.
   - The backend is already provided, so candidates only need to implement the frontend.
2. **Live Link (Optional):** Optionally, you can deploy the website on a hosting platform and provide the live link. This will allow the reviewers to interact with the application directly.

### **Using AI Tools (Encouraged!)**

We encourage you to leverage AI tools (e.g., GitHub Copilot, ChatGPT, Tabnine) to improve efficiency, code quality, and problem-solving. However, ensure that you **understand and can explain** all the code you submit.

## **Evaluation Criteria**

Your submission will be assessed based on the following key factors:

### **1. Core Functionality (70%)**

- **Functionality (50%)**:
  - Does the chat application work correctly?
  - Can users log in, send messages, and receive messages in real-time?
  - Does the chat history persist when the page is refreshed?
- **UI/UX (20%)**:
  - Is the UI **clean, modern, and visually appealing**?
  - Are messages **clearly distinguishable** (sender & receiver messages have different styles)?
  - Is the app **responsive** and adapts well to different screen sizes?
  - Is the chat input **intuitive and easy to use**?

### **2. Code Quality & Best Practices (20%)**

- Is the code **clean, well-structured, and maintainable**?
- Are **React best practices** followed (component reusability, separation of concerns, proper state handling)?
- Are asynchronous calls (API requests, real-time events via Socket.io) handled correctly?

### **3. Optional Enhancements (10%)**

- Has the developer implemented bonus UI/UX improvements, such as smooth animations, auto-scrolling to new messages, or additional user-friendly interactions?
- Are there performance optimizations (e.g., avoiding unnecessary re-renders with React.memo, useCallback)?
- Has the developer added basic tests (if any) to validate core features?
