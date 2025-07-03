# Simon Game

A web-based implementation of the classic Simon memory game built with HTML, CSS, and JavaScript.

## 🎮 Game Description

Simon is a memory game where players must repeat an increasingly long sequence of colors. The game shows a pattern of colored buttons lighting up, and the player must click the buttons in the same order. Each level adds one more color to the sequence, making it progressively more challenging.

## 🚀 Features

- **Progressive Difficulty**: Each level adds one more step to the sequence
- **Score System**: Earn points based on your level (Level × 10 points per completed sequence)
- **Visual Feedback**: Buttons light up and animate when pressed
- **Audio Cues**: Each color has its own sound effect
- **Game Over Screen**: Shows your final score when you make a mistake
- **Responsive Design**: Works on desktop and mobile devices

## 🎯 How to Play

1. Click the **START** button or press any key to begin
2. Watch the sequence of colored buttons light up
3. Click the buttons in the same order as shown
4. Complete the sequence to advance to the next level
5. The game ends when you click the wrong button
6. Try to achieve the highest score possible!

## 🛠️ Technologies Used

- **HTML5**: Structure and layout
- **CSS3**: Styling and animations
- **JavaScript**: Game logic and interactivity
- **jQuery**: DOM manipulation and event handling
- **Google Fonts**: Custom typography (Press Start 2P)

## 📁 Project Structure

```
Simon-Game/
├── index.html          # Main HTML file
├── styles.css          # CSS styling
├── game.js             # JavaScript game logic
├── sounds/             # Audio files directory
│   ├── red.mp3
│   ├── blue.mp3
│   ├── green.mp3
│   ├── yellow.mp3
│   └── wrong.mp3
└── README.md           # Project documentation
```

## 🎨 Game Components

### Color Buttons
- **Red**: Top-right button
- **Blue**: Bottom-right button  
- **Green**: Top-left button
- **Yellow**: Bottom-left button

### Game States
- **Start Screen**: Shows "Press Start to Begin"
- **Playing**: Shows current level
- **Game Over**: Shows final score

## 🔧 Setup and Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/senu0727/Simon-Game.git
   ```

2. Navigate to the project directory:
   ```bash
   cd Simon-Game
   ```

3. Open `index.html` in your web browser

4. Start playing!

## 🎵 Audio Requirements

Make sure you have the following audio files in the `sounds/` directory:
- `red.mp3`
- `blue.mp3`
- `green.mp3`
- `yellow.mp3`
- `wrong.mp3`

## 🎮 Game Controls

- **Mouse**: Click the colored buttons
- **Keyboard**: Press any key to start the game
- **Start Button**: Click to begin a new game

## 🏆 Scoring System

- Base score: **Level × 10 points** per completed sequence
- Example: Completing Level 5 gives you 50 points
- Your total score accumulates throughout the game

## 🔄 Game Flow

1. Game starts with Level 0
2. A random color is added to the sequence
3. Player watches the sequence play
4. Player repeats the sequence by clicking buttons
5. If correct, advance to next level
6. If incorrect, game ends and score is displayed

## 🌟 Features Breakdown

### Visual Effects
- Button fade animations when showing sequence
- Press animations when buttons are clicked
- Game over screen with red background flash

### Audio System
- Unique sound for each color button
- Special "wrong" sound for incorrect moves
- Audio plays when sequence is shown and when buttons are clicked

### User Interface
- Clean, retro-style design
- Score display during gameplay
- Level indicator
- Start button for easy game restart

## 🚀 Live Demo

You can play the game by opening the `index.html` file in any modern web browser.

## 🤝 Contributing

Feel free to fork this repository and submit pull requests for any improvements or bug fixes!

## 🎯 Future Enhancements

- High score persistence
- Multiple difficulty modes
- Mobile touch optimization
- Sound toggle option
- Colorblind-friendly mode

---

**Have fun playing Simon!** 🎮✨
