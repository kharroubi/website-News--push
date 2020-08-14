from django.shortcuts import render , HttpResponse
from .models import Post
from django.shortcuts import get_object_or_404

# Create your views here.

#.filter(category__id=2)

from datetime import datetime
from django.shortcuts import render


def index(request):
    posts = Post.objects.filter(category__id="2").order_by('-id')[:3]
    lastposts = Post.objects.filter(category__id="1").order_by('-id')[:6]
    urgentposts = Post.objects.filter(category__id="3").order_by('-id')[:4]
    moreReadposts = Post.objects.filter(category__id="3").order_by('-id')[:4]
    context = {'posts': posts,
               'lastposts': lastposts,
               'urgentposts':urgentposts,
               'moreReadposts': moreReadposts,
               'date': datetime.now(),
             }
    return render(request,"index.html",context)


def post_details(request, id):
    post_details = get_object_or_404(Post, id=id)
    posts = Post.objects.filter(category__id="2").order_by('-id')[:3]
    lastposts = Post.objects.filter(category__id="1").order_by('-id')[:6]
    urgentposts = Post.objects.filter(category__id="3").order_by('-id')[:4]
    moreReadposts = Post.objects.filter(category__id="3").order_by('-id')[:4]
    context ={'post_details': post_details ,
              'lastposts': lastposts,
              'urgentposts': urgentposts,
              'moreReadposts': moreReadposts,
              'posts': posts
              }
    return render(request, 'NewsApp/post_details.html', context)



def single6(request):
    return render(request,"post/single6.html")

def base(request):
    posts = Post.objects.all().order_by('-id')[:3]
    context = {'posts': posts,
               'date': datetime.now()
               }
    return render(request, "base.html", context)


