def normalize_nombre(nombre: str) -> str:
    """Normaliza el nombre de un producto para usar en URLs."""
    return (
        nombre.upper()
        .replace(" ", "_")
        .replace("#", "")
        .replace("-", "_")
        .replace(".", "")
    )
