from drf_yasg.views import get_schema_view
from drf_yasg import openapi

schema_view = get_schema_view(
    openapi.Info(
        title="PyVarotra API",
        default_version="v1",
        description="PyVarotra API Documentation",
        terms_of_service="https://www.pyvarotra.com/policies/terms/",
        contact=openapi.Contact(email="monja.sesame@example.com"),
        license=openapi.License(name="BSD License"),
    ),
    public=True,
)
