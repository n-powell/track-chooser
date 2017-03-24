var ruby = "Ruby/Rails track";
var drupal = "PHP track";
var android = "JAVA/Android track";
var cee = "C#/.NET";

$(function() {
  $("#quiz-form").submit(function(event) {
    var size = $("input:radio[name=size]:checked").val();
    var focus = parseInt($("input:radio[name=focus]:checked").val());
    var end = parseInt($("input:radio[name=end]:checked").val());
    var content = parseInt($("input:radio[name=content]:checked").val());

    if (focus === 1) {
      $(".output").text(cee);
      $("#c").show();
      $("#android").hide();
      $("#drupal").hide();
      $("#ruby").hide();}
      else if (focus === 2) {
      $(".output").text(android);
      $("#android").show();
      $("#ruby").hide();
      $("#drupal").hide();
      $("#c").hide();}
    if (focus === 3 && end === 1) {
        $(".output").text(drupal);
        $("#drupal").show();
        $("#android").hide();
        $("#ruby").hide();
        $("#c").hide();}
    if (focus === 3 && end === 2) {
        $(".output").text(ruby);
        $("#ruby").show();
        $("#android").hide();
        $("#drupal").hide();
        $("#c").hide();}
    event.preventDefault();
  });
});
