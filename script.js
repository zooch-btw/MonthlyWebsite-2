let userName = prompt('What is your name!?')
let userQuest = prompt('Why have you come here?')
let userFavColor = prompt('What is your favorite activity to do?')
let swallowAirSpeed = prompt('What isyour favoirte subject?')
let button = prompt('')


let myStory = ` <p> Hello ${userName}. Answerme me questions, these three, and the other side youll see. </p>

<p> I see you have alreday answered, so your quest is to ${userQuest}. </p>
`

console.log(myStory)

document.getElementById('story').innerHTML = myStory