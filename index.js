

const { Client, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

const request = require ('request');
const cheerio = require('cheerio');
const {
    token,
    status
} = require('./misc/config.json');


const PREFIX = '!'

client.util = require('./util');

//errores y logs
client.on('warn', err => console.warn('[WARNING]', err));

client.on('error', err => console.error('[ERROR]', err));

client.on('ready',() =>{
    console.log('bot ensendio!');

})

//sin prexfix
client.on('message',msg=>{
    if(msg.content === "presio"){
        msg.reply('muycaro gasias')
    }

})
client.on('message',msg=>{
    if(msg.content === "sexo"){
        msg.reply('SEXOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO')
    }

})

client.on('message',msg=>{
    if(msg.content === "loteria"){
        msg.reply('bua si toca , le dais al creador')
    }

})
client.on('message',msg=>{
    if(msg.content === "puta"){
        msg.reply('mezcla pures')
    }

})
client.on('message',msg=>{
    if(msg.content === "roblox"){
        msg.reply('vete al minecraft')
    }

})
client.on('message',msg=>{
    if(msg.content === "xd"){
        msg.reply('xd´nt')
    }

})
client.on('message',msg=>{
    if(msg.content === "jotaro"){
        msg.sendMessage('DIO!')
    }

})
client.on('message',msg=>{
    if(msg.content === "triste"){
        msg.reply('go ahead and cry!')
    }

})

client.on('message',msg=>{
    if(msg.content === "sad"){
        msg.sendMessage(':(')
    }

})
client.on('message',msg=>{
    if(msg.content === "trifusion"){
        msg.reply('masca chapas')
    }

})
client.on('message',msg=>{
    if(msg.content === "let me in"){
        msg.sendMessage('https://images-ext-2.discordapp.net/external/7fNdnVEIzJmSvtDFC2lwyce3cFSD20FgwxQ2zQquT90/%3Fcid%3D73b8f7b11e3dde6c0645f54cc08979d3636464c9d2aa4594%26rid%3Dgiphy.mp4%26ct%3Dg/https/media2.giphy.com/media/yx400dIdkwWdsCgWYp/giphy.mp4')
    }

})

client.on('message',msg=>{
    if(msg.content === "dumb"){
        msg.reply('like u')
    }

})
client.on('message',msg=>{
    if(msg.content === "69"){
        msg.reply('Nice')
    }

})
client.on('message',msg=>{
    if(msg.content === "thicc"){
        msg.reply('ur mom')
    }

})

client.on('message',msg=>{
    if(msg.content === "me too kid"){
        msg.reply('https://i.imgflip.com/433z6b.png')
    }

})
client.on('message',msg=>{
    if(msg.content === "never gonna give you up"){
        msg.reply('never let you down')
    }

})
client.on('message',msg=>{
    if(msg.content === "kill me"){
        msg.reply('https://i.pinimg.com/originals/f0/03/29/f00329c74ed15d7696be7ed87a1e2691.gif')
    }

})
client.on('message',msg=>{
    if(msg.content === "yeet"){
        msg.reply('https://i.pinimg.com/originals/f0/03/29/f00329c74ed15d7696be7ed87a1e2691.gif')
    }

})
client.on('message',msg=>{
    if(msg.content === "FEED MY COIN"){
        msg.reply('https://youtu.be/6RU5sVP03fY')
    }

})
client.on('message',msg=>{
    if(msg.content === "i like your funny words magic man"){
        msg.reply('https://i.kym-cdn.com/photos/images/newsfeed/001/909/636/a8c.png')
    }

})
client.on('message',msg=>{
    if(msg.content === "shut up and take a money"){
        msg.reply('https://i.pinimg.com/originals/86/e6/2f/86e62f136d93bc6bffada430bed0afed.jpg')
    }

})
client.on('message',msg=>{
    if(msg.content === "HL3"){
        msg.reply('https://images-ext-2.discordapp.net/external/PcEowWZQLuGd0v6ATKO805XLKzb9Iz-lsg_sUqZgTFE/%3Fauto%3Dwebp%26s%3D7ed0d4cb43c6a6dc80a6e116ffce7a6f24aca89a/https/preview.redd.it/ewfgydv9jwn01.png haha no')
    }

})
//no funsiona
//con prefix
client.on('message',message=>{
    
    let args =message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'getGF':
            mesage.channel.sendMessage('got to tinder you horny!');
        break;  
        
        case 'help':
            message.channel.sendMessage('ping me and write something to use the AI');
        break;  
        case 'do':
      
    }
})


//crap n´ testing (probablemente no funcione)


//end crap

//mas mieldas

//fin de mas mieldas




//esta parte funciona con pings para usar la AI de Brain shop
client.on('disconnect', () => {
    console.warn('Disconnected!')
    process.exit(0);
});

client.on('uncaughtException', (err) => {
    console.log('Uncaught Exception: ' + err)
    process.exit(1)
});

client.on('message', (msg) => {
    if (msg.author.bot) return;
    if (msg.guild) {
        if (msg.content.startsWith(`<@${msg.client.user.id}>`) || msg.content.startsWith(`<@!${msg.client.user.id}>`)) {
            client.util.handleTalk(msg);
        }
    }
});
//logs
client.on('ready', () => {
    client.util.handleStatus(client, status);
    console.log('[Bot de la nasa] tafunsional p*to!');
});

process.on('unhandledRejection', (reason, promise) => {
    console.log('[FATAL] Possibly Unhandled Rejection at: Promise ', promise, ' reason: ', reason.message);
});
//token
client.login(process.env['TOKEN'])
