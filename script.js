let userName = prompt('What is your name!?')
let userQuest = prompt('Why have you come here?')
let userFavColor = prompt('What is your favorite activity to do?')
let swallowAirSpeed = prompt('What is your favoirte subject?')


// I will do this soon
 let myStory = ` 
 <div>
 <p><u> Ingredients: </u></p>

<p>2 cups all-purpose flour </p>
<p>1 tablespoon granulated sugar </p>
<p>1 tablespoon unsalted butter or lard, cut into small pieces </p>
<p>1/2 teaspoon salt </p>
<p>1/2 teaspoon ground cinnamon </p>
<p>1/4 cup white wine or Marsala wine (use water as a substitute if needed) </p>
<p>1 large egg, lightly beaten (for sealing the shells) </p>
<p>Vegetable oil, for frying </p>
<p><u>Instructions:</u></p>

<p>Make the Dough: In a large bowl, combine the flour, sugar, cinnamon, and salt. Cut in the butter or lard until the mixture is crumbly. </p>
<p>Add Wine: Gradually add the wine and knead until a dough forms. The dough should be smooth but not sticky. </p>
<p>Chill: Wrap the dough in plastic wrap and refrigerate for at least 30 minutes. </p>
<p>Roll and Cut: Roll the dough out thinly on a lightly floured surface. Use a round cutter (about 4 inches in diameter) to cut out circles. </p>
<p>Form the Shells: Wrap each circle around a metal cannoli tube, sealing the edges with a little beaten egg. </p>
<p>Fry the Shells: In a large, heavy pot, heat about 2 inches of vegetable oil to 350°F (175°C). Fry each shell until golden brown, about 2-3 minutes. Let the shells cool slightly, then carefully remove them from the tubes. Cool completely on a wire rack. </p>
<p>Cannoli Filling: </p>
<p><u>Ingredients:</u></p>

<p>1 1/2 cups ricotta cheese (drain well if it’s too wet) </p>
<p>1/2 cup mascarpone cheese (optional, for extra creaminess) </p>
<p>1/2 cup powdered sugar (more or less to taste) </p>
<p>1/2 teaspoon vanilla extract </p>
<p>1/4 teaspoon ground cinnamon </p>
<p>1/4 cup mini chocolate chips (optional) </p>
<p>Zest of 1 orange (optional) </p>
<p><u>Instructions:</u></p>

<p>Mix Filling: In a bowl, combine the ricotta, mascarpone, powdered sugar, vanilla, and cinnamon. Mix until smooth. </p>
<p>Add Extras: Stir in the chocolate chips and orange zest, if using. </p>
<p>Fill the Shells: Use a piping bag to pipe the filling into each shell. Make sure to fill both sides!</p>

<p><u>Finishing Touches:</u></p>
<p><u>Garnishes:</u></p>

<p>Additional mini chocolate chips, chopped pistachios, or candied orange peel for decorating the ends
<p>Powdered sugar, for dusting</p>
<p>Serve: Decorate the ends with chocolate chips or pistachios, and lightly dust with powdered sugar.</p>

<p><u>Tips for the Perfect Cannoli:</u></p>
<p>Drain the Ricotta: If your ricotta is too watery, strain it in a cheesecloth overnight in the refrigerator.</p>
<p>Crispy Shells: Make sure your oil is at the right temperature (350°F) to avoid soggy shells. </p>
<p>Fill Just Before Serving: Fill the shells right before serving to keep them crispy.</p>
<p>Enjoy your homemade cannoli!</p>
</div>
`

console.log(myStory)

document.getElementById('story').innerHTML = myStory