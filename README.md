# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

References for tailwind: https://devpress.csdn.net/react/62ec1e2789d9027116a1033f.html

References to implement routing: https://reactrouter.com/en/main/hooks/use-navigate

Live Site: https://tirzagabriella.github.io/ToDoList_TAWeek2/

## Backend api list

| URL Endpoint               | API Method | API's Purpose                | Request Body                                                                    | Response Body                                              |
| -------------------------- | ---------- | ---------------------------- | ------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| `/`                        | GET        | Welcome message for the API  | None                                                                            | `{"message": "Welcome to a todolist example of FastAPI!"}` |
| `/todos/all`               | GET        | Get all todos                | None                                                                            | List of all todos                                          |
| `/todos/{todos_id}`        | GET        | Get a todo by its ID         | None (just the todo id at the url param)                                        | Single todo item or error message                          |
| `/todos-by-title`          | GET        | Get a todo by its title      | None (just the todo title at the url param)                                     | Single todo item or error message                          |
| `/todos/post/{todos_id}`   | POST       | Create a new todo item       | `{"id": int, "title": str, "completed": bool}` and also todos_id for validation | New todo item or error message                             |
| `/todos/put/{todos_id}`    | PUT        | Update an existing todo item | `{"title": str, "completed": bool}` and also todos_id for validation            | Updated todo item or error message                         |
| `/todos/delete/{todos_id}` | DELETE     | Delete a todo by its ID      | None (just the todo id at the url param)                                        | Success message or error message                           |
| `/todos/delete_by_title`   | DELETE     | Delete a todo by its title   | None (just the todo title at the url param)                                     | Success message or error message                           |
| `/todos/delete_all`        | DELETE     | Delete all todos             | None                                                                            | Success message                                            |
