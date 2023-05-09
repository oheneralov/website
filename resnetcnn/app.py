#!/usr/bin/python3

import time
import os
import sys
from flask import Flask, request, redirect, jsonify
import urllib
from werkzeug.utils import secure_filename
import cv2
import numpy as np
from tensorflow.keras.models import load_model
from imagenet_utils import decode_predictions
from tensorflow.keras.preprocessing import image
#from tensorflow.keras.applications.resnet50.resnet50 import ResNet50
from tensorflow.keras.applications.mobilenet import decode_predictions


app = Flask(__name__)

UPLOAD_FOLDER = './uploads'
ALLOWED_EXTENSIONS = set(['png', 'jpg', 'jpeg', 'gif'])
app.secret_key = "secret key"
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.config['MAX_CONTENT_LENGTH'] = 16 * 1024 * 1024
#custom_resnet_model = ResNet50(include_top=True, weightsPath ='custom_resnet_weights_1000.h5')
#custom_resnet_model = load_model('mobile.h5')


def allowed_file(filename):
	return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@app.route('/file-upload', methods=['POST'])
def upload_file():
	# check if the post request has the file part
	if 'file' not in request.files:
		resp = jsonify({'message' : 'No file part in the request'})
		resp.status_code = 400
		return resp
	file = request.files['file']
	if file.filename == '':
		resp = jsonify({'message' : 'No file selected for uploading'})
		resp.status_code = 400
		return resp
	if file and allowed_file(file.filename):
		filename = secure_filename(file.filename)
		filePath = os.path.join(app.config['UPLOAD_FOLDER'], filename)
		file.save(filePath)
		img = cv2.imread(filePath)
		img = cv2.resize(img,(224,224))
		img = np.reshape(img,[1,224,224,3])
		preds = custom_resnet_model.predict(img)

		result = decode_predictions(preds, top = 3)
		object_name = result[0][0][1]
		resp = jsonify({'message' : 'File successfully uploaded', 'object': {'object_name': object_name}})
		resp.status_code = 201
		return resp
	else:
		resp = jsonify({'message' : 'Allowed file types are png, jpg, jpeg, gif'})
		resp.status_code = 400
		return resp




@app.route('/')
def hello():
    return 'Hello!'


app.run(debug = False, threaded = False, port=5000, host='0.0.0.0')
