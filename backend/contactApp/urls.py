from django.urls import path
from . import views

urlpatterns = [
    
    path("contact/", views.store_contact),
    # path("login/", views.login_view),
    # path("profile/<int:user_id>/", views.profile_view),
]
