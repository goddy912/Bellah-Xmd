//base by DGXeon
//recode by GIDDY TENNOR 
//YouTube: @GIDDYTENNOR


const fs = require('fs')
const chalk = require('chalk')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


global.SESSION_ID = process.env.SESSION_ID || 'Bellah~2z40RA7T#VRneuCjwFxSYHupVJSJHZDNmNDE_THLCNxjVd9jGWuw' 
//owmner v card
global.ytname = "YT: GIDDYTENNOR" //ur yt chanel name
global.socialm = "IG: @GIDDYTENNOR" //ur github or insta name
global.location = "Nigeria" //ur location

//new
global.botname = process.env.BOT_NAME ||'❌G҉O҉D҉W҉I҉N҉❌' //enter your  bot name here
global.ownernumber = process.env.OWNER_NUMBER ||'2349012464012' //ur owner number
global.ownername = '❌G҉O҉D҉W҉I҉N҉❌' //ur owner name
global.websitex = "https://whatsapp.com/channel/0029VaPZWbY1iUxVVRIIOm0D" //"https://chat.whatsapp.com/JmsgzJllAAB8zHfQcJXxES"
global.wagc = "https://chat.whatsapp.com/CzFlFQrkdzxFw0pxCBYM7H" //"https://chat.whatsapp.com/JmsgzJllAAB8zHfQcJXxES"
global.themeemoji = '💀'
global.wm = "GODWIN"
global.botscript = 'https://whatsapp.com/channel/0029VaPZWbY1iUxVVRIIOm0D' //'https://chat.whatsapp.com/JmsgzJllAAB8zHfQcJXxES' //script link
global.packname = process.env.PACK_NAME ||"❤️" //enter your stickers author name here
global.author = "❌G҉O҉D҉W҉I҉N҉❌"
global.creator = "2349012464012@s.whatsapp.net"
global.xprefix = process.env.PREFIX ||'.'
global.premium = ["2349012464012"] // Premium User
global.hituet = 0

//bot sett
global.typemenu = process.env.TYPE_MENU || 'v2' // menu type 'v1' => 'v8' 
global.typereply = process.env.TYPE_REPLY ||'v1' // reply type 'v1' => 'v3'
global.autoblocknumber = process.env.AUTOBLOCK_NUMBER || '263,92' //set autoblock country code
global.antiforeignnumber = process.env.ANTIFOREIGN_NUMBER || '' //set anti foreign number country code
global.welcome = process.env.WELCOME || 'false' //welcome/left in groups
global.anticall = process.env.ANTI_CALL || 'false' //bot blocks user when called
global.autoswview = process.env.AUTOSW_VIEW || 'true' //auto status/story view
global.adminevent = true //show promote/demote message
global.groupevent = true //show update messages in group chat
//msg
global.autorecord = process.env.AUTO_RECORD || 'true'
global.autorecordtype = process.env.AUTO_RECORDTYPE || 'false'

global.mess = {
	limit: 'Your limit is up <\>',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
    done: 'Done ✓',
    error: 'Error !',
    success: 'Succes •'
}
//thumbnail
global.thumb = fs.readFileSync('./XMEDIA/theme/bellah.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
