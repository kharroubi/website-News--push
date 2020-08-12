from django.shortcuts import render , HttpResponse
from .models import Post
# Create your views here.
def index(request):
    posts = Post.objects.all().order_by('-id')[:2]
    context = {'posts': posts}
    return render(request,"index.html",context)



def single6(request):
    return render(request,"post/single6.html")

def base(request):
    return render(request,"base.html")

