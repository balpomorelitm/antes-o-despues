// Portraits from the original classroom reference. The source bitmap is kept intact;
// each SVG displays only its portrait viewport without changing the image pixels.
export const portraits = Object.freeze({
  paper: { name: 'Cai Lun', x: 404, y: 420, width: 174, height: 188 },
  bulb: { name: 'Thomas Alva Edison', x: 594, y: 420, width: 164, height: 188 },
  printing: { name: 'Johannes Gutenberg', x: 768, y: 420, width: 164, height: 188 },
  cinema: { name: 'Lumière brothers', x: 940, y: 420, width: 164, height: 188 },
  dna: { name: 'Rosalind Franklin', x: 1115, y: 420, width: 164, height: 188 },
  wifi: { name: 'Hedy Lamarr', x: 1288, y: 420, width: 164, height: 188 },
  movable: { name: 'Bi Sheng', x: 410, y: 661, width: 166, height: 178 },
  engine: { name: 'Ada Lovelace', x: 594, y: 661, width: 164, height: 178 },
  paperbag: { name: 'Margaret Knight', x: 768, y: 661, width: 164, height: 178 },
  gravity: { name: 'Isaac Newton', x: 940, y: 661, width: 164, height: 178 },
  radio: { name: 'Nikola Tesla', x: 1115, y: 661, width: 164, height: 178 },
  radiation: { name: 'Marie Curie', x: 1288, y: 661, width: 164, height: 178 },
});

const escapeAttribute = value => String(value).replace(/[&<>"']/g, character => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
})[character]);

export function portrait(id, className = '') {
  const person = Object.hasOwn(portraits, id) ? portraits[id] : null;
  if (!person) return '';
  const { name, x, y, width, height } = person;
  return `<svg xmlns="http://www.w3.org/2000/svg" class="${escapeAttribute(className)}" viewBox="${x} ${y} ${width} ${height}" preserveAspectRatio="xMidYMid slice" role="img" aria-label="${escapeAttribute(`Portrait of ${name}`)}"><image href="assets/class-people.png" width="1600" height="900" /></svg>`;
}
