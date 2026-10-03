const fs = require('fs');
const path = require('path');

const generateSVG = (width, height, text, bgColor, isPhoto) => {
  // If it's a photo, make it look like a sketched mountain scene
  if (isPhoto) {
    return `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#e0e0e0" />
      <circle cx="80%" cy="20%" r="15%" fill="#c44444" opacity="0.6" />
      <path d="M0 ${height} L${width * 0.4} ${height * 0.4} L${width * 0.7} ${height * 0.7} L${width} ${height * 0.5} L${width} ${height} Z" fill="#2b4a8a" opacity="0.7" />
      <path d="M${width * 0.2} ${height} L${width * 0.6} ${height * 0.6} L${width} ${height * 0.8} L${width} ${height} Z" fill="#1a1a3e" opacity="0.9" />
      <text x="50%" y="90%" font-family="Caveat, cursive" font-size="24" fill="white" text-anchor="middle" opacity="0.8">your photo here ♡</text>
    </svg>`;
  }

  // If it's a character or gift, make it look like a little paper sketch
  return `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="transparent" />
    <circle cx="50%" cy="50%" r="40%" fill="${bgColor}" opacity="0.2" stroke="${bgColor}" stroke-width="4" stroke-dasharray="10, 10" />
    <text x="50%" y="55%" font-family="Caveat, cursive" font-size="28" fill="${bgColor}" text-anchor="middle">${text}</text>
  </svg>`;
};

const dirs = [
  'public/assets/photos',
  'public/assets/gifts',
  'public/assets/illustrations',
  'public/assets/music'
];

dirs.forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

const assets = [
  // Photos (squares)
  { path: 'public/assets/photos/placeholder-1.svg', w: 600, h: 600, text: 'Photo 1', bg: '#ddd', isPhoto: true },
  { path: 'public/assets/photos/placeholder-2.svg', w: 600, h: 600, text: 'Photo 2', bg: '#ddd', isPhoto: true },
  { path: 'public/assets/photos/placeholder-3.svg', w: 600, h: 600, text: 'Photo 3', bg: '#ddd', isPhoto: true },
  { path: 'public/assets/photos/placeholder-4.svg', w: 600, h: 600, text: 'Photo 4', bg: '#ddd', isPhoto: true },
  
  // Gifts
  { path: 'public/assets/gifts/envelope.svg', w: 400, h: 300, text: '✉️ Envelope', bg: '#c44444' },
  { path: 'public/assets/gifts/bouquet.svg', w: 400, h: 500, text: '💐 Bouquet', bg: '#a8c8e8' },
  { path: 'public/assets/gifts/giftbox.svg', w: 400, h: 400, text: '🎁 Gift Box', bg: '#2b4a8a' },
  
  // Illustrations
  { path: 'public/assets/illustrations/character-cute.svg', w: 400, h: 400, text: '🧸 Cute', bg: '#c44444' },
  { path: 'public/assets/illustrations/character-crying.svg', w: 400, h: 400, text: '😭 Sad', bg: '#2b4a8a' },
  { path: 'public/assets/illustrations/vinyl.svg', w: 400, h: 400, text: '💿 Vinyl', bg: '#1a1a3e' },
  { path: 'public/assets/illustrations/final-card.svg', w: 400, h: 400, text: '💌 Card', bg: '#c44444' },
];

assets.forEach(asset => {
  const svg = generateSVG(asset.w, asset.h, asset.text, asset.bg, asset.isPhoto);
  fs.writeFileSync(path.resolve(asset.path), svg);
  console.log(`Generated ${asset.path}`);
});

// Generate a dummy audio file if it doesn't exist
const audioPath = path.resolve('public/assets/music/placeholder.mp3');
if (!fs.existsSync(audioPath)) {
  fs.writeFileSync(audioPath, 'dummy audio content');
  console.log(`Generated ${audioPath}`);
}
