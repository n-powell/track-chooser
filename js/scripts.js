var ruby = "Ruby/Rails track";
var drupal = "PHP track";
var android = "JAVA/Android track";
var design = "JAVA/Android track";
var cee = "C#/.NET";

$(function() {
  $("#quiz-form").submit(function(event) {
    var size = $("input:radio[name=size]:checked").val();
    var focus = $("input:radio[name=focus]:checked").val();
    var end = $("input:radio[name=end]:checked").val();
    var design = $("input:radio[name=design]:checked").val();
    var content = $("input:radio[name=content]:checked").val();


    if (size === "true") {
      $(".output").text(cee);
    }

    else {
        $(".output").text(ruby);
    }

    event.preventDefault();
  });
});
