
from django.contrib import admin
from django.urls import path
from lynx import views

urlpatterns = [

    path("admin/", admin.site.urls),
    path("", views.index),

]

