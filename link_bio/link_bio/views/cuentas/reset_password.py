import reflex as rx

def reset_password() -> rx.Component:
    return  rx.box(
        # === CABECERA: LOGO ===
        rx.center(
            rx.image(
                src="/logo_tienda.png",
                width="400px",
                max_width="90%",
                margin_top="20px",
                margin_bottom="10px",
            ),
        ),
        rx.center(
            rx.hstack(
                rx.vstack(
                    rx.link(rx.button("INICIO",display="inline",font_size="16px",_hover={"bg": "black"},margin_top="30px",),
                        href="/",
                    ),
                    rx.link(rx.button("VOLVER",display="inline",_hover={"bg": "black"}),
                        href="/products",
                    ),
                    spacing="5",
                    align="center",
                    margin_top="40px",
                    width=["100%","45%"], 
                ),
                spacing="4",
                margin_bottom="15px",  # antes 40px → menos espacio
            ),
        ),
    rx.center(
        rx.vstack(
            rx.text("Inicio / Mi Cuenta / ", rx.text("Cambiar Contraseña", as_="span", font_weight="bold")),
            rx.text("Vamos a enviarte un email para que puedas cambiar tu contraseña.", font_size="13px", margin_bottom="8px"),
            rx.box(
                rx.text("EMAIL", font_weight="bold"),
                rx.input(placeholder="ej.: tunombre@email.com", width="100%"),
                rx.button("ENVIAR EMAIL", bg="black", color="white", width="100%", margin_top="10px",_hover={"transform": "scale(1.05)", "cursor": "pointer"}),
                align="start",
                width="100%",
                max_width="400px",
            ),
            rx.text("¿Ya tenés cuenta? ", rx.link("Iniciá sesión", href="/login", color="black", font_weight="bold")),
            spacing="3",
            align="center",
            justify="center",
            padding_bottom="40px",
        ),
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
                    # Formas de envío
                    rx.center(
                        rx.vstack(
                            rx.text("FORMAS DE ENVÍO", weight="bold", font_size="14px", color="white"),
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
                    rx.hstack(rx.icon("phone", color="white", size=16), rx.text("02954 806873", color="white")),
                    rx.hstack(rx.icon("mail", color="white", size=16), rx.text("shoesdeltastore@gmail.com", color="white")),
                    rx.hstack(rx.icon("map-pin", color="white", size=16), rx.text("JUNIN 868", color="white")),
                    spacing="1",
                    align="start",
                ),
                # Redes + Newsletter
                rx.vstack(
                    rx.text("REDES SOCIALES", weight="bold", color="white", font_size="15px"),
                    rx.link(rx.icon("instagram", color="white", size=22), href="https://www.instagram.com", is_external=True),
                    rx.text("NEWSLETTER", weight="bold", color="white", font_size="15px", margin_top="10px"),
                    rx.hstack(
                        rx.input(placeholder="shoesdeltastore@gmail.com", width="150px", height="35px"),
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


