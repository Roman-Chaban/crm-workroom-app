# CRM Workroom Project Documentation

## Project Overview
CRM Workroom is a feature-rich Customer Relationship Management (CRM) system designed to help teams efficiently manage projects, track interactions, and streamline communication. It provides essential CRM features such as user authentication (registration, login, and logout), project management (creating and organizing projects), and interactive features like drag-and-drop functionality. Built with modern technologies and a focus on performance, CRM Workroom aims to enhance productivity and collaboration for businesses of all sizes.

### Key Features
- **User Authentication**: Users can register, log in, and log out securely.
- **Project Management**: Create and manage projects, assign tasks, and track progress.
- **Drag-and-Drop**: An intuitive drag-and-drop interface to organize projects, tasks, and documents.
- **Interactive UI**: Clean, responsive, and intuitive design with seamless user experience.
- **Real-time Updates**: Integration with state management for real-time synchronization and updates.
- **User Roles**: Role-based access control for managing permissions across the platform.
- **Notifications**: Alerts and notifications for project updates and changes.

## Technologies Used
The CRM Workroom project leverages a variety of modern technologies to ensure performance, scalability, and maintainability. Below is an overview of the key dependencies:

### **Frontend Libraries**
- **React**: React (v18.3.1) is the core JavaScript library for building user interfaces, providing a fast and scalable solution for our CRM system.
- **Next.js**: Next.js (v15.0.3) is used for server-side rendering and building static websites, allowing for fast, SEO-friendly pages and great user experience.
- **React-Redux**: React-Redux (v9.1.2) helps manage the state of the application with a predictable and scalable pattern.
- **@mui/material** & **@mui/icons-material**: Material-UI (v6.1.8) provides a set of components and icons for building responsive and consistent UI elements quickly.
- **React-Select**: A flexible, customizable select input control used to enhance form elements, especially for large lists or filtering.
- **React-Hot-Toast**: A small, customizable notification library that provides real-time feedback to users for various events (e.g., success, error messages).
- **Classnames**: A simple utility for conditionally joining class names to style components efficiently.

### **State Management & Data Fetching**
- **Redux Toolkit**: Redux Toolkit (v2.3.0) simplifies the Redux flow, making state management more efficient and easy to set up, ensuring smooth interaction and data consistency across components.
- **React Query**: React Query (v5.60.5) simplifies data fetching, caching, synchronization, and pagination, which helps keep the data consistent between server and client side.
- **Axios**: Axios (v1.7.7) is used for making HTTP requests and fetching data from external APIs, providing a simple API to manage promises and responses.

### **Styling & Theming**
- **@emotion/react** & **@emotion/styled**: These packages (v11.13.5) are used for CSS-in-JS styling, allowing for more dynamic and reusable components while supporting theming and customization.

## Installation Instructions
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/crm-workroom.git
