
from django.contrib import admin
from django.urls import path,include


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('userApp.urls')),
    path('api/', include('contactApp.urls')),
    path('api/farmer/', include('farmerApp.urls')),
]
