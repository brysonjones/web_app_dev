from flask import Flask, request,jsonify
from flask_socketio import SocketIO,emit
import time

app = Flask(__name__)
socketio = SocketIO(app,cors_allowed_origins="*")

@socketio.on('message')
def handle_message(data):
    print('received message: ' + data)


if __name__ == '__main__':
    socketio.run(app, debug=True, port=5000)