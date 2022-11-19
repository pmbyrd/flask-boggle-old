console.log("hello")
// construct a boogle game to be displayed using the backend components to the frontend

class BoggleGame{
    //pass the elements needed to create each game
    constructor(boggleBoard) {
        // this.timer = timer
        this.board = $(`${boggleBoard}-#`)        
    }


    async handleSubmit(evt) {
        evt.preventDefault();
        // get the word from the board, jquery word
        const $word = $(".guess-word", this.board)
        //intialize my word value from the input
        let word = $word.val()
        //set conditional logical logic for messages
        if(!word) return //early exit if it doesn't meet conditions


        //check the word validitly the guess to existence on the board
        const response = await axios.get("/guess", { params: {
            word: word
        }})
        
    }
}
$form.on("submit", function(evt) {
    evt.preventDefault()
})