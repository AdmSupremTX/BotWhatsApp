// Importamos las librerías necesarias
const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

// Crear el cliente de WhatsApp
const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: {
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    }
});

// Mostrar el QR en la terminal
client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
});

// Cuando el cliente está listo
client.on('ready', () => {
    console.log('El bot está listo y conectado a WhatsApp');
});

// Procesar mensajes
client.on('message', async (message) => {
    if (message.body.startsWith('.info')) {
        const textoInfo = "🌟 Bienvenido al bot simplificado 🌟\nEste bot solo tiene este comando.";
        await message.reply(textoInfo);
    }
});

// Iniciar cliente
client.initialize();
