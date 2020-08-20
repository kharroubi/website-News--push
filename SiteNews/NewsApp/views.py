from django.shortcuts import render , HttpResponse
from django.template import RequestContext

from .models import Post
from django.shortcuts import get_object_or_404
from .forms import ContactForm
from datetime import datetime
from django.shortcuts import render, redirect
from django.core.mail import send_mail, BadHeaderError



def contact(request):
    if request.method == 'GET':
        form = ContactForm()
    else:
        form = ContactForm(request.POST)
        if form.is_valid():
            subject = form.cleaned_data['subject']
            message = form.cleaned_data['message']
            email = form.cleaned_data['email']
            cc_myself = form.cleaned_data['cc_myself']
            recipients = ['kharroubi.naoufel@gmail.com']
            try:
                if cc_myself:
                    recipients.append(email)
                send_mail(subject, message + "---->:" + email , email,recipients )
            except BadHeaderError:
                return HttpResponse('Invalid header found.')
            return redirect('success')
    return render(request, "NewsApp/contact.html", {'form': form})




def index(request):
    posts = Post.objects.filter(category__id="2").order_by('-id')[:3]
    lastposts = Post.objects.filter(category__id="3").order_by('-id')[:6]
    urgentposts = Post.objects.filter(category__id="7").order_by('-id')[:4]
    moreReadposts = Post.objects.filter(category__id="4").order_by('-id')[:4]
    healthposts = Post.objects.filter(category__id="5").order_by('-id')[:4]
    Technologyposts= Post.objects.filter(category__id="6").order_by('-id')[:4]
    context = {'posts': posts,
               'lastposts': lastposts,
               'urgentposts':urgentposts,
               'moreReadposts': moreReadposts,
               'healthposts': healthposts,
               'date': datetime.now(),
             }
    return render(request,"index.html",context)


def post_details(request, id):
    nb_postviews = Post.objects.get(id=id)
    nb_postviews.nb_views += 1 
    nb_postviews.save() 
    post_details = get_object_or_404(Post, id=id)
    posts = Post.objects.order_by('-id')[:10]
    lastposts = Post.objects.filter(category__id="3").order_by('-id')[:6]
    urgentposts = Post.objects.filter(category__id="7").order_by('-id')[:4]
    moreReadposts = Post.objects.filter(category__id="4").order_by('-id')[:4]
    healthposts = Post.objects.filter(category__id="5").order_by('-id')[:4]
    Technologyposts = Post.objects.filter(category__id="6").order_by('-id')[:4]
    context ={'post_details': post_details ,
              'lastposts': lastposts,
              'urgentposts': urgentposts,
              'healthposts': healthposts,
              'moreReadposts': moreReadposts,
              'posts': posts,
              'date': datetime.now(),
              'nb_views' : nb_postviews,
              }
    return render(request, 'NewsApp/post_details.html', context)

def health(request):

    posts = Post.objects.order_by('-id')[:10]
    lastposts = Post.objects.filter(category__id="3").order_by('-id')[:6]
    urgentposts = Post.objects.filter(category__id="7").order_by('-id')[:4]
    moreReadposts = Post.objects.filter(category__id="4").order_by('-id')[:4]
    healthposts = Post.objects.filter(category__id="5").order_by('-id')[:4]
    Technologyposts = Post.objects.filter(category__id="6").order_by('-id')[:4]
    context ={'post_details': post_details ,
              'lastposts': lastposts,
              'urgentposts': urgentposts,
              'healthposts': healthposts,
              'moreReadposts': moreReadposts,
              'posts': posts,
              'date': datetime.now(),

              }
    return render(request, 'NewsApp/health.html', context)

def politic(request):

    posts = Post.objects.order_by('-id')[:10]
    lastposts = Post.objects.filter(category__id="3").order_by('-id')[:6]
    urgentposts = Post.objects.filter(category__id="7").order_by('-id')[:4]
    moreReadposts = Post.objects.filter(category__id="4").order_by('-id')[:4]
    healthposts = Post.objects.filter(category__id="5").order_by('-id')[:4]
    Technologyposts = Post.objects.filter(category__id="6").order_by('-id')[:4]
    context ={'post_details': post_details ,
              'lastposts': lastposts,
              'urgentposts': urgentposts,
              'healthposts': healthposts,
              'moreReadposts': moreReadposts,
              'posts': posts,
              'date': datetime.now(),

              }
    return render(request, 'NewsApp/politic.html', context)


def video(request):

    posts = Post.objects.order_by('-id')[:10]
    lastposts = Post.objects.filter(category__id="3").order_by('-id')[:6]
    urgentposts = Post.objects.filter(category__id="7").order_by('-id')[:4]
    moreReadposts = Post.objects.filter(category__id="4").order_by('-id')[:4]
    healthposts = Post.objects.filter(category__id="5").order_by('-id')[:4]
    Technologyposts = Post.objects.filter(category__id="6").order_by('-id')[:4]
    context ={'post_details': post_details ,
              'lastposts': lastposts,
              'urgentposts': urgentposts,
              'healthposts': healthposts,
              'moreReadposts': moreReadposts,
              'posts': posts,
              'date': datetime.now(),

              }
    return render(request, 'NewsApp/video.html', context)

def travel(request):

    posts = Post.objects.order_by('-id')[:10]
    lastposts = Post.objects.filter(category__id="3").order_by('-id')[:6]
    urgentposts = Post.objects.filter(category__id="7").order_by('-id')[:4]
    moreReadposts = Post.objects.filter(category__id="4").order_by('-id')[:4]
    healthposts = Post.objects.filter(category__id="5").order_by('-id')[:4]
    Technologyposts = Post.objects.filter(category__id="6").order_by('-id')[:4]
    context ={'post_details': post_details ,
              'lastposts': lastposts,
              'urgentposts': urgentposts,
              'healthposts': healthposts,
              'moreReadposts': moreReadposts,
              'posts': posts,
              'date': datetime.now(),

              }
    return render(request, 'NewsApp/travel.html', context)


def basetest(request):
    posts = Post.objects.filter(category__id="2").order_by('-id')[:2]
    lastposts = Post.objects.filter(category__id="3").order_by('-id')[:6]
    urgentposts = Post.objects.filter(category__id="7").order_by('-id')[:4]
    moreReadposts = Post.objects.filter(category__id="4").order_by('-id')[:4]
    healthposts = Post.objects.filter(category__id="5").order_by('-id')[:4]
    Technologyposts = Post.objects.filter(category__id="6").order_by('-id')[:4]
    context = {'posts': posts,
               'lastposts': lastposts,
               'urgentposts': urgentposts,
               'moreReadposts': moreReadposts,
               'healthposts': healthposts,
               'date': datetime.now(),
               }
    return render(request, "NewsApp/base-test.html")


def about(request):
    posts = Post.objects.filter(category__id="3").order_by('-id')[:4]
    lastposts = Post.objects.filter(category__id="3").order_by('-id')[:6]
    urgentposts = Post.objects.filter(category__id="7").order_by('-id')[:4]
    moreReadposts = Post.objects.filter(category__id="4").order_by('-id')[:4]
    healthposts = Post.objects.filter(category__id="5").order_by('-id')[:4]
    Technologyposts = Post.objects.filter(category__id="6").order_by('-id')[:4]
    context = {'posts': posts,
               'lastposts': lastposts,
               'urgentposts': urgentposts,
               'moreReadposts': moreReadposts,
               'healthposts': healthposts,
               'date': datetime.now(),
               }
    return render(request, "NewsApp/about.html",context)


def base(request):
    posts = Post.objects.filter(category__id="2").order_by('-id')[:2]
    lastposts = Post.objects.filter(category__id="3").order_by('-id')[:6]
    urgentposts = Post.objects.filter(category__id="7").order_by('-id')[:4]
    moreReadposts = Post.objects.filter(category__id="4").order_by('-id')[:4]
    healthposts = Post.objects.filter(category__id="5").order_by('-id')[:4]
    Technologyposts= Post.objects.filter(category__id="6").order_by('-id')[:4]
    context = {'posts': posts,
               'lastposts': lastposts,
               'urgentposts':urgentposts,
               'moreReadposts': moreReadposts,
               'healthposts': healthposts,
               'date': datetime.now(),
             }
    return render(request, "NewsApp/base-test.html", context)
def divers(request):

    posts = Post.objects.order_by('-id')[:10]
    lastposts = Post.objects.filter(category__id="3").order_by('-id')[:6]
    urgentposts = Post.objects.filter(category__id="7").order_by('-id')[:4]
    moreReadposts = Post.objects.filter(category__id="4").order_by('-id')[:4]
    healthposts = Post.objects.filter(category__id="5").order_by('-id')[:4]
    Technologyposts = Post.objects.filter(category__id="6").order_by('-id')[:4]
    context ={'post_details': post_details ,
              'lastposts': lastposts,
              'urgentposts': urgentposts,
              'healthposts': healthposts,
              'moreReadposts': moreReadposts,
              'posts': posts,
              'date': datetime.now(),

              }
    return render(request, 'NewsApp/divers.html', context)
def bisness(request):

    posts = Post.objects.order_by('-id')[:10]
    lastposts = Post.objects.filter(category__id="3").order_by('-id')[:6]
    urgentposts = Post.objects.filter(category__id="7").order_by('-id')[:4]
    moreReadposts = Post.objects.filter(category__id="4").order_by('-id')[:4]
    healthposts = Post.objects.filter(category__id="5").order_by('-id')[:4]
    Technologyposts = Post.objects.filter(category__id="6").order_by('-id')[:4]
    context ={'post_details': post_details ,
              'lastposts': lastposts,
              'urgentposts': urgentposts,
              'healthposts': healthposts,
              'moreReadposts': moreReadposts,
              'posts': posts,
              'date': datetime.now(),

              }
    return render(request, 'NewsApp/bisness.html', context)

