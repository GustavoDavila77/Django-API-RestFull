from .models import Book
from rest_framework import serializers

#esta clase nos permitirá transportar objetos a través de la red (JSON, xml, etc)
class BookSerializer(serializers.ModelSerializer):
	#indica los campos que vamos a incluir
	class Meta:
		model = Book
		fields = '__all__'