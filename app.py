#import necessary methods and set up configs
from flask import Flask, request, render_template, redirect, flash, session, jsonify

# from flask_debugtoolbar import DebugToolbarExtension

from boggle import Boggle 

app = Flask(__name__)
app.config['SECRET_KEY'] = "abc123"
app.config["DEBUG_TB_INTERCEPT_REDIRECTS"] = False
app.config['TESTING'] = True
app.config['DEBUG_TB_HOSTS'] = ['dont-show-debug-toolbar']
app.debug = True


boggle_game = Boggle()
#intialize the variable for the session storage and responses

#intialize the board to a global variable so that it does not reload on every refresh


@app.route('/')
def show_board():
    """Creates the board and displays it to the page"""
    board = boggle_game.make_board()
    session["board"] = board
    
#     #TODO update later with all necessary templates, timer and score
    
    
    return render_template("boggle.html", board=board)

# todo make route for handling words
# *this is where the frontend is checking against
@app.route('/guess-word', methods=["GET", "POST"])
def handle_boggle_game():
    """Checks the user word against the boggle board in the session
    
    Utilizes the class boggle and it's methods and sends the response back to the front end
    """
    # Todo get values from the form and check if valid
    word = request.form["word"]
    board = session["board"]
    print(word)
    response = boggle_game.check_valid_word(board, word)
    print(response)
    raise
    # Todo return json as formatted by the boggle.py and return the response
    return jsonify({"result": response})

# Todo add post route for results

   
  


# @app.route('/post-score', methods=["POST"])
# def post_scores():
#     """Handles scores and updates results as appropiate
    
#      """
#     return redirect("/")






