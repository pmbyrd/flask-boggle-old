console.log("hello")
// construct a boogle game to be displayed using the backend components to the frontend
// //**By constructing the object as a class it is easier to handle this particular
// instanceof this BoggleGame and all the rules and logic for this particular board
// */
class BoggleGame{
    //pass the elements needed to create and handle game logic each game
    constructor(boggleBoard, time = 60) {
        this.time = time
        this.board = $(boggleBoard)
        // the words are needed to check for validity
        this.words = new Set()
        this.score = 0
        this.board = $("#"+boggleBoard)
        //add timer and logic binding to the board, setInterval
        

        // Bind the event listener to this form based off of it's class
        $(".guess-word-form", this.board).on("submit", this.handleForm.bind(this))
    }
    // ******** Write the methods that correspond to the constructor 
    //append the word to the board
    dispayWord(word) {
        // get the word ul and append the word to the ul
        const $ul = $("word-bank", this.board)
        let validWord = $li.data({text: word})
        $ul.append(validWord)
    }

    //show score 
    // get the score el for this.board and the set the text

    // show message
    //get the message from the el for this.board 
    // and handle the cls{jinja flash display}

    // show time
    // get the timer el for this.board and set the text


    //add countdown clock
    //set logic for countdown when zero stop count

    //end game and send results back
    //make the post request check for how to format as a json message
    // **async/await
    async handleForm(evt) {
        evt.preventDefault();
        // get the word from the board, jquery word
        const $word = $(".guess-word", this.board)
        //intialize my word value from the input
        let word = $word.val()
        //set conditional logical logic for messages
        // if(!word) return //early exit if it doesn't meet conditions
        

        //check the word validitly the guess to existence on the board
        const response = await axios.get("/guess", { params: {
            word: word
        }})
        console.log(response)
        // set logic of valid word

       



        //check the against the server response data it word is valid
        //display response to the html for implementing the message displaying 
        //I want to save those values to json so it statys in the brower
        // This will allow for a new instance of the board but still hold results 
        //for previous games

        // initialize logic of scores/records show messages based on 
        // json format ** async/await
    }
}
