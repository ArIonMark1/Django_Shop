# Generated by Django 2.2 on 2021-06-04 08:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0002_auto_20210604_1003'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='age',
            field=models.PositiveIntegerField(blank=True, default=0, verbose_name='Age'),
        ),
    ]
