# 🌐 React Router App

A simple yet powerful single-page application built using **React Router v6**. This project demonstrates nested routes, dynamic parameters, data loading with loaders, and a clean layout using React components.

---

## 🚀 Features

- 🏠 Pages: Home, About, Contact
- 🧑‍💻 Dynamic user routing using `/user/:id`
- 🔄 Nested layout using `<Outlet />` for persistent UI elements
- ⚡ GitHub profile route with data loaded via a `loader()`
- 🎯 Route-based navigation using `RouterProvider`
- 📱 Fully responsive layout

---

## ⚙️ Tech Stack

- **React (Vite)** – Fast and modern frontend framework
- **React Router v6** – Client-side routing and navigation
- **JavaScript (ES6+)** – Modern JS syntax
- **HTML/CSS** – Base structure and styling

---

## 🔗 API Reference

GitHub data is fetched in the `/github` route using a loader from:
`https://api.github.com/users/<username>`

---

## 🌍 Live Demo

🔗 **[View Live on Vercel](https://re-router.vercel.app/)**

---

## 🔍 How It Works

1. Routes are defined using `createBrowserRouter` and `createRoutesFromElements`.
2. A shared `Layout` component wraps all routes and renders children via `<Outlet />`.
3. Static routes include Home, About, and Contact.
4. The `/user/:id` route captures dynamic params.
5. The `/github` route uses a `loader()` to fetch GitHub user data **before rendering** the component.
6. Navigation is seamless, with no page reloads.

---

## 🙌 Acknowledgements

- [React Router Documentation](https://reactrouter.com/en/main)
- [GitHub API](https://api.github.com)

---

## 👨‍💻 Author

**Swaraj Unde**
GitHub: [@swaraj-unde](https://github.com/swaraj-unde)

---

## 📄 License

This project is open source and free to use.
