import os
from django.db import models


def get_upload_path(instance, filename):
    # getting the file instance type
    media_type = instance.media_type

    # setting the upload path according to the file type
    if media_type == 'image':
        upload_path = 'images'
    elif media_type == 'video':
        upload_path = 'videos'
    elif media_type == 'audio':
        upload_path = 'videos'
    else:
        upload_path = 'others'

    return os.path.join(upload_path, filename)


media_type_choices = (
    ['image', 'image'],
    ['video', 'video'],
    ['audio', 'audio'],
)


class Media(models.Model):
    created_date = models.DateTimeField(auto_now_add=True)
    media_type = models.CharField(max_length=10, default='image', choices=media_type_choices)  # photo, video, mp3
    link = models.FileField(upload_to=get_upload_path)

    def save(self, *args, **kwargs):
        return super(Media, self).save(*args, **kwargs)


class Categories(models.Model):
    name = models.CharField(max_length=50)
    date = models.DateTimeField(auto_now=True)


class Produits(models.Model):
    name = models.CharField(max_length=50)
    description = models.TextField()
    price = models.IntegerField()   # en Ar
    date = models.DateTimeField(auto_now=True)
    quatity = models.IntegerField()
    media = models.ForeignKey(Media, on_delete=models.CASCADE)
    categories = models.ManyToManyField(Categories)


