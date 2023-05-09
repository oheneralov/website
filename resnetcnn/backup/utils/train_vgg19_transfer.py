from keras.preprocessing.image import ImageDataGenerator
from keras import backend as K
from keras.models import Sequential
from keras.layers import Activation, Dropout, Flatten, Dense, MaxPool2D
from keras.layers import Conv2D, MaxPooling2D
from keras.optimizers import Adam, RMSprop
import numpy as np
from keras.models import load_model

"""
→ 2 x convolution layer of 64 channel of 3x3 kernal and same padding

→ 1 x maxpool layer of 2x2 pool size and stride 2x2

→ 2 x convolution layer of 128 channel of 3x3 kernal and same padding

→ 1 x maxpool layer of 2x2 pool size and stride 2x2

→ 4 x convolution layer of 256 channel of 3x3 kernal and same padding

→ 1 x maxpool layer of 2x2 pool size and stride 2x2

→ 4 x convolution layer of 512 channel of 3x3 kernal and same padding

→ 1 x maxpool layer of 2x2 pool size and stride 2x2

→ 4 x convolution layer of 512 channel of 3x3 kernal and same padding

→ 1 x maxpool layer of 2x2 pool size and stride 2x2
"""


# dimensions of images.
imageWidth, imageHeight = 112, 112

classesNum = 9 # influences layer size

train_data_dir = 'bigdata/train'
validation_data_dir = 'bigdata/validation'
test_dir = 'bigdata/test'

trainSamplesNum = 100 # number of train images
validationSamplesNum = 150 # number of validation samples
batchSize = 32
epochs = 50

"""
3 classes - 90%
"""

if K.image_data_format() == 'channels_first':
    input_shape = (3, imageWidth, imageHeight)
else:
    input_shape = (imageWidth, imageHeight, 3)

model = load_model('classes_9_ep_250_vgg166.h5')


# initiate RMSprop optimizer
# If our training is bouncing a lot on epochs then we need to decrease the learning rate so that we can reach global minima.
# opt = Adam(lr=0.001)
opt = RMSprop(learning_rate=0.0001, decay=1e-6)

model.compile(loss='categorical_crossentropy',
             optimizer=opt, 
			  metrics=['accuracy'])

model.summary()

# augmentation config used for training
"""
train_datagen = ImageDataGenerator(
    rescale=1. / 255,
    shear_range=0.2,
    zoom_range=0.2,
    horizontal_flip=True,
    rotation_range=40,
    width_shift_range=0.2,
    height_shift_range=0.2
    )
"""

train_datagen = ImageDataGenerator(
    rescale=1. / 255,
    shear_range=0.2,
    zoom_range=0.2,
    horizontal_flip=True
    )

# augmentation config used for testing:
# just rescaling
validation_datagen = ImageDataGenerator(rescale=1. / 255)

print('prepare train generator')
train_generator = train_datagen.flow_from_directory(
    train_data_dir,
    target_size=(imageWidth, imageHeight),
    batch_size=batchSize,
    class_mode='categorical')

print('prepare validation generator')
validation_generator = validation_datagen.flow_from_directory(
    validation_data_dir,
    target_size=(imageWidth, imageHeight),
    batch_size=batchSize,
    class_mode='categorical')

print('training and validating')
# Trains the model on data generated batch-by-batch by a Python generator
model.fit_generator(
    train_generator,
    steps_per_epoch=trainSamplesNum // batchSize,
    epochs=epochs,
    validation_data=validation_generator,
    validation_steps=validationSamplesNum // batchSize)

model.save('classes_' + str(classesNum) + '_ep_' + str(epochs + 250) +  '_vgg166.h5')
