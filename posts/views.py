from django.db.models.functions import Length
from django.core.paginator import Paginator, EmptyPage
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
        error_details = ''
        page = req.GET.get('page', 1)
        user = req.user

        posts = self.get_posts(user).order_by(Length('views'))
        paginator = Paginator(posts, 10)
        postsData = []

        try:
            currentPage = paginator.page(page)
            postsData = PostSerializer(currentPage.object_list, many=True, context={
                'request': req
            }).data
        except EmptyPage:
            status_code = status.HTTP_500_INTERNAL_SERVER_ERROR
            error_details = 'No such page'

        data = {
            'posts': postsData,
            'lastPage': paginator.page_range[-1],
            'errorDetails': error_details
        }

        return Response(data, status=status_code)


class PostsNewsView(PostsView):
    def get_posts(self, user: User):
        return user.posts.all()