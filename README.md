# FriendFinder
A compatibility-based "FriendFinder" application
https://sams-friendfinder-2019.herokuapp.com/survey

This app asks users a series of 10 questions in order to get to know the user's personality. It will then search through a pre populated data file and match the user with a friend who will be potentially compatible. 

The friend finder app is organized by separating the various route files and the html/server files. Inside the app folder, users can find 3 more folders titled data, public, and routing. Inside the data folder is a friends.js file that stores the potential friend matches. Inside the public folder is the front end code that contains the html pages of the home page and the actual survey page. The routing folder contains the apiRoutes and htmlRoutes javascript files.

How to Use Friend Finder: When user are at the home page, they have three options: survey, friends API, gitHub Repo. Clicking the friends API will show the user the list of friends that he or she could be matched with. The gitHub Repo links users to the app's public repository. And finally, the survey button will take users to the survey page.

Once on the survey page, users will be required to fill out their name, and also link an image of themselves. Next, they will be asked 10 questions that allows them to answer with a rating score between 1 and 5. After users click submit, the app will find a friend that matches the personality of the user and a name and image of the friend will pop up in a modal for the user to see. Finally, users must refresh the page in order to re start the process. If users return to the home page and click the friends API link, they can see that their own profile has been added to the list. 

Technologies Used: HTML, Javascript, Node.js, NPM, Express 

Created by: Sam Pai. For any questions or for further information, please email me at SamuelPai16@gmail.com
