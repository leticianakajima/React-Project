from django.db import models
from django.contrib import admin

class Movie(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    created_on = models.DateTimeField(auto_now_add=True)
    showtimes = models.TextField()
    genre = models.CharField(max_length=255)

class Genre(models.Model):
    genre = models.CharField(max_length=255)

admin.site.register(Movie)
admin.site.register(Genre)

