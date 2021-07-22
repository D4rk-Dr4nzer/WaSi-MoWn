const asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const OWNER = "it sends details of owner"
const GIT = "it sends links"
const Config = require('../config');


if (Config.WORKTYPE == 'private') {
        asena.addCommand({pattern: 'owner', fromMe: true, deleteCommand: true, desc: OWNER,}, (async (message, match) => {

    var r_text = new Array ();
    
    r_text[1] = "*╔══════════ 𝑪𝑹𝑰𝑴𝑰𝑵𝑨𝑳 𝑩𝑶𝑻 ══════════╗*\n           \n     ⊱❥*😈═𝑪𝑹𝑰𝑴𝑰𝑵𝑨𝑳═😈* \n\n ⊱❥*𝗢𝗪𝗡𝗘𝗥 𝑾𝑨𝑯𝑰𝑫 𝑻𝑲𝒁- http://wa.me/919746965745 \n* *\n⊱❥𝐈𝐍𝐒𝐓𝐀𝐆𝐑𝐀𝐌:-https://www.instagram.com/wahid_tkz* \n *╚══════════════❀═════════════╝* \n\n *⊱❥𝐂𝐑𝐄𝐀𝐓𝐎𝐑: 𝑾𝑨𝑯𝑰𝑫 𝑻𝑲𝒁*"

    
    await message.client.sendMessage(
        message.jid,(r_text[1]), MessageType.text);

    }));


        asena.addCommand({pattern: 'git', fromMe: true, deleteCommand: true, desc: GIT,}, (async (message, match) => {

        var r_text = new Array ();
    
        r_text[1] = "*Git links*\n           *\n⊱❁═𝑪𝑹𝑰𝑴𝑰𝑵𝑨𝑳 Owner 𝑾𝑨𝑯𝑰𝑫 𝑻𝑲𝒁═❀:ཻུ۪۪*\n\n*💘https://github.com/WAHID-BOT/Criminal*\n*"

    
        await message.client.sendMessage(
            message.jid,(r_text[1]), MessageType.text);
    
        }));    

    }
    

    if (Config.WORKTYPE == 'public') {
        asena.addCommand({pattern: 'owner', fromMe: false, deleteCommand: true, desc: OWNER,}, (async (message, match) => {

    var r_text = new Array ();
    
    r_text[1] = "*╔══════════ 𝑪𝑹𝑰𝑴𝑰𝑵𝑨𝑳 𝑩𝑶𝑻 ══════════╗*\n           \n     ⊱❥*😈═𝑪𝑹𝑰𝑴𝑰𝑵𝑨𝑳═😈* \n\n ⊱❥*𝗢𝗪𝗡𝗘𝗥 𝑾𝑨𝑯𝑰𝑫 𝑻𝑲𝒁- http://wa.me/919746965745 \n* *\n⊱❥𝐈𝐍𝐒𝐓𝐀𝐆𝐑𝐀𝐌:-https://www.instagram.com/wahid_tkz* \n *╚══════════════❀═════════════╝* \n\n *⊱❥𝐂𝐑𝐄𝐀𝐓𝐎𝐑: 𝑾𝑨𝑯𝑰𝑫 𝑻𝑲𝒁*"



    
    await message.client.sendMessage(
        message.jid,(r_text[1]), MessageType.text);

    }));


        asena.addCommand({pattern: 'git', fromMe: false, deleteCommand: true, desc: GIT,}, (async (message, match) => {

        var r_text = new Array ();
    
        r_text[1] = "*Git links*\n           \n*⊱❁═𝐂𝐑𝐈𝐌𝐈𝐍𝐀𝐋 Owner 𝑾𝑨𝑯𝑰𝑫 𝑻𝑲𝒁═❀:ཻུ۪۪*\n\n*💘https://github.com/WAHID-BOT/Criminal*"

    
        await message.client.sendMessage(
            message.jid,(r_text[1]), MessageType.text);
    
        }));    

    }
