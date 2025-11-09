import reflex as rx


# Función para normalizar nombre de producto
def normalize_nombre(nombre: str):
    return nombre.upper().replace(" ", "_").replace("#","").replace("-","_")

class CartState(rx.State):
    show_modal: bool = False
    show_cart_drawer: bool = False
    selected_product: str = ""
    selected_image: str = ""
    selected_price: float = 0.0
    selected_size: str = ""
    quantity: int = 0
    cart_items: list[dict] = []
    

    # --- Agregar estas propiedades y métodos dentro de tu clase CartState ---

    # Datos del comprador / envío
    buyer_nombre: str = ""
    buyer_apellido: str = ""
    buyer_telefono: str = ""
    buyer_email: str = ""
    buyer_calle: str = ""
    buyer_numero: str = ""
    buyer_departamento: str = ""
    buyer_barrio: str = ""
    buyer_ciudad: str = ""
    buyer_postal: str = ""
    buyer_dni: str = ""
    billing_same: bool = True
    wants_newsletter: bool = False
    show_selected_panel_mobile: bool = True

    def toggle_selected_panel_mobile(self, e: rx.event.PointerEventInfo | None = None):
        """Alterna la visibilidad del panel de producto en móviles."""
        self.show_selected_panel_mobile = not self.show_selected_panel_mobile

    # Datos de tarjeta
    card_number: str = ""
    card_holder: str = ""
    card_expiry: str = ""
    card_cvc: str = ""


    def set_field(self, key: str, value: str):
        setattr(self, key, value)


    def start_checkout(self, e: rx.event.PointerEventInfo | None = None):
        if not self.cart_items:
            return
        return rx.redirect("/checkout")

    
    def go_to_payment(self, e: rx.event.PointerEventInfo | None = None):
        if not self.buyer_nombre or not self.buyer_apellido or not self.buyer_telefono:
            return
        return rx.redirect("/checkout/payment")

    def confirm_payment(self, e: rx.event.PointerEventInfo | None = None):
        self.cart_items = []
        return rx.redirect("/checkout/thankyou")


    @rx.var
    def total_items(self) -> int:
        return len(self.cart_items)
    

    def select_image(self, img: str):
        self.selected_image = img


    @rx.var
    def formatted_selected_price(self) -> str:
        precio_entero = int(self.selected_price)
        formatted_price = f"{precio_entero:,}"
        formatted_price = formatted_price.replace(",", ".")
        return f"${formatted_price}"
        
    # ropiedad computada para formatear todos los ítems del carrito
    @rx.var
    def formatted_cart_items(self) -> list[dict]:
        formatted_list = []
        for item in self.cart_items:
            # Función local para el formateo de precios
            def format_price(price):
                precio_entero = int(price)
                formatted_price = f"{precio_entero:,}"
                return f"${formatted_price.replace(',', '.')}"

            # Crea una copia del ítem y le añade el precio formateado
            formatted_item = item.copy()
            formatted_item["precio_formateado"] = format_price(item["precio"])
            formatted_list.append(formatted_item)
        return formatted_list

    def toggle_cart_modal(self, e: rx.event.PointerEventInfo | None = None, nombre: str = "", imagen: str = "", precio: str = ""):
        self.show_modal = not self.show_modal
        if nombre:
            self.selected_product = nombre
        if imagen:
            self.selected_image = imagen
        if precio:
            # Convertimos precio a float aunque venga como "$80.000"
            if isinstance(precio, str):
                precio = precio.replace("$", "").replace(".", "").replace(",", ".").strip()
            try:
                self.selected_price = float(precio)
            except ValueError:
                self.selected_price = 0.0
    
    # Función para calcular el total
    def get_total(self) -> float:
        total = 0.0
        for item in self.cart_items:
            precio = (
                float(str(item["precio"]).replace("$", "").replace(".", "").replace(",", "."))
                if isinstance(item["precio"], str)
                else float(item["precio"])
            )
            total += precio * int(item["cantidad"])
        return total
    
    # NUEVA PROPIEDAD REACTIVA (automáticamente se actualiza)
    @rx.var
    def total_text(self) -> str:
        # Usamos el formato de miles y luego reemplazamos la coma por el punto.
        total_float = self.get_total()
        total_entero = int(total_float)
        formatted_total = f"{total_entero:,}"
        formatted_total = formatted_total.replace(",", ".")
        return f"Total: ${formatted_total}"
    
    
    def select_size(self, talle: int):
        self.selected_size = (talle)
    
    def set_quantity(self,value: str):
        try:
            self.quantity = max(1, int(value))
        except ValueError:
            self.quantity = 0

    def add_to_cart(self):
        if not self.selected_product or not self.selected_image:
            return
        item = {
            "nombre": self.selected_product,
            "imagen": self.selected_image,
            "precio": self.selected_price,
            "talle": self.selected_size or "-",
            "cantidad": self.quantity or 1,
        }
        self.cart_items.append(item)
        self.show_modal = False
        self.show_cart_drawer = True
        return rx.redirect("/products")
    
    # --- Eliminar producto del carrito ---
    def remove_from_cart(self, index: int):
        if 0 <= index < len(self.cart_items):
            self.cart_items.pop(index)
    
    # --- Mostrar / ocultar carrito lateral ---  
    def toggle_cart_drawer(self):
        self.show_cart_drawer = not self.show_cart_drawer

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
                on_click=CartState.toggle_cart_modal,
            ),
            # Pequeño indicador visible para debugging/UX
            rx.box(
                rx.text("MOSTRANDO", font_weight="bold", color="white"),
                position="fixed",
                top="12px",
                right="12px",
                bg="#DAA520",
                padding="6px 10px",
                border_radius="8px",
                z_index="1002",
            ),
            # Contenedor modal
            rx.center(
                rx.box(
                    rx.vstack(
                        # Imagen del producto
                        rx.image(
                            src=CartState.selected_image,
                            width="500px",
                            height="400px",
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
                        rx.text(
                            CartState.formatted_selected_price,
                            font_size="18px",
                            color="#DAA520",
                            font_weight="bold",
                            margin_bottom="10px",
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
                        # --- NUEVO: campo de cantidad ---
                        rx.hstack(
                            rx.text("Cantidad:", font_size="16px", color="#333"),
                            rx.input(
                                value=CartState.quantity,
                                width="60px",
                                text_align="center",
                                border="1px solid #ccc",
                                border_radius="6px",
                                bg="white",
                                color="black",
                                on_change=CartState.set_quantity,
                            ),
                            justify="center",
                            spacing="2",
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
                            on_click=CartState.add_to_cart,
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
                max_height="90vh",
                overflow_y="auto",
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
    ),

# ===== CARRITO LATERAL =====
def cart_drawer() -> rx.Component:
    return rx.cond(
        CartState.show_cart_drawer,
        rx.box(
            # Fondo oscuro
            rx.box(
                position="fixed",
                top="0",
                left="0",
                width="100%",
                height="100%",
                bg="rgba(0,0,0,0.5)",
                z_index="1100",
                on_click=CartState.toggle_cart_drawer,
            ),
            # Panel lateral
            rx.box(
                rx.vstack(
                    rx.hstack(
                        rx.text(
                            "CARRITO DE COMPRAS",
                            font_weight="bold",
                            font_size="20px",
                            color="black",
                        ),
                        rx.button(
                            "cerrar",
                            bg="#DAA520",
                            color="black",
                            _hover={"transform": "scale(1.05)", "cursor": "pointer"},
                            on_click=CartState.toggle_cart_drawer,
                        ),
                        justify="between",
                        width="100%",
                    ),
                    # PRODUCTO y SUBTOTAL
                    rx.hstack(
                        rx.text("PRODUCTO", font_size="14px", font_weight="bold", color="black"),
                        rx.spacer(),
                        rx.text("SUBTOTAL", font_size="14px", font_weight="bold", color="black"),
                        width="100%",
                        padding_x="10px",
                        margin_top="10px",
                    ),
                    # Lista de productos
                    rx.scroll_area(
                        rx.vstack(
                            rx.foreach(
                                CartState.formatted_cart_items,
                                lambda item, i: rx.hstack(
                                    # === COLUMNA IZQUIERDA ===
                                    rx.hstack(
                                        rx.image(
                                            src=item["imagen"],
                                            width="70px",
                                            height="70px",
                                            border_radius="10px",
                                            margin_left="10px",
                                        ),
                                        rx.vstack(
                                            rx.text(item["nombre"], font_weight="bold", color="black"),
                                            rx.text(
                                                f"Talle: {item.get('talle', '—')}",
                                                font_size="13px",
                                                color="#555",
                                            ),
                                            rx.text(
                                                f"Cantidad: {item['cantidad']}",
                                                font_size="13px",
                                                color="#555",
                                            ),
                                            align_items="start",
                                            spacing="1",
                                        ),
                                        spacing="3",
                                    ),
                                    rx.spacer(),
                                    # === COLUMNA DERECHA (PRECIO + ELIMINAR) ===
                                    rx.vstack(
                                        rx.hstack(
                                            rx.text(
                                                item["precio_formateado"],
                                                color="#DAA520",
                                                font_weight="bold",
                                                font_size="15px",
                                                margin_right="8px",
                                            ),
                                            rx.icon_button(
                                                "trash",
                                                color_scheme="red",
                                                size="2",
                                                on_click=lambda _, idx=i: CartState.remove_from_cart(idx),
                                            ),
                                            align="center",
                                        ),
                                        margin_top="0px", 
                                        align_items="end",
                                        padding_right="15px",
                                    ),
                                    spacing="4",
                                    align="start",
                                    padding_y="10px",
                                    border_bottom="1px solid #eee",
                                    width="100%",
                                    justify="between",
                                ),
                            ),
                            spacing="7",
                            width="100%"
                        ),
                        max_height="60vh",
                        overflow_y="auto",
                    ),
                    # === SECCIÓN SUBTOTAL Y ENVÍO ===
                    rx.box(
                    # Subtotal sin envío
                        rx.hstack(
                            rx.text("Subtotal (sin envío):", font_weight="bold", color="black"),
                            rx.text(
                            CartState.total_text,
                            font_weight="bold",
                            color="#000",
                            margin_left="auto",
                            ),
                            width="100%",
                            justify_content="between",
                            align_items="center",
                            margin_top="15px",
                        ),
                        # Título medios de envío
                        rx.hstack(
                            rx.icon(tag="truck", color="#000"),
                            rx.text("Medios de envío", font_weight="bold", color="black"),
                            spacing="2",
                            margin_top="10px",
                        ),
                        # Campo de código postal + botón calcular
                        rx.hstack(
                            rx.input(
                                placeholder="Tu código postal",
                                width="60%",
                                border_radius="8px",
                                border="1px solid #ccc",
                                padding="5px",
                                bg="white",
                                color="black",
                            ),
                            rx.button(
                                "CALCULAR",
                                bg="#000",
                                color="#fff",
                                padding_x="12px",
                                padding_y="5px",
                                border_radius="8px",
                                cursor="pointer",
                                _hover={"background_color": "#222"},
                            ),
                            spacing="2",
                            margin_top="8px",
                        ),

                        # Link “No sé mi código postal”
                        rx.link(
                            "No sé mi código postal",
                            href="https://www.correoargentino.com.ar/formularios/cpa",
                            font_size="13px",
                            color="#000",
                            text_decoration="underline",
                            margin_top="4px",
                        ),

                        # Opción “Nuestro local”
                        rx.hstack(
                            rx.icon(tag="store", color="#000"),
                            rx.text("Nuestro local", font_weight="bold", color="black"),
                            spacing="2",
                            margin_top="15px",
                        ),

                        # Dirección del local
                        rx.box(
                            rx.text(
                                "Delta Store  Av. Circunvalación Santiago Marzo Este 868 entre Argentino Valle e Independencia (Santa Rosa, La Pampa) – Lunes a Viernes 9:30 a 12:30 / 16:00 a 21:00 – Sábado 11 a 19 hs",
                                font_size="13px",
                                color="#000",
                            ),
                            rx.text("Gratis", font_weight="bold", color="black", margin_top="4px"),
                                border="1px solid #ccc",
                                border_radius="10px",
                                padding="10px",
                                margin_top="5px",
                        ),
                        #TOTAL DE LA COMPRA
                        rx.text(
                            CartState.total_text,
                            font_weight="bold",
                            font_size="18px",
                            color="#DAA520",
                            margin_top="10px",
                        ),
                        rx.button(
                            "INICIAR COMPRA",
                            bg="#DAA520",
                            color="black",
                            width="100%",
                            border_radius="8px",
                            padding_y="12px",
                            font_weight="bold",
                            _hover={"transform": "scale(1.05)", "cursor": "pointer"},
                            on_click=CartState.start_checkout,
                        ),
                        spacing="2",
                        align="start",
                        padding="20px",
                        width="100%",
                    ),
                    position="fixed",
                    top="0",
                    right="0",
                    width="400px",
                    height="100vh",
                    bg="white",
                    box_shadow="-2px 0 10px rgba(0,0,0,0.3)",
                    z_index="1200",
                    animation="slideIn 0.4s ease forwards",
                ),
                style={
                    "@keyframes slideIn": {
                        "from": {"right": "-400px"},
                        "to": {"right": "0"},
                }
            },
        ),
        rx.box(),
    ),
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
            bg="#DAA520",
            _placeholder={"color": "black"},
            _focus={"border_color": "transparent","box_shadow":"0 0 0 2px #555"},
            _hover={"bg": "#DAA520", "color": "black"},
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
            _hover={"bg": "#444", "color": "black"},
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
                    rx.text(
                        rx.cond(
                            CartState.total_items > 0,
                            f"CARRITO ({CartState.total_items})",
                            "CARRITO (0)",
                        )
                    ),
                    bg="#DAA520",
                    color="white",
                    size="3",
                    width=["90%","40%"],
                    padding_x="10px",
                    border_radius="5px",
                    _hover={"bg": "#444"},
                    on_click=CartState.toggle_cart_drawer,
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


# --- Estilos ---
nav_item_style = {
    "color": "white",
    "font_weight": "bold",
    "padding_x": "1em",
    "padding_y": "0.5em",
    "_hover": {"background_color": "#444", "cursor": "pointer"},
}

menu_item_style = {
    "color": "white",
    "background_color": "#DAA520",
    "_hover": {"background_color": "#444", "cursor": "pointer"},
}


# --- Submenú ZAPATILLAS ---
def submenu_zapatillas() -> rx.Component:
    return rx.menu.root(
        rx.menu.trigger(
            rx.hstack(
                rx.text("ZAPATILLAS", color="white"),
                rx.icon(tag="chevron-right", size=16, color="white"),
                justify="between",
                width="100%",
            ),
            _hover={"background_color": "gray"},
            bg="black",
            padding_x="1em",
            padding_y="0.5em",
            border_radius="none",
        ),
        rx.menu.sub_content(
            rx.menu.item("RUNNING", **menu_item_style),
            rx.menu.item("URBANAS", **menu_item_style),
            bg="black",
            border="none",
            side_offset=5,
        ),
    )


# --- Menú PRODUCTOS ---
def menu_productos() -> rx.Component:
    return rx.menu.root(
        rx.menu.trigger(
            rx.text("PRODUCTOS", **nav_item_style),
        ),
        rx.menu.content(
            rx.menu.item("ZAPATILLAS - RUNNING", **menu_item_style),
            rx.menu.item("ZAPATILLAS - URBANAS", **menu_item_style),
            rx.menu.item("IMPORTADAS", **menu_item_style),
            rx.menu.item("NACIONALES", **menu_item_style),
            rx.menu.item("DEPORTIVAS", **menu_item_style),
            bg="#DAA520",
            border="none",
            min_width="220px",
        ),
    )


# --- HEADER + NAVBAR (combinados) ---
def header() -> rx.Component:
    return rx.center(
        # Barra de navegación centrada
        rx.box(
            rx.hstack(
                rx.link(rx.text("INICIO", **nav_item_style), href="/"),
                menu_productos(),
                rx.link(
                    rx.text("CONTACTO", **nav_item_style),
                    href="https://wa.me/543794258727?text=Hola%20Delta%20Store%20👋%2C%20quiero%20consultar%20por%20unas%20zapatillas.",
                ),
                direction="row",
                justify="center",
                align="center",
                spacing="4",
            ),
            background_color="#DAA520",
            width=["90%", "60%", "40%"],
            padding_y="1em",
            border_bottom="2px solid white",
            border_radius="12px",
            margin_top="20px",
            box_shadow="0px 0px 10px rgba(0,0,0,0.3)",
            font_weight="bold",
        ),
    )


# ---- PRODUCTOS ----
def products() -> rx.Component:
    
    productos = [
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

    return rx.vstack(
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
                    wrap="wrap",  
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
            header(),

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
                                _hover={"transform": "scale(1.05)", "cursor": "pointer"},
                                on_click=lambda _, src=src: CartState.select_image(src),
                            ),
                            href=f"/detalle/{normalize_nombre(nombre)}",
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
                            on_click=lambda _: CartState.toggle_cart_modal(nombre=nombre, imagen=src, precio=precio),
                            
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
                    bg="transparent",  
                    border="none",     
                    box_shadow="none", 
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
                if (container) container.scrollBy({left: -300, behavior: 'smooth'});
                """
            ),
            display=["none", "flex"],
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
                                on_click=lambda _: CartState.toggle_cart_modal(nombre=nombre, imagen=src, precio=precio),
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
                    for src, nombre, precio in  [
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
            overflow_x="hidden",
            white_space="nowrap",
            scroll_behavior="smooth",
            id="promos",
            sx={
                "&::-webkit-scrollbar": {"height": "8px"},
                "&::-webkit-scrollbar-thumb": {
                    "background": "#DAA520",
                    "border_radius": "10px",
                },
                "&::-webkit-scrollbar-thumb:hover": {"background": "#b8860b"},
                "&::-webkit-scrollbar-track": {"background": "#DAA520" },
            }
        ),
        # --- BOTÓN DERECHO ---
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
            display=["none", "flex"],
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
        cart_modal(),# 👈 Montado aquí
        cart_drawer(),


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
