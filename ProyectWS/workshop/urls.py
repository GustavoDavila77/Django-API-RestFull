from rest_framework import routers

from .viewsets import WorkShopViewSet

router = routers.SimpleRouter()
router.register('workshops', WorkShopViewSet)

urlpatterns = router.urls