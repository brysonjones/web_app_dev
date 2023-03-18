from flask import Flask, request,jsonify
from flask_socketio import SocketIO,emit
from flask_cors import CORS, cross_origin
import time

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
socketio = SocketIO(app,cors_allowed_origins="*")

@app.route('/', methods = ['POST'])
@cross_origin()
def upload_image():
   if request.method == 'POST':
        image = request.files['File'].read()
        print("image data: ", image)
        return jsonify(isError= False,
                        message= "Success",
                        statusCode= 200), 200

@socketio.on('connect')
def connect():
    print('Client connecting...')

@socketio.on('message')
def handle_message(data):
    print('received message: ' + data)


if __name__ == '__main__':
    socketio.run(app, debug=True, port=5000)