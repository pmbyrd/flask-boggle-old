console.log("hello")
// construct a boogle game to be displayed using the backend components to the frontend
// //**By constructing the object as a class it is easier to handle this particular
// instanceof this BoggleGame and all the rules and logic for this particular board
// */

class BoggleGame{
    // Todo construct board ** time, board, words is a set(), score = 0
    // ** the board will hold the elements needed to create and handle game logic each game
    constructor(boggleBoard, time = 60) {
        this.time = time
        this.board = $(boggle-board)
        this.words = new set()
        this.score = 0
        this.timer = setInterval(this.countdown.bind(this), 1000)
    }

    // Todo displayWord()



    // Todo displayScore()


    // Todo displayMessage(msg, cls)


    // Todo async handleForm(evt)
    
    // ** prevent default, get values from the board
    // **use check words 
    // **if word is valid add to the score and display the word
    // **if word is not valid display message
    // **if word is already found display message
    // **if word is not found on the board display message
    // **if word is not found in the dictionary display message
    

    // Todo displayTimer()


    // **make request to the server, check if it needs to be a get or a post

    // **once request handle if/else conditional logic
    // Todo displayTimer() get by class from the board

    // Todo async countdown() sumtract a second
    // **  get time 

}
// class BoggleGame{
//     //pass the elements needed to create and handle game logic each game
//     constructor(boggleBoard, time = 60) {
//         this.time = time
//         this.board = $(boggleBoard)
//         // the words are needed to check for validity
//         this.words = new Set()
//         this.score = 0
//         //add timer and logic binding to the board, setInterval
//         this.timer = setInterval(this.countdown.bind(this), 1000)

//         // Bind the event listener to this form based off of it's class
//         $(".guess-word-form", this.board).on("submit", this.handleForm.bind(this))
//     }
//     // ******** Write the methods that correspond to the constructor 
//     //append the word to the board
//     dispayWord(word) {
//         // get the word ul and append the word to the ul
//         $(".word-bank", this.board).append($("<li>", {text: word}))
//     }

//     //show score 
//     // get the score el for this.board and the set the text
//     displayScore() {
//         $(".display-score", this.board)
//         .text(this.score)
//     }

//     // display message
//     //get the message from the el for this.board 
//     // and handle the cls{jinja flash display}
//     displayMessage(msg, cls) {
//         $(".flash-msg", this.board)
//         .text(msg)
//         .removeClass()
//         .addClass(`msg ${cls}`)
//     }

    
//     //end game and send results back
//     //make the post request check for how to format as a json message
//     // **async/await
//     async handleForm(evt) {
//         evt.preventDefault();
//         // get the word from the board, jquery word
//         const $word = $(".guess-word", this.board)
//         //intialize my word value from the input
//         let word = $word.val()
//         //set conditional logic for messages
//         if(!word) return //early exit if it doesn't meet conditions
//         // set conditional logic for if word is already in bank
//         if(this.words.has(word)) {
//             this.displayMessage(`${word} already found`, "error")
//         }
//         //get the response from the board to use the guess route to check word
//         // // set logic of valid word from response.data.result, the result msgs' are in the boggle.py
//         const response = await axios.get("/guess", { params: {
//             word: word
//         }})
//         // const response = await axios.get("/word", { params: {
//         //     word: word
//         // }})
        
//         if(response.data.result === "not-word") {
//             this.displayMessage(`${word} is not found in the dictionary`)
//         } else if (response.data.result === "not-on-board") {
//             this.displayMessage(`${word} is not found on the board`)
//             // if word is found add logic for game score and append word
//         } else {
//             this.dispayWord(word)
//             this.score += word.length
//             this.displayScore()
//             this.words.add(word)
//             this.displayMessage(`Added: ${word}`, "ok")
//         }
//         console.log(response)
        
//     } 
//     //set logic for countdown when zero stop count
//     // display time
//     // get the timer el for this.board and set the text
//     displayTimer() {
//         $(".display-timer", this.board).text(this.time)
//     }
//     //add countdown clock
//     async countdown() {
//         this.time -= 1
//         // intitialize timer and set logic for backend post
//         this.displayTimer()
//         if (this.time === 0) {
//             clearInterval(this.timer)
//             await this.scoreGame()
//         }
//      }
        
//         //check the against the server response data it word is valid
//         //display response to the html for implementing the message displaying 
//         //I want to save those values to json so it statys in the brower
//         // This will allow for a new instance of the board but still hold results 
//         //for previous games

//         // initialize logic of scores/records show messages based on 
//         // json format ** async/await
//     }
