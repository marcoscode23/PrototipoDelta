import reflex as rx
from .products import CartState


def checkout_payment() -> rx.Component:
    return rx.center(
        rx.vstack(
            # Contenedor principal del formulario con acordeones
            rx.box(
                rx.vstack(
                    # === Envío (acordeón) ===
                    rx.hstack(
                        rx.hstack(rx.icon("map-pin", size=20, color="#333"), rx.text("Envío y dirección", font_size="18px", font_weight="bold", color="black")),
                        rx.icon("chevron-down", on_click=CartState.toggle_shipping, cursor="pointer", color="black", size=20, style=rx.cond(CartState.shipping_open, {"transform": "rotate(180deg)", "transition": "transform 0.25s"}, {"transform": "rotate(0deg)", "transition": "transform 0.25s"})),
                        justify="between",
                        align="center",
                        width="100%",
                    ),
                    rx.cond(
                        CartState.shipping_open,
                        rx.box(
                            rx.vstack(
                                # Mensajes fijos solicitados por el usuario
                                rx.text("HEY! Si sos de Santa Rosa/ Toay podes elegir envío express y abonar cuando recibas!", color="black"),
                                rx.text("Si sos de otra localidad de La Pampa, hablános así coordinamos tu envío con comisionista.", color="black"),

                                # Contenido dinámico: muestra o edita los datos de contacto guardados en CartState
                                rx.cond(
                                    CartState.shipping_editing,
                                    # Modo edición inline: inputs enlazados a CartState
                                    rx.vstack(
                                        rx.hstack(
                                            rx.input(placeholder="Nombre", value=CartState.buyer_nombre, on_change=lambda v, k="buyer_nombre": CartState.set_field(k, v), color="black", _placeholder={"color": "black"}),
                                            rx.input(placeholder="Apellido", value=CartState.buyer_apellido, on_change=lambda v, k="buyer_apellido": CartState.set_field(k, v), color="black", _placeholder={"color": "black"}),
                                            spacing="2",
                                        ),
                                        rx.hstack(
                                            rx.input(placeholder="Teléfono", value=CartState.buyer_telefono, on_change=lambda v, k="buyer_telefono": CartState.set_field(k, v), color="black", _placeholder={"color": "black"}),
                                            rx.input(placeholder="E-mail", value=CartState.buyer_email, on_change=lambda v, k="buyer_email": CartState.set_field(k, v), color="black", _placeholder={"color": "black"}),
                                            spacing="2",
                                        ),
                                        rx.hstack(
                                            rx.input(placeholder="Calle", value=CartState.buyer_calle, on_change=lambda v, k="buyer_calle": CartState.set_field(k, v), color="black", _placeholder={"color": "black"}),
                                            rx.input(placeholder="Número", value=CartState.buyer_numero, on_change=lambda v, k="buyer_numero": CartState.set_field(k, v), color="black", _placeholder={"color": "black"}),
                                            spacing="2",
                                        ),
                                        rx.hstack(
                                            rx.input(placeholder="CP", value=CartState.buyer_postal, on_change=lambda v, k="buyer_postal": CartState.set_field(k, v), color="black", _placeholder={"color": "black"}),
                                            rx.input(placeholder="Ciudad", value=CartState.buyer_ciudad, on_change=lambda v, k="buyer_ciudad": CartState.set_field(k, v), color="black", _placeholder={"color": "black"}),
                                            rx.input(placeholder="Provincia", value=CartState.buyer_provincia, on_change=lambda v, k="buyer_provincia": CartState.set_field(k, v), color="black", _placeholder={"color": "black"}),
                                            spacing="2",
                                        ),
                                        rx.hstack(
                                            rx.button("Guardar", bg="#DAA520", color="black", on_click=CartState.toggle_shipping_edit),
                                            rx.link("Ir a Contacto", href="/checkout"),
                                            spacing="3",
                                        ),
                                        spacing="2",
                                    ),
                                    # Modo lectura: muestra los datos guardados en CartState
                                    rx.vstack(
                                            rx.text(CartState.shipping_full_name, color="black"),
                                            rx.text(CartState.shipping_email, color="black"),
                                            rx.text(CartState.shipping_address, color="black"),
                                            rx.text(CartState.shipping_cityprov, color="black"),
                                            rx.text(CartState.shipping_phone, color="black"),
                                        rx.hstack(rx.link("Cambiar", href="/checkout"), rx.spacer(), rx.button("Editar", on_click=CartState.toggle_shipping_edit)),
                                        spacing="2",
                                    ),
                                ),

                                rx.text("NOTA: instrucciones especiales sobre el pedido.", color="black", font_weight="semibold"),
                                spacing="2",
                            ),
                            padding="12px",
                            bg="#f9f9f9",
                            border_radius="8px",
                            animation="slideDown 0.22s ease",
                        ),
                        rx.box(),
                    ),

                    rx.box(height="1px", bg="#e6e6e6", width="100%", margin_top="8px", margin_bottom="8px"),

                    # === Medios de pago (acordeón padre) ===
                    rx.hstack(
                        rx.text("Medio de pago", font_size="18px", font_weight="bold", color="black"),
                        rx.icon("chevron-down", on_click=CartState.toggle_payment_methods, cursor="pointer", size=20, style=rx.cond(CartState.payment_methods_open, {"transform": "rotate(180deg)", "transition": "transform 0.25s"}, {"transform": "rotate(0deg)", "transition": "transform 0.25s"})),
                        justify="between",
                        align="center",
                        width="100%",
                    ),

                    rx.cond(
                        CartState.payment_methods_open,
                        rx.vstack(
                            # Tarjeta
                            rx.box(
                                rx.hstack(
                                    rx.hstack(rx.icon("credit-card", size=18, color="#333"), rx.text("Tarjeta de crédito o débito", color="black", font_weight="semibold")),
                                    rx.text("hasta 3 cuotas sin interés", color="#666", font_size="12px"),
                                    rx.icon("chevron-down", on_click=CartState.toggle_tarjeta_details, cursor="pointer", style=rx.cond(CartState.tarjeta_details_open, {"transform": "rotate(180deg)", "transition": "transform 0.2s"}, {"transform": "rotate(0deg)", "transition": "transform 0.2s"})),
                                    justify="between",
                                    align="center",
                                    width="100%",
                                ),
                                padding="10px",
                                bg="#fff",
                                border_radius="6px",
                                box_shadow="0 1px 4px rgba(0,0,0,0.05)",
                            ),
                            rx.cond(
                                CartState.tarjeta_details_open,
                                rx.box(
                                    rx.vstack(
                                        rx.text("Ingrese los datos de su tarjeta de crédito o débito", font_size="14px", color="black"),
                                        rx.input(placeholder="Titular de la tarjeta", value=CartState.card_holder, on_change=lambda v, k="card_holder": CartState.set_field(k, v), color="black", _placeholder={"color": "black"}),
                                        rx.input(placeholder="Número de tarjeta", value=CartState.card_number, on_change=lambda v, k="card_number": CartState.set_field(k, v), color="black", _placeholder={"color": "black"}),
                                        rx.hstack(
                                            rx.input(placeholder="MM/AA", value=CartState.card_expiry, on_change=lambda v, k="card_expiry": CartState.set_field(k, v), color="black", _placeholder={"color": "black"}),
                                            rx.input(placeholder="CVC", value=CartState.card_cvc, on_change=lambda v, k="card_cvc": CartState.set_field(k, v), color="black", _placeholder={"color": "black"}),
                                        ),
                                        rx.text("Al cliquear la fecha se desplegará el formulario para cargar los datos de la tarjeta.", color="#666", font_size="13px"),
                                        spacing="2",
                                    ),
                                    padding="10px",
                                    bg="#f7f7f7",
                                    border_radius="6px",
                                    animation="slideDown 0.18s ease",
                                ),
                                rx.box(),
                            ),

                            # Transferencia / depósito
                            rx.box(
                                rx.hstack(
                                    # 'bank' no está en el set de iconos; usar 'banknote' que sí está soportado
                                    rx.hstack(rx.icon("banknote", size=18, color="#333"), rx.text("Transferencia o depósito bancario", color="black", font_weight="semibold")),
                                    rx.text("20% de descuento", color="#666", font_size="12px"),
                                    rx.icon("chevron-down", on_click=CartState.toggle_transferencia_details, cursor="pointer", style=rx.cond(CartState.transferencia_details_open, {"transform": "rotate(180deg)", "transition": "transform 0.2s"}, {"transform": "rotate(0deg)", "transition": "transform 0.2s"})),
                                    justify="between",
                                    align="center",
                                    width="100%",
                                ),
                                padding="10px",
                                bg="#fff",
                                border_radius="6px",
                                box_shadow="0 1px 4px rgba(0,0,0,0.05)",
                            ),
                            rx.cond(
                                CartState.transferencia_details_open,
                                rx.box(
                                    rx.text("Cuando termines la compra, vas a ver la información de pago.", color="#333"),
                                    padding="10px",
                                    bg="#f7f7f7",
                                    border_radius="6px",
                                    animation="slideDown 0.18s ease",
                                ),
                                rx.box(),
                            ),

                            # Efectivo (Pagofacil / Rapipago)
                            rx.box(
                                rx.hstack(
                                    rx.hstack(rx.icon("dollar-sign", size=18, color="#333"), rx.text("Efectivo", color="black", font_weight="semibold")),
                                    rx.icon("chevron-down", on_click=CartState.toggle_efectivo_options, cursor="pointer", style=rx.cond(CartState.efectivo_options_open, {"transform": "rotate(180deg)", "transition": "transform 0.2s"}, {"transform": "rotate(0deg)", "transition": "transform 0.2s"})),
                                    justify="between",
                                    align="center",
                                    width="100%",
                                ),
                                padding="10px",
                                bg="#fff",
                                border_radius="6px",
                                box_shadow="0 1px 4px rgba(0,0,0,0.05)",
                            ),
                            rx.cond(
                                CartState.efectivo_options_open,
                                rx.box(
                                    rx.vstack(
                                        rx.text("Opciones disponibles:"),
                                        rx.hstack(rx.text("PAGOFACIL"), rx.text("·"), rx.text("RAPIPAGO")),
                                        spacing="1",
                                    ),
                                    padding="10px",
                                    bg="#f7f7f7",
                                    border_radius="6px",
                                    animation="slideDown 0.18s ease",
                                ),
                                rx.box(),
                            ),

                            # Mercado Pago
                            rx.box(
                                rx.hstack(
                                    rx.hstack(rx.icon("wallet", size=18, color="#333"), rx.text("Mercado Pago", font_weight="semibold")),
                                    rx.text("Hasta 3 cuotas sin interés", color="#666", font_size="12px"),
                                    rx.icon("chevron-down", on_click=CartState.toggle_mercado_pago, cursor="pointer", style=rx.cond(CartState.mercado_pago_open, {"transform": "rotate(180deg)", "transition": "transform 0.2s"}, {"transform": "rotate(0deg)", "transition": "transform 0.2s"})),
                                    justify="between",
                                    align="center",
                                    width="100%",
                                ),
                                padding="10px",
                                bg="#fff",
                                border_radius="6px",
                                box_shadow="0 1px 4px rgba(0,0,0,0.05)",
                            ),
                            rx.cond(
                                CartState.mercado_pago_open,
                                rx.box(
                                    rx.vstack(
                                        rx.text("Usá tus tarjetas guardadas, dinero disponible y mucho más."),
                                        rx.text("Accedé a Cuotas sin Tarjeta para comprar ahora y pagar después."),
                                        rx.hstack(rx.text("Visa"), rx.text("Mastercard Prepaid"), rx.text("American Express")),
                                        rx.text("Te llevaremos a Mercado Pago. Si no tenés una cuenta, podés usar tu e-mail."),
                                        spacing="2",
                                    ),
                                    padding="10px",
                                    bg="#f7f7f7",
                                    border_radius="6px",
                                    animation="slideDown 0.18s ease",
                                ),
                                rx.box(),
                            ),

                            # Cuotas sin Tarjeta de Mercado Pago
                            rx.box(
                                rx.hstack(
                                    rx.hstack(rx.icon("calendar", size=18, color="#333"), rx.text("Cuotas sin Tarjeta de Mercado Pago", font_weight="semibold")),
                                    rx.icon("chevron-down", on_click=CartState.toggle_cuotas_sin_tarjeta, cursor="pointer", style=rx.cond(CartState.cuotas_sin_tarjeta_open, {"transform": "rotate(180deg)", "transition": "transform 0.2s"}, {"transform": "rotate(0deg)", "transition": "transform 0.2s"})),
                                    justify="between",
                                    align="center",
                                    width="100%",
                                ),
                                padding="10px",
                                bg="#fff",
                                border_radius="6px",
                                box_shadow="0 1px 4px rgba(0,0,0,0.05)",
                            ),
                            rx.cond(
                                CartState.cuotas_sin_tarjeta_open,
                                rx.box(
                                    rx.vstack(
                                        rx.text("1. Conocé el límite disponible de tu Línea de Crédito y elegí la cantidad de cuotas."),
                                        rx.text("2. Confirmá tu pago, se acredita al instante y está 100% protegido."),
                                        rx.text("3. Pagá mes a mes desde la app de Mercado Pago con el medio que prefieras."),
                                        rx.text("Te llevaremos a Mercado Pago. Si aún no tenés la Línea de Crédito, activala al momento de pagar."),
                                        spacing="2",
                                    ),
                                    padding="10px",
                                    bg="#f7f7f7",
                                    border_radius="6px",
                                    animation="slideDown 0.18s ease",
                                ),
                                rx.box(),
                            ),

                            spacing="3",
                            width="100%",
                        ),
                        rx.box(),
                    ),

                    rx.box(height="1px", bg="#e6e6e6", width="100%", margin_top="8px", margin_bottom="8px"),

                    # Resumen y botones
                    rx.text("Resumen", font_weight="semibold", color="black"),
                    rx.text(CartState.total_text, color="black", font_weight="bold"),
                    rx.hstack(
                        rx.button("Finalizar compra", bg="#DAA520", color="black", on_click=CartState.confirm_payment),
                        rx.link("Volver a datos de entrega", href="/checkout"),
                        spacing="3",
                    ),

                    spacing="3",
                    width=["95%", "720px"],
                    align="start",
                ),
                color="black",
                padding="20px",
                border_radius="12px",
                box_shadow="0 4px 12px rgba(0,0,0,0.1)",
                bg="white",
                # Animaciones definidas en inline style (keyframes)
                style={
                    "@keyframes slideDown": {
                        "from": {"opacity": "0", "transform": "translateY(-6px)"},
                        "to": {"opacity": "1", "transform": "translateY(0)"},
                    }
                },
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
