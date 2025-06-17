<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Mi Portfolio PHP</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="./css/index.css">
</head>

<body>

    <?php include('./nav.php'); ?>

    <section id="inicio" class="bg-light text-center">
        <h1>Hola, soy [Tu Nombre]</h1>
        <p>Desarrollador Web</p>
        <img src="foto.jpg" class="responsive-img mt-3" alt="Inicio">
    </section>

    <section id="sobremi" class="bg-white text-center">
        <h2>Sobre mí</h2>
        <p>Apasionado por la tecnología...</p>
        <img src="foto2.jpg" class="responsive-img mt-3" alt="Sobre mí">
    </section>

    <section id="proyectos" class="bg-light text-center">
        <h2>Proyectos</h2>
        <p>Aquí irán tus proyectos dinámicos si los cargas de una BD.</p>
    </section>

    <section id="contacto" class="bg-white text-center">
        <h2>Contacto</h2>
        <p>Escríbeme a <a href="mailto:correo@ejemplo.com">correo@ejemplo.com</a></p>
    </section>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>

</html>