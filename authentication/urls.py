from django.conf.urls import url, include
from . import views

from django.conf.urls.static import static



urlpatterns = [
    url(r'^signup/slt/$', views.slt_signup, name='signup-therapist'),
    url(r'^signup/slta/$', views.slta_signup, name='signup-assistant'),
    url(r'^signup/guardian/$', views.parent_signup, name='signup-guardian'),

]

#if settings.DEBUG:
 #   urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

