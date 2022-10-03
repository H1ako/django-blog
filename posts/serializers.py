from rest_framework import serializers

from posts.models import *
from users.serializers import UserSerializer


class PostCommentSerializer(serializers.ModelSerializer):
    author = UserSerializer(read_only=True)

    class Meta:
        model = PostComment
        fields = '__all__'


class PostViewSerializer(serializers.ModelSerializer):
    author = UserSerializer(read_only=True)

    class Meta:
        model = PostView
        fields = '__all__'


class PostFavouriteSerializer(serializers.ModelSerializer):
    author = UserSerializer(read_only=True)

    class Meta:
        model = PostView
        fields = '__all__'


class PostSerializer(serializers.ModelSerializer):
    isFavourite = serializers.SerializerMethodField('get_is_favourite')
    comments = PostCommentSerializer(read_only=True, many=True)
    favourites = PostFavouriteSerializer(read_only=True, many=True)
    views = PostViewSerializer(read_only=True, many=True)
    author = UserSerializer(read_only=True)

    class Meta:
        model = Post
        fields = '__all__'

    def get_is_favourite(self, post: Post) -> bool:
        user = self.context['request'].user

        if not user.is_authenticated: return False
        user_favourites = list(user.favouritePosts.filter(post=post))

        return len(user_favourites) > 0

