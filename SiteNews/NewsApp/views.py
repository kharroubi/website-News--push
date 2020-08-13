from django.shortcuts import render , HttpResponse
from .models import Post
# Create your views here.

#.filter(category__id=2)

def index(request):
    posts = Post.objects.all().order_by('-id')[:3]
    context = {'posts': posts}

    return render(request,"index.html",context)



def single6(request):
    return render(request,"post/single6.html")

def base(request):
    posts = Post.objects.all().order_by('-id')[:3]
    context = {'posts': posts}
    return render(request, "base.html", context)


