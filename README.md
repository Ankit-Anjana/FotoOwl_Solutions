# 📸 Realtime Gallery App

Realtime Gallery App ek modern React-based web application hai jisme users images dekh sakte hain, un par emoji reactions de sakte hain, comments add kar sakte hain aur ek live activity feed dekh sakte hain.

Ye project specially **React Developer Intern assignment** ke liye banaya gaya hai, jisme frontend fundamentals, API integration aur realtime concepts dikhaye gaye hain.

---

## 🚀 Tech Stack Used

- **React (Vite)** – Fast development & build tool
- **Tailwind CSS** – Responsive UI styling
- **Axios** – API calls ke liye
- **Unsplash API** – Images fetch karne ke liye
- **InstantDB** – Realtime reactions & comments
- **Zustand** – Global state management
- **React Query (@tanstack/react-query)** – Data fetching & caching

---

## 📂 Project Folder Structure

src/
├─ api/
│ └─ unsplash.js # Unsplash API integration
├─ store/
│ └─ userStore.js # Zustand global store
├─ instant/
│ └─ db.js # InstantDB initialization
├─ components/
│ ├─ Gallery/
│ │ ├─ GalleryGrid.jsx # Images grid
│ │ ├─ ImageCard.jsx # Image + reactions + comments
│ │ └─ ImageModal.jsx # Image preview modal
│ ├─ Feed/
│ │ └─ Feed.jsx # Activity feed
│ ├─ Emoji/
│ │ └─ EmojiBar.jsx # Emoji reaction bar
│ └─ Comments/
│ └─ CommentBox.jsx # Comment input & list
├─ App.jsx # Root component
└─ main.jsx # Application entry point



---

## ✨ Features

### 🖼 Image Gallery
- Unsplash API se images fetch hoti hain
- Responsive grid layout
- React Query ke through optimized data fetching

### 😀 Emoji Reactions
- Har image par emoji react kar sakte hain
- Reactions realtime update hote hain
- Activity feed me reaction log hota hai

### 💬 Comments
- Users image par comments add kar sakte hain
- Comments realtime show hote hain
- Comment add hone par feed update hoti hai

### 🔥 Activity Feed
- Reactions aur comments ka live feed
- Latest activity sabse upar dikhai jaati hai

---

## 🔐 Environment Variables

Project ke root folder me `.env` file banani hoti hai:

```env
VITE_UNSPLASH_ACCESS_KEY=your_unsplash_api_key
VITE_INSTANT_APP_ID=your_instantdb_app_id
