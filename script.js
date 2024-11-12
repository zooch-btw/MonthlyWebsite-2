let userName = prompt('What is your name!?')
let userQuest = prompt('What is your quest?')
let userFavColor = prompt('What is your favorite color?')
let swallowAirSpeed = prompt('What is the air sped of an unlaiden swallow?')


let myStory = ` <p> Hello ${userName}. Answerme me these three, and the other side youll see. </p>

<p> I see you have alreday answered, so your quest is to ${userQuest}. </p>
`

console.log(myStory)

document.getElementById('story').innerHTML = myStory