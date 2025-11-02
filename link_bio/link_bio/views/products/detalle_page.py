import reflex as rx
from .products import CartState, normalize_nombre

# Función para normalizar nombre de producto
def normalize_nombre(nombre: str):
    return nombre.upper().replace(" ", "_").replace("#","").replace("-","_")

# Diccionario local con imágenes extra
IMAGENES_EXTRA = {
    "VANS_KNU_SKOOL_793": ["VANSKNUSKOOLL.png", "AIRFORCE.png"],
    "VANS_U_HYLANE": ["VANSUHYLANE.png", "VANSUHYLANE.png"],
    "PUMA 180": ["link_bio/assets/puma 180.png", "link_bio/assets/puma 180.png"],
    "SAMBA_XLG": ["SAMBAXLG.png", "SAMBAXLGG.png"],
    "AIR_FORCE": ["AIRFORCE.png", "AIRFORCE.png"],
    "CAMPUS_X_BAD_BUNNY": ["CAMPUSXBADBUNNYY.png", "CAMPUSXBADBUNNY783.png"],
    "SAMBA_795": ["SAMBA795.png", "SAMBA795.png"],
    "DOBLEB_DARK_669": ["DOBLEBDARK669.jpg", "DOBLEBDARK669.jpg"],
    "ADI_2000": ["ADI 2000.png", "ADI 2000.png"],
    "SB_DUNK_778": ["SBDUNK778.png", "SBDUNK778.png"],
    "JORDAN_1_823": ["JORDAN1-823.png", "JORDAN1MIDBROWN.png"],
    "CASUAL_DOBLEB_COCOA_841": ["CASUALDOBLEBCOCOA.png", "CASUALDOBLEBCOCOA.png"],
    "ADIDAS_ZORMILLEN_850": ["ADIDASORMILLEN850.png", "ADIDASORMILLEN850.png"],
    "CONVERSE_ALL_STAR_717": ["CONVERSEALLSTAR717.png", "CONVERSEALLSTAR717.png"],
    "SB_DUNK_LOW_798": ["SBDUNKLOW.png", "SBDUNKLOW.png"],
    "VANS_KNU_SKOOL_676": ["VANSKNUSKOOLL.png", "VANSKNUSKOOLL.png"],
    "JORDAN_1_LOW_X_TRAVIS_SCOTT_769": ["JORDAN1LOWXTRAVISSCOTT.png", "JORDAN1LOWXTRAVISSCOTT.png"],
    "DOBLED_SKY": ["DOBLEBSKY.png", "DOBLEBSKY.png"],
    "JORDAN_1_MID_BROWN": ["JORDAN1MIDBROWN.png", "JORDAN1MIDBROWN.png"],
    "NEW_BALANCE_9060": ["NEWBALANCE9060.png", "NEWBALANCE9060.png"],
    "FORUM_LOW_871": ["FORUMLOW871.png", "FORUMLOW871.png"],
    "DROP_STEP_LOW_853": ["DROPSTEPLOW854.png", "DROPSTEPLOW854.png"],
    "OSIRIS_870": ["OSIRIS870.png", "OSIRIS870.png"],
    "JORDAN_1_821": ["JORDAN1821.png", "JORDAN1821.png"],
    }


def detalle_page(nombre: str = None) -> rx.Component:
    if not nombre:
        # Si no hay nombre, mostrar mensaje y link de vuelta
        return rx.center(
            rx.vstack(
                rx.text("Producto no encontrado", font_size="24px", font_weight="bold"),
                rx.link("Volver a Productos", href="/products"),
                spacing="4",
            )
        )

    # Buscar imágenes
    clave = normalize_nombre(nombre)
    imagenes = IMAGENES_EXTRA.get(clave, ["/images/not_foun.png"])

    # Datos del producto
    precio = "$50.000"
    efectivo = "$60.500 con efectivo (en el local)"
    talles = [38, 39, 40, 41]
    stock = 5


    return rx.center(
        rx.box(
            # === Layout principal ===
            rx.hstack(
                # ---- Galería de imágenes ----
                rx.vstack(
                    *[
                        rx.image(
                            src=img, 
                            width="80px",
                            height="80px", 
                            border_radius="8px",
                            _hover={"transform": "scale(1.1)"},
                            on_click=lambda _, src=img: CartState.select_image(src),
                        )
                        for img in imagenes
                    ],
                    spacing="2",
                    align="center",
                ),
                # Imagen principal grande
                rx.image(
                    src=CartState.select_image or imagenes[0], width=["100%","400px"], height="400px", border_radius="10px"),
                spacing="5",
                wrap="wrap",
                justify="center",
                align="center",
            ),
            # === Información del producto ===
            rx.box(
                rx.text(nombre, font_size="22px", font_weight="bold"),
                rx.text(precio, font_size="20px", color="black"),
                rx.text(efectivo, font_size="16px", color="green", font_weight="medium"),
                rx.text("3 cuotas sin interés de $30.000,00", font_size="13px", color="gray"),

                # Selector de talle
                rx.hstack(
                    rx.text("TALLE:", font_weight="bold"),
                    *[
                        rx.button(
                            str(t), 
                            bg="white", 
                            border="1px solid #ccc", 
                            _hover={"bg":"black", "color":"white"},
                            on_click=lambda _, talle=t: CartState.select_size(talle),
                        ) 
                        for t in talles
                    ],
                    spacing="2",
                ),
                
                # Selector de cantidad
                rx.hstack(
                    rx.text("CANTIDAD:", font_weight="bold"),
                    rx.input(type_="number", default_value="1", width="60px"),
                    rx.text(f"{stock} en stock", font_size="13px", color="gray"),
                    spacing="2",
                    align="center",
                ),

                # Calcular envío
                rx.vstack(
                    rx.text("Medios de envío", font_weight="bold", margin_top="15px"),
                    rx.hstack(
                        rx.input(placeholder="Tu código postal", width="200px"),
                        rx.button("CALCULAR", bg="black", color="white"),
                        spacing="2",
                    ),
                    rx.text("No sé mi código postal", font_size="12px", color="gray"),
                    spacing="1",
                ),

                # Botón agregar al carrito
                rx.button("AGREGAR AL CARRITO", bg="black", color="white", size="4", width="100%", margin_top="15px",
                    _hover={"transform": "scale(1.05)"},
                    on_click=lambda _: CartState.toggle_cart_modal(
                        nombre=nombre,
                        imagen=imagenes[0],
                        precio=precio
                    ),
                ),

                # Info de local
                rx.box(
                    rx.text("Nuestro local", font_weight="bold", margin_top="20px"),
                    rx.text("Delta Store - Av. Circunvalación Santiago Marzo Este 868 entre Argentino Valle e Independencia (Santa Rosa, La Pampa)", font_size="13px"),
                    rx.text("Horario: Lunes a Viernes 9:30 a 12:30 / 16:00 a 21:00. Sábado 11 a 19:00.", font_size="13px"),
                    margin_top="15px",
                    padding="10px",
                    border="1px solid #ddd",
                    border_radius="8px",
                    bg="#f8f8f8",
                ),
                spacing="3",
                margin_top="30px",
                max_width="500px",
            ),
            spacing="5",
            wrap="wrap",
            justify="center",
            align="start",
            padding_y="60px",
        ),
    )