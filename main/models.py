from django.db import models

from authentication.models import User

from djgeojson.fields import PointField, PolygonField

from django.db import models


class Curriculum(models.Model):
    document = models.FileField(upload_to='curriculum/')
    description = models.CharField(max_length=255, blank=True)
    uploaded_at = models.DateTimeField(auto_now_add=True)
    patient = models.ForeignKey(User)


class TreatmentPlan(models.Model):
    document = models.FileField(upload_to='plans/')
    description = models.CharField(max_length=255, blank=True)
    uploaded_at = models.DateTimeField(auto_now_add=True)
    patient = models.ForeignKey(User)


class PatientProfile(models.Model):
    profile_photo = models.ImageField(upload_to='profile_pictures/')
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    bio = models.TextField(max_length=200, blank=True)
    email = models.CharField(max_length=100, null=True, blank=True)

    def __str__(self):
        return self.user.username


class AssistantProfile(models.Model):
    profile_photo = models.ImageField(upload_to='profile_pictures/')
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    bio = models.TextField(max_length=200, blank=True)
    email = models.CharField(max_length=100, null=True, blank=True)

    def __str__(self):
        return self.user.username


class SLTASpot(models.Model):
    geom = PointField()
    user = models.OneToOneField(User, on_delete=models.CASCADE)

    @property
    def popupContent(self):
        return '<a href={}/{}><p>{}</p></a>'.format("userprofile",self.user.id, self.user.username)
