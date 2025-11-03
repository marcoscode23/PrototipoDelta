import reflex as rx 
from link_bio.components.navbar import navbar
from link_bio.components.footer import footer
from link_bio.views.header.header import header
from link_bio.views.button.button import button
from link_bio.views.products.products import products
from link_bio.views.arrepentimiento.arrepentimiento import arrepentimiento
from link_bio.views.products.detalle_page import detalle_page
from link_bio.views.cuentas.login import login
from link_bio.views.cuentas.register import register
from link_bio.views.cuentas.reset_password import reset_password
from link_bio.utils import normalize_nombre



class State(rx.State):
    pass

def index() -> rx.Component:
    return rx.box(
        rx.center(  
            rx.vstack(
            navbar(),
            header(),
            button(),
            footer(),
            align="center",  
            color="while",
            width="100%",
            spacing="8",
            
        ),
        ),
        appearance="dark",
        has_background=True,
        radius="large",
        accent_color="pink",
        bg="white",
        font_family="Poppins, sans-serif",
        width="100%",
        min_height="100vh",
        bg_size="cover",            
        bg_repeat="no-repeat", 
        bg_position="center",
    )



app = rx.App()
app.add_page(index, route="/")
app.add_page(products, route="/products")
app.add_page(arrepentimiento, route="/arrepentimiento")
app.add_page(login, route="/login")
app.add_page(register, route="/register")
app.add_page(reset_password, route="/reset_password")
app.add_page(lambda **kwargs: detalle_page(**kwargs), route="/detalle/[nombre]")
app._compile()

