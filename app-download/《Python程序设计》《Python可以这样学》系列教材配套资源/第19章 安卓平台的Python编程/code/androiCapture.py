import sl4a
import os

droid = sl4a.Android()
# 默认保存到手机存储卡的根目录下，也可以自己修改成其他目录
#获取已拍照片数量
t = [x for x in os.listdir('/sdcard') if x.startswith('pic') and x.endswith('.jpg')]
# 计算下一张照片的文件名序号
n = len(t) + 1
#打开摄像头并保存拍到的照片
imageFn = '/sdcard/pic' + str(n) + '.jpg'
droid.cameraInteractiveCapturePicture(imageFn)
