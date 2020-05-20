from rest_framework import routers

from .viewsets import BookViewSet

#por medio de router se permite ejecutar los verbos get,post, delete, etc
#La clase SimpleRouter genera las rutas basicas para nuestro api
router = routers.SimpleRouter()
router.register('books', BookViewSet) #se registra la ruta

urlpatterns = router.urls