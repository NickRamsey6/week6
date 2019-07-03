export class FlashCards {
  constructor() {
    this.score = 0;
    this.keywords = ["html", "css", "json", "xml", "class", "function", "javascript", "babel", "webpack", "variable", "method", "prototype"];
    this.values = ["the standard markup language for creating Web pages.",
      "Cascading Style Sheets is a style sheet language used for describing the presentation of a document",
      "JavaScript Object Notation is an open-standard file format that uses human-readable text to transmit data objects consisting of attribute–value pairs and array data types.",
      "Extensible Markup Language is a markup language that defines a set of rules for encoding documents",
      "A JavaScript class is a type of function. Classes are declared with the class keyword. We will use function expression syntax to initialize a function and class expression syntax to initialize a class. ",
      "Every function in JavaScript is a Function object. See Function for information on properties and methods of Function objects.",
      "a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments.",
      "a free and open-source JavaScript compiler and configurable transpiler used in web development.",
      "an open-source JavaScript module bundler. It is a module bundler primarily for JavaScript, but it can transform front-end assets like HTML, CSS, and images ",
      "Variable means anything that can vary. JavaScript includes variables which hold the data value and it can be changed anytime.",
      "actions that can be performed on objects. A JavaScript method is a property containing a function definition.",
      "a JavaScript framework created by Sam Stephenson in February 2005 as part of the foundation for Ajax support in Ruby on Rails."];
    this.keyword; //initialize without any values. The type of variable will be runtime as goes.
    this.randomValue; //initialize without any values. The type of variable will be runtime as goes.
    this.getRandomVals(); //In this way, we can define and use it as a property of class for multiple lines of function
  }

  getRandomVals(){
    this.randomKeyword = [Math.floor(Math.random()*this.keywords.length)];
    this.randomValue = [Math.floor(Math.random()*this.values.length)];
  }
  computerAnswer () {
    if (this.randomKeyword === this.randomValue) {
      return 'true';
    } else {
      return 'false';
    }
  }
  scoreKeeper (userInput, computerAnswer) {
    if (userInput === computerAnswer) {
      this.score++;
    } else {
      this.score--;
    }
    return this.score;
  }
}
