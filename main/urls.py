from django.conf import settings

from django.conf.urls.static import static
from django.conf.urls import url
from rest_framework.urlpatterns import format_suffix_patterns
from main import views

urlpatterns = [
    url(r'^sltdash/$', views.therapist_dash, name='sltda'),
    url(r'^sltadash/$', views.assistant_dash, name='sltadash'),
    url(r'^patientss/$', views.patientlist, name='patientlist'),
    url(r'^patient/(?P<ownerpatient>\d+)$', views.patient, name='patient'),
    url(r'^slta/(?P<user_id>\d+)$', views.assistant, name='slta'),
    url(r'^curriculumss/$', views.curriculumlist, name='curriculums'),
    url(r'^planss/$', views.planlist, name='plans'),
    url(r'^assistant-patients/(?P<user_id>\d+)$', views.assistantpatients, name='slta-patients'),
    url(r'^assistantss/$', views.assistantlist, name='assistants'),
    url(r'^upload/curriculum/$', views.curriculum_upload, name='upload-curriculum'),
    url(r'^upload/treatment/$', views.treatment_upload, name='upload-treatment'),
    url(r'^welcome$', views.welcome, name='welcome'),
    url(r'^$', views.home, name='home'),

    url(r'^slta/$', views.slta, name='slta'),
    url(r'^new/profile$', views.new_profile, name='new-profile'),
    url(r'^curriculums/$', views.CurriculumList.as_view()),
    url(r'^curriculums/(?P<pk>[0-9]+)/$', views.CurriculumDetail.as_view()),
    url(r'^plans/$', views.TreatmentPlanList.as_view()),
    url(r'^plans/(?P<pk>[0-9]+)/$', views.TreatmentPlanDetail.as_view()),
    url(r'^patients/$', views.PatientProfileList.as_view()),
    url(r'^patients/(?P<pk>[0-9]+)/$', views.PatientProfileDetail.as_view()),
    url(r'^assistants/$', views.AssistantProfileList.as_view()),
    url(r'^assistants/(?P<pk>[0-9]+)/$', views.AssistantProfileDetail.as_view()),

]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

urlpatterns = format_suffix_patterns(urlpatterns)