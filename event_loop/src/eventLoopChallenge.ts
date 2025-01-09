import { promises as fs } from 'fs';

// Step 1: Synchronous log - The King has entered the court
console.log("The King has entered the court");

// Step 2: Read a file asynchronously (bard sings a song)
fs.readFile('./src/song.txt', 'utf-8')
  .then(data => {
    console.log("The bard sings a song: ", data);
  })
  .catch(err => {
    console.error("The bard couldn't find the song.");
   
  });

// Step 3: Schedule the jester's act (setTimeout with 0 ms delay)
setTimeout(() => {
  console.log("The jester performs his act.");
}, 0);

// Step 4: Let the king's advisor whisper (process.nextTick)
process.nextTick(() => {
  console.log("Your Majesty, there’s an urgent matter.");
});

// // Step 5: Synchronous log - The court session has ended
console.log("The court session has ended");

