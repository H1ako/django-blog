from rest_framework import serializers

from posts.models import Post


class PostSerializer(serializers.ModelSerializer):
    isFavourite = serializers.SerializerMethodField('isFavourite')

    class Meta:
        model = Post
        fields = '__all__'

    def get_isFavourite(self, post: Post) -> bool:
        user = self.context['request'].user

        if not user.is_authenticated: return False
        user_favourites = list(user.favouritePosts.filter(post=post))

        return len(user_favourites) > 0
