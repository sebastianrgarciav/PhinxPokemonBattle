# Pokemon Battle App

The Pokemon Battle App is a web application where users can simulate battles between different Pokemon. Each Pokemon has unique stats, and the battles are determined based on these stats.

![pokemonBattle](https://github.com/user-attachments/assets/39eddd49-dde1-4a19-a1d1-72f0705e4230)

## Table of Contents

- [Objectives](#objectives)
  - [Backend Objectives](#backend-objectives)
  - [Frontend Objectives](#frontend-objectives)
- [Technology Stack](#technology-stack)
- [Installation and Setup](#installation-and-setup)
  - [Backend](#backend)
  - [Frontend](#frontend)
- [API Endpoints](#api-endpoints)
- [Battle Algorithm](#battle-algorithm)
- [Usage](#usage)
- [Contributions](#contributions)
- [License](#license)

## Objectives

### Backend Objectives

1. **Implement DB migrations**: Populate a table with Pokemon data.
2. **List Pokemon**: Implement an endpoint to list all Pokemon.
3. **Battle Endpoint**: Implement an endpoint to initiate battles between Pokemon.
4. **Save Battle Results**: Store the battle results in a table.

### Frontend Objectives

1. **UI/UX for Listing and Selecting Pokemon**: Implement the interface for listing and selecting Pokemon.
2. **Pokemon Card**: Implement a card component to display Pokemon stats.
3. **Automatic Opponent Selection**: When starting a battle, automatically and randomly select a different opponent and display the result.
4. **Basic Responsiveness**: Ensure the application is responsive.
5. **Backend Connection**: Connect the frontend with the backend.

## Technology Stack

### Backend
- [NestJS](https://nestjs.com/)
- [TypeORM](https://typeorm.io/)
- [SQLite](https://www.sqlite.org/index.html)

### Frontend
- [React](https://reactjs.org/)
- [MaterialUI](https://mui.com/)

## Installation and Setup

### Backend

1. **Clone the repository**:
    ```bash
    git clone https://github.com/sebstianrodrigo/pokemonBattle.git
    cd pokemon-battle
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Run the database migrations and seed the database**:
    ```bash
    npm run typeorm migration:run
    ```

4. **Start the server**:
    ```bash
    npm run start
    ```

The backend will run on `http://localhost:8000`.

### Frontend

1. **Navigate to the `pokemon-battle-ui` directory**:
    ```bash
    cd ../pokemon-battle-ui
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Start the application**:
    ```bash
    npm start
    ```

The frontend will run on `http://localhost:3000`.

## API Endpoints

- **`GET /pokemon`**: Retrieves the list of all Pokemon.
- **`POST /battle`**: Initiates a battle between two Pokemon.

## Battle Algorithm

The battle calculation algorithm follows these rules:

1. **First Attack**: The Pokemon with the highest speed attacks first. If speeds are equal, the Pokemon with the higher attack goes first.
2. **Damage Calculation**: Subtract the defense from the attack (attack - defense). The difference is the damage. If the attack is equal to or less than the defense, the damage is 1.
3. **HP Reduction**: Subtract the damage from the HP.
4. **Turn-based Fighting**: Pokemon will take turns fighting. All turns are calculated in the same request, and the endpoint returns the winner's data in the same call.
5. **Winning Condition**: The winner is the one who reduces the enemy's HP to zero.

## Usage

1. **Open the frontend application** in your browser.
2. **Select two Pokemon** to initiate a battle.
3. **View the results** of the battle.

