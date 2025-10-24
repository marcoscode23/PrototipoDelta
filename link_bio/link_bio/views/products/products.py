import reflex as rx

class CartState(rx.State):
    show_modal: bool = False
    selected_product: str = ""
    selected_image: str = ""
    

    def toggle_cart_modal(self, e: rx.event.PointerEventInfo | None = None, nombre: str = "", imagen: str = ""):
        self.show_modal = not self.show_modal
        if nombre:
            self.selected_product = nombre
        if imagen:
            self.selected_image = imagen



# ==== MODAL DE CARRITO ====
def cart_modal() -> rx.Component:
    return rx.cond(
        CartState.show_modal,
        rx.box(
            # Fondo transparente oscuro
            rx.box(
                position="fixed",
                top="0",
                left="0",
                width="100%",
                height="100%",
                bg="rgba(0, 0, 0, 0.5)",
                z_index="1000",
                transition="opacity 0.3s ease-in-out",
            ),
            # Contenedor modal
            rx.center(
                rx.box(
                    rx.vstack(
                        # Imagen del producto
                        rx.image(
                            src=CartState.selected_image,
                            width="500px",
                            height="500px",
                            border_radius="10px",
                            box_shadow="0 4px 10px rgba(0,0,0,0.2)",
                        ),
                        # Texto del producto
                        rx.text(
                            CartState.selected_product,
                            font_size="20px",
                            font_weight="bold",
                            color="#333",
                            margin_top="10px",
                        ),
                        # Talles disponibles
                        rx.hstack(
                            *[
                                rx.box(
                                    rx.text(str(talle), font_size="16px"),
                                    border="1px solid #DAA520",
                                    border_radius="8px",
                                    padding="5px 10px",
                                    cursor="pointer",
                                    _hover={"bg": "#DAA520", "color": "white"},
                                )
                                for talle in [38, 39, 40, 41, 42, 43]
                            ],
                            spacing="3",
                            justify="center",
                            margin_top="10px",
                        ),
                        # Botón grande añadir al carrito
                        rx.button(
                            "AÑADIR AL CARRITO",
                            bg="#DAA520",
                            color="white",
                            font_size="18px",
                            font_weight="bold",
                            padding_x="40px",
                            padding_y="15px",
                            border_radius="10px",
                            margin_top="15px",
                            _hover={"transform": "scale(1.05)", "bg": "#c49c15"},
                            on_click=CartState.toggle_cart_modal,
                        ),
                        # Link para ver más detalles
                        rx.link(
                            "Ver más detalle",
                            href=f"/detalle/{{CartState.selected_product}}",
                            font_size="14px",
                            color="#DAA520",
                            margin_top="10px",
                            text_decoration="none",
                            _hover={"text_decoration": "underline"},
                        ),
                        rx.button(
                            "Cerrar",
                            bg="#555",
                            color="white",
                            font_size="14px",
                            border_radius="8px",
                            margin_top="20px",
                            padding_x="25px",
                            _hover={"bg": "#333"},
                            on_click=CartState.toggle_cart_modal,
                        ),
                    ),
                    spacing="4",
                    align="center",
                ),
                bg="white",
                padding="30px",
                border_radius="15px",
                box_shadow="0 4px 15px rgba(0,0,0,0.3)",
                position="fixed",
                top="0",
                left="50%",
                transform="translateX(-50%)",
                animation="slideDown 0.4s ease forwards",
                z_index="1001",
            ),
            # Animación CSS
            style={
                "@keyframes slideDown": {
                    "from": {"top": "-200px", "opacity": "0"},
                    "to": {"top": "100px", "opacity": "1"},
                }
            },
        ),
        rx.box(),  # nada si está cerrado
    )

#---- BUSCADOR ----
def search_bar() -> rx.Component:
    return rx.hstack(
        rx.input(
            placeholder="Buscar",
            size="3",
            width="250px",
            border_radius="10px",
            border_color="transparent",
            bg="#444",
            _placeholder={"color": "white"},
            _focus={"border_color": "transparent","box_shadow":"0 0 0 2px #555"}
        ),
        rx.button(
            rx.icon(tag="search"),
            bg="white",
            color="black",
            border="1px solid #ccc",
            border_left="none",
            border_radius="0px 5px 5px 0px",
            height="100%",
            padding_x="10px",
            _hover={"bg": "#050404", "color": "white"},
        ),
        spacing="1",
        align_items="center",
        justify="center",  
        width="100%",       
    )
# ---- CARRITO Y CUENTAS ----
def account_links() -> rx.Component:
    return rx.vstack(
        rx.center(
            rx.button(
                    rx.icon(tag="shopping_cart"),
                    rx.text(f"CARRITO ()"),
                    bg="#A9A9A9",
                    color="white",
                    size="3",
                    width=["90%","40%"],
                    padding_x="10px",
                    border_radius="5px",
                    _hover={"bg": "#444"},
                ),
                width="100%",       
                justify="center",
                align="center",     
            ),
            
        rx.hstack(
            rx.link(
                "CREAR CUENTA",
                href="/register",
                color="black",
                font_size="10px",
                text_decoration="none",
                _hover={"text_decoration": "underline"},
            ),
            rx.text("|", color="black", font_size="10px"),
            rx.link(
                "INICIAR SESIÓN",
                href="/login",
                color="black",
                font_size="10px",
                text_decoration="none",
                _hover={"text_decoration": "underline"},
            ),
            spacing="2",
            align_items="center",
            justify="center",   
            width="100%",
        ),
        direction="column",
        align_items="center",
        spacing="2",
        padding_x=["10px","40px"],
        padding_y="20px",
        justify="center",
        align="center",
        width="100%",           
    ),

# Función para normalizar nombre de producto
def normalize_nombre(nombre: str):
    return nombre.upper().replace(" ", "_").replace("#","").replace("-","_")

# ---- PRODUCTOS ----
def products() -> rx.Component:
    productos = [
        ("VANSKNUSKOOL.png", "VANS KNU SKOOL #793", "$50.000", "$60.500 con efectivo (en el local)"),
        ("VANSUHYLANE.png", "VANS U HYLANE", "$80.000", "$60.500 con efectivo (en el local)"),
        ("puma 180.png", "PUMA", "$90.000", "$67.500 con efectivo (en el local)"),
        ("SAMBAXLG.png", "SAMBA XLG", "$80.000", "$60.000 con efectivo (en el local)"),
        ("AIRFORCE.png", "AIR FORCE", "$80.000", "$60.000 con efectivo (en el local)"),
        ("CAMPUSXBADBUNNY.png","CAMPUS X BAD BUNNY","$90.000","$67.500 con efectivo (en el local)"),
        ("SAMBA795.png"," SAMBA #795","$90.000","$80.500 con efectivo (en el local)"),
        ("DOBLEBDARK669.jpg"," DOBLEB DARK #669","$90.000","$67.500 con efectivo (en el local)"),
        ("ADI 2000.png","ADI 2000","$90.000","$63.500 con efectivo (en el local)"),
        ("CAMPUSXBADBUNNY783.png","CAMPUS X BADBUNNY #783 ","$90.000","$67.500 con efectivo (en el local)"),
        ("SBDUNK778.png"," SB DUNK #778","$90.000","$67.500 con efectivo (en el local)"),
        ("JORDAN1-823.png"," JORDAN 1 #823","$90.000","$67.500 con efectivo (en el local)"),
        ("CASUALDOBLEBCOCOA.png","CASUAL DOBLEB COCOA #841","$90.000","$67.500 con efectivo (en el local)"),
        ("ADIDASORMILLEN850.png","ADIDAS ZORMILLEN #841","$90.000","$67.500 con efectivo (en el local)"),
        ("CONVERSEALLSTAR717.png"," CONVERSE ALL STAR #717","$90.000","$67.500 con efectivo (en el local)"),
        ("SBDUNKLOW.png","SB DUNK LOW #798 ","$90.000","$67.500 con efectivo (en el local)"),
        ("VANSKNUSKOOLL.png","VANS KNU SKOOL #676","$90.000","$67.500 con efectivo (en el local)"),
        ("JORDAN1LOWXTRAVISSCOTT.png","JORDAN 1 LOW X TRAVIS SCOTT #769","$90.000","$67.500 con efectivo (en el local)"),
        ("DOBLEBSKY.png","DOBLED SKY","$90.000","$67.500 con efectivo (en el local)"),
        ("JORDAN1MIDBROWN.png","JORDAN 1 MID BROWN","$90.000","$67.500 con efectivo (en el local)"),
        ("SAMBAXLGG.png","SAMBA XLG","$90.000","$60.000 con efectivo (en el local)"),
        ("NEWBALANCE9060.png","NEW BALANCE 9060","$90.000","$67.500 con efectivo (en el local)"),
        ("FORUMLOW871.png","FORUM LOW 871","$90.000","$67.500 con efectivo (en el local)"),
        ("CAMPUSXBADBUNNYY.png","CAMPUS X BAD BUNNY","$72.000","$54.500 con efectivo (en el local)"),
        ("SAMBA869.png","SAMBA 869","$90.000","$67.500 con efectivo (en el local)"),
        ("DROPSTEPLOW854.png","DROP STEP LOW 853","$90.000","$67.500 con efectivo (en el local)"),
        ("OSIRIS870.png","OSIRIS 870","$90.000","$67.500 con efectivo (en el local)"),
        ("JORDAN1821.png","JORDAN 1 #821","$90.000","$67.500 con efectivo (en el local)"),
    ]
    
    return rx.box(
        # --- HEADER DE PRODUCTOS ---
        rx.box(
            rx.center(
                rx.hstack(
                    rx.spacer(),
                    search_bar(),
                    rx.spacer(),
                    account_links(),
                    align="center",
                    justify="start",
                    padding_x=["10px","50px"],  
                    height="auto",              
                    bg="white",                 
                    wrap="wrap",  # evita que se desborde en celular
                    spacing="4",                
                ),
            ),
            rx.center(
                rx.text(
                    "Nuestros Productos - Zapatillas",
                    font_size=["20px","28px"],     
                    font_weight="bold",
                    color="black",
                    text_align="center",
                    margin_y="10px",
                    padding_x="10px",                
                ),
            position="sticky",
            top="0",
            z_index="10",
            box_shadow="0 2px 5px rgba(0,0,0,0.2)",
            ),
            rx.center(
                rx.image(
                    src="delta.png",
                    margin_top="50px",
                    width=["100%", "auto"],              
                    ),
            ),
            rx.center(
                rx.image(
                    src="cambio.png",
                    margin_top="50px",
                    width=["100%", "auto"],              
                ),
            ),
        ),
        rx.hstack(
            rx.link(rx.button("VOLVER",font_size="16px", color="white",border_radius="30px",font_weight="bold",bg="#DAA520",margin_top="100px",_hover={"transform": "scale(1.05)"}),
                    href="/",
            
        ),
        justify="center",
        align="center",
        ),

        rx.center(
            *[
                rx.box(
                    rx.vstack(
                        rx.link(
                            rx.image(
                                src=src, 
                                width="200px", 
                                height="250px",
                                border_radius="8px",
                                _hover={"transform": "scale(1.05)", "cursor": "pointer"}
                            ),
                            href=f"/detalle/{normalize_nombre(nombre)}"
                        ),
                        rx.text(nombre, font_size="14px", font_weight="medium",color="black"),
                        rx.text(precio, font_size="16px", font_weight="bold", color="black"),
                        rx.button(
                        efectivo, bg="white", opacity="1",color="#DAA520",font_size="15px",font_weight="bold",
                        ),
                        rx.box(
                            rx.text("3 cuotas sin interés de $30.000,00",color="#DAA520",font_size="15px",font_weight="medium",border="#DAA520"),
                            
                            border="1px solid #DAA520",  
                            padding="5px",             
                            border_radius="5px",       
                            bg="white",
                        ),
                        rx.button(
                            "Añadir al carrito", 
                            color="white", 
                            bg="#DAA520",
                            _hover={"transform": "scale(1.05)"},
                            on_click=lambda _: CartState.toggle_cart_modal(nombre=nombre, imagen=src),
                        ),
                        spacing="3",
                        align="center",
                    ),
                    rx.center(
                        rx.box(
                            border_top="1px dotted #ccc",
                            width="90%",
                            margin_y="2em",
                            margin_top="40px",
                        ),
                    ),
                    max_width="400px",
                    width=("calc(45%)","calc(38%)"),
                    min_width="220",
                    bg="transparent",  # sin fondo
                    border="none",     # sin borde
                    box_shadow="none", # sin sombra
                    align="center",
                    justify="center",
                )
                for src, nombre, precio, efectivo in productos  
            ],
            justify="center",
            align="start",  
            wrap="wrap",       
            spacing="2",
            row_gap="5px",    
            width="100%",
            padding_y="70px",
        ),
        
        # --- BOTÓN MOSTRAR MÁS ---
        rx.center(
            rx.button(
                "Mostrar más productos",
                bg="black",
                color="white",
                border_radius="5px",
                padding_x="20px",
                padding_y="10px",
                _hover={"bg": "#444"},
                margin_top="20px",
            ),
            margin_bottom="50px",
        ),
# === SECCIÓN DE PROMOCIONES DESLIZABLE ===
rx.box(
    rx.text(
        "🛍️ Productos en Promoción",
        font_size="22px",
        font_weight="bold",
        color="#DAA520",
        margin_top="50px",
        margin_bottom="20px",
        text_align="center",
    ),
    rx.hstack(
        rx.icon_button(
            rx.icon(tag="chevron_left", size=28),
            bg="white",
            border="1px solid #ccc",
            border_radius="50%",
            _hover={"bg": "#DAA520", "color": "white"},
            on_click=rx.call_script(
                """
                const container = document.getElementById('promos');
                if (container) container.scrollBy({left: 300, behavior: 'smooth'});
                """
            ),
        ),
        rx.scroll_area(
            rx.hstack(
                *[
                    rx.box(
                        rx.vstack(
                            rx.image(
                                src=src,
                                width="180px",
                                height="180px",
                                border_radius="10px",
                                _hover={"transform": "scale(1.05)", "cursor": "pointer"},
                            ),
                            rx.text(nombre, font_weight="bold", font_size="14px", color="black"),
                            rx.text(precio, font_size="16px", color="#DAA520", font_weight="bold"),
                            rx.button(
                                "Añadir al carrito",
                                bg="#DAA520",
                                color="white",
                                _hover={"transform": "scale(1.05)"},
                                on_click=lambda _: CartState.toggle_cart_modal(nombre),
                            ),
                            rx.link(
                                "Ver más detalle",
                                href=f"/detalle/{normalize_nombre(nombre)}",
                                color="black",
                                font_size="13px",
                                _hover={"text_decoration": "underline"},
                            ),
                            spacing="3",
                            align="center",
                        ),
                        bg="white",
                        border_radius="15px",
                        box_shadow="0 2px 10px rgba(0,0,0,0.1)",
                        padding="15px",
                        margin_x="10px",
                        min_width="220px",
                    )
                    for src, nombre, precio in [
                        ("sb-dunk-low-premium-00494.png", "SB DUNK LOW PREMIUN 00494 ", "$40.000,00"),
                        ("vans-classic-sin-plataforma-nacionales-107.png", "VANS CLASSIC (SIN PLATAFORMA) NACIONALES", "$40.000,00"),
                        ("converse-all-star-718.png", "CONVERSE ALL STAR 718", "$49.000"),
                        ("sb-dunk-low-pro-panda-premium-426.png", "SB DUNK LOW PRO PANDA PREMIUN 426", "$56.000"),
                        ("sb-dunk-low-premium2.png", "SB DUNK LOW PREMIUN 2", "$63.000"),
                        ("converse-all-star-716.png", "CONVERSE ALL STAR 716", "$56.000,00"),
                        ("vans-bota-sk8-nacionales-102.png", "VANS BOTA SK8 NACIONALES 102", "$44.000,00"),
                    ]
                ],
                spacing="5",
            
            ),
            width="80%",
            overflow_x="auto",
            white_space="nowrap",
            scroll_behavior="smooth",
            id="promos",
        ),
        rx.icon_button(
            rx.icon(tag="chevron_right", size=28),
            bg="white",
            border="1px solid #ccc",
            border_radius="50%",
            _hover={"bg": "#DAA520", "color": "white"},
            on_click=rx.call_script(
                """
                const container = document.getElementById('promos');
                if (container) container.scrollBy({left: 300, behavior: 'smooth'});
                """
            ),
        ),
        justify="center",
        align="center",
        spacing="4",
        margin_bottom="60px",
    ),
    width="100%",
    justify="center",
    align="center",
),

        
        rx.center(
            rx.box(
                border_top="1px dotted #ccc",
                width="90%",
                margin_y="2em",
            ),
        ),
        rx.center(
            rx.image(
                src="delta.png",
                margin_top="30px",
                width=["100%", "auto"],              
            ),
        ),
        # === SECCIÓN INFERIOR: INFORMACIÓN Y CONTACTO ===
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
                ),
                # Medios de pago
                rx.vstack(
                    rx.text("MEDIOS DE PAGO", weight="bold", color="white", font_size="15px"),
                    rx.image(src="/tarjetas.png", height="100px"),
                # === FORMAS DE ENVÍO ===
                rx.center(
                    rx.vstack(
                        rx.text("FORMAS DE ENVÍO", weight="bold", font_size="14px", color="white"),
                        rx.image(src="/correoargentino@2x.png", height="30px"),
                        rx.link("SEGUIMIENTO DE ENVIOS",href="https://www.correoargentino.com.ar/formularios/e-commerce",color="white",font_size="15px",weight="bold",),
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
                bg="black",
                wrap="wrap",
            ),
            width="100%",
        ),
        cart_modal(),  # 👈 Montado aquí
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
    
    # 2. Link: INGRESÁ ACÁ.
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
    # 3. Separador: /
    rx.text(
        " / ",
        color="black",
        font_size="12px",
        display="inline",
    ),
    
    # 4. Link: BOTÓN DE ARREPENTIMIENTO
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
