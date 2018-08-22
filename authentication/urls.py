from django.conf.urls import url, include
from . import views


urlpatterns = [
    url(r'^signup/slt/$', views.slt_signup, name='signup-teacher'),
    url(r'^signup/slta/$', views.slta_signup, name='signup-student'),
    url(r'^signup/parent/$', views.parent_signup, name='signup-student'),

]


