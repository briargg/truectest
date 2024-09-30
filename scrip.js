document.addEventListener('DOMContentLoaded', () => {
    const adList = document.getElementById('ad-list');

    // Dummy data de anuncios (puedes reemplazarlo con una API o base de datos)
    const ads = [
        {
            title: 'Bicicleta en Buen Estado',
            description: 'Ofrezco una bicicleta montañera en buen estado, la cambio por una patineta.',
            offer: 'Busco una patineta',
            contact: 'contacto@example.com'
        },
        {
            title: 'Clases de Matemáticas',
            description: 'Doy clases de matemáticas a nivel secundario. A cambio, busco clases de guitarra.',
            offer: 'Busco clases de guitarra',
            contact: 'profesor@example.com'
        }
    ];

    // Mostrar anuncios en la página principal
    ads.forEach(ad => {
        const adItem = document.createElement('div');
        adItem.classList.add('ad-item');
        adItem.innerHTML = `
            <h3>${ad.title}</h3>
            <p>${ad.description}</p>
            <p><strong>Ofreces a Cambio:</strong> ${ad.offer}</p>
            <p><strong>Contacto:</strong> ${ad.contact}</p>
        `;
        adList.appendChild(adItem);
    });

    // Publicar anuncio en la página de creación
    const postForm = document.getElementById('post-form');
    if (postForm) {
        postForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const title = document.getElementById('title').value;
            const description = document.getElementById('description').value;
            const offer = document.getElementById('offer').value;
            const contact = document.getElementById('contact').value;

            const newAd = {
                title,
                description,
                offer,
                contact
            };

            // Guardar el anuncio localmente (puedes usar APIs o bases de datos)
            ads.push(newAd);

            // Redirigir a la página principal
            window.location.href = 'index.html';
        });
    }
});
