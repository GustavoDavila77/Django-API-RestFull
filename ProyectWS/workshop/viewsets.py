from rest_framework import viewsets
from .models import WorkShop
from .serializer import WorkShopSerializer

#nos permite hacer el crud con la api
class WorkShopViewSet(viewsets.ModelViewSet):
	queryset = WorkShop.objects.all()
	serializer_class = WorkShopSerializer