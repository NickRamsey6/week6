// export class HungryBear {
//
//   constructor(name) {
//     this.name = name;
//     this.foodLevel = 10;
//   }
//
//   setHunger() {
//     setInterval(() => {
//       this.foodLevel--;
//     }, 1000);
//   }
//
//   didYouGetEaten() {
//     if (this.foodLevel > 0) {
//       return false;
//     } else {
//       return true;
//     }
//   }
//
//   feed() {
//     this.foodLevel = 10;
//   }
// }

function welcome(salutation) {
  return function(yourName) {
    return `${salutation}! Nice to meet you, ${yourName}!`
  }
}

let heyThere = welcome('Hey there');

// here we have bear object with four key:value pairs. foodLevel, setHunger, didYouGetEaten, feed keys.
// The last three things have function as a value of those keys.
export let bear = {
  foodLevel: 10,
  sleepLevel: 10,
  setHunger: function() {
    const hungerInterval = setInterval(() => {
      this.foodLevel--;
      if (this.didYouGetEaten() == true) {
        clearInterval(hungerInterval);
        return "You got eaten!";
      }
    }, 1000);
  },
  didYouGetEaten: function() {
    if (this.foodLevel > 0) {
      return false;
    } else {
      return true;
    }
  },
  feed: function(amount) {
    let that = this;
    return function(food) {
      that.foodLevel += amount
      return `The bear ate the ${food}! Food level goes up ${amount}!`
    }
  },

  setSleep: function() {
    const sleepInterval = setInterval(() => {
      this.sleepLevel++;
      if (this.didYouSetSafe() == true) {
        clearInterval(sleepInterval);
        return "You are safe...this time!";
      } else {
        return "Give him something to eat!"
      }
    }, 1000);
  },
  sleep: function(time) {
    let that = this;
    return function(sleep) {
      that.sleepLevel += time
      return `The bear slept ${sleep} hours! Sleep level goes up ${time}!`
    }
  },
  didYouSetSafe: function() {
    if (this.sleepLevel < 30) {
      return false;
    } else {
      return true;
    }
  }
};

bear.eatSmall = bear.feed(5);
bear.eatMedium = bear.feed(10);
bear.eatLarge = bear.feed(15);
bear.eatYuck = bear.feed(-10);
bear.eatPowerUp = bear.feed(50);
bear.eatSpecialBonus = bear.feed(100);
bear.eatWeirdThing = bear.feed(Math.floor((Math.random() * 20) + 1));

bear.sleepLittle = bear.sleep(5);
bear.sleepMed = bear.sleep(10);
bear.sleepLots = bear.sleep(15);
bear.wakeUp = bear.sleep(-10);
bear.partyTooMuch = bear.sleep(50);
bear.stufyForEpicodus = bear.sleep(100);
bear.sleepWeirdAmount = bear.sleep(Math.floor((Math.random() * 20) + 1));
