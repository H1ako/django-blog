from django.db import models
from django.utils.translation import gettext_lazy as _
from users.models import User


class Post(models.Model):
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name='posts')
    name = models.CharField('Name', max_length=40)
    description = models.TextField('Description')
    shortDescription = models.CharField('Short Description', max_length=100)
    thumbnail = models.ImageField('Thumbnail', upload_to='postsThumbnails/')
    link = models.CharField('Link', max_length=70)
    updatedAt = models.DateTimeField("Created At", auto_now=True)
    createdAt = models.DateTimeField("Created At", auto_now_add=True)

    class Meta:
        verbose_name = _('Post')
        verbose_name_plural = _('Posts')


class PostFavourite(models.Model):
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name='favouritePosts')
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name='favourites')
    createdAt = models.DateTimeField("Created At", auto_now_add=True)

    class Meta:
        verbose_name = _('FavouritePost')
        verbose_name_plural = _('FavouritePosts')


class PostComment(models.Model):
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name='postsComments')
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name='comments')
    text = models.TextField('Text', max_length=500)
    updatedAt = models.DateTimeField("Created At", auto_now=True)
    createdAt = models.DateTimeField("Created At", auto_now_add=True)

    class Meta:
        verbose_name = _('PostComment')
        verbose_name_plural = _('PostComments')


class PostView(models.Model):
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name='postsViews')
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name='views')
    updatedAt = models.DateTimeField("Created At", auto_now=True)
    createdAt = models.DateTimeField("Created At", auto_now_add=True)

    class Meta:
        verbose_name = _('PostView')
        verbose_name_plural = _('PostViews')
