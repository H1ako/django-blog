from django.db.models.functions import Length
from django.core.paginator import Paginator
from rest_framework import views, permissions, status
from rest_framework.request import Request
from rest_framework.response import Response

from posts.serializers import PostSerializer
from users.models import User


class PostsView(views.APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get_posts(self, user: User):
        return user.posts.all()

    def get(self, req: Request) -> Response:
        status_code = status.HTTP_200_OK
        page = req.GET.get('page', 1)
        user = req.user

        posts = self.get_posts(user).order_by(Length('views'))
        paginator = Paginator(posts, 10)
        currentPage = paginator.page(page)
        postsData = PostSerializer(currentPage.object_list, many=True, context={
            'request': req
        }).data

        data = {
            'posts': postsData,
            'lastPage': currentPage.end_index()
        }

        return Response(data, status=status_code)


class PostsNewsView(PostsView):
    def get_posts(self, user: User):
        return user.posts.all()
