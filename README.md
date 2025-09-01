# Tic-Tac-Toe Game

A modern, interactive tic-tac-toe game built with React and Vite. This project demonstrates React fundamentals including state management, component composition, and event handling.

## 🎮 Features

- **Two-player gameplay** with customizable player names
- **Real-time game state tracking** with move history
- **Win detection** for all possible winning combinations
- **Draw detection** when the board is full
- **Game restart functionality**
- **Move log** showing the complete game history
- **Responsive design** with modern UI
- **Active player highlighting**

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- Yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/karan-singare/tic-tac-toe.git
cd tic-tac-toe
```

2. Install dependencies:
```bash
yarn install
```

3. Start the development server:
```bash
yarn dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🛠️ Available Scripts

- `yarn dev` - Start the development server
- `yarn build` - Build the project for production
- `yarn preview` - Preview the production build
- `yarn lint` - Run ESLint to check for code quality issues

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Gameboard.jsx   # Main game board component
│   ├── GameOver.jsx    # Game over modal
│   ├── Log.jsx         # Move history log
│   └── Player.jsx      # Player input component
├── constants/          # Game constants
│   ├── initial-game-board.js
│   ├── players.js
│   └── winning-combinations.js
├── functions/          # Utility functions
│   ├── getActivePlayer.js
│   ├── getGameboard.js
│   └── getWinner.js
├── App.jsx            # Main application component
├── index.jsx          # Application entry point
└── index.css          # Global styles
```

## 🎯 How to Play

1. **Start the game**: The game begins with Player 1 (X) as the active player
2. **Make moves**: Click on any empty square to place your symbol
3. **Win conditions**: Get three of your symbols in a row (horizontally, vertically, or diagonally)
4. **Customize names**: Click on player names to customize them
5. **View history**: Check the move log to see the complete game history
6. **Restart**: Click "Restart Game" to start a new game

## 🏗️ Architecture

### State Management
The application uses React's `useState` hook to manage:
- Player names and symbols
- Game turns and move history
- Active player tracking

### Key Components

- **App.jsx**: Main application component that orchestrates the game state
- **Gameboard.jsx**: Renders the 3x3 game grid and handles square selection
- **Player.jsx**: Displays player information and allows name customization
- **GameOver.jsx**: Shows game results and restart option
- **Log.jsx**: Displays the complete move history

### Utility Functions

- **getActivePlayer()**: Determines whose turn it is based on move history
- **getGameboard()**: Converts move history into a 3x3 board representation
- **getWinner()**: Checks for winning combinations and returns the winner

## 🎨 Styling

The project uses CSS for styling with:
- Modern, clean design
- Responsive layout
- Visual feedback for active players
- Hover effects and transitions

## 🧪 Game Logic

### Winning Combinations
The game checks for wins across:
- 3 horizontal rows
- 3 vertical columns  
- 2 diagonal lines

### Draw Detection
A draw occurs when all 9 squares are filled and no player has won.

### Move Validation
- Players can only select empty squares
- Moves are recorded with player symbol and position
- Game state is immutable (new state created for each move)

## 🚀 Deployment

To build for production:

```bash
yarn build
```

The built files will be in the `dist` directory, ready for deployment to any static hosting service.

## 🛠️ Technologies Used

- **React 19** - UI library
- **Vite** - Build tool and development server
- **ESLint** - Code linting
- **Yarn** - Package manager

## 📝 Development Notes

This project demonstrates:
- React functional components and hooks
- Component composition and prop passing
- Event handling and state updates
- Conditional rendering
- Array methods for data transformation
- Modern JavaScript features (ES6+)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🎯 Future Enhancements

Potential features for future development:
- AI opponent with different difficulty levels
- Online multiplayer functionality
- Tournament mode with multiple games
- Sound effects and animations
- Score tracking across multiple games
- Mobile app version
- Dark/light theme toggle

---

Enjoy playing! 🎮
