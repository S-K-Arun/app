# Vue.js Application

This project is a Vue.js application that demonstrates the use of Vue 2, Vuex, Vuetify, and various front-end features.

## Table of Contents

1. [Project Setup](#project-setup)
2. [Features](#features)
3. [Running the Application](#running-the-application)
4. [API Integration](#api-integration)
5. [Components](#components)
6. [Vuex Store](#vuex-store)
7. [Styling](#styling)
8. [Notes](#notes)

## Project Setup

1. **Clone the repository:**

    ```bash
    git clone https://github.com/your-repo/vue-app.git
    cd vue-app
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

## Features

1. **Login Page**: Contains an email input field with validation and a submit button.
2. **Home Page**: Displays a welcome message with the entered email and a table of posts.
3. **API Integration**: Fetches posts data from `https://jsonplaceholder.typicode.com/posts`.
4. **Table**: Uses Vuetify to display posts in a table with alternating row colors.
5. **Sorting and Pagination**: Front-end sorting and pagination on the table.
6. **Search**: Front-end search functionality for filtering table data.
7. **Component Communication**: Passes data between components using state-management mixins.

## Running the Application

1. **Serve the application:**

    ```bash
    npm run serve
    ```

2. Open your browser and go to `http://localhost:8080`.

## API Integration

The application uses the following API to get posts data:

- **Endpoint**: `https://jsonplaceholder.typicode.com/posts`
- The data is fetched and displayed in a Vuetify table on the Home page.

## Components

1. **Login.vue**: 
    - Contains an input field for email with validation.
    - A submit button to redirect to the Home page.

2. **Home.vue**: 
    - Displays the email entered in Login.vue.
    - Shows a table of posts with sorting, pagination, and search functionality.

## Vuex Store

- **State Management**: The Vuex store is used to manage the state of the entered email and other data between components.
- **Mutations/Actions**: Handle email storage and retrieval.

## Styling

- **Table Rows**: Alternate row colors in the Vuetify table are styled to have a red background.

## Notes

- Ensure that Vuetify and Vuex are properly installed and configured in the project.
- Validate email input and handle form submission using Vue methods.
- For sorting and pagination, utilize Vuetify components and their features.

If you have any questions or need further assistance, please reach out.

### ScreenSchots

![Login Screenshot](public/screenshots/login.png)
![Table Screenshot](public/screenshots/table.png)
![Filter Table Screenshot](public/screenshots/filterTable.png)

![Login Screenshot](public/screenshots/mobil-table.png)
![Table Screenshot](public/screenshots/mobile-login.png)
