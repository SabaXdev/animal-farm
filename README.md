# 🐷 Animal Farm

Animal Farm is an interactive web application inspired by George Orwell's classic novel. Users can interact with various animals, including a central pig figure, and observe their reactions.

## 🚀 Features
- 🐾 View and interact with different animals
- 🎭 Dynamic pig reactions (neutral, happy, "putin" mode)
- 🍏 Feed animals and influence their state
- 🎵 Background music with Web Audio API
- 🎨 Simple and intuitive design

## 🛠 Tech Stack
### **Frontend**
- Angular
- Angular Material

### **Backend**
- Node.js
- NestJS
- MongoDB

## 📦 Installation & Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo/animal-farm.git
   cd animal-farm
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the backend:
   ```sh
   cd backend
   npm run start
   ```
4. Start the frontend:
   ```sh
   cd frontend
   ng serve
   ```
5. Open `http://localhost:4200` in your browser.

## 📜 API Endpoints
### **Animals**
- `GET /api/animals` → Get all animals
- `POST /api/animals` → Add a new animal
- `POST /api/animals/:id/feed` → Feed an animal

### **Pig**
- `GET /api/pig/status` → Get pig's current status

## 🎭 Data Models
### **Animal**
```ts
interface Animal {
  _id: string;
  name: string;
  type: string;
  thanks: number;
  imageUrl: string;
}
```
### **Pig**
```ts
interface Pig {
  pigId: string;
  name: string;
  currentStatus: 'neutral' | 'happy' | 'putin';
  imageUrl: string;
  updatedAt: Date;
}
```

## 🔥 Interaction Example
When a user feeds an animal, the system:
1. Updates the animal's "thanks" count.
2. Changes the pig's status based on certain conditions.
3. Triggers a visual "thank you" animation.
4. Resets the animation after 3 seconds.

## 🤝 Contributing
Pull requests are welcome. Please ensure your code follows clean code and SOLID principles.

## 📜 License
MIT License

---
🐷 **All animals are equal, but some are more equal than others.**

