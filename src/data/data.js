const data = [
  {
    id: 1,
    name: 'Wallapop',
    rating: 4.8,
    type: 'Online store',
    image: 'wallapop.png',
    device: 'Smartphone',
    description: 'Wallapop is the leading platform for buying and selling second-hand products.'
  },
  {
    id: 2,
    name: 'HBO Max',
    rating: 3.7,
    type: 'Series and films',
    image: 'HBO max.jfif',
    device: 'Desktop',
    description: 'HBO Max is a streaming app that combines all of HBO with even more must-see TV series, blockbuster movies, and exclusive Max Originals.'
  },
  {
    id: 3,
    name: 'Idealista',
    rating: 4.6,
    type: 'Real state',
    image: 'idealista.jpg',
    device: 'Desktop',
    description: 'En idealista, hemos diseñado nuestra app para que buscar la casa que necesitas o cerrar esa operación de venta o alquiler sea lo más fácil posible.'
  },
  {
    id: 4,
    name: 'Job Today',
    rating: 4.6,
    type: 'Jobs',
    image: 'job today.png',
    device: 'Tablet',
    description: 'La mejor app para conseguir trabajo. Entra y sube tu CV para más información.'
  },
  {
    id: 5,
    name: 'Wikiloc Outdoor GPS',
    rating: 4.7,
    type: 'Navigation',
    image: 'wikiloc outdoor.png',
    device: 'Tablet',
    description: 'Utiliza nuestra app GPS para poder llegar donde desees!'
  },
  {
    id: 6,
    name: 'Milanuncios',
    rating: 4.6,
    type: 'Online store',
    image: 'Milanuncios.png',
    device: 'Tablet',
    description: 'Buy and sell what you want in the easiest, fastest and safest way. Do it now!'
  },
  {
    id: 7,
    name: 'MyRealFood',
    rating: 4.8,
    type: 'Food',
    image: 'myrealfood.png',
    device: 'Mobile',
    description: 'La app para comer más saludable y mejorar tu estilo de vida.'
  },
  {
    id: 8,
    name: 'Disney+',
    rating: 4.5,
    type: 'Series and films',
    image: 'disneyplus.webp',
    device: 'Tablet',
    description: 'Disney+ te ofrece entretenimiento sin límite con Disney, Pixar, Marvel, Star Wars, National Geographic y Star, todo en un mismo lugar. Podrás ver los últimos estrenos de series y películas, clásicos de siempre, producciones originales y mucho más.'
  },
  {
    id: 9,
    name: 'Mitele',
    rating: 2.1,
    type: 'Series and films',
    image: 'mitele.png',
    device: 'Tablet',
    description: 'Mitele es la plataforma de televisión a la carta y en directo de Mediaset España, en la que encontrarás los mejores contenidos de Telecinco, Cuatro, FDF, Energy, Divinity y Be Mad de forma legal.'
  },
  {
    id: 10,
    name: 'Filmin',
    rating: 3.4,
    type: 'Series and films',
    image: 'Foto-Filmin.png',
    device: 'Tablet',
    description: 'Nuevos estrenos en exclusiva cada semana, documentales para entender el mundo, grandes clásicos de la historia del cine y las series europeas más premiadas. Disfruta de la emoción de un cine que se queda grabado en ti para siempre.'
  },
  {
    id: 11,
    name: 'Coches.net',
    rating: 4.7,
    type: 'Online store',
    image: 'cochet.net.png',
    device: 'Tablet',
    description: 'No te pierdas nuestra gran oferta de vehículos: Ponemos a tu disposición una aplicación para encontrar tu coche de la forma más cómoda posible.'
  },
  {
    id: 12,
    name: 'WeTransfer',
    rating: 4.6,
    type: 'Sharing',
    image: 'we-transfer.jfif',
    device: 'Tablet',
    description: 'Recopilar es la mejor manera de guardar todo lo que te inspira y alimenta tus ideas. Cargue imágenes y videos, guarde enlaces y cualquier cosa desde sus aplicaciones, luego organícelo todo en paneles visuales. ¡Puedes compartir tableros (si quieres) y trabajar juntos en un tablero!'
  },
  {
    id: 13,
    name: 'Canva',
    rating: 4.8,
    type: 'Photos',
    image: 'Canva.png',
    device: 'Tablet',
    description: 'Canva es una app de diseño gratuita para editar fotos y videos al instante. Crea posts para redes sociales, videos, tarjetas, volantes, collages y más. Con solo tocar la pantalla, agrega animaciones y música a tus historias de Instagram o collages de videos.'
  },
  {
    id: 14,
    name: 'Amazon Music',
    rating: 4.5,
    type: 'Music',
    image: 'music amazon.png',
    device: 'Desktop',
    description: 'Estamos cambiando la forma en que descubres y escuchas la música que te gusta. Escucha música gratis con anuncios, sin necesidad de suscripción. Los clientes Amazon Prime pueden disfrutar de toda la música sin anuncios. O bien, obtén acceso ilimitado con Amazon Music Unlimited y reproduce tus canciones favoritas, en cualquier momento y en cualquier lugar.'
  },
  {
    id: 15,
    name: 'YouTube',
    rating: 4.6,
    type: 'Videos',
    image: 'youtube.jpg',
    device: 'Desktop',
    description: 'Entérate de qué vídeos se están viendo en todo el mundo, desde los vídeos musicales más populares hasta las nuevas tendencias en videojuegos, fitness, películas, series, noticias, aprendizaje y mucho más. Suscríbete a tus canales favoritos, descubre recomendaciones personales y disfruta de la biblioteca más grande de contenido en 4K.'
  },
  {
    id: 16,
    name: 'Twitch',
    rating: 4.7,
    type: 'Streaming',
    image: 'twitch.webp',
    device: 'Desktop',
    description: 'Twitch es un lugar donde miles de comunidades se reúnen para ver a sus streamers favoritos, disfrutar de los juegos que más les gustan, reírse, apoyarse mutuamente y mucho más.'
  },
  {
    id: 17,
    name: 'Bumble',
    rating: 4.4,
    type: 'Dating',
    image: 'bumble.png',
    device: 'Desktop',
    description: 'Millones de personas se han registrado en la app de Bumble, tanto en España como en el resto del mundo, para construir relaciones sociales valiosas, hacer nuevas amistades y crear conexiones verdaderas.'
  },
  {
    id: 18,
    name: 'TikTok',
    rating: 4.8,
    type: 'Videos',
    image: 'tiktok-icon.png',
    device: 'Tablet',
    description: 'TikTok es una comunidad global de videos cortos. Con esta app podrás descubrir, crear y editar videos increíbles, y compartirlos fácilmente con tus amigos y el mundo entero. Crea y edita videos al instante usando filtros especiales, stickers divertidos y mucho más.'
  },
  {
    id: 19,
    name: 'Tinder',
    rating: 3.9,
    type: 'Dating',
    image: 'tinder.png',
    device: 'Tablet',
    description: 'Con 30 mil millones de matches hasta la fecha, Tinder® es la aplicación más popular para conocer gente. Piensa en nosotros como tu acompañante de confianza, vayas donde vayas, allí estaremos.'
  },
  {
    id: 20,
    name: 'LinkedIn',
    rating: 4.1,
    type: 'Jobs',
    image: 'linkedIn.png',
    device: 'Tablet',
    description: 'Únete a LinkedIn, una de las aplicaciones sociales profesionales más grande. Busca empleos, sigue las novedades empresariales y crea redes, todo desde una sola aplicación.'
  },
  {
    id: 21,
    name: 'DAZN',
    rating: 4.6,
    type: 'Streaming',
    image: 'dazn.jpg',
    device: 'Tablet',
    description: 'Si te gusta el deporte, DAZN es tu sitio. ¡Disfruta de la mejor oferta en directo o a la carta, en alta definición y desde cualquier dispositivo, así como de una gran variedad de documentales, programas, reportajes y entrevistas con destacados protagonistas del mundo del deporte!'
  },
  {
    id: 22,
    name: 'BeReal',
    rating: 4.8,
    type: 'Photos',
    image: 'BeReal.png',
    device: 'Mobile',
    description: 'BeReal es la primera plataforma espontánea e impredecible dónde compartir, una vez al día, tus momentos más auténticos con tus amigos a través de tus fotos.'
  },
  {
    id: 23,
    name: 'PicsArt',
    rating: 4.8,
    type: 'Photos',
    image: 'Picsart.png',
    device: 'Tablet',
    description: 'Únete a la comunidad de Picsart de más de 150 millones de creadores de todo el mundo. Con el editor de fotos y editor de videos de Picsart puedes darle vida a tu creatividad.'
  },
  {
    id: 24,
    name: 'Amazon Prime Video',
    rating: 4.7,
    type: 'Videos',
    image: 'amazon prim video.png',
    device: 'Desktop',
    description: 'Ve películas, series, deportes y recomendaciones solo para ti. Prime Video ofrece títulos Amazon Original exclusivos, como The Boys, La maravillosa Sra. Maisel y Jack Ryan de Tom Clancy, así como títulos originales internacionales, como Last One Laughing y Mirzapur.'
  },
  {
    id: 25,
    name: 'Dropbox',
    rating: 4.7,
    type: 'Sharing',
    image: 'dropbox.jpg',
    device: 'Desktop',
    description: 'La mejor manera de gestionar y guardar tus archivos.'
  },
  {
    id: 26,
    name: 'Strava',
    rating: 4.6,
    type: 'Navigation',
    image: 'strava.jfif',
    device: 'Desktop',
    description: 'Strava te permite seguir toda tu actividad física como una red social. Reunimos todo lo relacionado con tus entrenamientos en un solo lugar para que puedas compartirlos con amigos y seguidores.'
  },
  {
    id: 27,
    name: 'Snapchat',
    rating: 4.8,
    type: 'Photos',
    image: 'snapchat.png',
    device: 'Desktop',
    description: 'Snapchat es una forma rápida y divertida de compartir momentos con tus amigos y familiares.'
  },
  {
    id: 28,
    name: 'Notability',
    rating: 4.6,
    type: 'Writing',
    image: 'notability.png',
    device: 'Desktop',
    description: 'Esta aplicación es una increíble aplicación para tomar notas hecha para estudiantes, profesores, empresarios y hombres de negocios. Usando buenas notas, también puede crear múltiples notas multimedia adhesivas coloridas.'
  },
  {
    id: 29,
    name: 'YAZIO',
    rating: 4.6,
    type: 'Food',
    image: 'yazio.png',
    device: 'Tablet',
    description: '¡Te damos la bienvenida a YAZIO! La app para perder peso sin hacer dieta con ayuno intermitente y contador de calorías con más éxito.'
  },
  {
    id: 30,
    name: 'Zoom',
    rating: 4.6,
    type: 'Chat',
    image: 'zoom.png',
    device: 'Desktop',
    description: 'Trabaje desde cualquier lugar con una sola aplicación que combina chat de equipo, teléfono, pizarra, reuniones y más.'
  },
  {
    id: 31,
    name: 'Microsoft Word',
    rating: 4.6,
    type: 'Writing',
    image: 'microsoft word.png',
    device: 'Desktop',
    description: 'La aplicación de confianza de Word permite crear, editar, ver y compartir archivos con otros de forma rápida y sencilla, así como ver y editar documentos de Office adjuntos a los correos.'
  },
  {
    id: 32,
    name: 'Duolingo',
    rating: 4.6,
    type: 'Languages',
    image: 'duolingo.png',
    device: 'Mobile',
    description: '¡Aprende inglés, francés, italiano, alemán y portugués con los cursos gratis de Duolingo!'
  },
  {
    id: 33,
    name: 'Lingokids',
    rating: 4.5,
    type: 'Languages',
    image: 'lingokids.png',
    device: 'Mobile',
    description: 'Aprende jugando en inglés con Lingokids. Tenemos más de 1200 actividades interactivas en inglés con las que tu peque aprenderá tanto habilidades académicas como habilidades socioemocionales para el mundo actual.'
  },
  {
    id: 34,
    name: 'Skype',
    rating: 4.6,
    type: 'Chat',
    image: 'skype.png',
    device: 'Mobile',
    description: 'Gracias a Skype, el mundo puede hablar entre sí. Di hola con un mensaje instantáneo, una llamada o una videollamada, todo gratis.'
  },
  {
    id: 35,
    name: 'Google',
    rating: 4.1,
    type: 'Navigation',
    image: 'Google.png',
    device: 'Mobile',
    description: 'La mejor web para poder buscar todo lo que necesites!'
  },
  {
    id: 36,
    name: 'Twitter',
    rating: 4.6,
    type: 'Chat',
    image: 'twitter.jpg',
    device: 'Mobile',
    description: '¡Únete a la conversación! Twitter es una de las más populares redes sociales si lo que quieres es estar al tanto de todo lo que ocurre.'
  },
  {
    id: 37,
    name: 'eBay',
    rating: 4.7,
    type: 'Online store',
    image: 'ebay.jpg',
    device: 'Mobile',
    description: 'Compra, vende y descubre increíbles ofertas y rebajas online, en la app de compras de eBay: desde moda y electrónica hasta coches. ¡Encuentra aquí todo lo que necesitas!'
  },
  {
    id: 38,
    name: 'Instagram',
    rating: 4.8,
    type: 'Photos',
    image: 'instagram.png',
    device: 'Mobile',
    description: 'Instagram (from Facebook) allows you to create and share your photos, stories, and videos with the friends and followers you care about.'
  },
  {
    id: 39,
    name: 'iMovie',
    rating: 3.9,
    type: 'Videos',
    image: 'imove.png',
    device: 'Desktop',
    description: 'Obtenga excelentes programas de video y otras aplicaciones útiles para una diversión multimedia infinita.'
  },
  {
    id: 40,
    name: 'Uber Eats',
    rating: 4.5,
    type: 'Food',
    image: 'uber eats.png',
    device: 'Mobile',
    description: 'Get food delivery to your doorstep from thousands of amazing local and national restaurants. Find the meal you crave and order food from restaurants easily with the Uber Eats app. Track your order in real-time.'
  },
  {
    id: 41,
    name: 'Hinge',
    rating: 4.6,
    type: 'Dating',
    image: 'Hinger.png',
    device: 'Mobile',
    description: 'Hinge es la app de citas inclusiva para las personas que quieren olvidarse para siempre de las apps de citas. En otras palabras, somos gente como tú, tratando de conocer personas y tener relaciones en el mundo real.'
  },
  {
    id: 42,
    name: 'Nike',
    rating: 4.8,
    type: 'Online store',
    image: 'nike.jpg',
    device: 'Tablet',
    description: 'Encuentra todo lo que busques para hacer deporte y marcar estilo en estas fiestas. Nike Black Friday, Nike Cyber Monday o regalos para las fiestas. Al comprar como Nike Member tienes acceso a lo último en ofertas y tendencias solo disponibles para ti.'
  },
  {
    id: 43,
    name: 'Etsy',
    rating: 4.8,
    type: 'Online store',
    image: 'etsy.png',
    device: 'Mobile',
    description: 'La aplicación de Etsy te permite comprar millones de artículos únicos directamente desde tu teléfono o tablet.'
  },
  {
    id: 44,
    name: 'H&M',
    rating: 4.7,
    type: 'Online store',
    image: 'H&M.jpg',
    device: 'Tablet',
    description: 'Navega por nuestro canal y disfruta de todo ello en tiempo real.'
  },
  {
    id: 45,
    name: 'Adidas',
    rating: 4.8,
    type: 'Online store',
    image: 'adidas.jpg',
    device: 'Tablet',
    description: 'Desde un chándal y zapatillas hasta ropa y calzado, disfruta de todas las ventajas de nuestra tienda de ropa online con la app y aprovecha nuestros descuentos de Black Friday y Cyber Monday.'
  },
  {
    id: 46,
    name: 'Amazon',
    rating: 4.8,
    type: 'Online store',
    image: 'amazon_.png',
    device: 'Tablet',
    description: 'La app de Amazon Compras permite a los usuarios de Android buscar, comparar precios, leer opiniones y realizar pedidos en Amazon directamente desde su móvil.'
  },
  {
    id: 47,
    name: 'ZARA',
    rating: 4.8,
    type: 'Online store',
    image: 'zara-logo.jpg',
    device: 'Mobile',
    description: 'Descubre la nueva colección de ZARA online. Las últimas tendencias para mujer y hombre y los editoriales de la próxima temporada.'
  },
  {
    id: 48,
    name: 'Zalando',
    rating: 4.8,
    type: 'Online store',
    image: 'Zalando.jpg',
    device: 'Mobile',
    description: 'Somos la plataforma de moda online líder en Europa: descubre ropa, zapatos, accesorios, ropa deportiva y mucho más.'
  },
  {
    id: 49,
    name: 'Slack',
    rating: 4.1,
    type: 'Chat',
    image: 'slack.png',
    device: 'Mobile',
    description: 'Slack combina la comunicación y colaboración en equipo en un mismo lugar, haciendo que aumente la productividad en el trabajo, tanto en grandes empresas como en pequeños negocios.'
  },
  {
    id: 50,
    name: 'Just Eat',
    rating: 4.7,
    type: 'Food',
    image: 'just eat.png',
    device: 'Mobile',
    description: 'Comida sin complicaciones entregada en su hogar u oficina. Descargue la aplicación gratuita Just Eat y ordene en restaurantes locales de entrega y recogida y comida para llevar. De indio a italiano, hamburguesas a burritos, encuentre su sabor con Just Eat.'
  }
];

console.log(data);