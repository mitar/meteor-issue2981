if (Meteor.isClient) {
  var collection = new Meteor.Collection(null);

  collection.insert({});

  Template.hello.helpers({
    foobar: function () {
      return collection.find();
    }
  });

  Template.button.events({
    'click button': function (event, template) {
      event.preventDefault();

      collection.remove(this._id);
      console.log("button");
    },

    'click': function (event, template) {
      console.log("click");
    }
  });
}
