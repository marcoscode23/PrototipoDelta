import reflex as rx
from .products import CartState


def checkout_thanks() -> rx.Component:
    return rx.center(
        rx.box(
            rx.vstack(
                rx.text("¡Gracias por tu compra!", font_size="24px", font_weight="bold"),
                rx.text("Tu pago se procesó correctamente.", font_size="16px", color="#555"),
                rx.text("Resumen:", font_weight="semibold"),
                rx.text(CartState.total_text, color="#DAA520", font_weight="bold"),

                rx.text("En breve recibirás un correo con los detalles de tu pedido.", font_size="13px", color="#555"),

                rx.hstack(
                    rx.link("Volver al inicio", href="/"),
                    rx.link("Seguir comprando", href="/products"),
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
        min_height="60vh",
    )
