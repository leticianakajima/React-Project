from django.contrib.auth.models import User, Group
from mysite.models import Movie, Genre
from rest_framework import serializers
import json


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['url', 'username', 'email', 'groups']


class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ['url', 'name']


class MovieSerializer(serializers.HyperlinkedModelSerializer):
    showtimes = serializers.SerializerMethodField()

    class Meta:
        model = Movie
        fields = ['title', 'description', 'created_on', 'genre', 'showtimes']

    def get_showtimes(self, obj):
        return json.dumps(obj.showtimes)


class GenreSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = Genre
        fields = ('genre',)
