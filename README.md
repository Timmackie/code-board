# code-board

## user Experience / login
fill in email and pass
checks if info is in db already
if yes then nev to hompage
if no then details error message / have link option to creat account

## user experience / create account
input:
    - First and last name or a username
    - email
    - password
        - //add password reqs
    - git hub link
    - linkedin link
verify if email is unique to db
verify name or username is unique to db
upon verifyed info nav to homepage


## user experience / homepage
When a user navs to the landing page they should redirect to the landing page //already has this function in code.
If the user successfuly signs in, then they should be directed to hompage
User signs in and should see create post button.
Page should show 5 most recent posts.//have a button to see 5 next most recent posts. 
How do we want pagination / front end-pull all data down and hide all but 5.
click create post button / create modal w/ bootstrap
fill in the info in the modal then click create post button
post - create min input validations:    
    -min text input (50?)
    -on create click add confirmation modal asking are you sure? / Then it posts to homepage
    
TODO: create a "create profile" handlebars page
TODO: update seeds w/ Linked in info and git hub info 
TODO: create modals for creation of accounts and creation of posts // ask andrea about modals vs seperate page for create account. 
    - look at documentaion and make sure we use vanilla bootstrap. 
    - they go in the handlebars
    - create a handlebars partials folder inside views folder
    - create modal files
        - signupModal.handlebars
        - newpostModal.handlebars
TODO: start debugging js file to verify const/var are ok. 

## 
nobody works on the same thing at the same time!!!!
always pull latest
don't always add all files// git add (relative file path)
ask andrea about git reset and fetch vs pull.
ask about temporarily disabling the login page to make working on the hompage easier. 




## nice to haves down the road
use local storage to integrate a like or emoji funtion. 
expand post body modal / add modal file to folder
-decide about post type i.e. check box or dropdown