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

The goal of this assignment is to build a **simple real-time chat application**.

-   **Simulated login** (just enter a username, no authentication required).
-   **Send & receive messages in real-time** (using WebSocket or API polling).
-   **Display the list of online users**.
-   **Show chat history** (store in local state or mock API).
-   **Show new message notifications** (if the user is in another tab).

## **Requirements:**

-   The app must have a **simple, user-friendly UI**.
-   WebSocket should be implemented correctly to **update messages in real-time**.
-   Show **previous messages (chat history)** when a user refreshes or reopens the app.
-   When a user sends a message, **other users should receive it instantly**.
-   If a user **disconnects (closes the app), the online users list should update**.

## **Optional Features (Bonus Points)**:

-  **Performance Optimization:**
	-   Use **React.memo, useCallback** to prevent unnecessary re-renders.
	-   Efficient state management with **Zustand or Redux Toolkit**.
- **Handle Network Issues & Connection Loss:**
	- If the WebSocket connection is lost, show **"Reconnecting..."** and attempt to reconnect.
- Use **any styling approach** (or none). Options: Tailwind, MUI, Styled Components, etc.
-  Write **a couple of tests**—2 or 3 should be enough. No need for full test coverage.

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
2.  **Live Link (Optional):**  Optionally, you can deploy the website on a hosting platform and provide the live link. This will allow the reviewers to interact with the application directly.

## Evaluation Criteria

Your submission will be assessed based on the following key factors:

### Core Functionality (50%)
- Does the chat application work correctly?
- Can users log in, send messages, and receive messages in real-time?
- Does the list of online users update correctly?

### Code Quality & Best Practices (25%)
- Is the code clean, well-structured, and maintainable?
- Is the state management (if used) implemented correctly?
- Are reusable components and hooks properly utilized?

### Performance & Scalability (15%)
- Does the application handle large message loads smoothly?
- Does it avoid unnecessary re-renders?
- Does it implement basic WebSocket reconnection handling?

### Optional Enhancements (10%)
- Are performance optimizations like `React.memo` or `useCallback` used?
- Has the developer added tests to validate key features?
- Is the UI clean and responsive (Tailwind, MUI, Styled Components, etc.)?