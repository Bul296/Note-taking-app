# 📝 Note-Taking App (Backend API)

A robust and secure RESTful API built with **Node.js, Express, and MongoDB** for managing personal notes.
This backend supports full CRUD operations, pinning notes, and dynamic sorting.

## 🚀 Features

- **Create Notes**: Add new notes with a title and content.
- **Dynamic Fetching & Sorting**: Automatically sorts notes so that **Pinned notes** appear first,
- followed by the newest notes.
- **Toggle Pin Status**: Pin or unpin important notes easily.
- **Update Notes**: Edit specific fields of an existing note dynamically.
- **Delete Notes**: Remove unwanted notes from the database.

---

## 🛠️ Tech Stack

- **Runtime Environment:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB (via Mongoose ORM)
- **Architecture:** MVC (Controllers & Routes)

---

## 💻 Getting Started

Follow these steps to set up and run the project locally:

### 1. Clone the Repository
```bash
git clone https://github.com
cd backend
```

### 2. Install Dependencies
```bash
npm i
```

### 3. Environment Variables Setup
Create a `.env` file in the root directory and add your configurations:
```env
PORT=4001
MONGO_URI=mongodb+srv://bulbulp838_db_user:v8dOtJhsZK24LAXJ@cluster0.1yql7fe.mongodb.net/notetaking
```

### 4. Start the Server
*   **Development Mode (with Nodemon):**
    ```bash
    npm run dev
    ```
*   **Production Mode:**
    ```bash
    npm start
    ```

---

## 🛣️ API Endpoints

### 📌 Note Endpoints

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| **POST** | `/api/notes` | Create a new note |
| **GET** | `/api/notes` | Get all notes (Sorted by Pinned & Newest) |
| **PATCH** | `/api/notes/:id/pin` | Toggle pin/unpin status |
| **PUT** | `/api/notes/:id` | Update title or content of a note |
| **DELETE** | `/api/notes/:id` | Delete a specific note |

### Request Examples

#### 1. Create a Note (`POST /api/notes`)
*   **Body (JSON):**
    ```json
    {
      "title": "Meeting Notes",
      "content": "Discuss project updates at 10 AM."
    }
    ```

#### 2. Update a Note (`PUT /api/notes/:id`)
*   **Body (JSON):**
    ```json
    {
      "title": "Updated Meeting Notes"
    }
    ```

---

## 📁 Project Structure

```text

├── controllers/        # Request handling logic (note.controller.js)
├── models/             # Mongoose schemas (note.model.js)
├── routes/             # API route definitions (note.routes.js)
├── .env                # Environment variables (Git ignored)
├── server.js           # Application entry point or Database connection setup
└── package.json        # Dependencies and scripts
```

# 🎨 Note-Taking App (Frontend Dashboard)

The beautiful, responsive, and intuitive user interface for the Note-Taking App.
It connects seamlessly with the backend REST API to allow users to create, view, pin, edit, and delete notes in real-time.

## ✨ Features

- **Clean UI & Dashboard**: Minimalistic and modern user interface.
- **Real-Time Synchronisation**: Reflects updates, additions, and deletions instantly.
- **Pin/Unpin Interactions**: Visually separates important pinned notes from the rest.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop screens.
- **Error Handling**: Beautiful alerts and error feedback when fields are empty.

---

## 🛠️ Tech Stack

- **Framework/Library:** React.js 
- **Styling:** Tailwind CSS 
- **API Fetching:** Axios 

---

## 💻 Getting Started

Follow these steps to run the frontend client locally:

### 1. Clone the Repository
```bash
git clone https://github.com
cd forntend
```

### 2. Install Dependencies
```bash
npm i
```

### 3. Environment Variables Setup
Create a `.env` file in the root directory to connect with your backend API:
```env
VITE_API_BASE_URL=http://localhost:5000/api
# Or if using Create React App / Next.js:
# REACT_APP_API_BASE_URL=http://localhost:5000/api
# NEXT_PUBLIC_API_BASE_URL=http://localhost:5000/api
```

### 4. Run the Development Server
```bash
npm run dev
# or 
npm start
```
Open [http://localhost:3000](http://localhost:3000) (or the port shown in your terminal) to view it in the browser.

---

## 📁 Project Structure

```text
├── src/
│   ├── components/     # Reusable UI elements (NoteCard, Navbar, NoteForm , Footer)
│   ├── pages/          # Main application home/createNote
│   ├── url/       # API configuration and Axios calls (api.js)
│   ├── assets/         # Images, icons, and global styles
│   ├── App.jsx         # Main application component
│   └── main.jsx        # Application entry point
├── package.json        # Dependencies and build scripts
└── README.md           # This documentation file
```

