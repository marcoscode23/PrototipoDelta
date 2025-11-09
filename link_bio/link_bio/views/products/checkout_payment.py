import reflex as rx
from .products import CartState


def checkout_payment() -> rx.Component:
    return rx.center(
        rx.vstack(
            rx.box(
                rx.vstack(
                    rx.text("Pago con tarjeta", font_size="20px", font_weight="bold", color="black"),
                    rx.text("Ingrese los datos de su tarjeta de crédito o débito", font_size="14px", color="black"),

                    rx.input(placeholder="Titular de la tarjeta", value=CartState.card_holder, on_change=lambda v, k="card_holder": CartState.set_field(k, v), color="black", _placeholder={"color": "black"}),
                    rx.input(placeholder="Número de tarjeta", value=CartState.card_number, on_change=lambda v, k="card_number": CartState.set_field(k, v), color="black", _placeholder={"color": "black"}),

                    rx.hstack(
                        rx.input(placeholder="MM/AA", value=CartState.card_expiry, on_change=lambda v, k="card_expiry": CartState.set_field(k, v), color="black", _placeholder={"color": "black"}),
                        rx.input(placeholder="CVC", value=CartState.card_cvc, on_change=lambda v, k="card_cvc": CartState.set_field(k, v), color="black", _placeholder={"color": "black"}),
                        spacing="3",
                    ),

                    rx.text("Resumen", font_weight="semibold", color="black"),
                    rx.text(CartState.total_text, color="black", font_weight="bold"),

                    rx.hstack(
                        rx.button("Finalizar compra", bg="#DAA520", color="black", on_click=CartState.confirm_payment),
                        rx.link("Volver a datos de entrega", href="/checkout"),
                        spacing="3",
                    ),

                    spacing="3",
                    width=["65%", "520px"],
                    align="start",
                ),
                color="black",
                padding="20px",
                border_radius="12px",
                box_shadow="0 4px 12px rgba(0,0,0,0.1)",
                bg="white",
            ),

            # === FOOTER (igual que en checkout_contact) ===
            rx.box(
                rx.hstack(
                    rx.vstack(
                        rx.text("NAVEGACIÓN", weight="bold", color="white", font_size="15px"),
                        rx.link("Inicio", href="/", color="white"),
                        rx.link("Productos", href="/products", color="white"),
                        rx.link("Contacto", href="https://wa.me/543794258727?text=Hola%20Delta%20Store%20👋%2C%20quiero%20consultar%20por%20unas%20zapatillas.", color="white"),
                        spacing="2",
                        align="start",
                        width=["100%","25%"],
                        padding_x=["8px","12px"],
                    ),
                    rx.vstack(
                        rx.text("MEDIOS DE PAGO", weight="bold", color="white", font_size="15px"),
                        rx.image(src="/tarjetas.png", height=["50px","100px"]),
                        rx.center(
                            rx.vstack(
                                rx.text("FORMAS DE ENVÍO", weight="bold", font_size="14px", color="white"),
                                rx.image(src="/correoargentino@2x.png", height=["20px","30px"]),
                                rx.link("SEGUIMIENTO DE ENVIOS", href="https://www.correoargentino.com.ar/formularios/e-commerce", color="white", font_size="15px", weight="bold"),
                                spacing="2",
                            ),
                            bg="black",
                            padding_bottom="20px",
                        ),
                        spacing="2",
                        align="start",
                        width=["100%","25%"],
                        padding_x=["8px","12px"],
                    ),
                    rx.vstack(
                        rx.text("CONTACTANOS", weight="bold", color="white", font_size="15px"),
                        rx.hstack(rx.icon("phone", color="white", size=16), rx.text("02954 806873", color="white")),
                        rx.hstack(rx.icon("mail", color="white", size=16), rx.text("shoesdeltastore@gmail.com", color="white")),
                        rx.hstack(rx.icon("map-pin", color="white", size=16), rx.text("JUNIN 868", color="white")),
                        spacing="1",
                        align="start",
                        width=["100%","25%"],
                        padding_x=["8px","12px"],
                    ),
                    rx.vstack(
                        rx.text("REDES SOCIALES", weight="bold", color="white", font_size="15px"),
                        rx.link(rx.icon("instagram", color="white", size=22), href="https://www.instagram.com", is_external=True),
                        rx.text("NEWSLETTER", weight="bold", color="white", font_size="15px", margin_top="10px"),
                        rx.hstack(
                            rx.input(placeholder="shoesdeltastore@gmail.com", width=["100%","150px"], height="35px", color="black", _placeholder={"color": "black"}),
                            rx.button(rx.icon("send"), bg="white", color="black"),
                        ),
                        spacing="2",
                        align="start",
                        width=["100%","25%"],
                        padding_x=["8px","12px"],
                    ),
                    justify="center",
                    align="start",
                    padding=["20px","40px"],
                    bg="black",
                    wrap="wrap",
                    spacing="6",
                ),
                width="100%",
            ),

            rx.center(
                rx.text("COPYRIGHT DELTA STORE - 2025. TODOS LOS DERECHOS RESERVADOS", color="black", font_size="12px"),
                bg="white",
                padding_y="10px",
                border_top="1px solid #333",
                text_align="center",
                justify="center",
            ),

            rx.center(
                rx.text(
                    "DEFENSA DE LAS Y LOS CONSUMIDORES. PARA RECLAMOS ",
                    color="black",
                    font_size="12px",
                    display="inline",
                    style={"whiteSpace": "nowrap"},
                ),
            ),

            rx.center(
                rx.link(
                    "INGRESÁ ACÁ.",
                    href="https://autogestion.produccion.gob.ar/consumidores",
                    color="black",
                    font_size="12px",
                    font_weight="bold",
                    text_decoration="none",
                    display="inline",
                    margin_right="5px",
                    _hover={"text_decoration": "underline"},
                ),
            ),

            rx.text(" / ", color="black", font_size="12px", display="inline"),

            rx.center(
                rx.link(
                    "BOTÓN DE ARREPENTIMIENTO",
                    href="/arrepentimiento",
                    color="black",
                    font_size="12px",
                    font_weight="bold",
                    text_decoration="none",
                    display="inline",
                    _hover={"text_decoration": "underline"},
                ),
            ),
            padding_y="60px",
            width="100%",
            align="center",
            justify="center",
            wrap="wrap",
            row_gap="40px",
            bg="white",
        ),
        min_height="60vh",
    )
