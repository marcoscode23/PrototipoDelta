import reflex as rx
from .products import CartState


def checkout_thanks() -> rx.Component:
    # Colores: texto principal en negro, color llamativo para acentos
    accent = "#DAA520"

    # Usaremos las vars reactivas de CartState para mostrar montos y evitar operaciones con EventSpec
    tarjeta_pct = 0.05

    return rx.vstack(
        rx.hstack(
            rx.text(
                "25% OFF EFECTIVO - 20% OFF TRANSFERENCIA",
                height="50px",
                font_size="11px",
                padding="19px",
                color="white",
            ),
            justify="center",
            bg="black",
            width="100%",
            margin="0px",
            padding="0px",
            position="fixed",
            top="0",
            left="0",
            z_index="1000",
        ),

        # === CONTENIDO PRINCIPAL (imágenes arriba del todo) ===
        rx.center(
            rx.image(
                src="/fondo1.png",
                margin_top="30px",
                width=["90%", "500px"],
                height="auto",
                object_fit="contain",
            ),
        ),
        rx.center(
            rx.image(src="/cambio.png", margin_top="10px", width=["70%", "auto"]),
        ),

        rx.box(
            rx.vstack(
                rx.text("¡Gracias por tu compra!", font_size="24px", font_weight="bold", color="black"),
                rx.text("Tu pago se procesó correctamente.", font_size="16px", color="black"),
                rx.text("Resumen:", font_weight="semibold", color="black"),

                # Desglose de montos
                rx.vstack(
                    rx.hstack(rx.text("Subtotal:", color="black"), rx.text(CartState.formatted_total_amount, color=accent, font_weight="bold", margin_left="auto")),
                    rx.hstack(rx.text(f"Recargo pago con tarjeta ({int(tarjeta_pct*100)}%):", color="black"), rx.text(CartState.formatted_recargo_tarjeta, color=accent, margin_left="auto")),
                    rx.hstack(rx.text("Envío:", color="black"), rx.text(CartState.formatted_envio_amount, color=accent, margin_left="auto")),
                    rx.divider(margin_y="6px"),
                    rx.hstack(rx.text("Total a pagar:", font_weight="bold", color="black"), rx.text(CartState.formatted_total_with_fee, color=accent, font_weight="bold", margin_left="auto")),
                    spacing="2",
                    width="100%",
                ),

                rx.text("En breve recibirás un correo con los detalles de tu pedido.", font_size="13px", color="black"),

                rx.hstack(
                    rx.link("Volver al inicio", href="/", color=accent),
                    rx.link("Seguir comprando", href="/products", color=accent),
                    spacing="4",
                ),

                spacing="3",
                align="center",
            ),
            padding="30px",
            border_radius="12px",
            box_shadow="0 4px 12px rgba(0,0,0,0.1)",
            bg="white",
        ),
        rx.center(
            rx.image(src="/delta.png", margin_top="10px", width=["70%", "auto"]),
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
        min_height="60vh",
    )
