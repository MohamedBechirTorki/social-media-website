# Generated by Django 4.2.4 on 2023-08-18 16:29

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0006_alter_comment_user'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='post',
            name='comments',
        ),
    ]
