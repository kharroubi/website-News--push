
from django import forms
from .models import Post


class PostForm(forms.ModelForm):
    class Meta:
        model = Post
        fields = ('category','author','title','nb_views')

class ContactForm(forms.Form):
    email = forms.EmailField(required=True)
    subject = forms.CharField(required=True)
    message = forms.CharField(widget=forms.Textarea, required=True)
    cc_myself = forms.BooleanField(required=False)

    def __init__(self, *args, **kwargs):
        super(ContactForm, self).__init__(*args, **kwargs)
        self.fields['email'].label = "الإيميل "
        self.fields['subject'].label = ":العنوان"
        self.fields['message'].label ="الرسالة"
        self.fields['cc_myself'].label = "__ إرسال نسخة لي"