import { loadGameBoard } from "./board";
import { makeElement } from "./home";

function gamePageDiv() {
    const gamePage = makeElement('div', 'game-page');
    gamePage.append(gameSettingsDiv());
    return gamePage;
}

function gameSettingsDiv() {
    const gameSettingsDialogBox = makeElement('div', 'game-settings');
    const player1NameInput = makeElement('input', 'player1-name-input');
    const player2NameInput = makeElement('input', 'player2-name-input');
    const player1AvtarSelection = makeElement('select', 'player1-avtar-selection');
    const player2AvtarSelection = makeElement('select', 'player2-avtar-selection');

    player1NameInput.placeholder = "Enter Player One name";
    player2NameInput.placeholder = "Enter Player Two name";

    const player1AvtarSelectionLabel = makeElement('label', 'player-one-selection-label');
    player1AvtarSelectionLabel.textContent = "Select player one avtar";
    const player2AvtarSelectionLabel = makeElement('label', 'player-two-selection-label');
    player2AvtarSelectionLabel.textContent = "Select player two avtar";

    const avtarArray = ["Luffy", "Nami", "Usopp", "Sanji", "Zoro", "Franky", "Chopper", "Brook", "Robin"];
    for (let avtar of avtarArray) {
        const player1AvtarOption = makeElement('option', 'avtar-option');
        const player2AvtarOption = makeElement('option', 'avtar-option');
        player1AvtarOption.value = avtar;
        player1AvtarOption.textContent = avtar;
        player2AvtarOption.value = avtar;
        player2AvtarOption.textContent = avtar;
        player1AvtarSelection.append(player1AvtarOption);
        player2AvtarSelection.append(player2AvtarOption);
    }

    const player1SelectionDiv = makeElement('div', 'player1-selection-div');
    const player2SelectionDiv = makeElement('div', 'player2-selection-div');
    player1SelectionDiv.append(player1NameInput, player1AvtarSelectionLabel, player1AvtarSelection);
    player2SelectionDiv.append(player2NameInput, player2AvtarSelectionLabel, player2AvtarSelection);

    const themes = ["Alabasta", "Skypiea", "Water 7", "Thriller Bark", "Marineford", "Fish Man Island", "Dressrosa", "Whole cake island", "Wano", "Egghead"];
    const themeLabel = makeElement('label', 'theme-label');
    themeLabel.textContent = "Select your theme";
    const themeSelection = makeElement('select', 'theme-selection');
    for (let theme of themes) {
        const themeOption = makeElement('option', 'theme-option');
        themeOption.value = theme;
        themeOption.textContent = theme;
        themeSelection.append(themeOption);
    }
    const themeDiv = makeElement('div', 'theme-div');
    themeDiv.append(themeLabel, themeSelection);

    const playBtn = makeElement('button', 'play-btn');
    playBtn.textContent = "Play";
    playBtn.addEventListener('click', () => {
        // Retrieve values when "Play" button is clicked
        const player1Name = player1NameInput.value;
        const player2Name = player2NameInput.value;
        const player1Avtar = player1AvtarSelection.value;
        const player2Avtar = player2AvtarSelection.value;
        const theme = themeSelection.value;

        // Store values in localStorage
        localStorage.setItem('player1Name', player1Name);
        localStorage.setItem('player2Name', player2Name);
        localStorage.setItem('player1Avtar', player1Avtar);
        localStorage.setItem('player2Avtar', player2Avtar);
        localStorage.setItem('theme', theme);

        // Close dialog and load game board
        
        loadGameBoard();
    });

    gameSettingsDialogBox.append(player1SelectionDiv, player2SelectionDiv, themeDiv, playBtn);
    return gameSettingsDialogBox;
}

    
export function loadGamePage() {
    const content = document.querySelector('.content');
    content.innerHTML = "";
    content.append(gamePageDiv());
    // const dialog = document.querySelector('.game-settings');
    // dialog.showModal();
}