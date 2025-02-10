# Chat Assignment

⚠️ **Fork this repository** instead of downloading it. This allows you to track your progress and submit your work easily.

1. **Fork the Repository**
   Click the **"Fork"** button at the top right of this GitHub repo.
2. **Clone Your Forked Repo**
   ```bash
   git clone https://github.com/YOUR_GITHUB_USERNAME/nx-chat-assignment.git
   cd nx-chat-assignment
   ```
3. **Install Dependencies**

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

- The app must have a **simple, user-friendly UI**.
- WebSocket should be implemented correctly to **update messages in real-time**.
- Show **previous messages between two users** when a user refreshes or reopens the app.
- When a user sends a message, **other users should receive it instantly**.

## **Optional Features (Bonus Points)**:

- Use **any styling approach** (or none). Options: Tailwind, MUI, Styled Components, etc.
- Write **a couple of tests**—2 or 3 should be enough. No need for full test coverage.
- **Performance Optimization:**
  - Use **React.memo, useCallback** to prevent unnecessary re-renders.
  - Efficient state management with **Zustand or Redux Toolkit**.

## Server / API

The server application is available at http://localhost:4000/api when you run `pnpm start`.

Please see the [API docs here](./server/README.md).

## Submitting your solution

1.  **Source Code:**
    - Provide the link to your public GitHub repository containing all source code files for the Mini Chat App.
    - This should include:
      - All React and TypeScript files (for the frontend).
      - All Node.js and WebSocket files (for the backend).
      - Any assets, configurations, and dependencies required to run the application.
2.  **Live Link (Optional):** Optionally, you can deploy the website on a hosting platform and provide the live link. This will allow the reviewers to interact with the application directly.

## **Evaluation Criteria**

Your submission will be assessed based on the following key factors:

### **1. Core Functionality (70%)**

- Does the chat application work correctly?
- Can users log in, send messages, and receive messages in real-time?
- Does the chat history persist when the page is refreshed?
- Is the UI/UX user-friendly, visually appealing, and intuitive to use?

### **2. Code Quality & Best Practices (20%)**

- Is the code **clean, well-structured, and maintainable**?
- Are **React best practices** followed (component reusability, separation of concerns, proper state handling)?
- Are asynchronous calls (API requests, WebSocket events) **handled correctly**?

### **3. Optional Enhancements (10%)**

- Has the developer implemented basic styling for a user-friendly UI?
- Are there performance optimizations (e.g., avoiding unnecessary re-renders with React.memo, useCallback)?
- Has the developer added basic tests (if any) to validate core features?
