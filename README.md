
<h1 align="center">
  <img src="https://readme-typing-svg.herokuapp.com/?font=Righteous&size=35&center=true&vCenter=true&width=1100&height=70&duration=4000&lines=Flavor+Exchange+-+Recipe+Sharing+Platform&color=FF9248;" />
</h1>

**Flavor Exchange** is a modern, dynamic recipe-sharing platform built with **React**. It enables users to explore, save, and contribute delicious recipes with ease. Designed with clean architecture, intuitive UI/UX, and responsive components, this project demonstrates key concepts in **state management**, **routing**, and **API integration**.


## 🚀 Technologies Used

- **React.js** – Core front-end framework.
- **React Router** – For seamless client-side navigation.
- **Redux / Context API / Zustand** – Global state management.
- **Material-UI / Tailwind CSS** – Clean and responsive UI components.
- **Mock API** – Simulates back-end interactions (CRUD).
- **Local Storage** – User and favorites persistence.



## ✨ Features

- 📜 **Recipe Feed** – Grid/list view with search functionality.
- 🔍 **Detailed Recipe View** – Ingredients, instructions, cooking time, rating.
- ❤️ **Favorites System** – Save and manage your favorite recipes.
- 🧑‍🍳 **Create & Edit Recipes** – Full CRUD operations for users.
- 🔐 **Mock Authentication** – Login/signup with data stored locally.
- 🔄 **Persistent State** – Recipes and user data persist across sessions.
- 🌐 **Responsive Design** – Works on desktops, tablets, and mobile devices.



## 📁 Functional Requirements

### 🏠 Home / Feed
- Displays recipes with title, rating, cooking time, and image.
- Filter/search by title or ingredient.

### 📄 Recipe Details
- Dedicated page showing:
    - Full recipe instructions.
    - Ingredients list.
    - "Save to Favorites" feature.

### 🔐 Authentication (Mock)
- Login and signup forms.
- Stores user data in localStorage.

### ✏️ Recipe Management (CRUD)
- Add new recipes via form (title, ingredients, steps, image URL).
- Edit/Delete recipes created by the logged-in user.

### ⭐ Favorites
- Save/Unsave recipes.
- Favorites persist in localStorage or global state.


## 🛠️ Project Setup

### Requirements
- Node.js & npm
- Code editor (e.g., VS Code)

### Installation

```bash
git clone https://github.com/sasobapriyanjana11/Recipe-Sharing-Platform.git
cd flavor_exchange_platform
npm install
npm run dev
```



## 📸 Screenshots

<div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 16px; text-align: center;">
  <div style="flex: 1 1 calc(40% - 16px); max-width: calc(40% - 16px);">
    <h3>Home Page</h3>
    <img src="/src/assets/images/screen_shots/Recipe_Home_page.png" alt="Recipe Feed" style="width: 80%; height: auto; border: 1px solid #ccc; border-radius: 8px;">
  </div>
  <div style="flex: 1 1 calc(40% - 16px); max-width: calc(40% - 16px);">
    <h3>Searchbar</h3>
    <img src="/src/assets/images/screen_shots/working_searchbar.png" alt="Recipe Details" style="width: 80%; height: auto; border: 1px solid #ccc; border-radius: 8px;">
  </div>
  <div style="flex: 1 1 calc(40% - 16px); max-width: calc(40% - 16px);">
    <h3>Favourite Recipes Section</h3>
    <img src="/src/assets/images/screen_shots/favourite_recipe_page.png" alt="Add Recipe" style="width: 80%; height: auto; border: 1px solid #ccc; border-radius: 8px;">
  </div>
  <div style="flex: 1 1 calc(40% - 16px); max-width: calc(40% - 16px);">
    <h3>Add Recipe</h3>
    <img src="/src/assets/images/screen_shots/add_recipe_form.png" alt="Login" style="width: 80%; height: auto; border: 1px solid #ccc; border-radius: 8px;">
  </div>
<div style="flex: 1 1 calc(40% - 16px); max-width: calc(40% - 16px);">
    <h3>Signup Page</h3>
    <img src="/src/assets/images/screen_shots/signup_page.png" alt="Login" style="width: 80%; height: auto; border: 1px solid #ccc; border-radius: 8px;">
  </div>
</div>



## 📚 Learning Objectives

- Master React Router for SPA navigation.
- Implement authentication and stateful features using Redux/Context.
- Create reusable UI components using a styling framework.
- Practice structured error handling and clean code principles.



## 📄 License

This project is licensed under the MIT License – see the [LICENSE](./LICENSE) file for details.


