from django.conf import settings
from django.db import models

# Create your models here.
from django.urls import reverse
from django.utils import timezone


class Post(models.Model):
    code = models.CharField(max_length=12, blank=True, null=True)
    category = models.ForeignKey('Category', on_delete=models.CASCADE)
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    text = models.TextField(max_length=5000)
    created_date = models.DateTimeField(default=timezone.now, blank=True, null=True)
    published_date = models.DateTimeField(blank=True, null=True)
    updated_at = models.DateTimeField(auto_now_add=True)
    img = models.ImageField(upload_to='imgPost/', null=True, blank=True)

    def get_absolute_url(self):
        return reverse('post_details', args=[str(self.id)])


    def __str__(self):
        return self.title

    def publish(self):
        self.published_date = timezone.now()
        self.save()

    # def save(self, *args, **kwargs):
    ## logic
    # self.code = "##"+((str(self.id)).center(10,"0"))
    # super(Post.self).save(*args, **kwargs)


class newsImages(models.Model):
    news = models.ForeignKey(Post, related_name=("صور"), on_delete=models.CASCADE)
    image = models.ImageField(upload_to='post_img/')


class Category(models.Model):
    name = models.CharField(max_length=50)

    # main_category = models.ForeignKey('self', limit_choices_to={'main_category':None},related_name='maincategory', on_delete=models.CASCADE , blank=True, null=True)
    def __str__(self):
        return self.name



