# Generated by Django 4.2.9 on 2024-03-14 06:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("users", "0005_remove_user_name_user_user_type_delete_patientrecord"),
    ]

    operations = [
        migrations.AddField(
            model_name="user",
            name="photo",
            field=models.ImageField(blank=True, null=True, upload_to="profile_photos/"),
        ),
    ]
