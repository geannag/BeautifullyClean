# from django.shortcuts import render
from api.models import Lead
from api.serializers import LeadSerializer
from rest_framework import generics

class LeadListCreate(generics.ListCreateAPIView):
    queryset = Lead.objects.all()
    serializer_class = LeadSerializer

# Create your views here.
