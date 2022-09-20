IN THE HOME COMPONET SUBMIT AND RETRIEVE...
I tried using useref hook to grab the form and do god knows what so that ill be able submit and still retrieve the data from the form element... that was a bad idea.

At the end I used the usenavigate hook in an on submit function gthis did all i needed before it went ahead and navigated!
//////////////////////////////////////
HOW I PASSED THE NAME STATE FROM HOME TO QUIZ!...
use state in the app.js and set the states as props to the component
the state of user will be changing from home(setUser) and being passed into quizcard(user)
In home we just destructure the prop {setuser}
create a fuction in home that will update the value of set user
i will have a parameter (eg data),then where i call the function..... i will pass in the value as the argument
in the fuction i will set my prop value to the parameter(ie data)
then onevent (onsubmit), ill call the fuction (ie onFormSubmit) and pass the data (ie stored name)
finally i go to quizcard destructure the prop { ie user} and use it!