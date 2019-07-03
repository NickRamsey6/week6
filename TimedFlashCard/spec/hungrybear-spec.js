// import { HungryBear } from '../src/hungrybear.js';
//
// describe('HungryBear', function() {
//   let fuzzy = new HungryBear("Fuzzy");
//
//   beforeEach(function() {
//     jasmine.clock().install();
//     fuzzy.setHunger();
//   });
//
//   afterEach(function() {
//     jasmine.clock().uninstall();
//   });
//
//   it('should have a name and a food level of 10 when it is created', function() {
//     expect(fuzzy.name).toEqual("Fuzzy");
//     expect(fuzzy.foodLevel).toEqual(10);
//   });
//
//   it('should have a food level of 7 after 3001 milliseconds', function() {
//     jasmine.clock().tick(3001);
//     expect(fuzzy.foodLevel).toEqual(7);
//   });
//   it('should get very hungry if the food level drops below zero', function() {
//     fuzzy.foodLevel = 0;
//     expect(fuzzy.didYouGetEaten()).toEqual(true);
//   });
//
//   it('should get very hungry if 10 seconds pass without feeding', function() {
//     jasmine.clock().tick(10001);
//     expect(fuzzy.didYouGetEaten()).toEqual(true);
//   });
//
//   it('should have a food level of ten if it is fed', function() {
//     jasmine.clock().tick(9001);
//     fuzzy.feed();
//     expect(fuzzy.foodLevel).toEqual(10);
//   });
// });

import { bear } from './../src/hungrybear.js';

describe('HungryBear', function() {
  let fuzzy = bear;

  beforeEach(function() {
    jasmine.clock().uninstall();
    jasmine.clock().install();
    fuzzy.foodLevel = 10;
    fuzzy.sleepLevel = 10;
    fuzzy.name = "Fuzzy";
    fuzzy.setHunger();
    fuzzy.setSleep();
  });

  it('should return that the bear ate blueberries and the food level should go up 5', function() {
    expect(fuzzy.eatSmall("blueberries")).toEqual('The bear ate the blueberries! Food level goes up 5!');
    expect(fuzzy.foodLevel).toEqual(15);
  });

  it('should return that the bear ate honey and the food level should go up 10', function() {
    expect(fuzzy.eatMedium("honey")).toEqual('The bear ate the honey! Food level goes up 10!');
    expect(fuzzy.foodLevel).toEqual(20);
  });

  it('should return that the bear ate salmon and the food level should go up 15', function() {
    expect(fuzzy.eatLarge("salmon")).toEqual('The bear ate the salmon! Food level goes up 15!');
    expect(fuzzy.foodLevel).toEqual(25);
  });

  it('should return that the bear ate plastics and the food level should go up 0', function() {
    expect(fuzzy.eatYuck("plastics")).toEqual('The bear ate the plastics! Food level goes up -10!');
    expect(fuzzy.foodLevel).toEqual(0);
  });

  it('should return that the bear ate seal and the food level should go up 60', function() {
    expect(fuzzy.eatPowerUp("seal")).toEqual('The bear ate the seal! Food level goes up 50!');
    expect(fuzzy.foodLevel).toEqual(60);
  });

  it('should return that the bear ate bear and the food level should go up 100', function() {
    expect(fuzzy.eatSpecialBonus("bear")).toEqual('The bear ate the bear! Food level goes up 100!');
    expect(fuzzy.foodLevel).toEqual(110);
  });

  it('should return that the bear ate random and the food level should go up random', function() {
    expect(fuzzy.eatWeirdThing("random")).toEqual(fuzzy.eatWeirdThing("random")); //This is only way to handle randomly generated result....
    expect(fuzzy.foodLevel < 30).toEqual(true); //start with 10 and add any number between 1 and 20, so the max is 30
  });

  it('should return that the bear slept a lot and the sleep level should go up 5', function() {
    expect(fuzzy.sleepLittle("a lot of")).toEqual(`The bear slept a lot of hours! Sleep level goes up 5!`);
    expect(fuzzy.sleepLevel).toEqual(15);
  });

  it('should return that the bear slept a lot and the sleep level should go up 10', function() {
    expect(fuzzy.sleepMed("a lot of")).toEqual(`The bear slept a lot of hours! Sleep level goes up 10!`);
    expect(fuzzy.sleepLevel).toEqual(20);
  });
});
