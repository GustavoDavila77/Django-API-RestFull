#con este archivo vamos a poder realizar un crud sobre nuestro objeto
from rest_framework import viewsets

from .models import Book
from .serializer import BookSerializer

class BookViewSet(viewsets.ModelViewSet):
	queryset = Book.objects.all()
	serializer_class = BookSerializer