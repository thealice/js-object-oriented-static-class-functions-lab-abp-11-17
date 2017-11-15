'use strict';

class Question {
  constructor(question) {
    this.question = question;
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
