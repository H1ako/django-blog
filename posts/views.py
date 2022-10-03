from django.db.models.functions import Length
from django.core.paginator import Paginator
from rest_framework import views, permissions, status
from rest_framework.request import Request
from rest_framework.response import Response

from posts.serializers import PostSerializer


class PostsView(views.APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, req: Request) -> Response:
        status_code = status.HTTP_200_OK
        page = req.GET.get('page', 1)
        user = req.user

        posts = user.posts.all().order_by(Length('views'))
        paginator = Paginator(posts, 10)
        currentPage = paginator.get_page(page)
        postsData = PostSerializer(currentPage.object_list, many=True, context={
            'request': req
        }).data

        data = {
            'posts': postsData,
        }

        return Response(data, status=status_code)
