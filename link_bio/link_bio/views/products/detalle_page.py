import reflex as rx
from link_bio.utils import normalize_nombre
from .products import CartState



# Lista de productos (copiada de tu código 'products')
# En una aplicación real, esta lista debería estar en un módulo de datos o en el estado.
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

# Definición del PageState para manejar la carga de datos en la página de detalle
class DetallePageState(CartState):
    # La ruta actual se obtiene automáticamente del contexto
    @rx.var
    def normalized_product_name(self) -> str:
        # La ruta en la URL será algo como /detalle/[nombre_normalizado]
        # rx.State.router.page.params["producto"] es la parte dinámica de la ruta
        return self.router.page.params.get("nombre", "")

    @rx.var
    def product_details(self) -> dict | None:
        return get_product_details(self.normalized_product_name)

# Componente para el detalle del producto
def detalle_producto(details: dict) -> rx.Component:
    talles = ["40", "41", "35", "36", "37", "38"] # Tallas de ejemplo, pueden venir de la base de datos
    
    # Prepara los datos para la función toggle_cart_modal
    producto_nombre = details["nombre"]
    producto_imagen = details["imagen"]
    producto_precio = details["precio"]
    
    return rx.center(
        rx.box(
            rx.vstack(
                # Enlace para volver
                rx.link(
                    rx.button("« Volver a Productos", font_size="16px", color="#DAA520", border_radius="30px", font_weight="bold", bg="transparent", border="2px solid #DAA520"),
                    href="/products", # Asume que la lista de productos está en la ruta /productos
                    margin_bottom="30px",
                ),

                # Contenido principal: Imagen y Detalles
                rx.hstack(
                    # Columna de la Imagen
                    rx.box(
                        rx.image(
                            src=producto_imagen,
                            width="100%",
                            max_width="450px",
                            border_radius="8px",
                            box_shadow="lg",
                        ),
                        width=["100%", "50%"],
                    ),

                    # Columna de los Detalles
                    rx.vstack(
                        rx.text(producto_nombre, font_size=["24px", "36px"], font_weight="extrabold", color="black"),
                        rx.text(details["precio"], font_size=["28px", "48px"], font_weight="bold", color="black", margin_top="10px"),
                        
                        # Precio en efectivo
                        rx.text(details["efectivo"], font_size="18px", font_weight="bold", color="#DAA520"),
                        
                        rx.divider(margin_y="20px"),

                        # Selección de Talla
                        rx.text("TALLE:", font_size="18px", font_weight="medium"),
                        rx.flex(
                            *[
                                rx.button(
                                    talle,
                                    size="3",
                                    color_scheme="yellow",
                                    variant=rx.cond(
                                        DetallePageState.selected_size == talle,
                                        "solid", # Seleccionado
                                        "outline", # No seleccionado
                                    ),
                                    on_click=lambda t=talle: DetallePageState.select_size(t),
                                    _hover={"bg": "#F3E5AB"},
                                )
                                for talle in talles
                            ],
                            spacing="3",
                            margin_bottom="20px",
                        ),
                        
                        # Cantidad y Botón de Carrito
                        rx.hstack(
                            rx.input(
                                placeholder="Cantidad",
                                type="number",
                                value=DetallePageState.quantity,
                                on_change=DetallePageState.set_quantity,
                                width="100px",
                                min="1",
                            ),
                            rx.button(
                                "AGREGAR AL CARRITO",
                                color="white",
                                bg="#DAA520",
                                size="4",
                                _hover={"transform": "scale(1.02)", "bg": "#C49000"},
                                on_click=DetallePageState.add_to_cart,
                                is_disabled=rx.cond(DetallePageState.quantity < 1, True, False), # Deshabilita si la cantidad es 0
                            ),
                            spacing="4",
                        ),

                        width=["100%", "50%"],
                        padding_left=["0", "40px"],
                    ),
                    spacing="5",
                    align="start",
                    direction=("column"), # Stack vertical en móvil, horizontal en escritorio
                ),
                width="100%",
                max_width="1200px",
                padding="20px",
            ),
            width="100%",
        ),
        padding_y="50px",
    )


def detalle_page() -> rx.Component:
    # Muestra el detalle del producto si se encuentra, si no, muestra un mensaje de error.
    return rx.cond(
        DetallePageState.product_details,
        detalle_producto(DetallePageState.product_details),
        rx.center(
            rx.vstack(
                rx.heading("Producto No Encontrado", size="4"),
                rx.link(
                    rx.button("Volver a Productos", bg="#DAA520", color="white"),
                    href="/products",
                ),
            ),
            height="80vh",
        ),
    )