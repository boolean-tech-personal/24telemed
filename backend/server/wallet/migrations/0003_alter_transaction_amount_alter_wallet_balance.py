# Generated by Django 4.2.9 on 2024-09-08 09:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("wallet", "0002_alter_transaction_amount_alter_wallet_balance"),
    ]

    operations = [
        migrations.AlterField(
            model_name="transaction",
            name="amount",
            field=models.FloatField(default=0, null=True),
        ),
        migrations.AlterField(
            model_name="wallet",
            name="balance",
            field=models.FloatField(default=0, null=True),
        ),
    ]
