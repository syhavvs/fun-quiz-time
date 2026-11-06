# fun-quiz-time

This is a simple, fun quiz I made as my first project with HTML, CSS, and JS

![Screenshot of the quiz](screenshot.png)

**[Try it here](https://syhavvs.github.io/fun-quiz-time/)**


## Features

- You can listen and see what happens when you answer, whether you answer correctly or incorrectly.
- The background is a soft pastel GIF.
- There is a scoreboard for your end result.
- The questions are easy and challenging.
- The theme of this quiz is cute pastel.
- When you finish a task, it gets crossed out and moves to the bottom of the list.
- A counter at the top shows how many tasks are left.

## How I made it

I built the app using just JavaScript (no frameworks) so I could see how the page was updating.
The tasks are stored in an array of objects and whenever there is a change the array is used to regenerate the list.
The main problem I had was that when the tasks would disappear after a refresh.
After a while of being confused I looked at the browser dev tools and realised I wasn’t saving anything. I added localStorage to fix this.
I  chose this project as my first because the basic code structure is simple.
And It's a soft pastel to match the energy of the quiz's questions.


## What I learned
Turns out even a tiny typo can totally break a whole page, though browser dev tools are a lifesaver for tracking down what went wrong.
Next time, I’m definitely sketching my layout on paper first.
And I also want to add a feature that lets users drag and rearrange their tasks.

## Credits

- [Correct answer sound (Pixabay)](https://pixabay.com/sound-effects/technology-correct-472358/)
- [Wrong answer sound (Pixabay)](https://pixabay.com/sound-effects/film-special-effects-wrong-answer-126515/)
- [Pastel gradient background GIF (Giphy)](https://giphy.com/gifs/background-rainbow-scroll-gradient-dYtHPYJxZblCcWPwcQ)
