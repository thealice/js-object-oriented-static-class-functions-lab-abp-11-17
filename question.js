class Question {
  constructor(content) {
    this.content = content;
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
    return this.All().filter(function(content){
      return content.id === id;
    })
  }
}

Question._All = [];
Question.counter = 0;
