from rest_framework import serializers

from users.models import User


class UserSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()

    class Meta:
        model = User
        exclude = ['password', 'last_login', 'groups']

    def get_name(self, user: User) -> str:
        return f"{user.firstName} {user.lastName}"
