from flask import Flask, request,jsonify
from flask_socketio import SocketIO,emit
from flask_cors import CORS, cross_origin
from PIL import Image, ImageFilter
from io import BytesIO
import base64
import cv2
import numpy as np

# diffuser
from diffusers.utils import load_image
from diffusers import StableDiffusionControlNetPipeline, ControlNetModel
from diffusers import UniPCMultistepScheduler
import torch

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
socketio = SocketIO(app,cors_allowed_origins="*")

# diffusion model
controlnet = ControlNetModel.from_pretrained("lllyasviel/sd-controlnet-canny", torch_dtype=torch.float16)
pipe = StableDiffusionControlNetPipeline.from_pretrained(
    "runwayml/stable-diffusion-v1-5", controlnet=controlnet, torch_dtype=torch.float16
)
pipe.scheduler = UniPCMultistepScheduler.from_config(pipe.scheduler.config)
pipe.enable_model_cpu_offload()
pipe.enable_xformers_memory_efficient_attention()

def filter_image(image):
    image = np.array(image)

    low_threshold = 100
    high_threshold = 200

    image = cv2.Canny(image, low_threshold, high_threshold)
    image = image[:, :, None]
    image = np.concatenate([image, image, image], axis=2)
    canny_image = Image.fromarray(image)
    return canny_image

# Convert Image to Base64 
def img_to_base64(image):
    buff = BytesIO()
    image.convert('RGB').save(buff, format="JPEG")
    img_str = base64.b64encode(buff.getvalue()).decode()
    return img_str

def control_net(image, prompt):
    prompt = prompt + ", best quality, extremely detailed"
    generator = torch.Generator(device="cpu").manual_seed(3)
    output = pipe(
        prompt,
        image,
        negative_prompt="monochrome, lowres, bad anatomy, worst quality, low quality",
        generator=generator,
        num_inference_steps=30,
    )
    return output.images[0]

@app.route('/', methods = ['POST'])
@cross_origin()
def upload_image():
   if request.method == 'POST':
        image = Image.open(request.files['File'].stream)
        prompt = request.form.get('prompt')
        filtered_image = filter_image(image)
        transformed_image = control_net(filtered_image, prompt)
        data = img_to_base64(transformed_image)  
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