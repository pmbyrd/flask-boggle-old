"""Word Finder: finds random words from a dictionary."""

from random import choice

class WordFinder:
    """ Searches for random words from a dictionary.

    >>> wf = WordFinder("simple.txt")

    >>> wf.random() in ["cat", "dog", "porcupine"]
    True

    >>> wf.random() in ["cat", "dog", "porcupine"]
    True

    >>> wf.random() in ["cat", "dog", "porcupine"]
    True
    """

    def __init__(self, path):
        "Reads the dictionary and looks up items read"    
        words_file = open(path)

        #use the search function for look up words
        self.words = self.search(words_file)

    def search(self, words_file):
        "Search through the words file and return list of words"
        #for each word remove the white space to increase readability
        return [word.strip() for word in words_file]


    def random(self):
        "Look up word in the file"

        return choice(self.words)


class SpecialWordFinder(WordFinder):
    """Specialized WordFinder that returns the words only with no special characters
   

    >>> specials = SpecialWordFinder("complex.txt")

    >>> specials.random() in ["pear", "carrot", "kale"]
    True

    >>> specials.random() in ["pear", "carrot", "kale"]
    True

    >>> specials.random() in ["pear", "carrot", "kale"]
    True

    """

    #get the search() and update the logic to not include the #

    def search(self, words_file):
        """Search the file and exclude blank lines and special characters"""
        return [word.strip() for word in words_file if word.strip() 
        and not word.startswith("#")]
