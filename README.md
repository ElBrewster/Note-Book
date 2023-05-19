Digital-Notes-Thing

Just Another Digital-Notes-Thing

I was about to sit down to do a refresher course on TypeScript when I realized I could no longer stand any of my notetaking options. I say this as somebody standing in front of a wall of journals & art supplies, and standing before two screens open to my Chrome browser, with notepad, Notion, Notes, TextEdit, Signal and Slack full of unorganized stuff. I figured it would be faster to spin-up a small Remix.js app than to go learn a new note-taking interface and its customizations. Then I can have a database and I can filter and make it purple. Or something.

So I'm leaving this here in case you'd like to personalize your own full-stack note-taking experience.

1. Read View: individual notecards should be editable
   1b. do a notecard styling for fun on Read View?
2. Read View: have notes grid based in breakpoints to be 3/5 inches maybe?
3. Note/Read Views: some kind of formatting since the text doesn't retain formatting from inputs. NPM package of some kind? Markdown?
4. Note View: use form to send info to database but also
5. A way to clear inputs on submit that is not reset button.
6. Use the reset function in a way that isn't as destructive, like "gosh nevermind all this" button way over to the side
7. Note View: category explanation with arrow
8. Note View: A way to edit the submitted note before submitting to the database (have a form that is controlled that saves to localstorage and then a second form to do the post?)
9. Read View should have patch and delete options
10. (additional routes then? like clicking a notecard from Read View takes you to a child view in the Read display or note-reading/update kinda thing)
11. Read View: X to delete button that when clicked renders a second button that says are you sure you want to trash this note? kind of thing
12. Read View: a nav that populates buttons for each of the categories saved in the database.

- buttons should be switched to all caps regardless of what user put in the db
- I think on the left or right side (left?) so that they don't fill the hero section (or conditionally render 20 max like my NYT reader?)

13. the font choice really matters since the input field and notecards being read are the point of this app. Needs to feel good to type, needs to feel good to read. Make the font slightly bigger like
14. Link from read view to note taking view
