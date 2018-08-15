from django.conf import settings
from django.conf.urls.static import static
from django.conf.urls import url

from main import views

urlpatterns = [
    url(r'^upload/curriculum/$', views.curriculum_upload, name='upload-curriculum'),
    url(r'^upload/treatment/$', views.treatment_upload, name='upload-treatment'),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)