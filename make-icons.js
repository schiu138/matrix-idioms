const { createCanvas } = require('canvas');
const fs = require('fs');
const path = require('path');

function makeIcon(size) {
  const canvas = createCanvas(size, size);
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = '#0a0a0a';
  ctx.fillRect(0, 0, size, size);

  const green = '#00ff41';
  const dimGreen = 'rgba(0,255,65,0.15)';

  ctx.strokeStyle = dimGreen;
  ctx.lineWidth = size * 0.004;
  for (let i = 0; i < 6; i++) {
    ctx.beginPath();
    ctx.moveTo(0, (size / 5) * i);
    ctx.lineTo(size, (size / 5) * i);
    ctx.stroke();
  }

  const pad = size * 0.12;
  ctx.strokeStyle = green;
  ctx.lineWidth = size * 0.025;
  ctx.strokeRect(pad, pad, size - pad * 2, size - pad * 2);

  ctx.fillStyle = green;
  ctx.font = `bold ${size * 0.38}px monospace`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('M', size / 2, size * 0.42);

  ctx.font = `${size * 0.12}px monospace`;
  ctx.fillStyle = 'rgba(0,255,65,0.6)';
  ctx.fillText('IDIOMS', size / 2, size * 0.72);

  return canvas.toBuffer('image/png');
}

const dir = path.join(__dirname, 'icons');
if (!fs.existsSync(dir)) fs.mkdirSync(dir);

try {
  fs.writeFileSync(path.join(dir, 'icon-192.png'), makeIcon(192));
  fs.writeFileSync(path.join(dir, 'icon-512.png'), makeIcon(512));
  console.log('Icons created successfully.');
} catch(e) {
  console.log('Canvas not available — using placeholder icons instead.');
  const svg192 = `<svg xmlns="http://www.w3.org/2000/svg" width="192" height="192" viewBox="0 0 192 192"><rect width="192" height="192" fill="#0a0a0a"/><rect x="20" y="20" width="152" height="152" stroke="#00ff41" stroke-width="4" fill="none"/><text x="96" y="90" font-family="monospace" font-size="72" font-weight="bold" fill="#00ff41" text-anchor="middle" dominant-baseline="middle">M</text><text x="96" y="140" font-family="monospace" font-size="20" fill="rgba(0,255,65,0.6)" text-anchor="middle">IDIOMS</text></svg>`;
  fs.writeFileSync(path.join(dir, 'icon-192.png'), svg192);
  fs.writeFileSync(path.join(dir, 'icon-512.png'), svg192);
}
