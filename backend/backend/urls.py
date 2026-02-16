
from django.contrib import admin
from django.urls import path,include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/user/', include('userApp.urls')),
    path('api/contactapp/', include('contactApp.urls')),
    path('api/farmer/', include('farmerApp.urls')),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

