from rest_framework import viewsets
from .models import Custos
from .serializers import CustosSerializer
from rest_framework.response import Response
from rest_framework.authentication import TokenAuthentication, SessionAuthentication
from rest_framework.permissions import IsAuthenticated


class CustosSerializer(viewsets.ModelViewSet):

    serializer_class = CustosSerializer
    queryset = Custos.objects.all()
    authentication_classes = [TokenAuthentication, SessionAuthentication]
    permission_classes = [IsAuthenticated, ]

    def custos(self, request, *args, **kwargs):
        queryset = Custos.objects.all()
        serializer = CustosSerializer(queryset, many=True)
        return Response(serializer.data)
