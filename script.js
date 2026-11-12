document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // 1. DESPLAZAMIENTO SUAVE (SMOOTH SCROLL)
    // ==========================================
    const navLinks = document.querySelectorAll('nav a, #inicio a');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            
            // Verifica si el enlace apunta a una sección interna
            if (targetId.startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // ==========================================
    // 2. BOTÓN "VOLVER ARRIBA" (BACK TO TOP)
    // ==========================================
    // Crea el botón dinámicamente y lo añade al documento
    const scrollTopBtn = document.createElement('button');
    scrollTopBtn.innerHTML = '▲';
    scrollTopBtn.id = 'scrollTopBtn';
    scrollTopBtn.title = 'Volver arriba';
    document.body.appendChild(scrollTopBtn);

    // Estilos básicos inyectados directamente al botón
    Object.assign(scrollTopBtn.style, {
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        display: 'none',
        padding: '12px 16px',
        backgroundColor: '#4a7c59',
        color: '#ffffff',
        border: 'none',
        borderRadius: '50%',
        cursor: 'pointer',
        fontSize: '16px',
        boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
        zIndex: '1000',
        transition: 'opacity 0.3s ease, transform 0.3s ease'
    });

    // Muestra u oculta el botón según el desplazaamiento de la página
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollTopBtn.style.display = 'block';
            scrollTopBtn.style.opacity = '1';
        } else {
            scrollTopBtn.style.opacity = '0';
            setTimeout(() => {
                if (window.scrollY <= 300) scrollTopBtn.style.display = 'none';
            }, 300);
        }
    });

    // Acción de volver arriba al hacer clic
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // ==========================================
    // 3. INTERACTIVIDAD EN LAS TARJETAS DE PRODUCTO
    // ==========================================
    const articles = document.querySelectorAll('article');

    articles.forEach(article => {
        // Añade un botón de "Ver detalles" a cada producto
        const detailBtn = document.createElement('button');
        detailBtn.textContent = 'Ver más detalles';
        detailBtn.className = 'btn-detalle';
        
        // Estilos para el botón de detalle
        Object.assign(detailBtn.style, {
            marginTop: '15px',
            padding: '8px 16px',
            backgroundColor: '#d4a373',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontWeight: 'bold'
        });

        article.appendChild(detailBtn);

        // Evento al hacer clic en "Ver más detalles"
        detailBtn.addEventListener('click', () => {
            const tituloProducto = article.querySelector('h3').innerText;
            alert(`¡Gracias por tu interés en ${tituloProducto}! Próximamente podrás ver el catálogo completo con precios y disponibilidad.`);
        });
    });

});