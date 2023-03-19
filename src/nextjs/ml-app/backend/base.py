from flask import Flask, request,jsonify
from flask_socketio import SocketIO,emit
from flask_cors import CORS, cross_origin
from PIL import Image, ImageFilter
from io import BytesIO
import time
import base64

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
socketio = SocketIO(app,cors_allowed_origins="*")

def filter_image(image):
    image = image.filter(ImageFilter.FIND_EDGES)
    return image

# Convert Image to Base64 
def img_to_base64(image):
    buff = BytesIO()
    image.convert('RGB').save(buff, format="JPEG")
    img_str = base64.b64encode(buff.getvalue()).decode()
    return img_str

@app.route('/', methods = ['POST'])
@cross_origin()
def upload_image():
   if request.method == 'POST':
        image_data = request.files['File'].read()
        image = Image.open(request.files['File'].stream)
        # data = base64.b64encode(image_data).decode() 
        filtered_image = filter_image(image)
        data = img_to_base64(filtered_image)  
        return jsonify(isError= False,
                        message= "Success",
                        statusCode= 200,
                        size=[image.width, image.height], 
                        format=image.format,
                        image=data
                        ), 200

@socketio.on('connect')
def connect():
    print('Client connecting...')

@socketio.on('message')
def handle_message(data):
    print('received message: ' + data)


if __name__ == '__main__':
    socketio.run(app, debug=True, port=5000)