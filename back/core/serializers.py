from rest_framework import serializers
from .models import Custos 


class CustosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Custos
        fields = '__all__'
