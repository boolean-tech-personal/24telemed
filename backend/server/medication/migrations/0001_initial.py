# Generated by Django 4.2.9 on 2024-02-17 22:57

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ("patient", "0001_initial"),
    ]

    operations = [
        migrations.CreateModel(
            name="Drug",
            fields=[
                (
                    "id",
                    models.UUIDField(
                        default=uuid.uuid4,
                        editable=False,
                        primary_key=True,
                        serialize=False,
                    ),
                ),
                ("name", models.CharField(max_length=100)),
                ("description", models.TextField(blank=True, null=True)),
                (
                    "manufacturer",
                    models.CharField(blank=True, max_length=100, null=True),
                ),
                (
                    "active_ingredient",
                    models.CharField(blank=True, max_length=100, null=True),
                ),
                (
                    "dosage_form",
                    models.CharField(blank=True, max_length=100, null=True),
                ),
                ("strength", models.CharField(blank=True, max_length=50, null=True)),
                ("created_at", models.DateTimeField(auto_now_add=True)),
                ("updated_at", models.DateTimeField(auto_now=True)),
            ],
        ),
        migrations.CreateModel(
            name="MedicalEncounter",
            fields=[
                (
                    "id",
                    models.UUIDField(
                        default=uuid.uuid4,
                        editable=False,
                        primary_key=True,
                        serialize=False,
                    ),
                ),
                ("reason_for_visit", models.CharField(max_length=1024)),
                ("assessment_and_diagnosis", models.TextField(blank=True, null=True)),
                (
                    "treatment_and_interventions",
                    models.TextField(blank=True, null=True),
                ),
                ("follow_up_plans", models.TextField(blank=True, null=True)),
                ("created_at", models.DateTimeField(auto_now_add=True)),
                ("updated_at", models.DateTimeField(auto_now=True)),
                (
                    "doctor",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="prescriptions_given",
                        to=settings.AUTH_USER_MODEL,
                    ),
                ),
                (
                    "patient",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="prescriptions_received",
                        to="patient.patient",
                    ),
                ),
            ],
        ),
        migrations.CreateModel(
            name="PrescribedDrug",
            fields=[
                (
                    "id",
                    models.UUIDField(
                        default=uuid.uuid4,
                        editable=False,
                        primary_key=True,
                        serialize=False,
                    ),
                ),
                ("dosage", models.CharField(max_length=250)),
                ("frequency", models.CharField(max_length=250)),
                ("created_at", models.DateTimeField(auto_now_add=True)),
                ("updated_at", models.DateTimeField(auto_now=True)),
                (
                    "drug",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to="medication.drug",
                    ),
                ),
                (
                    "medical_encounter",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="prescribed_drugs",
                        to="medication.medicalencounter",
                    ),
                ),
            ],
        ),
    ]
