module("Index", {
  setup: function () {
    Fishingpal.reset();
  }
});

test("First H1 contains Fishingpal", function () {
  visit('/').then(function () {
    equal($('#ember h1').html(), 'Fishingpal', 'Title is Fishingpal');
  });
});

