<h1> Labs 29 "Front End Primer" Introduction </h1>
The front page of the game now displays the next logical screen that a player should navigate to based on where they are in user flow.
E.g.: Upon finishing reading the story and submitting a writing/drawing our client should be recommended to go and vote on their favorite 
user submissions.

We added a new feature to the post trophy room screen that provides players with the opportunity to give "emoji feedback". We implemented
logic checks that would give players the ability to select/deselect emojis and submit their choices to our backend. The emoji menu was intuitively
designed to stick out on the screen, giving players a clear indication that they should select some emotes. Our emote menu was styled to
be sleek in design and created with our player's quality of life in mind. When presented with the emoji menu, it's very eye catching and easy to see
how you should use it. We implemented styling and logic that makes the component feel fun and interactive as well as highly functional/smooth
# Technical Specifics 
The emoji feedback feature consists of two main components: EmojiContainer and EmojiIcon.  
<h5>EmojiContainer</h5>
This component is responsible for storing local state (data) and rendering the EmojiIcon component. 
State
The component makes use of the useEffect hook to store state locally.  There are three "states" being stored here:
emojis
This state consists of an array (list) of emojis that a user can choose from.  As of writing this, the list consists of 10 emojis chosen at random.  In a later version, the emojis should be selected so that users can have a larger range in choices.
The number of available emojis to choose from can also be determined by future cohorts. 
picked
This state starts off as an object with three properties: 
emojis: Array
senderId: String
submissionId: String
emojis
An empty array that will store the emojis that a user has selected for a particular submission.
senderId:
This string will auto-populate with the id of the user that is sending the emoji feedback.  This id is being passed down as a prop.
submissionId:
This string will auto-populate with the id of the submission that is being given the emoji feedback.  This id is passed down as a prop.
When a user clicks on the submit button on the emoji feedback container, this list will be sent to the backend.
hasSentFeedback
This state starts off as a false boolean value.  This state is used to track if a user has already submitted feedback for a particular submission.  This boolean value will be used to either enable or disable the submit button.
<h1>Click Events</h1>
The component has three helper functions: handleRemoveEmoji, handleSubmit, and handleClick.
<h5>handleClick</h5>
This function will be triggered when an emoji icon that has not been selected yet is clicked.  This will add the emoji to the picked array.
This function is passed to the EmojiIcon component as a prop.
<h5>handleRemoveEmoji</h5>
This function will be triggered when an emoji that had already been selected is clicked on again.  This will remove the emoji from the picked array.  
This function is passed down to the EmojiIcon component as a prop where it will be used.
<h5>handleSubmit</h5>
This function will be triggered when the user clicks on the submit button on the emoji feedback component.
<h1>Interacting with the backend</h1>
Once the event fires, it will make an axios call to the sever.  At the time of writing this, a dummy backend is being used called jsonblob.com.  This service allows developers to make CRUD operations for testing.
The url for seeing what data has been sent to the endpoint is:
https://jsonblob.com/https://jsonblob.com/06560742-4ef4-11eb-bace-f1443624f88f
The url that is used to send data to this endpoint is:
https://jsonblob.com/api/jsonblob/06560742-4ef4-11eb-bace-f1443624f88f
This endpoint is to later be replaced with a backend route/endpoint.
<h1>Emojis, arrays and sources of truth</h1>
The component will render an EmojiIcon component for every emoji in the emoji array.  The props passed down to this component are:
<h5>remove</h5>: this prop passes the handleRemoveEmoji helper function.
<h5handler</h5>: this prop passes the handleClick helper function.
<h5emoji</h5>: This prop passes a specific emoji that will be rendered to the DOM.
<h5>hasSentFeedback</h5>: This prop passes down the hasSentFeedback function.
The component will also render a button that conditionally reads either "submit" or an emoji checkmark - depending on whether the user has submitted the feedback or not.  hasSentFeedback will be used to determine which of these two is displayed.
<h5>EmojiIcon</h5>
This component is responsible for rendering individual emoji icons for the user to click on.  This component uses the useEffect hook that stores state (data) locally.  There is a single state stored in this app: selected.  This state is a boolean value that will be used to track if a user has clicked on (selected) a particular emoji.  
The component will render the emoji with a click event.  This click event is responsible for adding/removing emojis from the picked array and styling the icons to indicate which have already been selected.  The click event has two nested if-statements.  The outer one will check if the user has already submitted the feedback.  If so, then the click event won't do anything.  This prevents the user from being able to select and deselect icons once the feedback has been sent.   If the user has not yet sent the feedback, the second if-statement will then be executed.
The second if-statement checks whether the emoji icon has been clicked or not.  If not, then it will run the handleClick function that adds the emoji to the picked array.  If so, it will run the handleRemoveEmoji which will remove the emoji from the picked array.
Regardless of whether those if-statements run, the setSelected function will be executed, which will toggle between the emoji icon being selected or deselected.
The emoji that was passed down to it will be rendered on the DOM.
Tools
This feature utilizes an NPM package module called emoji-Unicode.  This module can easily convert emojis to Unicode and vise versa.  When a user clicks on an emoji, rather than storing the emoji itself inside the picked array, it will store its Unicode value as a string.  
Postgres will save the emojis received as Unicode.  The Unicode will need to be converted back to emojis when a user wants to see the emojis they received on their submission.
Thoughts:
<h1>In closing:</h1>
Future cohorts should consider and possibly discuss with the stakeholder whether their should be a limit to the number of emojis that a user can select for each individual emoji.  
Once backend receives the Unicode for the emojis, there should be some kind of authentication that checks if the emojis have not been altered (by using tools such as Postman).  
Future cohorts will need to implement a component that displays the emojis a user has received for their submission.
