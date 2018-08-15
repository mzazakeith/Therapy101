from django.conf import settings
from django.conf.urls import url
from django.conf.urls.static import static

from main import views

urlpatterns=[
    url(r'^$', views.welcome, name='welcome'),
    url(r'^new/profile$', views.new_profile, name='new-profile'),


]
if settings.DEBUG:
    urlpatterns+= static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT)