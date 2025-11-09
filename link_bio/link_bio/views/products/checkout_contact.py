import reflex as rx
from .products import CartState



def checkout_contact() -> rx.Component:
    return rx.center(
        rx.vstack(
            # Contenedor principal: contiene la versión desktop (hstack) y la versión móvil (box)
            rx.box(
                # Desktop: form (left) + product card (right). Hidden on mobile
                rx.hstack(
                    # Left: formulario
                    rx.vstack(
                        rx.text("Datos de contacto", font_size="20px", font_weight="bold"),
                        rx.hstack(
                            rx.input(
                                placeholder="E-mail",
                                value=CartState.buyer_email,
                                on_change=lambda v, k="buyer_email": CartState.set_field(k, v),
                                width="320px",
                                color="black",
                                _placeholder={"color": "black"},
                            ),
                            rx.box(
                                rx.hstack(
                                    rx.checkbox(checked=CartState.wants_newsletter, on_change=lambda v: CartState.set_field("wants_newsletter", v)),
                                    rx.text("Quiero recibir ofertas y novedades por e-mail", font_size="14px", color="black"),
                                ),
                                padding="6px",
                                border="1px solid #eee",
                                border_radius="8px",
                                bg="#fafafa",
                            ),
                            spacing="3",
                        ),

                        rx.divider(margin_y="6px"),

                        rx.text("Entrega", font_weight="semibold", color="black"),
                        rx.text("$8.889,00", color="black", font_weight="bold"),
                        rx.text("Correo Argentino Clasico - Envio a domicilio", font_size="13px", color="black"),
                        rx.link("Más opciones", href="#", font_size="13px", color="black"),

                        rx.divider(margin_y="6px"),

                        rx.text("Datos del destinatario", font_weight="semibold"),
                        rx.hstack(
                            rx.input(placeholder="Nombre", value=CartState.buyer_nombre, on_change=lambda v, k="buyer_nombre": CartState.set_field(k, v), color="black", _placeholder={"color": "black"}),
                            rx.input(placeholder="Apellido", value=CartState.buyer_apellido, on_change=lambda v, k="buyer_apellido": CartState.set_field(k, v), color="black", _placeholder={"color": "black"}),
                            spacing="3",
                            width="100%",
                        ),

                        rx.hstack(
                            rx.input(placeholder="Teléfono", value=CartState.buyer_telefono, on_change=lambda v, k="buyer_telefono": CartState.set_field(k, v), color="black", _placeholder={"color": "black"}),
                            rx.input(placeholder="Código Postal", value=CartState.buyer_postal, on_change=lambda v, k="buyer_postal": CartState.set_field(k, v), color="black", _placeholder={"color": "black"}),
                            spacing="3",
                        ),

                        rx.hstack(
                            rx.input(placeholder="Provincia (ej. Corrientes)", value=getattr(CartState, 'buyer_provincia', ''), on_change=lambda v, k='buyer_provincia': CartState.set_field(k, v), width="60%", color="black", _placeholder={"color": "black"}),
                            rx.button("Cambiar", size="2"),
                            spacing="3",
                        ),

                        rx.hstack(
                            rx.input(placeholder="Calle", value=CartState.buyer_calle, on_change=lambda v, k="buyer_calle": CartState.set_field(k, v), color="black", _placeholder={"color": "black"}),
                            rx.input(placeholder="Número (o Sin número)", value=CartState.buyer_numero, on_change=lambda v, k="buyer_numero": CartState.set_field(k, v), color="black", _placeholder={"color": "black"}),
                            spacing="3",
                        ),

                        rx.hstack(
                            rx.input(placeholder="Departamento (opcional)", value=CartState.buyer_departamento, on_change=lambda v, k="buyer_departamento": CartState.set_field(k, v), color="black", _placeholder={"color": "black"}),
                            rx.input(placeholder="Barrio (opcional)", value=CartState.buyer_barrio, on_change=lambda v, k="buyer_barrio": CartState.set_field(k, v), color="black", _placeholder={"color": "black"}),
                            spacing="3",
                        ),

                        rx.input(placeholder="Ciudad", value=CartState.buyer_ciudad, on_change=lambda v, k="buyer_ciudad": CartState.set_field(k, v), color="black", _placeholder={"color": "black"}),

                        rx.divider(margin_y="6px"),

                        rx.text("Datos de facturación", font_weight="semibold"),
                        rx.input(placeholder="DNI o CUIT", value=CartState.buyer_dni, on_change=lambda v, k="buyer_dni": CartState.set_field(k, v), color="black", _placeholder={"color": "black"}),
                        rx.checkbox(label="Mis datos de facturación y entrega son los mismos", checked=CartState.billing_same, on_change=lambda v: CartState.set_field("billing_same", v)),

                        rx.text("Continuar para el pago.", font_size="13px", color="#555"),

                        rx.hstack(
                            rx.button("Continuar para el pago", bg="#DAA520", color="black", on_click=CartState.go_to_payment),
                            rx.link("Volver", href="/products"),
                            spacing="3",
                        ),

                        spacing="3",
                        width=["65%", "600px"],
                        align="start",
                    ),

                    # Right: tarjeta con el producto seleccionado (desktop)
                    rx.cond(
                        CartState.selected_product,
                        rx.box(
                            rx.vstack(
                                rx.image(src=CartState.selected_image, width="220px", height="180px", border_radius="8px"),
                                rx.text(CartState.selected_product, font_weight="bold", font_size="16px", margin_top="8px", color="black"),
                                rx.text(rx.cond(CartState.selected_size, f"Talle: {CartState.selected_size}", "Talle: -"), color="#555"),
                                rx.text(CartState.formatted_selected_price, color="#DAA520", font_weight="bold", font_size="16px", margin_top="6px"),
                            ),
                            padding="12px",
                            border="1px solid #eee",
                            border_radius="10px",
                            bg="#fff",
                            width=["30%", "260px"],
                            margin_left="20px",
                        ),
                        rx.box(),
                    ),

                    display=["none", "flex"],
                ),

                rx.box(
                    rx.vstack(
                        rx.hstack(
                            rx.box(rx.text("Producto seleccionado", font_weight="bold", font_size="16px", color="black")),
                            rx.spacer(),
                            rx.icon_button(
                                "chevron-down",
                                aria_label="Mostrar/ocultar producto",
                                on_click=CartState.toggle_selected_panel_mobile,
                                style={
                                    "transform": rx.cond(CartState.show_selected_panel_mobile, "rotate(180deg)", "rotate(0deg)"),
                                    "transition": "transform 0.25s ease",
                                },
                            ),
                        ),

                        rx.box(
                            rx.cond(
                                CartState.show_selected_panel_mobile,
                                rx.box(
                                    rx.vstack(
                                        rx.image(src=CartState.selected_image, width="100%", height="180px", border_radius="8px"),
                                        rx.text(rx.cond(CartState.selected_product, CartState.selected_product, "-"), font_weight="bold", font_size="16px", margin_top="8px", color="black"),
                                        rx.text(rx.cond(CartState.selected_size, f"Talle: {CartState.selected_size}", "Talle: -"), color="black"),
                                        rx.text(CartState.formatted_selected_price, color="black", font_weight="bold", font_size="16px", margin_top="6px"),
                                    ),
                                    padding="10px",
                                    border="1px solid #eee",
                                    border_radius="8px",
                                    bg="#fff",
                                    style={"transition": "max-height 0.3s ease"},
                                ),
                                rx.box(),
                            ),
                            overflow_y="hidden",
                        ),

                        # Formulario (móvil)
                        rx.vstack(
                            rx.text("Datos de contacto", font_size="18px", font_weight="bold", color="black"),
                            rx.input(placeholder="E-mail", value=CartState.buyer_email, on_change=lambda v, k="buyer_email": CartState.set_field(k, v), width="100%", color="black", _placeholder={"color": "black"}),
                            rx.hstack(
                                rx.input(placeholder="Nombre", value=CartState.buyer_nombre, on_change=lambda v, k="buyer_nombre": CartState.set_field(k, v), width="50%", color="black", _placeholder={"color": "black"}),
                                rx.input(placeholder="Apellido", value=CartState.buyer_apellido, on_change=lambda v, k="buyer_apellido": CartState.set_field(k, v), width="50%", color="black", _placeholder={"color": "black"}),
                            ),
                            rx.input(placeholder="Teléfono", value=CartState.buyer_telefono, on_change=lambda v, k="buyer_telefono": CartState.set_field(k, v), width="100%", color="black", _placeholder={"color": "black"}),
                            rx.input(placeholder="Código Postal", value=CartState.buyer_postal, on_change=lambda v, k="buyer_postal": CartState.set_field(k, v), width="100%", color="black", _placeholder={"color": "black"}),
                            rx.input(placeholder="Calle", value=CartState.buyer_calle, on_change=lambda v, k="buyer_calle": CartState.set_field(k, v), width="100%", color="black", _placeholder={"color": "black"}),
                            rx.input(placeholder="Número", value=CartState.buyer_numero, on_change=lambda v, k="buyer_numero": CartState.set_field(k, v), width="100%", color="black", _placeholder={"color": "black"}),
                            rx.input(placeholder="Ciudad", value=CartState.buyer_ciudad, on_change=lambda v, k="buyer_ciudad": CartState.set_field(k, v), width="100%", color="black", _placeholder={"color": "black"}),
                            rx.hstack(rx.button("Continuar para el pago", bg="#DAA520", color="black", on_click=CartState.go_to_payment, width="100%")),
                            # En móvil mostramos también un enlace para volver a la lista de productos
                            rx.link("Volver", href="/products", color="#333", font_size="14px", margin_top="8px"),
                            spacing="3",
                            padding_top="10px",
                        ),
                    ),
                    display=["block", "none"],
                    width="100%",
                    padding_x=["12px", "0px"],
                ),

                # Props del contenedor principal
                color="black",
                padding="20px",
                border_radius="12px",
                box_shadow="0 4px 12px rgba(0,0,0,0.1)",
                bg="white",
            ),

            # === SECCIÓN INFERIOR: INFORMACIÓN Y CONTACTO (footer) ===
            rx.box(
                rx.hstack(
                    # Navegación
                    rx.vstack(
                        rx.text("NAVEGACIÓN", weight="bold", color="white", font_size="15px"),
                        rx.link("Inicio", href="/", color="white"),
                        rx.link("Productos", href="/products", color="white"),
                        rx.link("Contacto", href="https://wa.me/543794258727?text=Hola%20Delta%20Store%20👋%2C%20quiero%20consultar%20por%20unas%20zapatillas.", color="white"),
                        spacing="2",
                        align="start",
                        width=["100%", "25%"],
                        padding_x=["8px", "12px"],
                    ),
                    # Medios de pago
                    rx.vstack(
                        rx.text("MEDIOS DE PAGO", weight="bold", color="white", font_size="15px"),
                        rx.image(src="/tarjetas.png", height=["50px", "100px"]),
                        # === FORMAS DE ENVÍO ===
                        rx.center(
                            rx.vstack(
                                rx.text("FORMAS DE ENVÍO", weight="bold", font_size="14px", color="white"),
                                rx.image(src="/correoargentino@2x.png", height=["20px", "30px"]),
                                rx.link("SEGUIMIENTO DE ENVIOS", href="https://www.correoargentino.com.ar/formularios/e-commerce", color="white", font_size="15px", weight="bold"),
                                spacing="2",
                            ),
                            bg="black",
                            padding_bottom="20px",
                        ),
                        spacing="2",
                        align="start",
                        width=["100%", "25%"],
                        padding_x=["8px", "12px"],
                    ),
                    # Contactanos
                    rx.vstack(
                        rx.text("CONTACTANOS", weight="bold", color="white", font_size="15px"),
                        rx.hstack(rx.icon("phone", color="white", size=16), rx.text("02954 806873", color="white")),
                        rx.hstack(rx.icon("mail", color="white", size=16), rx.text("shoesdeltastore@gmail.com", color="white")),
                        rx.hstack(rx.icon("map-pin", color="white", size=16), rx.text("JUNIN 868", color="white")),
                        spacing="1",
                        align="start",
                        width=["100%", "25%"],
                        padding_x=["8px", "12px"],
                    ),
                    # Redes + Newsletter
                    rx.vstack(
                        rx.text("REDES SOCIALES", weight="bold", color="white", font_size="15px"),
                        rx.link(rx.icon("instagram", color="white", size=22), href="https://www.instagram.com", is_external=True),
                        rx.text("NEWSLETTER", weight="bold", color="white", font_size="15px", margin_top="10px"),
                        rx.hstack(
                            rx.input(placeholder="shoesdeltastore@gmail.com", width=["100%", "150px"], height="35px", color="black", _placeholder={"color": "black"}),
                            rx.button(rx.icon("send"), bg="white", color="black"),
                        ),
                        spacing="2",
                        align="start",
                        width=["100%", "25%"],
                        padding_x=["8px", "12px"],
                    ),
                    justify="center",
                    align="start",
                    padding=["20px", "40px"],
                    bg="black",
                    wrap="wrap",
                    spacing="6",
                ),
                width="100%",
            ),

            # === COPYRIGHT FINAL ===
            rx.center(
                rx.text("COPYRIGHT DELTA STORE - 2025. TODOS LOS DERECHOS RESERVADOS", color="black", font_size="12px"),
                bg="white",
                padding_y="10px",
                border_top="1px solid #333",
                text_align="center",
                justify="center",
            ),

            # Texto fijo: DEFENSA DE LAS Y LOS CONSUMIDORES. PARA RECLAMOS
            rx.center(
                rx.text(
                    "DEFENSA DE LAS Y LOS CONSUMIDORES. PARA RECLAMOS ",
                    color="black",
                    font_size="12px",
                    display="inline",
                    style={"whiteSpace": "nowrap"},
                ),
            ),

            # Link: INGRESÁ ACÁ.
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
