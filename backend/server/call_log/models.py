import uuid
from django.db import models
from django.utils import timezone
from enum import Enum
from users.models import User

class CallStatus(models.TextChoices):
    INITIATED = 'Initiated'
    IN_PROGRESS = 'In Progress'
    COMPLETED = 'Completed'
    DECLINED = 'Declined'
    FAILED = 'Failed'
    BUSY = 'Busy'

class CallType(models.TextChoices):
    VIDEO = 'Video'
    AUDIO = 'Audio'

class CallPriority(models.TextChoices):
    CRITICAL = 4
    HIGH = 3
    MEDIUM = 2
    LOW = 1
    

class CallLog(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    health_care_assistant = models.ForeignKey(User, on_delete=models.CASCADE, related_name='health_care_assistant')
    doctor = models.ForeignKey(User, on_delete=models.CASCADE, related_name='doctor')
    start_time = models.DateTimeField(auto_now_add=True)
    end_time = models.DateTimeField(null=True, blank=True)
    status = models.CharField(max_length=20, choices=CallStatus.choices, default=CallStatus.INITIATED)
    # patient_id = models.ForeignKey(User, on_delete=models.CASCADE, related_name='patient')
    call_type = models.CharField(max_length=10, choices=CallType.choices, default=CallType.VIDEO)
    notes = models.TextField(null=True, blank=True)
    duration = models.IntegerField(null=True, blank=True)
    call_data = models.JSONField(null=True, blank=True)
    priority = models.IntegerField(choices=CallPriority.choices, default=CallPriority.MEDIUM)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def save(self, *args, **kwargs):
        if self.end_time:
            self.duration = (self.end_time - self.start_time).seconds // 60
        super().save(*args, **kwargs)

    def setToBusy(self):
        self.status = CallStatus.BUSY
        self.save()

    def setToFailed(self):
        self.status = CallStatus.FAILED
        self.save()

    def setToInProgress(self):
        self.status = CallStatus.IN_PROGRESS
        self.save()

    def setToCompleted(self):
        self.status = CallStatus.IN_PROGRESS
        self.save()

    def setToDeclined(self):
        self.status = CallStatus.DECLINED
        self.save()
