const readline = require('readline');
const { stdin: input, stdout: output } = require('process');

const rl = readline.createInterface({ input, output });

rl.question('What is your name? : ', (nameReturn) => {
  // TODO: Log the answer in a database
  rl.question('What is an activity you like doing? : ', (activityReturn) => {
    // TODO: Log the answer in a database
    rl.question('What do you listen to while doing that? : ', (listenReturn) => {
      // TODO: Log the answer in a database
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) : ', (mealReturn) => {
        // TODO: Log the answer in a database
        rl.question("What's your favourite thing to eat for that meal? : ", (foodReturn) => {
          // TODO: Log the answer in a database
          rl.question('Which sport is your absolute favourite? : ', (sportReturn) => {
            // TODO: Log the answer in a database
            rl.question('What is your superpower? In a few words, tell us what you are amazing at! : ', (superPowerReturn) => {
              // TODO: Log the answer in a database
              console.log(`${nameReturn} loves listening to ${listenReturn} while ${activityReturn}, devouring ${foodReturn} for ${mealReturn}, prefers ${sportReturn} over any other sport, and is amazing at ${superPowerReturn}.`);
              rl.close();
            });
            
          });
          
        });
        
      });
      
    });
    
  });
  
  
});
