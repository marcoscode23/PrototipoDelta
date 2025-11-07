import reflex as rx
from link_bio.utils import normalize_nombre
from .products import CartState


PRODUCTOS_DATA = [
    ("VANSKNUSKOOL.png", "VANS KNU SKOOL #793", "$50.000", "$60.500 con efectivo (en el local)"),
    ("VANSUHYLANE.png", "VANS U HYLANE", "$80.000", "$60.500 con efectivo (en el local)"),
    ("puma 180.png", "PUMA 180", "$90.000", "$67.500 con efectivo (en el local)"),
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
    ("ADIDASFORUMLOW446.png","ADIDAS FORUM LOW 446","$90.000","$67.500 con efectivo (en el local)"),
    ("JORDAN1LOWTRAVISSCOTTREVERSE.png","JORDAN 1 LOW TRAVIS SCOTT REVERSE","$90.000","$67.500 con efectivo (en el local)"),
    ("NEWBALANCE550.png","NEW BALANCE 550","$90.000","$67.500 con efectivo (en el local)"),
    ("NEWBALANCE906060.png","NEW BALANCE 9060","$90.000","$67.500 con efectivo (en el local)"),
]

# Función para obtener los detalles del producto por el nombre normalizado
def get_product_details(normalized_name: str) -> dict:
    for src, nombre, precio, efectivo in PRODUCTOS_DATA:
        if normalize_nombre(nombre) == normalized_name:
            return {
                "imagen": src,
                "nombre": nombre,
                "precio": precio,
                "efectivo": efectivo
            }
    return None


class DetallePageState(CartState):
    selected_size: str = ""
    selected_price: float = 0.0
    quantity: int = 1
    show_success: bool = False
    
    def on_load(self):
        """Se ejecuta al cargar la página de detalle."""
        self.show_success = False

    def select_size(self, talle: int):
        self.selected_size = int(talle)

    def set_quantity(self,value: str):
        try:
            self.quantity = max(1, int(value))
        except ValueError:
            self.quantity = 0

    
    @rx.var
    def normalized_product_name(self) -> str:
        return self.router.page.params.get("nombre", "")

    @rx.var
    def product_details(self) -> dict | None:
        return get_product_details(self.normalized_product_name)
        
    def add_to_cart_event(self, details: dict):
        self.selected_product = details["nombre"]
        self.selected_image = details["imagen"]
        
        raw_price = details.get("precio", 0)
        price_str = str(raw_price)

        if isinstance(raw_price, str):
            cleaned = (
                raw_price.replace("$", "")
                .replace(".", "")
                .replace(",", ".")
                .strip()
            )
        try:
            self.selected_price = float(cleaned) if cleaned else 0.0
        except ValueError:
            self.selected_price = 0.0
    
        self.add_to_cart()

        # Mostrar mensaje de éxito
        self.show_success = True


# Componente para el detalle del producto
def detalle_producto(details: dict) -> rx.Component: 
    producto_nombre = details["nombre"]
    producto_imagen = details["imagen"]

    return rx.container(
        rx.box(
            rx.vstack(
                # Enlace para volver
                rx.link(
                    rx.button(
                        "« Volver a Productos", 
                        font_size="16px",
                        color="white",             
                        bg="#DAA520",              
                        border_radius="30px",
                        font_weight="bold",
                        border="2px solid #DAA520",
                        transition="all 0.2s ease-in-out",  
                        _hover={
                            "bg": "#C49000",                
                            "transform": "scale(1.05)",     
                        },
                    ),
                    href="/products", 
                    margin_bottom=["20px", "30px"], 
                ),

                # Contenido principal: Imagen y Detalles
                rx.flex(
                    # Columna de la Imagen
                    rx.box(
                        rx.vstack(
                            rx.image(
                                src=f"/{producto_imagen}",
                                width=["90%", "450px"],
                                box_shadow="lg",
                                height=["auto", "auto"], 
                                border_radius="12px",
                                object_fit="contain",   
                                margin_bottom=["20px", "0"],
                            ),
                        ),
                        # Centra la imagen en vista móvil
                        display="flex",
                        justify_content="center",
                        width=["100%", "50%"],
                    ),

                    # Columna de los Detalles
                    rx.vstack(
                        rx.text(producto_nombre, font_size=["24px", "36px"], font_weight="extrabold", color="black"),
                        rx.text(details["precio"], font_size=["28px", "48px"], font_weight="bold", color="black", margin_top="10px"),
                        
                        # Precio sin impuestos
                        rx.text("Precio sin impuestos $74.380,17", font_size="14px", color="gray"),
                        
                        # Precio en efectivo
                        rx.text(details["efectivo"], font_size="18px", font_weight="bold", color="#DAA520"),
                        
                        # Cuotas
                        rx.box(
                            rx.text("3 CUOTAS SIN INTERÉS DE $30.000,00", font_weight="bold", color="black", bg="white", padding="8px", border="2px solid black", border_radius="6px"),
                            margin_top="10px",
                        ),
                        rx.link(
                            rx.image(
                            src="/tarjeta1.png"),
                        ),
                        rx.text(
                            rx.text("25% de descuento", as_="span", font_weight="bold"),
                            rx.text("pagando con Efectivo (en el local)", as_="span"),
                            color="black",
                            font_size=["0.85rem", "1rem"],
                            line_height="1.2",
                            margin_top="8px",
                            text_align="center",
                            white_space="nowrap",
                        ),
                        rx.link(
                            "VER MEDIOS DE PAGO", 
                            href="#", 
                            font_size="14px", 
                            color="black", 
                            text_decoration="underline", 
                            margin_bottom="10px"
                        ),
                        
                        rx.divider(border_color="black", border_width="1px", margin_y="10px"),
                        
                        # Selección de Talle
                        rx.text("TALLES:", font_size="18px", font_weight="medium",color="black"),
                        rx.hstack(
                            *[
                                rx.box(
                                    rx.text(str(talle), font_size="16px"),
                                    border="1px solid #DAA520",
                                    border_radius="8px",
                                    padding="5px 10px",
                                    cursor="pointer",
                                    bg=rx.cond(
                                        CartState.selected_size == talle,
                                        "#DAA520",
                                        "transparent",
                                    ),
                                    color=rx.cond(
                                        CartState.selected_size == talle,
                                        "white",
                                        "black",
                                    ),
                                    on_click=lambda: CartState.select_size(talle),
                                    _hover={"bg": "#DAA520", "color": "white"},
                                )
                                for talle in [38, 39, 40, 41, 42, 43]
                            ],
                            spacing="3",
                            justify="center",
                            margin_top="10px",
                        ),

                            # Cantidad y Botón de Carrito
                            rx.text("Cantidad", font_size="16px", font_weigth="bold", color="black"),
                            rx.vstack(
                                rx.input(
                                    placeholder="Cantidad",
                                    value=CartState.quantity,
                                    color="black",
                                    type="number",
                                    on_change=DetallePageState.set_quantity,
                                    width="150px",
                                    
                                ),
                                rx.text("¡No te lo pierdas, es el último!", font_weigth="blod", color="black"),
                                
                            ),
                            rx.text("1 en stock", font_size="14px", color="gray"),
                            
                            rx.button(
                                "AGREGAR AL CARRITO",
                                color="white",
                                bg="#DAA520",
                                size="4",
                                font_weight="bold",
                                width="100%",
                                margin_top="10px",
                                _hover={"transform": "scale(1.02)", "bg": "#C49000"},
                                on_click=DetallePageState.add_to_cart_event(details),
                                is_disabled=rx.cond(DetallePageState.quantity < 1, True, False), # Deshabilita si la cantidad es 0
                            ),
                            rx.cond(
                                DetallePageState.show_success,
                                rx.text(
                                    "✅ Tu producto se cargó correctamente.",
                                    color="green",
                                    font_weight="bold",
                                    margin_top="10px",
                                ),
                            ),
                            #Sección Medios de Envío
                            rx.hstack(
                                rx.icon(tag="truck", color="black"),
                                rx.text("Medios de envío", font_weigth="bold", color="black"),
                                align="center",
                                spacing="2",
                                margin_top="20px",
                            ),
                            rx.divider(),
                            
                            rx.hstack(
                                rx.input(placeholder="Tu código postal", width="60%", color="black"),
                                rx.button("Calcular", bg="#DAA520", border="1px solid black", font_weigth="bold"),
                                width="100%",
                                spacing="3",
                            ),
                            rx.link(
                                rx.text("No sé mi código postal", font_size="14px", color="black"),
                                href="https://www.correoargentino.com.ar/formularios/cpa",
                            ),
                            rx.hstack(
                                rx.icon(tag="store",color="black"),
                                rx.text("Nuestro local", font_weigth="bold", color="black"),
                                align="center",
                                spacing="2",
                                margin_top="20px",
                            ),
                            rx.box(
                                rx.hstack(
                                    rx.text(
                                        "Delta Store  Av. Circunvalación Santiago Marzo Este 868 entre Argentino Valle e Independencia (Santa Rosa, La Pampa) – Lunes a Viernes 9:30 a 12:30 / 16:00 a 21:00 - Sábado 11 a 19:00 hs",
                                        font_size="14px",
                                        color="black",
                                        width="80%",
                                    ),
                                    rx.text("Gratis", font_weigth="bold", color="black", text_align="right", width="80%"),
                                    align="center",
                                    justify="between",
                                ),
                                border="1px solid black",
                                border_radius="8px",
                                padding="10px",
                                width="100%",
                                bg="white",
                            ),
                            rx.image(
                                src="/tienda2.png",
                                width="100%",
                                height="auto",
                                
                            ),
                        spacing="2",
                        width=["100%", "50%"],
                        padding_left=["0", "40px"],
                        align="start",
                    ),
                    
                    spacing="5",
                    align="start",
                    justify="center",
                    
                ),
                width="100%",
                max_width="1100px",
                padding="20px",
            ),
            width="100%",
            bg="white",
            border_radius="16px",
            box_shadow="lg",
            padding="30px",
        ),
        padding_y="40px",             
        min_height="100vh",
    )


def detalle_page() -> rx.Component:
    return rx.vstack(
        # === CABECERA ===
        rx.hstack(
            rx.text(
                "25% OFF EFECTIVO - 20% OFF TRANSFERENCIA",
                height="50px",
                font_size="11px",
                padding="19px",
                
            ),
            justify="center",
            bg="black",
            width="100%",
        ),
        # === CONTENIDO PRINCIPAL ===
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
            rx.image(src="/delta.png", margin_top="10px", width=["70%", "auto"]),
        ),
        rx.cond(
            DetallePageState.product_details,
            detalle_producto(DetallePageState.product_details),
            rx.center(
                rx.vstack(
                    rx.heading("Producto No Encontrado", size="4", color="black"),
                    rx.link(
                        rx.button("Volver a Productos", bg="#DAA520", color="white",size="4",_hover={"transform": "scale(1.02)", "bg": "#C49000"}),
                        href="/products",
                    ),
                ),
                height="80vh",
            ),
        ),

        # === PIE DE PÁGINA ===
        rx.center(
            rx.box(
                border_top="0.5px solid #e0e0e0",  
                width="80%",
                margin_y="1em",                   
            ),
        ),
        rx.center(
            rx.image(src="/delta.png", margin_top="10px", width=["100%", "auto"]),
        ),
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
                    rx.center(
                        rx.vstack(
                            rx.text("FORMAS DE ENVÍO", weight="bold", font_size="14px", color="white"),
                            rx.image(src="/correoargentino@2x.png", height="30px"),
                            rx.link("SEGUIMIENTO DE ENVIOS", href="https://www.correoargentino.com.ar/formularios/e-commerce", color="white", font_size="15px", weight="bold"),
                            spacing="2",
                        ),
                    ),
                    bg="black",
                    padding_bottom="20px",
                    spacing="2",
                    align="start",
                ),
                # Contacto
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
        rx.center(
            rx.text("COPYRIGHT DELTA STORE - 2025. TODOS LOS DERECHOS RESERVADOS", color="black", font_size="12px"),
            bg="white",
            padding_y="10px",
            border_top="1px solid #333",
            text_align="center",
            justify="center",
        ),
        rx.center(
            rx.text("DEFENSA DE LAS Y LOS CONSUMIDORES. PARA RECLAMOS ", color="black", font_size="12px", display="inline", style={"whiteSpace": "nowrap"}),
        ),
        rx.center(
            rx.link("INGRESÁ ACÁ.", href="https://autogestion.produccion.gob.ar/consumidores", color="black", font_size="12px", font_weight="bold", text_decoration="none", display="inline", margin_right="5px", _hover={"text_decoration": "underline"}),
        ),
        padding_y="20px",
        width="100%",
        align="center",
        justify="center",
        wrap="wrap",
        row_gap="40px",
        bg="white",
        on_mount=DetallePageState.on_load,
    )

