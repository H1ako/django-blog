from rest_framework import views, authentication, status, permissions
from rest_framework.request import Request
from rest_framework.response import Response

from users.serializers import UserSerializer


class UserView(views.APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, req: Request) -> Response:
        userData = UserSerializer(req.user).data

        data = {
            'user': userData
        }

        return Response(data, status=status.HTTP_200_OK)

    def post(self, req: Request):
        user = req.user
        user_serializer = UserSerializer(instance=user, data=req.data)
        status_code = status.HTTP_500_INTERNAL_SERVER_ERROR
        error_details = '[ERROR]: Validation data is incorrect'

        if user_serializer.is_valid():
            user_serializer.save()

            status_code = status.HTTP_200_OK
            error_details = ''

        data = {
            'user': user_serializer.data,
            'errorDetails': error_details
        }

        return Response(data=data, status=status_code)
