// authenticates you with the API standard library
// type `await lib.` to display API autocomplete
const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});
const {registerFont, createCanvas, loadImage} = require('canvas')

// Importing and setting up the font.
const comicsans = require('@canvas-fonts/comic-sans-ms')
registerFont(comicsans, {family: 'Comic Sans'})

// Setting up canvas
const canvas = createCanvas(400, 200)
const ctx = canvas.getContext('2d')

// Filling in the background color
ctx.fillStyle = "#3A003A"
ctx.fillRect(0, 0, canvas.width, canvas.height)

// Add a welcome text
ctx.font = 'bold 30px "Comic Sans"';
ctx.fillStyle = '#ffffff';
ctx.textAlign = "center";
ctx.fillText("Welcome: ", 200, 30);
let userN = context.params.event.user.username;
let result = "";
for(let i = 0; i < userN.length; i++)
{
  if (userN[i] >= 'a' && userN[i] <= 'z' || userN[i] >= 'A' && userN[i] <= 'Z' || userN == ' ')
  {
    result += userN[i];
  }
}
console.log(result);
ctx.fillText(result, 200, 70)

// Get the person's info
let user = await lib.discord.users['@0.2.1'].retrieve({
  user_id: context.params.event.user.id
});

// Get avatar URL
let avatar_url = user.avatar
? `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`
: `https://discordapp.com/assets/322c936a8c8be1b803cd94861bdfa868.png`;
  
let image = await loadImage(avatar_url)
ctx.drawImage(image, 150, 100, 100, 100)


return lib.discord.channels['@0.3.1'].messages.create({
  channel_id: `938547077288448052`,
  content: ` `,
  attachments: [
    {
      'filename': `welcome.png`,
      'file': canvas.toBuffer()
    }
  ]
});