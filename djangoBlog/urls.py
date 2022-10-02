from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, re_path, include
from django.views.generic import TemplateView
from rest_framework.authtoken import views


urlpatterns = [
    path('api/users/', include('users.urls')),
    path('api/posts/', include('posts.urls')),
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
]

# for receiving data from user
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL,
                          document_root=settings.MEDIA_ROOT)
    urlpatterns += static(settings.STATIC_URL,
                          document_root=settings.STATIC_ROOT)

# for router
urlpatterns.append(
    re_path(r'^.*', TemplateView.as_view(template_name="build/index.html")))