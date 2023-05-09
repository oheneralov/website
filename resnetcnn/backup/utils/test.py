#!/usr/bin/python3

import time
from keras.models import load_model
import os
import sys
from flask import Flask, request, redirect, jsonify
import urllib
from werkzeug.utils import secure_filename
import cv2
import numpy as np

from imagenet_utils import decode_predictions
from keras.preprocessing import image
from tensorflow.python.keras.models import Model, model_from_json
import matplotlib
import matplotlib.pyplot as plt


custom_resnet_model = load_model('classes_9_ep_250_vgg166.h5')
print('model is loaded')

classes_arr = {0: 'bird', 1: 'bus', 2: 'cat', 3: 'chair', 4: 'dog', 5: 'door', 6: 'human', 7: 'powersocket', 8: 'stairs'}
print(classes_arr)

"""
filePath = './e2e/elephant.jpg'
img = cv2.imread(filePath)
img = cv2.resize(img,(75,75))
img = np.reshape(img,[1,75,75,3])
preds = custom_resnet_model.predict_classes(img)
print(preds)
preds = custom_resnet_model.predict(img)
print(preds)



filePath = './e2e/bus.jpg'
img = cv2.imread(filePath)
img = cv2.resize(img,(75,75))
img = np.reshape(img,[1,75,75,3])
preds = custom_resnet_model.predict_classes(img)
print(preds)
preds = custom_resnet_model.predict(img)
print(preds)

filePath = './e2e/man.jpeg'
img = cv2.imread(filePath)
img = cv2.resize(img,(75,75))
img = np.reshape(img,[1,75,75,3])
preds = custom_resnet_model.predict_classes(img)
print(preds)
preds = custom_resnet_model.predict(img)
print(preds)

"""

"""
from vgg16 import VGG16
from keras.preprocessing import image
from imagenet_utils import preprocess_input

model = VGG16(weights='imagenet', include_top=False)

img_path = 'elephant.jpg'
img = image.load_img(img_path, target_size=(224, 224))
x = image.img_to_array(img)
x = np.expand_dims(x, axis=0)
x = preprocess_input(x)

features = model.predict(x)
"""


"""

from keras.preprocessing import image

img = image.load_img("image.jpeg",target_size=(224,224))
img = np.asarray(img)
plt.imshow(img)
img = np.expand_dims(img, axis=0)

from keras.models import load_model
saved_model = load_model("vgg16_1.h5")
output = saved_model.predict(img)
if output[0][0] > output[0][1]:
    print("cat")
else:
    print('dog')
"""

def getObject(classes_arr, file_name):
    img = image.load_img(file_name, target_size=(112,112))
    img = np.asarray(img)
    #plt.imshow(img)
    img = np.expand_dims(img, axis=0)
    # preds = custom_resnet_model.predict_classes(img) 
    preds = custom_resnet_model.predict(img)
    result = np.argmax(preds, axis=-1)  
    classIndex = result[0]
    print('score: ',preds[0][classIndex])
    return classes_arr[classIndex]


pred = getObject(classes_arr, './e2e/bird.jpg')
print('expected: bird, actual: ',pred)

pred = getObject(classes_arr, './e2e/bus.jpeg')
print('expected: bus, actual: ',pred)

pred = getObject(classes_arr, './e2e/cat0.jpg')
print('expected: cat, actual: ',pred)

pred = getObject(classes_arr, './e2e/chair15.jpg')
print('expected: chair, actual: ',pred)

pred = getObject(classes_arr, './e2e/dog.jpg')
print('expected: dog, actual: ',pred)

pred = getObject(classes_arr, './e2e/door4.jpg')
print('expected: door, actual: ',pred)

pred = getObject(classes_arr, './e2e/human.jpg')
print('expected: human, actual: ',pred)

pred = getObject(classes_arr, './e2e/powersocket.jpg')
print('expected: powersocket, actual: ',pred)

pred = getObject(classes_arr, './e2e/stair.jpg')
print('expected: stairs, actual: ',pred)


#scores = custom_resnet_model.evaluate_generator(test_generator, nb_test_samples // batch_size)
#print("accuracy : %.2f%%" % (scores[1]*100))

# ------------------------------------------------------cnn analysis-----------------------------------------
image_file_name = 'bird.jpg'
img = image.load_img(image_file_name, target_size=(112, 112))
plt.imshow(img)
# convert photo to numpy array
img_array = image.img_to_array(img)
img_array = np.expand_dims(img_array, axis=0)
img_array /= 255.

# cut a model
# numbers of convolutional layers: - 0, 3, 7
activation_model = Model(inputs=custom_resnet_model.input, outputs=custom_resnet_model.layers[6].output)
activation_model.summary()
activation = activation_model.predict(img_array)
print('activation shape: ',activation.shape)
res = activation[0, :, :, 0] # choose the 18th features card
print(type(res))
np.save('activation2', res)






