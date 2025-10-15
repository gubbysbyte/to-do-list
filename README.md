### ⚙️ Installation

1.  **Clone the repository:**

   ```bash
   git clone https://github.com/gubbysbyte/to-do-list
   cd simple-todo-api
```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

### ▶️ Running the Application

To start the server, run the following command. It will be accessible at `http://localhost:3000`.

```bash
node index.js
```

---

## 📖 API Endpoints

### Get All To-Dos

-   **Method:** `GET`
-   **Endpoint:** `/todos`
-   **Description:** Retrieves a list of all to-do items.
-   **Success Response (200 OK):**
    ```json
    [
      { "id": 1, "task": "Learn Node.js", "completed": false },
      { "id": 2, "task": "Build a Simple API", "completed": true }
    ]
    ```

### Get a Single To-Do

-   **Method:** `GET`
-   **Endpoint:** `/todos/:id`
-   **Description:** Retrieves a single to-do item by its ID.
-   **Success Response (200 OK):**
    ```json
    { "id": 1, "task": "Learn Node.js", "completed": false }
    ```

### Create a To-Do

-   **Method:** `POST`
-   **Endpoint:** `/todos`
-   **Description:** Creates a new to-do item.
-   **Request Body:**
    ```json
    { "task": "Deploy the application" }
    ```
-   **Success Response (201 Created):**
    ```json
    { "id": 4, "task": "Deploy the application", "completed": false }
    ```

### Update a To-Do

-   **Method:** `PUT`
-   **Endpoint:** `/todos/:id`
-   **Description:** Updates an existing to-do item's task or completion status.
-   **Request Body:**
    ```json
    { "task": "Learn Express.js middleware", "completed": true }
    ```
-   **Success Response (200 OK):**
    ```json
    { "id": 1, "task": "Learn Express.js middleware", "completed": true }
    ```

### Delete a To-Do

-   **Method:** `DELETE`
-   **Endpoint:** `/todos/:id`
-   **Description:** Deletes a to-do item by its ID.
-   **Success Response (204 No Content):** No body content is returned.