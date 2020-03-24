var BookModel = Backbone.Model.extend({
    defaults: {
        title: null,
        author: null
    },
    initialize: function(){
        console.log('Im alive!');
    }
});

var myBook = new BookModel();

myBook.set("title", "Where The Wild Things Are");
console.log(myBook);
