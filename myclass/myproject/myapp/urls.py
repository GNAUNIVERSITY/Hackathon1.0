

from django.urls import path
from myapp import views

urlpatterns = [
    
    path('login/',views.loginpage,name='login'),
    path('logout/',views.logoutUser,name='logout'),
    path('register/',views.registerpage,name='register'),

    path('',views.home,name="home"),
    path('room/<str:pk>/',views.room,name="room"),
    # path('profile/<str:pk>/',views.userProfile,name='user-Profile'),

    path('create-Room/',views.createRoom,name="create-Room"),
    path('update-Room/<str:pk>/',views.updateRoom,name="update-Room"),
    path('delete-Room/<str:pk>/',views.deleteRoom,name="delete-Room"),
    path('delete-message/<str:pk>/',views.deleteMessage,name="delete-message")

]
