import reflex as rx

# 🔹 NUEVA PÁGINA EN BLANCO
def arrepentimiento() -> rx.Component:
    return rx.box(
        rx.center(
            rx.image(
                src="/logo_tienda.png",
                width="400px",
                max_width="90%",
                margin_top="60px",
                margin_botton="40px",
            ),
        ),
        rx.hstack(
            rx.vstack(
                    rx.link(rx.button("INICIO",display="inline",font_size="16px",_hover={"bg": "black"},margin_top="9em",),
                        href="/",
                    ),
                    rx.text(
                        "nuestro instagram zapatillas: nuestro instagram indumentaria:"
                        "https://www.instagram.com/somosdst/",
                        color="black",
                        font_size="0.9em",
                        margin_top="1em",
                    ),
                    rx.hstack(
                    rx.icon("phone"),
                    rx.text("02954806873"),
                    spacing="2",
                    align="center",
                    ),
                    rx.hstack(
                    rx.icon("mail"),
                    rx.link(rx.text("shoesdeltastore@gmail.com",color="black"),href="#"),
                    spacing="2",
                    align="center",
                    ),
                    rx.hstack(
                    rx.icon("map-pin"),
                    rx.link(rx.text("CIRCUNVALACION ESTE 868",color="black"),href="https://www.google.com/maps/place/DELTA+STORE+%2F+DELTA+STREET/@-36.6197025,-64.2978102,17z/data=!3m1!4b1!4m6!3m5!1s0x95c2cd0057ef55cb:0x44e01601d8b4a77c!8m2!3d-36.6197068!4d-64.2952353!16s%2Fg%2F11w7cvfw81?entry=ttu", is_external=True),
                    spacing="2",
                    align="center",
                    ),
                    rx.hstack(
                    rx.icon("instagram"),
                    rx.link(rx.text("Siguenos en Instagram",color="black"),href="https://www.instagram.com/somosdst/", is_external=True),
                    spacing="2",
                    align="center",
                ),
                rx.link(rx.button("VOLVER",display="inline",_hover={"bg": "black"}),
                    href="/products",
                ),
                spacing="6",
                align="center",
                width=["100%","45%"], 
            ),
            # 🧾 Columna derecha (formulario)
            rx.vstack(
                rx.text(
                    "Si te arrepentiste de una compra, podés pedir la cancelación enviando este formulario "
                    "con tu número de orden. Tenés como máximo hasta 10 días corridos desde que recibiste el producto.",
                    color="black",
                    font_size="0.95em",
                    margin_bottom="1em",
                ),

                # Campos del formulario
                rx.text("NOMBRE", font_weight="bold", font_size="0.9em"),
                rx.input(placeholder="Tu nombre", border="1px solid black", width="100%",color="black"),

                rx.text("EMAIL", font_weight="bold", font_size="0.9em"),
                rx.input(placeholder="Tu correo electrónico", border="1px solid black", width="100%"),

                rx.text("TELÉFONO (OPCIONAL)",font_weight="bold",font_size="0.85em"),
                rx.input(placeholder="Teléfono", border="1px solid black", width="100%"),

                rx.text("MENSAJE (OPCIONAL)",font_weight="bold", font_size="0.85em"),
                rx.text_area(placeholder="Escribí tu mensaje...", border="1px solid black", width="100%", height="100px"),

                # Botón para enviar
                rx.button(
                    "ENVIAR",
                    bg="black",
                    color="white",
                    border_radius="md",
                    padding_x="1em",
                    padding_y="0.5em",
                    margin_top="1em",
                    margin_bottom="2em",
                    width="100%",
                    _hover={"bg": "gray"},
                ),
                width=["100%","45%"], 
                align="center",
                spacing="2",
            ),
            justify="center",
            align="center",
            spacing="8",
            direction="column",
            width="100%",
            margin_bottom="4em",
        ),

        # === PIE DE PÁGINA COMPLETO ===
        rx.box(
            rx.hstack(
                # Navegación
                rx.vstack(
                    rx.text("NAVEGACIÓN", weight="bold", color="white", font_size="15px"),
                    rx.link("Inicio", href="/", color="white"),
                    rx.link("Productos", href="/products", color="white"),
                    rx.link(
                        "Contacto",
                        href="https://wa.me/543794258727?text=Hola%20Delta%20Store%20👋%2C%20quiero%20consultar%20por%20unas%20zapatillas.",
                        color="white",
                    ),
                    spacing="2",
                    align="start",
                ),
                # Medios de pago
                rx.vstack(
                    rx.text("MEDIOS DE PAGO", weight="bold", color="white", font_size="15px"),
                    rx.image(src="/tarjetas.png", height="100px"),
                    # === FORMAS DE ENVÍO ===
                    rx.center(
                        rx.vstack(
                            rx.text(
                                "FORMAS DE ENVÍO",
                                weight="bold",
                                font_size="14px",
                                color="white",
                            ),
                            rx.image(src="/correoargentino@2x.png", height="30px"),
                            rx.link(
                                "SEGUIMIENTO DE ENVIOS",
                                href="https://www.correoargentino.com.ar/formularios/e-commerce",
                                color="white",
                                font_size="15px",
                                weight="bold",
                            ),
                            spacing="2",
                        ),
                        bg="black",
                        padding_bottom="20px",
                    ),
                    spacing="2",
                    align="start",
                ),
                # Contactanos
                rx.vstack(
                    rx.text("CONTACTANOS", weight="bold", color="white", font_size="15px"),
                    rx.hstack(
                        rx.icon("phone", color="white", size=16),
                        rx.text("02954 806873", color="white"),
                    ),
                    rx.hstack(
                        rx.icon("mail", color="white", size=16),
                        rx.text("shoesdeltastore@gmail.com", color="white"),
                    ),
                    rx.hstack(
                        rx.icon("map-pin", color="white", size=16),
                        rx.text("JUNIN 868", color="white"),
                    ),
                    spacing="1",
                    align="start",
                ),
                # Redes + Newsletter
                rx.vstack(
                    rx.text("REDES SOCIALES", weight="bold", color="white", font_size="15px"),
                    rx.link(
                        rx.icon("instagram", color="white", size=22),
                        href="https://www.instagram.com",
                        is_external=True,
                    ),
                    rx.text(
                        "NEWSLETTER",
                        weight="bold",
                        color="white",
                        font_size="15px",
                        margin_top="10px",
                    ),
                    rx.hstack(
                        rx.input(
                            placeholder="shoesdeltastore@gmail.com",
                            width="150px",
                            height="35px",
                        ),
                        rx.button(rx.icon("send"), bg="white", color="black"),
                    ),
                    spacing="2",
                    align="start",
                ),
                justify="center",
                align="start",
                padding="40px",
                wrap="wrap",
                width="100%",
            ),
            width="100vw",
            bg="black",
            margin="0px",
            padding="0px",
        ),

        # === COPYRIGHT FINAL ===
        rx.center(
            rx.text(
                "COPYRIGHT DELTA STORE - 2025. TODOS LOS DERECHOS RESERVADOS",
                color="black",
                font_size="12px",
            ),
            bg="white",
            padding_y="10px",
            border_top="1px solid #333",
            text_align="center",
            justify="center",
            width="100vw",
        ),

        # === DEFENSA DEL CONSUMIDOR Y BOTÓN DE ARREPENTIMIENTO ===
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
        padding_y="60px",
        width="100%",
        align="center",
        justify="center",
        bg="white",
        color="black",
        min_height="100vh",
        font_family="Poppins, sans-serif",
    )
