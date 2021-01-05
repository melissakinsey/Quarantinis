##INTRODUCTION

This project was completed for the Columbia University Engineering Full-Stack Coding Boot Camp. Our mission was to conceive and execute a design that solves a real-world problem by integrating data received from multiple server-side API requests. We've harnessed the power of music and booze to save the world from coronageddon.

Repo: https://github.com/melissakinsey/Quarantinis

GitHub Pages: https://melissakinsey.github.io/Quarantinis/

#USER STORY

*AS A* pandemic prisoner in despair 
*I WANT TO* receive cocktail and music pairings 
*SO I CAN* drown my sorrows and find solace.

#PROJECT OVERVIEW

Most of us held it together in 2020 only with considerable help from adult beverages. We've designed an app to keep the party going in 2021. Quarantine and chill to some smooth tunes from the Pandemic Player, and shelter in place with the perfect cocktail. Search for familiar favorites, or click "Random Cocktail" to try something new. Join us in raising a glass to the new year. Until inoculation is available, intoxication will see us through.

#FEATURES

##Alcohol
###Random Cocktail
In this post–coronapocalyptic era, we gravitate toward the familiar. Hey, we get it. Binge-watching The Office while alternately doomscrolling and panic-noshing Hot Pockets helps you forget about your dwindling supply of toilet paper and the COVID-10 around your midsection. But do you really want the cocktail hour to feel like Groundhog Day?

To make Thursday feel less like blursday, the Quarantinis app offers a "Random Cocktail" button. Think of it as a slot machine for booze. Each cocktail recipe is accompanied by a list of ingredients, a glamour shot of the drink, and instructions for mixing and serving it. The recipes are supplied by The Cocktail DB, an open, crowd-sourced database of liquid courage from around the world. You'll feel like you're on coronacation as you quaff a pisco sour from Peru or a szarlotka from Poland. Come on, treat yo' self! 

[!images/TheCocktailDB.jpg]

###Favorites List
When you find a new go-to beverage, click the plus sign to add the drink to your Favorites list. The drink name and recipe will be saved, so you'll have it handy next time you make it. (We can't let the rest of that Polish vodka go to waste, now, can we?)

##Pandemic Playlist
No cocktail hour is complete, on Zoom or otherwise, without a little music to set the mood. Choose from a selection of jazz, bossa, instrumental, or Christmas songs. (Yeah, we know...Christmas is over. But months and days have become irrelevant, and if ever we needed a little Christmas spirit, now's the time.) Chill to the rhythm of Tito Puente or Joao Gilberto, sip a Culto a la Vida, and let _cuarentena_ take you away (after you post it on Insta..._obviously_).

#PROJECT REQUIREMENTS

##Technical Criteria

Application meets the following criteria:
* Uses a CSS framework other than Bootstrap.
* Uses at least two server-side APIs.
* Uses client-side storage to retain persistent data.
* Uses modals instead of JS alerts or prompts.
* Accepts and responds to user input.
* Is documented in a quality README (with unique name, description, technologies used, screenshot, and link to deployed application).
* Is deployed at live URL and loads with no errors.
* Is hosted on GitHub (URL must be submitted).

##Repository Requirements

Project repo meets the following requirements:
* Has a unique name.
* Follows best practices for file structure and naming conventions.
* Contains multiple descriptive commit messages.

#User Experience Standards

User experience meets the following guidelines:
* Offers an intuitive, easy-to-navigate user experience.
* Has a clean, polished, responsive interface.

#CONTRIBUTIONS

##Laura

- Chose The Cocktail DB API [!images/TheCocktailDB.jpg]
- Chose YouTube API [!images/youtube-api.jpg]
- Conceptualized and coded "Favorites" list [!images/favorites-list.jpg]
- Coded calls to Pandemic Player [!images/pandemic-player.jpg] and other APIs, including request functions, event listeners, and embedded video player
- Debugged code
- Wrote user story
- Ensured mobile responsiveness
- Helped with layout and styling

##Mateo

- Prepared slide presentation
- Chose "Blog" template from Material Design Lite [!images/mdl-template.jpg]
- Chose cocktail image [images/Toast.jpg]
- Helped with layout and styling

##Melissa

- Proposed app concept
- Chose Cinzel font and designed logo [!images/quarantinis-title.jpg] 
- Chose and modified main background image and cocktail napkin image
- Wrote tag line [!images/tagline.jpg], app copy, README, and disclaimer
- Supplied and placed screenshots in README
- Helped with layout and styling

##Purna

- Helped Laura write API calls
- Helped with layout and styling
- Reviewed pull requests quickly


#LESSONS LEARNED 
* *Concept.* Having a clear concept is essential. Our first project idea was a tranlator/journal/vocabulary builder/day planner/habit tracker thing. (Hence our group name "The Polyglots.") We planned to use a translation API and maybe a flashcards or calendar API. But we weren't sure because we didn't have a focused idea of what we wanted to build. Would we cover all major languages? A select few? Or just two, to keep things simple? Would the calendar track consistency (number of days a person studied in a given week, for example) or words learned? How would the app know which words a user had learned, anyway? During our second meeting, we decided to change course and pursue the quarantinis idea. It was straightforward, and we knew we'd have a little fun with the concept, features, and UI. 
* *Version control.* We had major problems with Git, especially in the beginning. In trying to untangle these snafus, we learned that git reset was our friend. We also learned about git stash (git stash list, git stash pop, git stash apply, etc.), git merge, git remote, git diff, and other version control concepts. We're total pros now! Yahahahahahahahahahahha!
* *Project management and teamwork.* The Kanban board could've been our friend had we not unwisely shunned it in favor of Slack. Unshun! Reshun! 
* *Template.* We discovered that a template isn't necessarily a great solution for beginners because the code contains tons of cruf. In this case, there were lots of pages, menus, and other elements we didn't need. The elements we did use contained styles inherited from these discarded parents, so it was hard to make the retained elements behave.

#IMAGE CREDITS

- Cocktail olive used in title: Courtesy Pixabay/OpenClipArtImages. [!images/olive.jpg]
- Background image courtesy https: //commons.wikimedia.org/wiki/File:Bar_time.jpg [!images/Bar_time.jpg]
- Cocktail image courtesy Drew Beamer (@drew_beamer)/Unsplash: https://bit.ly/3n6uuyT [!images/Toast-uncropped.jpg]

#APIs
##The Cocktail DB
TheCocktailDB is an open, crowd-sourced database of drinks and cocktails from around the world. It was built in 2015 to provide a free API for drinks online in the hope that developers would build applications and cool projects on top of it. Mission accomplished.

Random Cocktail: https://www.thecocktaildb.com/api/json/v1/1/random.php
Drink Thumbnails: https://www.thecocktaildb.com/images/media/drink/vrwquq1478252802.jpg/preview (100x100 pixels)

##YouTube API
Cocktail Music: https://www.googleapis.com/youtube/v3/search?part=snippet&q=cocktail+music [!images/Youtube-thumbnail.png]

#LICENSES

##Material Design Lite
Copyright 2015 Google Inc. All rights reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

      https://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

##Google Fonts
The Cinzel font, designed by Nataneal Gama, is used courtesy of Google Fonts and licensed under a Creative Commons Attribution 4.0 License: https://fonts.google.com/specimen/Cinzel?selection.family=Cinzel:wght@400;700;900|Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&sidebar.open=true
