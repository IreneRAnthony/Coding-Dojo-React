var StarShipModel = Backbone.Model.extend({
    defaults: {
        
    }
});

var StarShipCollection = Backbone.Collection.extend({
    model: StarShipModel,
    url: "https://swapi.co/api/starships/?format=json",
    parse: function(starShip){
        return starShip.results;
    }
});

var starShips = new StarShipCollection();
starShips.fetch().then(function () {
    // track each starship’s name, manufacturer, crew, and cost_in_credits
    console.log(starShips);

    //Create an additional falconChecker method within your collection that checks if the name of a starship 
    //is “Millennium Falcon” and sets its cost_in_credits to “priceless”. 
    //Make sure to use _.each(), get(), and set() to accomplish this.
    function falconChecker(array){
        array.each(function(ship){
            let shipName = ship.get("name");
            if(shipName === "Millennium Falcon"){
                ship.set("cost_in_credits", "priceless")
            }
        })
    };

    //Invoke your falconChecker method when you get a successful fetch.
    falconChecker(starShips);

    //Verify if your falconChecker method worked properly by using _.findWhere() to your collection 
    //to find the “Millennium Falcon” model and inspect its changed property.
    let changedFalcon = starShips.findWhere({"name": "Millennium Falcon"});
    console.log(changedFalcon);

});
