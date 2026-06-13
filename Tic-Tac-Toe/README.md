# ❌ Tic-Tac-Toe ⭕

A sleek, interactive, and responsive Tic-Tac-Toe web application built with modern frontend technologies. This project focuses on clean state management, and an intuitive UI/UX.

---

### 🔗 Live Demo

Check out the live version here: [Tic-Tac-Toe Live](https://frontend-projects-o4jr.vercel.app/)

---

## 🚀 Features

- **Interactive Gameplay:** Smooth turn-taking mechanics for two players (X and O).
- **Win & Tie Detection:** Real-time checking for winning combinations or board lockouts.
- **State Reset:** Quickly restart the match without reloading the page.
- **Fully Responsive:** Beautifully optimized for desktops, tablets, and mobile screens.
- **Modern UI:** Styled with a clean, minimalist design language and smooth transitions.

---

## 🛠️ Tech Stack

- **Frontend:** HTML5, CSS3, JavaScript (ES6+) / React
- **Styling:** Modern CSS (Flexbox/Grid, Custom Properties)
- **Hosting/Deployment:** GitHub Pages / Vercel

---

## 🧩 Core Logic Breakdown

The underlying game architecture handles state tracking seamlessly:

- **Board State:** Tracked via a single array of 9 elements `[null, null, ... ]`.
- **Winning Condition Matrix:** Evaluated on every turn against standard indices:

```javascript
const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8], // Rows
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8], // Columns
  [0, 4, 8],
  [2, 4, 6], // Diagonals
];
```

---
