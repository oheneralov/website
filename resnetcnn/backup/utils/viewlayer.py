import matplotlib.pyplot as plt
import numpy as np


activation = np.load('activation2.npy')
plt.matshow(activation, cmap='viridis')
plt.show()
