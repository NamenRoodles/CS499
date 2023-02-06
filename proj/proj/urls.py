from django.contrib import admin
from django.urls import path

from members.views import member_list_view, details, main, testing

urlpatterns = [
    path("", main),
    path("admin/", admin.site.urls),
    path("members/", member_list_view),
    path("members/details/<int:id>", details),
    path("testing/", testing)
]
