from django.db import models

from authentication.models import User


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





