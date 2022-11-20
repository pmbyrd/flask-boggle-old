#import necessary methods and set up configs
from flask import Flask, request, render_template, redirect, flash, session, jsonify

from flask_debugtoolbar import DebugToolbarExtension

from boggle import Boggle 

app = Flask(__name__)
app.config['SECRET_KEY'] = "abc123"
app.config["DEBUG_TB_INTERCEPT_REDIRECTS"] = False
app.config['TESTING'] = True
app.config['DEBUG_TB_HOSTS'] = ['dont-show-debug-toolbar']
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
    
    session[BOGGLE_BOARD] = board
    
    
    #update later with all necessary templates, timer and score
    return render_template("boggle.html", board=board)

@app.route('/guess')
def handles_boggle_game():
    """Checks if the user word is valid and responses with the appropiate message"""
    
    word = request.args["guess"]
    board = session[BOGGLE_BOARD]

    #check the board and the word received for validity
    response = boggle_game.check_valid_word(board, word)
  
    # do not respond with redirects, the reponses are json
    return jsonify({"result": response})
    # return redirect("/", response=response)
 


@app.route('/post-score', methods=["POST"])
def post_scores():
    """Handles scores and updates results as appropiate
    
     """
    return redirect("/")






