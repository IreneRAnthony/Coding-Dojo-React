var StackModel = Backbone.Model.extend({
    defaults: {
        title: null,
        instructor: null,
        language: null
    },
    initialize: function(){
        this.set('instructor', 'Micheal Choi');
        console.log('It works!');
    }

});


var rubyStack = new StackModel();
var pythonStack = new StackModel();

rubyStack.set("title", "Ruby On Rails");
rubyStack.set('language', 'Ruby');
pythonStack.set('title', "Python");
pythonStack.set('language', 'Python');

console.log(rubyStack);
console.log(pythonStack);

