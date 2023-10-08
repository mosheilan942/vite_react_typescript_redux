React Redux Login App


This is a simple login app built with React and Redux. It allows users to register by adding a username and password, and login to see a list of registered users.

Features
User registration
User login
View list of registered users
Uses React for UI
Redux for state management
Usage
To run the app:

Clone the repo
Run npm install to install dependencies
Run npm start to start the dev server
Open http://localhost:3000 to view the app
The app has two main pages:

Login Page
Allows users to enter a username and password. Clicking the "Add User" button dispatches an action to add the user credentials to the Redux store.

User List Page
Shows a list of registered users from the Redux store state.

State Management
The app uses Redux for state management. The store is configured with a users reducer that handles adding users on registration.

React components dispatch Redux actions for user registration. The Redux reducers update the state, which is passed back to components via the useSelector hook.

TODO
Implement input validation
Add user login logic
Improve styling
Credits
Built by MOSHE ILAN
