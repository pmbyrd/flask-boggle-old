#import necessary methods and set up configs
from flask import Flask, request, render_template, redirect, flash, session

from flask_debugtoolbar import DebugToolbarExtension

from boggle import Boggle 

app = Flask(__name__)
app.config['SECRET_KEY'] = "abc123"
app.config["DEBUG_TB_INTERCEPT_REDIRECTS"] = False
# app.config['TESTING'] = True
# app.config['DEBUG_TB_HOSTS'] = ['dont-show-debug-toolbar']
app.debug = True

toolbar = DebugToolbarExtension(app)
boggle_game = Boggle()
#intialize the variable for the session storage and responses
SESSION_RESP = "correct_words"
BOGGLE_BOARD = "board"
#intialize the board to a global variable so that it does not reload on every refresh
board = boggle_game.make_board()
correct_words = []


@app.route('/')
def show_board():
    """Creates the board and displays it to the page"""
    

    # board = session[BOGGLE_BOARD]
    session[BOGGLE_BOARD] = board
    
    for idx, row in enumerate(board):
        for idx, char in enumerate(board[idx]):
            pass 


    print(BOGGLE_BOARD)
    print(board)
    return render_template("boggle.html", board=board)

@app.route('/boggle-game')
def handles_boggle_game():
    """Displays users words and redirects them to their board"""

    return redirect('/')


@app.route('/guess', methods=["POST"])
def get_word():
    """Gets the user word and checks if it is valid
    
     """
    board = session[BOGGLE_BOARD]

    word = request.form["guess"]
    valid_word = boggle_game.check_valid_word(board, word)
    #store correct guesses to the session
    # correct_words = session[SESSION_RESP]
    if word == valid_word:
        correct_words.append(word)
    session[SESSION_RESP] = correct_words
    # breakpoint()
    import pdb
    pdb.set_trace()
    (word, correct_words)
    # print
    # if board == session[BOGGLE_BOARD]:
    return redirect(f"/")






