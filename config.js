module.exports = {
  bot: {
    token: 'MTE5MTYxNjYwNDUyMjQzMDUzNA.GQkoy9.UXCsDZlHUkLwdNSX-ZrkGBXHYEuD-pMFDzdlLY',

    presence: {
      enabled: true,
      activity: 'Playing', 
      text: {
        online: 'lagi main {playeronline}/{playermax} players', 
        offline: 'Server sedang Offline', 
      },
      status: {
        online: 'online', 
        offline: 'idle', 
      },
    },
  },
  mcserver: {
    ip: 'play.pinkcloud.my.id', // IP of  MC server.
    port: 25569, // Port number of MC server. Default Port - Java: 25565, Bedrock: 19132.
    type: 'java', 
    ip2: '[Java: play.pinkcloud.my.id,] [Bedrok: mc.pinkcloud.my.id port: 25569]',
    name: 'Pink Cloud', 
    version: 'Gunakan Versi 1.8 - 1.20', 
    icon: 'https://telegra.ph/file/6cb37272e0c9fc33dc471.png', 
    vote: 'https://discord.gg/aaFsra9Bgk', 
  },

  settings: {
    logging: {
      inviteLink: true, 
      debug: false, 
      error: true, 
      serverInfo: true, 
    },
  },

  autoChangeStatus: {
    enabled: true,
    updateInterval: 60, 
    isOnlineCheck: true, 
  },

  playerCountCH: {
    enabled: true,
    guildID: '1076655724756742274', // COY TOLONG BACA Playcountstats kalau ga ada buat manual ya ke /src/ lalu buka data.json
    channelId: '1191614703798063184',  // bagian PlayerCountStats kasih channel id VOICE ya bukan text
    onlineText: '🟢 {playeronline}/{playermax} Players playing',
    offlineText: '🔴 Offline', 
  },

  autoReply: {
    enabled: true,
    version: {
      enabled: true,
      triggerWords: ['versi berapa?', 'versi'],
      replyText: "Gunakan versi: **`{version}`**",
    },
    ip: {
      enabled: true,
      triggerWords: ['ipnya apa', 'ip'],
      replyText: '**IP: `{ip}`\nPort: `{port}`**',
    },
    vote: {
      enabled: true,
      triggerWords: ['website link', 'website', 'url', 'site', 'link vote'],
      replyText: "Website link: **<{vote}>**",
    },
    status: {
      enabled: true,
      triggerWords: ['server on ga', 'is server offline', 'status of the server'],
      onlineReply: 'Servernya sedang on **`🟢ONLINE`** with **`{playerOnline}/{playerMax}`** yang lagi main',
      offlineReply: 'servernya lagi **`🔴OFFLINE`**.',
    },
  },

  commands: {
    slashCommands: true,
    prefixCommands: {
      enabled: true,
      prefix: '!', 
    },
    language: 'id', 
    ip: {
      enabled: true, 
      alias: ['ip2'], 
    },
    vote: {
      enabled: true, 
      alias: ['vote', 'link'], 
    },
    version: {
      enabled: true, 
      alias: [], 
    },
    players: {
      enabled: true, 
      alias: ['plist'], 
    },
    status: {
      enabled: true, 
      alias: ['info'], 
    },
    motd: {
      enabled: true, 
      alias: [], 
    },
    help: {
      enabled: true, 
      alias: ['commands'],
    },
  },
}
