from django.contrib.auth.base_user import AbstractBaseUser
from django.contrib.auth.models import PermissionsMixin
from django.db import models
from django.utils.translation import gettext_lazy as _
from rest_framework.authtoken.models import Token
from users.managers import UserManager


class User(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField('Email', unique=True)
    password = models.CharField('Password', max_length=200)
    firstName = models.CharField('First Name', max_length=20)
    lastName = models.CharField('Last Name', max_length=25)
    picture = models.ImageField('Picture', upload_to='usersPictures/', blank=True, null=True)
    is_staff = models.BooleanField('Is Staff Member', default=False)
    is_superuser = models.BooleanField('Is Admin', default=False)
    updatedAt = models.DateTimeField("Created At", auto_now=True)
    createdAt = models.DateTimeField("Created At", auto_now_add=True)

    objects = UserManager()
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['firstName', 'lastName']

    class Meta:
        verbose_name = _('User')
        verbose_name_plural = _('Users')
