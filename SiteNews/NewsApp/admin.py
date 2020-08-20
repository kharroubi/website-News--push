from django.contrib import admin

# Register your models here.

from .models import Post, Category



admin.site.register(Category)


class PostAdmin(admin.ModelAdmin):
   model = Post
   list_display = ['id', 'title', 'created_date', 'category', 'author']
   list_display_links = ('id',)

   search_fields = ['category']
   list_filter = ['category']

admin.site.register(Post ,PostAdmin)

