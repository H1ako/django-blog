from rest_framework import serializers

from users.models import User


class UserSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField('name')

    class Meta:
        model = User
        fields = '__all__'

    def get_name(self, user: User) -> str:
        return f"{user.firstName} {user.lastName}"
