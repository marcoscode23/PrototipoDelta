import reflex as rx 

# --- HEADER + NAVBAR (combinados) ---
def header() -> rx.Component:
    return rx.vstack(
        # Logo + mensaje
        rx.image(
            src="/logo_tienda.png",
            width="400px",
            max_windth=["90%","400px"], 
            margin_top="50px",
        ),
        rx.text(
            "BIENVENIDO A DELTA STORE 👋 SOMOS UNA TIENDA QUE SE DEDICA A LA VENTA DE 👟ZAPATILLAS!",
            font_size=["0.9em","1em"],
            font_weight="bold",
            color="black",
            text_align="center",
            margin_top="0.8em",
            padding_x="10px",
        ),
        # --- GALERÍA DESLIZABLE (imágenes y videos) ---
        rx.box(
            rx.hstack(
                rx.foreach(
                    [
                        # Lista de contenido (imágenes y videos)
                        {"tipo": "imagen", "src": "/imagen2.jpg"},
                        {"tipo": "imagen", "src": "/deltastreet.jpg"},
                        {"tipo": "imagen", "src": "/🔥𝗟𝗮 𝗯𝗼𝗹𝘀𝗶𝘁𝗮 𝗾𝘂𝗲 𝗾𝘂𝗲𝗿𝗲𝗺𝗼𝘀 𝘁𝗼𝗱𝗼𝘀 𝗽𝗮𝗿𝗮  𝗮𝗿𝗿𝗮𝘀𝗮𝗿 (.jpg"},
                        {"tipo": "video", "src": "/🔥𝗟𝗮 𝗯𝗼𝗹𝘀𝗶𝘁𝗮 𝗾𝘂𝗲 𝗾𝘂𝗲𝗿𝗲𝗺𝗼𝘀 𝘁𝗼𝗱𝗼𝘀 𝗽𝗮𝗿𝗮  𝗮𝗿𝗿𝗮𝘀𝗮𝗿 (.mp4"},
                        
                    ],
                    lambda item: rx.cond(
                        item["tipo"] == "imagen",
                        rx.image(
                            src=item["src"],
                            width=["85%","350px"],
                            height="auto",
                            object_fit="contain",
                            border_radius="15px",
                            flex_shrink="0",
                            transition="transform 0.5s ease-in-out",
                            _hover={"transform": "scale(1.05)"},
                        ),
                        rx.video(
                            src=item["src"],
                            width=["85%","350px"],
                            height="auto",
                            border_radius="15px",
                            object_fit="contain",
                            controls=True,
                            auto_play=True,
                            muted=True,
                            loop=True,
                            plays_inline=True,
                            flex_shrink="0",
                        ),
                    ),
                ),
                spacing="4",
                overflow_x="auto",
                overflow_y="hidden",
                scroll_snap_type="x mandatory",
                css={
                    "& > *": {"scroll_snap_align": "center",},
                    # 🔹 Scroll suave y compatible con iOS
                    "scroll-behavior": "smooth",
                    "-webkit-overflow-scrolling": "touch",
                    # 🔹 Oculta scrollbars en todos los navegadores
                    "&::-webkit-scrollbar": {"display": "none"},
                    "scrollbar-width": "none",  # Firefox
                },
                
                justify="start",
                align="center",
                width="max-content",
                padding_left="5vw",  # 🔹 centra visualmente las imágenes
                padding_right="5vw",
            ),
            width="100%",
            overflow_x="auto",
            overflow_y="hidden",
            padding_y="30px",
            display="flex",
            justify_content="center",
            css={
                "overflow": "hidden",
                "&::-webkit-scrollbar": {"display": "none"},  # también oculta la del contenedor principal
                "scrollbar-width": "none",
            }
        ),
        rx.vstack(
            rx.center(
                rx.image(
                    src="/cambio.png",
                ),
            ),
        ),
        rx.vstack(
            rx.box(
                rx.box(
                #imagen con efecto hover (zoom)
                    rx.image(
                        src="/INSTAGRAMDELTA.png",
                        width="400px",
                        height="auto",
                        border_radius="15px",
                        transition="transform 0.5s ease-in-out",
                        _hover={"transform": "scale(1.05)"}, #zoom sueve
                    ),
                    
                ),
                #texto y boton superpuestos
                rx.box(
                    rx.vstack(
                        rx.text(
                            "NUESTRO NUEVO INSTAGRAM",
                            font_size="20px",
                            font_weight="bold",
                            color="white",
                            align="center",
                            justify="center",
                        ),
                        rx.link(
                            rx.button(
                                "SOMOSDST",
                                bg="black",
                                color="white",
                                font_weight="bold",
                                border_radius="30px",
                                _hover={"bg": "gray"},
                            ),
                            href="https://www.instagram.com/somosdst/",
                            is_external=True,
                        ),
                        spacing="4",
                        align="center",
                        justify="center",
                        margin_top="200px",
                    ),
                    position="absolute",
                    top="0",
                    left="0",
                    width="100%",
                    height="100%",
                    align="center",
                    justify="center",
                    bg="rgba(0, 0, 0, 0.4)",  # Oscurece la imagen
                    border_radius="20px",
                    opacity="0",
                    transition="opacity 0.4s ease",
                    _hover={"opacity": "1"},  # Aparece el texto al pasar el mouse
                ),
                position="relative",
                width="400px",
                height="auto",
                overflow="hidden",
            ),
            align="center",
            justify="center",
            margin_top="50px",
        ),
        spacing="9",
        align="center",
        width="100%",
    ),
