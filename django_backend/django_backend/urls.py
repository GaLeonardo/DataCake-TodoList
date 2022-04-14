from django.conf.urls import include
from django.contrib import admin
from django.urls import re_path as url

from to_do.urls import router as to_do_router

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^api/', include(to_do_router.urls)),
]