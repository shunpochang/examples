from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Comment
from .serializers import CommentSerializer

# Create your views here.
@api_view(['GET', 'POST', ])
def comment_list(request):
    """ List first 10 comments, or create a new comment"""
    if request.method == 'POST':
        form_data = request.POST
	if form_data:
	    c = Comment(
	        comment_author=form_data['author'],
	    	comment_text=form_data['text'],
	    )
	    c.save()
    data = [{'id': 1, 'author': "Tester", 'text': "Testing"}]
    comment_data = Comment.objects.order_by('id')
    if comment_data:
	data = CommentSerializer(comment_data, many=True).data
    return Response(data)
