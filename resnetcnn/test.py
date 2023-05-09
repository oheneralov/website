#!/usr/bin/python3

import time
import os
import sys
import urllib
from werkzeug.utils import secure_filename
import cv2
import numpy as np
from tensorflow.keras.models import load_model
from imagenet_utils import decode_predictions
from tensorflow.keras.preprocessing import image
#from tensorflow.keras.applications.resnet50.resnet50 import ResNet50
from tensorflow.keras.applications.mobilenet import decode_predictions




UPLOAD_FOLDER = './uploads'
custom_resnet_model = load_model('model_type_resnet50_ep_10_classes_11.h5')
img = cv2.imread('./input.png')
img = cv2.resize(img,(32,32))
img = np.reshape(img,[1,32,32,3])
preds = custom_resnet_model.predict(img)
result = preds.tolist()
print("birds results")
for i in result:
    print(i)








