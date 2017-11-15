'use strict';

class Question {
  constructor(question) {
    const question = new Question({$this.question});
    this.save();
  }
  save() {
    this.constructor._All.push(this);
  }
  static All() {
    return this._All;
  }
}

Question._All = [];
// let question1 = new Question('What\'s your favorite food?');
// Question.prototype.askQuestion = function() {
//   return `{$this.question}`;
// }
