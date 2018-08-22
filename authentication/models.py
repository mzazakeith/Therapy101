from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    is_slta = models.BooleanField(default=False)
    is_slt = models.BooleanField(default=False)
    is_parent = models.BooleanField(default=False)
