// One agreed anchor year per card keeps the game unambiguous. Early dates are
// estimates; later dates identify the specific milestone explained in `note`.
export const DATE_CONVENTION = 'Dates are fixed game reference points. Ancient dates are estimates; broad inventions use the specific milestone shown on each card. Inventions often developed through the work of many people.';

export const EVENTS = [
  {
    id: 'fire', title: 'El fuego', year: -790000,
    approx: 'hace unos 800.000 años', person: 'Primeros seres humanos', category: 'Everyday life',
    before: 'Antes de este descubrimiento, las personas no podían cocinar la comida ni calentarse en una cueva.',
    after: 'El control del fuego permitió cocinar la comida y calentarse. También ayudó a protegerse de algunos animales.',
    note: 'Game anchor for evidence of controlled hearths at least 790,000 years old. Fire was not discovered on a known date.',
    source: 'https://humanorigins.si.edu/evidence/behavior/hearths-shelters'
  },
  {
    id: 'wheel', title: 'La rueda', year: -3500,
    approx: 'a mediados del IV milenio a. C.', person: 'Comunidades de la antigua Eurasia', category: 'Technology',
    before: 'Antes de este invento, la gente no podía llevar muchas cosas en carros. Las transportaba a mano o con animales.',
    after: 'La rueda ayudó a mover cosas pesadas. También permitió viajar en carros.',
    note: 'Approximate game anchor for wheeled transport in the fourth millennium BCE. No single inventor is known.',
    source: 'https://www.britannica.com/technology/wheel'
  },
  {
    id: 'writing', title: 'La escritura', year: -3200,
    approx: 'a finales del IV milenio a. C.', person: 'Escribas de Mesopotamia', category: 'Communication',
    before: 'Antes de este invento, las personas no podían guardar sus palabras para el futuro. Contaban historias de padres a hijos.',
    after: 'La escritura permitió guardar historias y acuerdos. Las personas dejaron mensajes para el futuro.',
    note: 'Approximate anchor for early Mesopotamian writing. Writing also developed independently elsewhere.',
    source: 'https://sites.utexas.edu/dsb/tokens/the-evolution-of-writing/'
  },
  {
    id: 'money', title: 'El dinero', year: -600,
    approx: 'a principios del siglo VI a. C.', person: 'Lidia, en la actual Turquía', category: 'Everyday life',
    before: 'Antes de este avance, la gente no podía pagar con monedas. Cambiaba productos o usaba otros objetos de valor.',
    after: 'Las primeras monedas facilitaron las compras. El dinero ayudó a comparar el precio de las cosas.',
    note: '600 BCE is a game anchor for early Lydian coinage, not the invention of all money. Other forms of money existed earlier.',
    source: 'https://www.britishmuseum.org/sites/default/files/2021-05/Money_Gallery_LPG_2020_Room_68.pdf'
  },
  {
    id: 'paper', title: 'El papel', year: 105,
    approx: 'a principios del siglo II', person: 'Cai Lun y artesanos anteriores', category: 'Communication',
    before: 'Antes de este avance, muchas personas en China no podían escribir en hojas baratas. Usaban madera o telas caras.',
    after: 'Cai Lun mejoró la fabricación del papel. Su trabajo ayudó a producir hojas ligeras y baratas.',
    note: '105 CE marks Cai Lun’s recorded presentation of improved papermaking. Archaeological paper predates him.',
    source: 'https://bioresources.cnr.ncsu.edu/resources/nanocellulose-addition-to-paper-and-the-cai-lun-principle-maybe-not-such-a-good-idea-after-all/'
  },
  {
    id: 'gunpowder', title: 'La pólvora', year: 850,
    approx: 'a mediados del siglo IX', person: 'Alquimistas chinos', category: 'Technology',
    before: 'Antes de este invento, la gente no podía hacer explosiones con esta mezcla. En las guerras usaba arcos y flechas.',
    after: 'La pólvora permitió hacer fuegos artificiales. Más tarde, cambió las armas y las guerras.',
    note: '850 is a single game estimate within the ninth century, when Chinese texts described early gunpowder mixtures.',
    source: 'https://tile.loc.gov/storage-services/master/gdc/gdcebookspublic/20/21/75/84/61/2021758461/2021758461.pdf'
  },
  {
    id: 'movable', title: 'La imprenta de Bi Sheng', year: 1045,
    approx: 'a mediados del siglo XI', person: 'Bi Sheng', category: 'Communication',
    before: 'Antes de este invento, los impresores chinos no podían cambiar de sitio cada signo. Usaban una tabla para cada página.',
    after: 'Bi Sheng creó pequeñas piezas de barro con signos. Las piezas permitieron imprimir páginas diferentes.',
    note: '1045 is the game anchor within the documented 1041–1048 period. Woodblock printing existed earlier and remained important.',
    source: 'https://ccs.ncl.edu.tw/files/exhibition/2015%E6%8B%89%E8%84%AB%E7%B6%AD%E4%BA%9E%E6%96%87%E6%98%8E%E4%B9%8B%E5%8D%B0%E8%A8%98%E5%B1%95%E8%A6%BD.compressed.pdf'
  },
  {
    id: 'printing', title: 'La imprenta de Gutenberg', year: 1455,
    approx: 'a mediados del siglo XV', person: 'Johannes Gutenberg y su taller', category: 'Communication',
    before: 'Antes de este avance, en Europa muchas personas copiaban libros a mano. No podían hacer muchas copias rápidamente.',
    after: 'La imprenta de Gutenberg permitió hacer muchos libros en menos tiempo. Más personas consiguieron libros.',
    note: '1455 anchors the Gutenberg Bible. Printing and movable type had earlier histories in East Asia.',
    source: 'https://guides.loc.gov/gutenberg'
  },
  {
    id: 'microscope', title: 'El microscopio', year: 1590,
    approx: 'a finales del siglo XVI', person: 'Primeros fabricantes de lentes; familia Janssen', category: 'Science',
    before: 'Antes de este invento, los científicos no podían ver cosas muy pequeñas. Sus ojos no eran suficientes.',
    after: 'El microscopio permitió ver cosas muy pequeñas. Más tarde, los científicos descubrieron células y microbios.',
    note: '1590 is the conventional estimate for early compound microscopes, often linked to the Janssens. Attribution is disputed.',
    source: 'https://www.aps.org/apsnews/2004/03/lens-crafters-1590-invention-microscope'
  },
  {
    id: 'media', title: 'Los medios de comunicación', year: 1605,
    approx: 'a principios del siglo XVII', person: 'Johann Carolus', category: 'Communication',
    before: 'Antes de este avance, muchas personas no podían leer noticias nuevas cada semana. Las noticias viajaban de boca en boca.',
    after: 'Los primeros periódicos llevaron noticias a más personas. Los medios de comunicación cambiaron la forma de conocer el mundo.',
    note: '1605 anchors Carolus’s Relation, commonly identified as the first printed newspaper. Communication media existed much earlier.',
    source: 'https://tile.loc.gov/storage-services/master/gdc/gdcebookspublic/20/21/01/33/16/2021013316/2021013316.pdf'
  },
  {
    id: 'telescope', title: 'El telescopio', year: 1608,
    approx: 'a principios del siglo XVII', person: 'Hans Lippershey; después, Galileo Galilei', category: 'Science',
    before: 'Antes de este invento, los científicos no podían ver bien objetos muy lejanos. Miraban el cielo solo con sus ojos.',
    after: 'El telescopio permitió ver mejor la Luna y las estrellas. Los científicos observaron nuevos detalles.',
    note: '1608 marks Lippershey’s documented patent application. Galileo improved and used telescopes for astronomy in 1609.',
    source: 'https://starchild.gsfc.nasa.gov/docs/StarChild/questions/question37.html'
  },
  {
    id: 'gravity', title: 'Las leyes de la gravedad', year: 1687,
    approx: 'a finales del siglo XVII', person: 'Isaac Newton', category: 'Science',
    before: 'Antes de este descubrimiento, los científicos no podían explicar con una sola ley la caída de objetos y el movimiento de planetas.',
    after: 'Newton publicó una ley. Esta ley explicó la caída de objetos y el movimiento de los planetas.',
    note: '1687 marks publication of Newton’s Principia and universal gravitation, not the first observation of falling objects.',
    source: 'https://www.loc.gov/item/2021667054/'
  },
  {
    id: 'thermometer', title: 'El termómetro', year: 1714,
    approx: 'a principios del siglo XVIII', person: 'Daniel Gabriel Fahrenheit', category: 'Health',
    before: 'Antes de este avance, muchos médicos no podían medir bien la temperatura. Tocaban la frente de sus pacientes.',
    after: 'Fahrenheit mejoró el termómetro con mercurio. Este instrumento permitió medir mejor la temperatura.',
    note: '1714 anchors Fahrenheit’s mercury thermometer. Thermoscopes and other thermometers existed earlier.',
    source: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7120475/'
  },
  {
    id: 'electricity', title: 'La electricidad', year: 1752,
    approx: 'a mediados del siglo XVIII', person: 'Benjamin Franklin y otros investigadores', category: 'Science',
    before: 'Antes de este descubrimiento, la gente no podía explicar bien los rayos. Muchas personas tenían miedo de las tormentas.',
    after: 'Franklin estudió los rayos y su relación con la electricidad. Sus experimentos ayudaron a proteger los edificios.',
    note: '1752 anchors Franklin’s lightning experiments. Electricity was known and studied long before Franklin.',
    source: 'https://fi.edu/en/science-and-education/benjamin-franklin/kite-key-experiment'
  },
  {
    id: 'vaccines', title: 'Las vacunas', year: 1796,
    approx: 'a finales del siglo XVIII', person: 'Edward Jenner; antecedentes de Benjamin Jesty', category: 'Health',
    before: 'Antes de este avance, muchas personas no podían protegerse bien de la viruela. Tenían miedo de esta enfermedad.',
    after: 'Jenner probó una vacuna contra la viruela. Este trabajo ayudó a prevenir la enfermedad.',
    note: '1796 marks Jenner’s vaccination experiment. Earlier inoculation practices and Jesty’s work preceded it.',
    source: 'https://www.who.int/news-room/spotlight/history-of-vaccination/a-brief-history-of-vaccination'
  },
  {
    id: 'tourism', title: 'El turismo organizado', year: 1841,
    approx: 'a mediados del siglo XIX', person: 'Thomas Cook', category: 'Everyday life',
    before: 'Antes de este avance, muchas personas no podían comprar un viaje organizado. Preparaban todo por su cuenta.',
    after: 'Cook organizó una excursión en tren para un grupo. Su trabajo ayudó al desarrollo del turismo organizado.',
    note: '1841 anchors Cook’s Leicester–Loughborough excursion. Leisure travel and tourism existed earlier.',
    source: 'https://visitleicester.info/wp-content/uploads/2025/04/web-thomas-cooks-leicester-walking-trail-175th-anniversary8b35.pdf'
  },
  {
    id: 'engine', title: 'La máquina analítica', year: 1843,
    approx: 'a mediados del siglo XIX', person: 'Charles Babbage y Ada Lovelace', category: 'Technology',
    before: 'Antes de este avance, muchas personas hacían cálculos a mano. No podían consultar instrucciones publicadas para una máquina de cálculo de este tipo.',
    after: 'Ada Lovelace publicó instrucciones para la máquina de Babbage. Su trabajo mostró nuevas ideas para calcular con máquinas.',
    note: '1843 marks Lovelace’s published notes and algorithm for Babbage’s Analytical Engine. The full engine was never built in their lifetimes.',
    source: 'https://www.computerhistory.org/babbage/adalovelace'
  },
  {
    id: 'petroleum', title: 'El petróleo', year: 1859,
    approx: 'a mediados del siglo XIX', person: 'Edwin Drake y William A. Smith', category: 'Technology',
    before: 'Antes de este avance, en Pensilvania la gente no podía sacar mucho aceite del suelo. Solo recogía pequeñas cantidades.',
    after: 'Drake abrió un pozo de petróleo en Pensilvania. El pozo ayudó a producir más combustible.',
    note: '1859 anchors the Drake well in Pennsylvania, not the discovery of petroleum. Petroleum use and drilling elsewhere predated it.',
    source: 'https://www.asme.org/about-asme/engineering-history/landmarks/40-drake-oil-well'
  },
  {
    id: 'paperbag', title: 'La bolsa de papel', year: 1871,
    approx: 'a principios de los años 70 del siglo XIX', person: 'Margaret E. Knight', category: 'Everyday life',
    before: 'Antes de este invento, las tiendas no podían conseguir tantos envases baratos para llevar la compra. Los trabajadores los hacían a mano.',
    after: 'Knight inventó una máquina para hacer bolsas de papel con base plana. La máquina permitió fabricar muchas bolsas rápidamente.',
    note: '1871 marks Knight’s machine patent. Paper bags and handmade flat-bottomed bags already existed.',
    source: 'https://www.invent.org/inductees/margaret-e-knight'
  },
  {
    id: 'bulb', title: 'La bombilla', year: 1879,
    approx: 'a finales de los años 70 del siglo XIX', person: 'Thomas Alva Edison y su equipo; Joseph Swan', category: 'Technology',
    before: 'Antes de este avance, muchas personas no podían encender una luz eléctrica en casa. Usaban velas o lámparas de aceite.',
    after: 'Edison y otros inventores mejoraron la bombilla. Su trabajo permitió iluminar las casas durante más tiempo.',
    note: '1879 anchors Edison’s practical carbon-filament lamp demonstrations. Swan and many others contributed to electric lighting.',
    source: 'https://www.energy.gov/articles/history-light-bulb'
  },
  {
    id: 'cinema', title: 'El cine', year: 1895,
    approx: 'a finales del siglo XIX', person: 'Auguste y Louis Lumière; otros pioneros', category: 'Communication',
    before: 'Antes de este avance, muchas personas no podían ver imágenes en movimiento en una gran pantalla. Veían dibujos o fotografías.',
    after: 'Los hermanos Lumière mostraron películas a un público en París. El cine cambió la forma de contar historias.',
    note: '1895 anchors the Lumières’ Paris commercial screening. Earlier motion-picture devices and screenings existed.',
    source: 'https://www.institut-lumiere.org/le-cinematographe-lumiere'
  },
  {
    id: 'radio', title: 'La radio', year: 1896,
    approx: 'a finales del siglo XIX', person: 'Guglielmo Marconi, Nikola Tesla y otros pioneros', category: 'Communication',
    before: 'Antes de este avance, la gente no podía enviar mensajes eléctricos lejos sin cables. Los barcos tenían problemas para comunicarse.',
    after: 'Marconi desarrolló un sistema para enviar señales sin cables. La radio permitió después escuchar voces y música a distancia.',
    note: '1896 anchors Marconi’s British patent application for wireless telegraphy, granted in 1897. Tesla, Hertz, Popov and others also contributed.',
    source: 'https://www.unibo.it/en/university/who-we-are/our-history/famous-people-and-students/guglielmo-marconi-2'
  },
  {
    id: 'radiation', title: 'La radiactividad', year: 1898,
    approx: 'a finales del siglo XIX', person: 'Marie Curie, Pierre Curie y Henri Becquerel', category: 'Science',
    before: 'Antes de este descubrimiento, los científicos no podían estudiar ciertos elementos. No conocían el polonio ni el radio.',
    after: 'Marie y Pierre Curie descubrieron el polonio y el radio. Su trabajo ayudó a conocer mejor la radiactividad.',
    note: '1898 anchors the Curies’ discoveries of polonium and radium. Becquerel discovered spontaneous radioactivity in 1896; radiation is a broader phenomenon.',
    source: 'https://www.nobelprize.org/prizes/lists/marie-and-pierre-curie-and-the-discovery-of-polonium-and-radium/'
  },
  {
    id: 'airplane', title: 'El avión', year: 1903,
    approx: 'a principios del siglo XX', person: 'Orville y Wilbur Wright', category: 'Technology',
    before: 'Antes de este invento, la gente no podía volar con alas y motor. Viajaba en globo o usaba barcos y trenes.',
    after: 'Los hermanos Wright realizaron un vuelo con motor. El avión cambió los viajes y permitió llegar más lejos en menos tiempo.',
    note: '1903 anchors the Wrights’ controlled, sustained powered flights on 17 December.',
    source: 'https://www.nps.gov/articles/wrightflyer.htm'
  },
  {
    id: 'neon', title: 'La luz de neón', year: 1910,
    approx: 'a principios del siglo XX', person: 'Georges Claude; antecedentes de otros investigadores', category: 'Technology',
    before: 'Antes de este avance, las tiendas no podían usar tubos de luz roja para sus anuncios. Usaban carteles normales.',
    after: 'Claude presentó la luz de neón. Después, muchas tiendas usaron tubos luminosos para mostrar sus nombres.',
    note: '1910 marks Claude’s public neon-lamp demonstration. Tesla experimented with other gas-discharge lamps; he did not invent Claude’s neon lighting.',
    source: 'https://www.nist.gov/nist-museum/luminous-script-signs-origins-neon-sign'
  },
  {
    id: 'penicillin', title: 'La penicilina', year: 1928,
    approx: 'a finales de los años 20 del siglo XX', person: 'Alexander Fleming; después, Howard Florey y Ernst Chain', category: 'Health',
    before: 'Antes de este descubrimiento, los médicos no podían usar este medicamento contra ciertas infecciones. Muchas personas morían por estas enfermedades.',
    after: 'Fleming descubrió la penicilina. Años después, otros científicos desarrollaron el medicamento y ayudaron a curar muchas infecciones.',
    note: '1928 marks Fleming’s discovery. Clinical treatment and large-scale production followed in the 1940s.',
    source: 'https://www.nobelprize.org/prizes/medicine/1945/summary/'
  },
  {
    id: 'dna', title: 'El ADN', year: 1953,
    approx: 'a mediados del siglo XX', person: 'Rosalind Franklin, James Watson, Francis Crick y Maurice Wilkins', category: 'Health',
    before: 'Antes de este descubrimiento, los científicos no podían explicar bien este material del cuerpo. Contenía información sobre nuestros ojos y nuestro pelo.',
    after: 'Los científicos describieron la forma del ADN. Su trabajo ayudó a entender las características de padres e hijos.',
    note: '1953 anchors the double-helix model, informed by Franklin’s and Wilkins’s X-ray work. DNA itself was identified in 1869.',
    source: 'https://www.nobelprize.org/prizes/medicine/1962/summary/'
  },
  {
    id: 'mobile', title: 'El móvil', year: 1973,
    approx: 'a principios de los años 70 del siglo XX', person: 'Martin Cooper y el equipo de Motorola', category: 'Communication',
    before: 'Antes de este invento, muchas personas no podían llamar desde la calle sin una cabina. Usaban teléfonos fijos en casa.',
    after: 'Cooper realizó una llamada con un aparato de mano. El móvil permitió llamar desde la calle.',
    note: '1973 marks the first public demonstration of a handheld cellular prototype on 3 April. Car phones existed earlier; the commercial handheld DynaTAC followed in 1983.',
    source: 'https://www.motorolasolutions.com/en_us/about/history/explore-motorola-heritage/cell-phone-development.html'
  },
  {
    id: 'wifi', title: 'La wifi', year: 1997,
    approx: 'a finales de los años 90 del siglo XX', person: 'Equipos de IEEE; Hedy Lamarr y George Antheil como precursores', category: 'Communication',
    before: 'Antes de este avance, muchos ordenadores no podían conectarse a una red sin cables. Era difícil moverlos de una habitación a otra.',
    after: 'La wifi conectó ordenadores a una red sin cables. Este avance permitió usar internet en diferentes habitaciones.',
    note: '1997 marks the first IEEE 802.11 standard. Lamarr and Antheil patented frequency hopping in 1942, an earlier wireless contribution rather than Wi-Fi itself.',
    source: 'https://standards.ieee.org/wp-content/uploads/interactive/web/wi-fi-timeline/index.html'
  }
];
