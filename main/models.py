from django.db import models

from authentication.models import User

from djgeojson.fields import PointField, PolygonField

from django.db import models


class Curriculum(models.Model):
    document = models.FileField(upload_to='curriculum/')
    description = models.CharField(max_length=255, blank=True)
    uploaded_at = models.DateTimeField(auto_now_add=True)
    patient = models.ForeignKey(User, related_name='patient')
    doctor = models.ForeignKey(User, related_name='doctor')


class TreatmentPlan(models.Model):
    document = models.FileField(upload_to='plans/')
    description = models.CharField(max_length=255, blank=True)
    uploaded_at = models.DateTimeField(auto_now_add=True)
    patient = models.ForeignKey(User)


class AssistantProfile(models.Model):
    profile_photo = models.ImageField(upload_to='profile_pictures/')
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    location = models.CharField(max_length=255, blank=True)

    def __str__(self):
        return self.user.username


class PatientProfile(models.Model):
    profile_photo = models.ImageField(upload_to='profile_pictures/')
    patient = models.OneToOneField(User, on_delete=models.CASCADE, related_name='ownerpatient')
    birthday = models.DateField(null=True, blank=True)
    etiology = models.TextField(blank=True)
    guardian = models.ForeignKey(User,max_length=200, related_name='guardian')
    slta = models.ForeignKey(AssistantProfile, related_name='slta')
    slt = models.ForeignKey(User, related_name='slt')
    bio = models.TextField(max_length=200, blank=True)

    def __str__(self):
        return self.patient.username


class SLTASpot(models.Model):
    geom = PointField()
    user = models.OneToOneField(User, on_delete=models.CASCADE)

    @property
    def popupContent(self):
        return '<a href={}/{}><p>{}</p></a>'.format("userprofile", self.user.id, self.user.username)
