# Generated by Django 4.2.7 on 2023-11-27 22:42

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('pet_app', '0002_owner_pet_pets'),
    ]

    operations = [
        migrations.RenameField(
            model_name='pet',
            old_name='pets',
            new_name='owner',
        ),
    ]
