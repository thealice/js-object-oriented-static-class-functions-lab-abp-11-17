'use strict';

class Question {
  constructor(question) {
    this.question = question;
    const question1 = new Question ('What\'s your favorite food?');
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
