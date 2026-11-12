// One agreed anchor year per card keeps the game unambiguous. Early dates are
// estimates; later dates identify the specific milestone explained in `note`.
export const DATE_CONVENTION = 'Dates are fixed game reference points. Ancient dates are estimates; broad inventions use the specific milestone shown on each card. Inventions often developed through the work of many people.';

export const EVENTS = [
  {
    id: 'fire', title: 'El fuego', year: -790000,
    approx: 'hace unos 800.000 años', person: 'Primeros seres humanos', category: 'Everyday life',
    before: 'Antes de este descubrimiento, los primeros humanos no podían cocinar los alimentos de forma habitual ni calentarse con una hoguera controlada.',
    after: 'El control del fuego permitió cocinar, calentarse y protegerse mejor de algunos animales.',
    note: 'Game anchor for evidence of controlled hearths at least 790,000 years old. Fire was not discovered on a known date.',
    source: 'https://humanorigins.si.edu/evidence/behavior/hearths-shelters'
  },
  {
    id: 'wheel', title: 'La rueda', year: -3500,
    approx: 'a mediados del IV milenio a. C.', person: 'Comunidades de la antigua Eurasia', category: 'Technology',
    before: 'Antes de este invento, la gente no podía transportar cargas en carros; las llevaba a mano, con animales o sobre trineos.',
    after: 'La rueda facilitó el transporte de cargas y cambió la manera de viajar por tierra.',
    note: 'Approximate game anchor for wheeled transport in the fourth millennium BCE. No single inventor is known.',
    source: 'https://www.britannica.com/technology/wheel'
  },
  {
    id: 'writing', title: 'La escritura', year: -3200,
    approx: 'a finales del IV milenio a. C.', person: 'Escribas de Mesopotamia', category: 'Communication',
    before: 'Antes de este invento, la gente no podía dejar sus palabras por escrito para que otras personas las leyeran mucho tiempo después.',
    after: 'La escritura permitió registrar acuerdos, contar historias y conservar conocimientos.',
    note: 'Approximate anchor for early Mesopotamian writing. Writing also developed independently elsewhere.',
    source: 'https://sites.utexas.edu/dsb/tokens/the-evolution-of-writing/'
  },
  {
    id: 'money', title: 'El dinero', year: -600,
    approx: 'a principios del siglo VI a. C.', person: 'Lidia, en la actual Turquía', category: 'Everyday life',
    before: 'Antes de este avance, la gente no podía pagar con monedas acuñadas de valor reconocido; intercambiaba productos o utilizaba otros bienes.',
    after: 'La acuñación de monedas facilitó los pagos y ayudó a comparar el valor de los productos.',
    note: '600 BCE is a game anchor for early Lydian coinage, not the invention of all money. Other forms of money existed earlier.',
    source: 'https://www.britishmuseum.org/sites/default/files/2021-05/Money_Gallery_LPG_2020_Room_68.pdf'
  },
  {
    id: 'paper', title: 'El papel', year: 105,
    approx: 'a principios del siglo II', person: 'Cai Lun y artesanos anteriores', category: 'Communication',
    before: 'Antes de este avance, en China muchas personas escribían en tablillas pesadas o en seda cara y no podían conseguir tantas hojas ligeras y económicas.',
    after: 'Cai Lun presentó mejoras en la fabricación del papel y contribuyó a difundir un soporte más práctico para escribir.',
    note: '105 CE marks Cai Lun’s recorded presentation of improved papermaking. Archaeological paper predates him.',
    source: 'https://bioresources.cnr.ncsu.edu/resources/nanocellulose-addition-to-paper-and-the-cai-lun-principle-maybe-not-such-a-good-idea-after-all/'
  },
  {
    id: 'gunpowder', title: 'La pólvora', year: 850,
    approx: 'a mediados del siglo IX', person: 'Alquimistas chinos', category: 'Technology',
    before: 'Antes de este invento, la gente no podía impulsar proyectiles con una mezcla química explosiva; utilizaba arcos y otras armas.',
    after: 'La pólvora abrió el camino a los fuegos artificiales y, más tarde, a nuevas armas.',
    note: '850 is a single game estimate within the ninth century, when Chinese texts described early gunpowder mixtures.',
    source: 'https://tile.loc.gov/storage-services/master/gdc/gdcebookspublic/20/21/75/84/61/2021758461/2021758461.pdf'
  },
  {
    id: 'movable', title: 'Los tipos móviles de Bi Sheng', year: 1045,
    approx: 'a mediados del siglo XI', person: 'Bi Sheng', category: 'Communication',
    before: 'Antes de este invento, los impresores chinos no podían reorganizar caracteres de arcilla independientes para componer una página; tallaban páginas enteras en madera.',
    after: 'Bi Sheng creó caracteres reutilizables de arcilla y permitió componer nuevos textos con las mismas piezas.',
    note: '1045 is the game anchor within the documented 1041–1048 period. Woodblock printing existed earlier and remained important.',
    source: 'https://ccs.ncl.edu.tw/files/exhibition/2015%E6%8B%89%E8%84%AB%E7%B6%AD%E4%BA%9E%E6%96%87%E6%98%8E%E4%B9%8B%E5%8D%B0%E8%A8%98%E5%B1%95%E8%A6%BD.compressed.pdf'
  },
  {
    id: 'printing', title: 'La imprenta de Gutenberg', year: 1455,
    approx: 'a mediados del siglo XV', person: 'Johannes Gutenberg y su taller', category: 'Communication',
    before: 'Antes de este avance, en Europa muchos libros se copiaban a mano y la gente no podía conseguir tantas copias iguales en tan poco tiempo.',
    after: 'La imprenta de Gutenberg aceleró la producción de libros y favoreció la circulación de ideas en Europa.',
    note: '1455 anchors the Gutenberg Bible. Printing and movable type had earlier histories in East Asia.',
    source: 'https://guides.loc.gov/gutenberg'
  },
  {
    id: 'microscope', title: 'El microscopio', year: 1590,
    approx: 'a finales del siglo XVI', person: 'Primeros fabricantes de lentes; familia Janssen', category: 'Science',
    before: 'Antes de este invento, los científicos no podían observar con tanto aumento estructuras demasiado pequeñas para verlas a simple vista.',
    after: 'El microscopio amplió la observación de lo diminuto y, con mejoras posteriores, permitió estudiar células y microbios.',
    note: '1590 is the conventional estimate for early compound microscopes, often linked to the Janssens. Attribution is disputed.',
    source: 'https://www.aps.org/apsnews/2004/03/lens-crafters-1590-invention-microscope'
  },
  {
    id: 'media', title: 'Los medios de comunicación', year: 1605,
    approx: 'a principios del siglo XVII', person: 'Johann Carolus', category: 'Communication',
    before: 'Antes de este avance, muchos lectores no podían recibir noticias impresas con regularidad en una publicación dedicada a la actualidad.',
    after: 'Los primeros periódicos impresos reunieron noticias y las hicieron llegar periódicamente a más lectores.',
    note: '1605 anchors Carolus’s Relation, commonly identified as the first printed newspaper. Communication media existed much earlier.',
    source: 'https://tile.loc.gov/storage-services/master/gdc/gdcebookspublic/20/21/01/33/16/2021013316/2021013316.pdf'
  },
  {
    id: 'telescope', title: 'El telescopio', year: 1608,
    approx: 'a principios del siglo XVII', person: 'Hans Lippershey; después, Galileo Galilei', category: 'Science',
    before: 'Antes de este invento, la gente no podía ver objetos muy lejanos con tanto detalle ni estudiar el cielo con ese aumento.',
    after: 'El telescopio acercó visualmente objetos lejanos y abrió una nueva etapa de observación astronómica.',
    note: '1608 marks Lippershey’s documented patent application. Galileo improved and used telescopes for astronomy in 1609.',
    source: 'https://starchild.gsfc.nasa.gov/docs/StarChild/questions/question37.html'
  },
  {
    id: 'gravity', title: 'Las leyes de la gravedad', year: 1687,
    approx: 'a finales del siglo XVII', person: 'Isaac Newton', category: 'Science',
    before: 'Antes de este descubrimiento, los científicos no podían explicar la caída de una manzana y las órbitas de los planetas con una misma ley matemática de atracción universal.',
    after: 'Newton publicó una teoría que relacionó los movimientos de la Tierra con los del cielo.',
    note: '1687 marks publication of Newton’s Principia and universal gravitation, not the first observation of falling objects.',
    source: 'https://www.loc.gov/item/2021667054/'
  },
  {
    id: 'thermometer', title: 'El termómetro', year: 1714,
    approx: 'a principios del siglo XVIII', person: 'Daniel Gabriel Fahrenheit', category: 'Health',
    before: 'Antes de este avance, muchos médicos tocaban la frente para comprobar si había fiebre y no podían comparar el calor del cuerpo con tanta precisión.',
    after: 'Fahrenheit desarrolló un instrumento de mercurio más fiable y mejoró la medición de la temperatura.',
    note: '1714 anchors Fahrenheit’s mercury thermometer. Thermoscopes and other thermometers existed earlier.',
    source: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7120475/'
  },
  {
    id: 'electricity', title: 'La electricidad', year: 1752,
    approx: 'a mediados del siglo XVIII', person: 'Benjamin Franklin y otros investigadores', category: 'Science',
    before: 'Antes de este descubrimiento, la gente conocía los rayos, pero no podía explicar tan bien su relación con las cargas que estudiaban los científicos.',
    after: 'Los experimentos de Franklin reforzaron la explicación eléctrica de los rayos y ayudaron al desarrollo del pararrayos.',
    note: '1752 anchors Franklin’s lightning experiments. Electricity was known and studied long before Franklin.',
    source: 'https://fi.edu/en/science-and-education/benjamin-franklin/kite-key-experiment'
  },
  {
    id: 'vaccines', title: 'Las vacunas', year: 1796,
    approx: 'a finales del siglo XVIII', person: 'Edward Jenner; antecedentes de Benjamin Jesty', category: 'Health',
    before: 'Antes de este avance, muchas personas temían la viruela y no podían contar con esta nueva protección contra una enfermedad que causaba muchas muertes.',
    after: 'Jenner demostró la protección frente a la viruela mediante la viruela vacuna e impulsó la vacunación.',
    note: '1796 marks Jenner’s vaccination experiment. Earlier inoculation practices and Jesty’s work preceded it.',
    source: 'https://www.who.int/news-room/spotlight/history-of-vaccination/a-brief-history-of-vaccination'
  },
  {
    id: 'tourism', title: 'El turismo organizado', year: 1841,
    approx: 'a mediados del siglo XIX', person: 'Thomas Cook', category: 'Everyday life',
    before: 'Antes de este avance, muchas personas tenían que organizar sus viajes por su cuenta y no podían contratar excursiones colectivas con la misma facilidad.',
    after: 'Thomas Cook organizó una excursión en tren y contribuyó al desarrollo de los viajes organizados.',
    note: '1841 anchors Cook’s Leicester–Loughborough excursion. Leisure travel and tourism existed earlier.',
    source: 'https://visitleicester.info/wp-content/uploads/2025/04/web-thomas-cooks-leicester-walking-trail-175th-anniversary8b35.pdf'
  },
  {
    id: 'engine', title: 'La máquina analítica', year: 1843,
    approx: 'a mediados del siglo XIX', person: 'Charles Babbage y Ada Lovelace', category: 'Technology',
    before: 'Antes de este avance, muchas personas hacían largos cálculos a mano y no podían consultar un programa publicado para una máquina de cálculo de uso general.',
    after: 'Ada Lovelace publicó instrucciones para calcular números con el diseño de Babbage y explicó nuevas posibilidades de las máquinas programables.',
    note: '1843 marks Lovelace’s published notes and algorithm for Babbage’s Analytical Engine. The full engine was never built in their lifetimes.',
    source: 'https://www.computerhistory.org/babbage/adalovelace'
  },
  {
    id: 'petroleum', title: 'El petróleo', year: 1859,
    approx: 'a mediados del siglo XIX', person: 'Edwin Drake y William A. Smith', category: 'Technology',
    before: 'Antes de este avance, en Pensilvania la gente recogía pequeñas cantidades de aceite del suelo y no podía extraerlo allí mediante un pozo comercial como este.',
    after: 'El pozo de Drake impulsó la extracción industrial de petróleo en Estados Unidos y el suministro de combustibles.',
    note: '1859 anchors the Drake well in Pennsylvania, not the discovery of petroleum. Petroleum use and drilling elsewhere predated it.',
    source: 'https://www.asme.org/about-asme/engineering-history/landmarks/40-drake-oil-well'
  },
  {
    id: 'paperbag', title: 'La bolsa de papel de fondo plano', year: 1871,
    approx: 'a principios de los años 70 del siglo XIX', person: 'Margaret E. Knight', category: 'Everyday life',
    before: 'Antes de este invento, los fabricantes hacían a mano muchos envases ligeros con base rectangular y no podían producirlos automáticamente con tanta rapidez.',
    after: 'Knight patentó una máquina que cortó, dobló y pegó papel para fabricar bolsas de fondo plano en grandes cantidades.',
    note: '1871 marks Knight’s machine patent. Paper bags and handmade flat-bottomed bags already existed.',
    source: 'https://www.invent.org/inductees/margaret-e-knight'
  },
  {
    id: 'bulb', title: 'La bombilla', year: 1879,
    approx: 'a finales de los años 70 del siglo XIX', person: 'Thomas Alva Edison y su equipo; Joseph Swan', category: 'Technology',
    before: 'Antes de este avance, en muchas casas la gente usaba velas o lámparas de aceite y no podía iluminar las habitaciones con una luz eléctrica duradera y práctica.',
    after: 'Edison y otros inventores mejoraron la iluminación eléctrica y facilitaron su uso cotidiano.',
    note: '1879 anchors Edison’s practical carbon-filament lamp demonstrations. Swan and many others contributed to electric lighting.',
    source: 'https://www.energy.gov/articles/history-light-bulb'
  },
  {
    id: 'cinema', title: 'El cine', year: 1895,
    approx: 'a finales del siglo XIX', person: 'Auguste y Louis Lumière; otros pioneros', category: 'Communication',
    before: 'Antes de este avance, muchas personas solo veían dibujos o fotografías y no podían asistir a una proyección comercial de imágenes en movimiento en una gran pantalla.',
    after: 'Los hermanos Lumière organizaron una sesión de pago en París y ayudaron a convertir las películas en un espectáculo colectivo.',
    note: '1895 anchors the Lumières’ Paris commercial screening. Earlier motion-picture devices and screenings existed.',
    source: 'https://www.institut-lumiere.org/le-cinematographe-lumiere'
  },
  {
    id: 'radio', title: 'La radio', year: 1896,
    approx: 'a finales del siglo XIX', person: 'Guglielmo Marconi, Nikola Tesla y otros pioneros', category: 'Communication',
    before: 'Antes de este avance, la gente no podía enviar mensajes a larga distancia mediante un sistema práctico de telegrafía sin cables.',
    after: 'La telegrafía inalámbrica transmitió señales sin unir los aparatos con cables y abrió el camino a las emisiones de voz y música.',
    note: '1896 anchors Marconi’s British patent application for wireless telegraphy, granted in 1897. Tesla, Hertz, Popov and others also contributed.',
    source: 'https://www.unibo.it/en/university/who-we-are/our-history/famous-people-and-students/guglielmo-marconi-2'
  },
  {
    id: 'radiation', title: 'La radiactividad', year: 1898,
    approx: 'a finales del siglo XIX', person: 'Marie Curie, Pierre Curie y Henri Becquerel', category: 'Science',
    before: 'Antes de este descubrimiento, los científicos no conocían el polonio ni el radio y no podían estudiar las emisiones de estos elementos.',
    after: 'Marie y Pierre Curie identificaron el polonio y el radio y ampliaron el estudio de la radiactividad.',
    note: '1898 anchors the Curies’ discoveries of polonium and radium. Becquerel discovered spontaneous radioactivity in 1896; radiation is a broader phenomenon.',
    source: 'https://www.nobelprize.org/prizes/lists/marie-and-pierre-curie-and-the-discovery-of-polonium-and-radium/'
  },
  {
    id: 'airplane', title: 'El avión', year: 1903,
    approx: 'a principios del siglo XX', person: 'Orville y Wilbur Wright', category: 'Technology',
    before: 'Antes de este invento, la gente podía subir en globo o planear, pero no podía realizar un vuelo sostenido y controlado en una máquina de alas fijas con motor como esta.',
    after: 'Los hermanos Wright realizaron vuelos con motor y control y abrieron una nueva etapa del transporte aéreo.',
    note: '1903 anchors the Wrights’ controlled, sustained powered flights on 17 December.',
    source: 'https://www.nps.gov/articles/wrightflyer.htm'
  },
  {
    id: 'neon', title: 'La iluminación de neón', year: 1910,
    approx: 'a principios del siglo XX', person: 'Georges Claude; antecedentes de otros investigadores', category: 'Technology',
    before: 'Antes de este avance, los comerciantes no podían anunciar sus negocios con los característicos tubos de gas que brillaban en rojo anaranjado.',
    after: 'Claude mostró tubos luminosos de neón y, después, esta tecnología transformó los rótulos de las ciudades.',
    note: '1910 marks Claude’s public neon-lamp demonstration. Tesla experimented with other gas-discharge lamps; he did not invent Claude’s neon lighting.',
    source: 'https://www.nist.gov/nist-museum/luminous-script-signs-origins-neon-sign'
  },
  {
    id: 'penicillin', title: 'La penicilina', year: 1928,
    approx: 'a finales de los años 20 del siglo XX', person: 'Alexander Fleming; después, Howard Florey y Ernst Chain', category: 'Health',
    before: 'Antes de este descubrimiento, los médicos no podían usar este antibiótico para tratar ciertas infecciones bacterianas, que podían resultar mortales.',
    after: 'Fleming observó el efecto antibacteriano de un moho; años después, otros científicos convirtieron el hallazgo en un tratamiento eficaz.',
    note: '1928 marks Fleming’s discovery. Clinical treatment and large-scale production followed in the 1940s.',
    source: 'https://www.nobelprize.org/prizes/medicine/1945/summary/'
  },
  {
    id: 'dna', title: 'El ADN', year: 1953,
    approx: 'a mediados del siglo XX', person: 'Rosalind Franklin, James Watson, Francis Crick y Maurice Wilkins', category: 'Health',
    before: 'Antes de este descubrimiento, los científicos sabían que existía material hereditario, pero no podían explicar con el modelo de la doble hélice cómo se copiaba.',
    after: 'El modelo de la doble hélice explicó la estructura del ADN y ayudó a comprender la transmisión de la información genética.',
    note: '1953 anchors the double-helix model, informed by Franklin’s and Wilkins’s X-ray work. DNA itself was identified in 1869.',
    source: 'https://www.nobelprize.org/prizes/medicine/1962/summary/'
  },
  {
    id: 'mobile', title: 'El móvil', year: 1973,
    approx: 'a principios de los años 70 del siglo XX', person: 'Martin Cooper y el equipo de Motorola', category: 'Communication',
    before: 'Antes de este invento, la mayoría de la gente usaba teléfonos fijos y no podía llevar un aparato personal para llamar mientras caminaba por la calle.',
    after: 'Cooper realizó una llamada pública con un prototipo de mano y mostró una nueva forma de comunicarse fuera de casa.',
    note: '1973 marks the first public demonstration of a handheld cellular prototype on 3 April. Car phones existed earlier; the commercial handheld DynaTAC followed in 1983.',
    source: 'https://www.motorolasolutions.com/en_us/about/history/explore-motorola-heritage/cell-phone-development.html'
  },
  {
    id: 'wifi', title: 'La wifi', year: 1997,
    approx: 'a finales de los años 90 del siglo XX', person: 'Equipos de IEEE; Hedy Lamarr y George Antheil como precursores', category: 'Communication',
    before: 'Antes de este avance, muchos ordenadores necesitaban cables para conectarse a una red local y no podían cambiar de lugar con facilidad.',
    after: 'Un estándar común facilitó las redes locales sin cables y permitió desarrollar la wifi que utilizamos hoy.',
    note: '1997 marks the first IEEE 802.11 standard. Lamarr and Antheil patented frequency hopping in 1942, an earlier wireless contribution rather than Wi-Fi itself.',
    source: 'https://standards.ieee.org/wp-content/uploads/interactive/web/wi-fi-timeline/index.html'
  }
];
