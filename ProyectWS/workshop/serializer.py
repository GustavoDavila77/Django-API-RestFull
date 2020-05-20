from .models import WorkShop
from rest_framework import serializers

#esta clase nos permitirá transportar objetos a través de la red (JSON, xml, etc)
class WorkShopSerializer(serializers.ModelSerializer):
	class Meta:
		#se indica el modelo de la bd y los campos a incluir
		model = WorkShop
		fields = '__all__'