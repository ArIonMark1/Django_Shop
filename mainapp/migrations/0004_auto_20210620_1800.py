# Generated by Django 2.2 on 2021-06-20 16:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mainapp', '0003_auto_20210620_1759'),
    ]

    operations = [
        migrations.AlterField(
            model_name='productcategory',
            name='is_active',
            field=models.BooleanField(default=True, verbose_name='active'),
        ),
    ]
