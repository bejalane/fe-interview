# React Coding Task — Timed Question Game

This task is designed to be completed in **20–30 minutes**.

Your task is to implement a simple timed game inside the `Game` component (`App.tsx`).  
UI components (`QuestionScreen` and `ResultScreen`) are already provided.

Focus on correctness, timer behavior, and clean React state management.

---

## ✅ Game Requirements

### **Initial State**

- The game starts on **QuestionScreen**.
- `timeLeft` starts at **3 seconds**.
- A countdown timer decreases this value every second:  
  **3 → 2 → 1 → 0**.

---

## ✅ Answering Before Time Runs Out

If the user clicks **Yes** or **No** _before_ `timeLeft` reaches **0**:

1. Save the selected answer.
2. Stop the timer completely.
3. Immediately show **ResultScreen**.

---

## ✅ Timeout Behavior

If `timeLeft` reaches **0** _before_ any answer was selected:

- Treat it as **no answer submitted in time**.
- The user **always loses** in this case.
- Show **ResultScreen** with `lostByTimeout = true`.

---

## ✅ Result Screen Rules

On **ResultScreen**:

- `isCorrect` is `true` **only if**:

  - The user clicked an answer
  - AND it matches `question.correctAnswer`

- `lostByTimeout` is `true` **only if**:

  - No answer was submitted **before** time reached 0

- You do **NOT** need to implement:
  - Restarting the game
  - Additional rounds
  - Navigation back to the question

---

## 🛠 Where to Implement Logic

Write all required logic inside: App.tsx -> <Game/>
