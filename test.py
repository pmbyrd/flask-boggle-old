from unittest import TestCase
from app import app
from flask import session
from boggle import Boggle

app.config['TESTING'] = True
app.config['DEBUG_TB_HOSTS'] = ['dont-show-debug-toolbar']

class FlaskTests(TestCase):

    # TODO -- write tests for every view function / feature!
    def setUp(self):
        """Configures self for testing"""
        self.client = app.test_client()

    def test_homepage(self):
        """Displays the home page"""
        with self.client:
            response = self.client.get('/')
            