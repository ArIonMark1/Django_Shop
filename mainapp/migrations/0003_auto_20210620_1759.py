# Generated by Django 2.2 on 2021-06-20 15:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mainapp', '0002_productcategory_is_active'),
    ]

    operations = [
        migrations.AlterField(
            model_name='productcategory',
            name='is_active',
            field=models.BooleanField(default=False, verbose_name='active'),
        ),
    ]
