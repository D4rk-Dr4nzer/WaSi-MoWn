const asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const OWNER = "it sends details of owner"
const GIT = "it sends links"
const Config = require('../config');


if (Config.WORKTYPE == 'private') {
        asena.addCommand({pattern: 'owner', fromMe: true, deleteCommand: true, desc: OWNER,}, (async (message, match) => {

    var r_text = new Array ();
    
    r_text[1] = "*╔══════════ 𝘽𝘼𝘽𝙔-𝘽𝙊𝙏 ══════════╗*\n           \n     ⊱❥*😈═𝑩𝑨𝑩𝒀-𝑩𝑶𝑻═😈* \n\n ⊱❥*𝗢𝗪𝗡𝗘𝗥 𝑾𝑨𝑺𝑰𝑯 𝑻𝑲𝒁- http://wa.me/917736466988 \n* *\n⊱❥𝐈𝐍𝐒𝐓𝐀𝐆𝐑𝐀𝐌:-https://www.instagram.com/abd__wasi_* \n *╚══════════════❀═════════════╝* \n\n *⊱❥𝐂𝐑𝐄𝐀𝐓𝐎𝐑: 𝑾𝑨𝑺𝑰𝑯 𝑻𝑲𝒁*"

    
    await message.client.sendMessage(
        message.jid,(r_text[1]), MessageType.text);

    }));


        asena.addCommand({pattern: 'git', fromMe: true, deleteCommand: true, desc: GIT,}, (async (message, match) => {

        var r_text = new Array ();
    
        r_text[1] = "*Git links*\n           *\n⊱❁═𝑩𝑨𝑩𝒀-𝑩𝑶𝑻 Owner 𝑾𝑨𝑺𝑰𝑯 𝑻𝑲𝒁═❀:ཻུ۪۪*\n\n*💘https://www.instagram.com/invites/contact/?i=xh9vh8sjqzzi&utm_content=i5fk8hp\n*"

    
        await message.client.sendMessage(
            message.jid,(r_text[1]), MessageType.text);
    
        }));    

    }
    

    if (Config.WORKTYPE == 'public') {
        asena.addCommand({pattern: 'owner', fromMe: false, deleteCommand: true, desc: OWNER,}, (async (message, match) => {

    var r_text = new Array ();
    
    r_text[1] = "*╔════════ 𝘽𝘼𝘽𝙔-𝘽𝙊𝙏 ════════╗*\n           \n     ⊱❥*😈═𝘽𝘼𝘽𝙔-𝘽𝙊𝙏═😈* \n\n ⊱❥*𝗢𝗪𝗡𝗘𝗥 𝑾𝑨𝑺𝑰𝑯 𝑻𝑲𝒁- http://wa.me/917736466988 \n* *\n⊱❥𝐈𝐍𝐒𝐓𝐀𝐆𝐑𝐀𝐌:-https://www.instagram.com/abd__wasi_* \n *╚════════════❀═══════════╝* \n\n *⊱❥𝐂𝐑𝐄𝐀𝐓𝐎𝐑: 𝑾𝑨𝑺𝑰𝑯 𝑻𝑲𝒁*"



    
    await message.client.sendMessage(
        message.jid,(r_text[1]), MessageType.text);

    }));


        asena.addCommand({pattern: 'git', fromMe: false, deleteCommand: true, desc: GIT,}, (async (message, match) => {

        var r_text = new Array ();
    
        r_text[1] = "*Git links*\n           \n*⊱❁═𝐁𝐀𝐁𝐘-𝐁𝐎𝐓 Owner 𝑾𝑨𝑺𝑰𝑯 𝑻𝑲𝒁═❀:ཻུ۪۪*\n\n*💘https://github.com/D4rk-Dr4nzer/WaSi-MoWn*\n*"

    
        await message.client.sendMessage(
            message.jid,(r_text[1]), MessageType.text);
    
        }));    

    }
