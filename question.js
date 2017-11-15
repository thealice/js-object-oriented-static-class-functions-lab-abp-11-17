'use strict';

class Question {
  constructor(question) {
    this.question = question;
    this.id = ++Question.counter;
    console.log(this.id);
    this.save();
  }
  save() {
    this.constructor._All.push(this);
  }
  static All() {
    return this._All;
  }
  static Find(id) {
    return this.All().filter(function(question){
      return question.id === id;
    })
  }
}

Question._All = [];
Question.counter = 0;
