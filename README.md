# 🎬 Movie Streaming Library Practice

Welcome to your **JavaScript object & array navigation challenge**!
In this project, you’ll be working with a **mock streaming service catalog** — similar to Netflix — and writing code to access, filter, and manipulate information stored inside a **nested object** full of genres, shows, seasons, episodes, and ratings.

This challenge will help you practice:

- Accessing **nested objects** and **arrays**
- Using **dot notation**, **bracket notation**, `.map()`, `.filter()`, and loops
- Thinking critically about **data structures** and how to dig into them

---

## 📋 Your Task

You are given a JavaScript file that contains the following data structure:

- **Genres** (e.g., Comedy, Sci-Fi)

  - Each genre contains multiple **Shows**

    - Each show has multiple **Seasons**

      - Each season contains multiple **Episodes**

        - Each episode has a **title**, **episode number**, and **rating**

Example:

```js
const streamingLibrary = {
  genres: [
    {
      name: "Science Fiction",
      shows: [
        {
          title: "Galaxy Quest",
          seasons: [
            {
              seasonNumber: 1,
              episodes: [
                { episodeNumber: 1, title: "Pilot", rating: 8.5 },
                { episodeNumber: 2, title: "Into the Void", rating: 9.1 },
              ],
            },
          ],
        },
      ],
    },
  ],
};
```

You will complete **7 coding challenges** below to practice digging into the data.
We are importing it from a separate file, but you can still access the data like any other named object as such:

```javascript
// From within challenge.js:
return streamingLibrary[0];
// =>  {
//       name: "Science Fiction",
//       shows: [
//         {
//           title: "Galaxy Quest",
//           seasons: [
//             {
//               seasonNumber: 1,
//               episodes: [
//                 { episodeNumber: 1, title: "Pilot", rating: 8.5 },
//                 { episodeNumber: 2, title: "Into the Void", rating: 9.1 },
//               ],
//             },
//           ],
//         },
//       ],
//     }
```

---

## 💻 Coding Challenges

1. **List all genre names**
   → Output an array of all genre names in the library.

2. **List all show titles in a given genre**
   → Write a function that takes a **genre name** and returns all show titles in that genre.

3. **List all episode titles for a given show**
   → Write a function that takes a **show title** and returns all episode titles (across all seasons).

4. **Find all episodes with a rating above 9**
   → Output an array of `{ showTitle, episodeTitle, rating }` for all episodes with a rating greater than 9.

5. **Count total number of episodes in the entire library**
   → Output the total number of episodes across all shows, seasons, and genres.

6. **Find all shows that have at least one episode rated 9 or higher**
   → Output an array of show titles that have at least one high-rated episode.

7. **List all episodes from a specific season of a show**
   → Write a function that takes a **show title** and **season number** and returns all episode titles in that season.

---

## 🛠️ Bonus Challenges (optional)

These are **optional** but will stretch your skills further:

8. **Add a new episode**
   → Write a function that adds a new episode to a show and season of your choice.
   Example: `addEpisode("Galaxy Quest", 1, { episodeNumber: 3, title: "New Adventure", rating: 9.3 })`

9. **Find the highest-rated episode in the entire library**
   → Write a function that returns the episode with the highest rating, including its show title, season number, episode title, and rating.

10. **Sort all episodes of a show by rating (highest to lowest)**
    → Write a function that takes a **show title** and returns a sorted array of all its episodes (across all seasons) by rating.

11. **Get the average episode rating for a show**
    → Write a function that takes a **show title** and returns the average rating of all its episodes (across all seasons).

---

## ✅ How to complete the project

- Open `streamingLibrary.js` (this file contains the data)
- Open `challenges.js` (this file is where you’ll write your solutions)
- For each challenge, write a function or script that **logs the answer** to the console
- Test your work by running the command:

```bash
npm i # only necessary if this is the first time you're installing the programs
npm test
```

---

## 🛠️ Tips

- Use **console.log** frequently to inspect what part of the object you’re working with
- Don’t be afraid to use **for loops**, **forEach**, **map**, or **filter** — whatever works best for you and makes sense.
- Pay close attention to **array vs. object** — know when you’re looping over an array vs. accessing object properties

---

## 📝 Submission

When you’ve completed all challenges:

- Make sure your code runs without errors
- Push your project to your GitHub repository
  OR
- Zip your project folder and share it with your instructor

---

Good luck and have fun! 🚀🍿
If you get stuck — **log it out** and think step by step: _What do I have? What do I want?_
