"use strict";

// Dichiarazione bottone play
const playButton = document.querySelector(".play-btn");

// Dichiarazione container numeri
const gameTable = document.querySelector(".game-table");

// Dichiarazione difficoltà selezionata
const gameMode = document.getElementById("game-mode");

playButton.addEventListener("click", function(){

    if(gameMode.value === "easy"){

        // Reset container numeri
        gameTable.innerHTML = "";

        // Inserimento 100 numeri 
        for (let i = 1; i <= 100; i++) {
        
            const gameCell = document.createElement("div");
            gameCell.innerHTML = i;
            gameCell.classList.add("game-number");
    
            gameCell.classList.add("easy");
            
            gameCell.addEventListener("click", function(){
    
                gameCell.classList.add("clicked");
                console.log(i);
    
            });
    
            gameTable.append(gameCell);
    
        }

    }else if(gameMode.value === "medium"){

        // Reset container numeri
        gameTable.innerHTML = "";

        // Inserimento 81 numeri 
        for (let i = 1; i <= 81; i++) {
        
            const gameCell = document.createElement("div");
            gameCell.innerHTML = i;
            gameCell.classList.add("game-number");
    
            gameCell.classList.add("medium");
            
            gameCell.addEventListener("click", function(){
    
                gameCell.classList.add("clicked");
                console.log(i);
    
            });
    
            gameTable.append(gameCell);
    
        }

    }else if(gameMode.value === "hard"){

        // Reset container numeri
        gameTable.innerHTML = "";

        // Inserimento 49 numeri 
        for (let i = 1; i <= 49; i++) {
        
            const gameCell = document.createElement("div");
            gameCell.innerHTML = i;
            gameCell.classList.add("game-number");
    
            gameCell.classList.add("hard");
            
            gameCell.addEventListener("click", function(){
    
                gameCell.classList.add("clicked");
                console.log(i);
    
            });
    
            gameTable.append(gameCell);
    
        }

    }

});