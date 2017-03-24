var ruby = "Ruby/Rails track";
var drupal = "PHP track";
var android = "JAVA/Android track";
var design = "CSS/Design";
var cee = "C#/.NET";

$(function() {
  $("#quiz-form").submit(function(event) {
    var size = $("input:radio[name=size]:checked").val();
    var focus = parseInt($("input:radio[name=focus]:checked").val());
    var end = parseInt($("input:radio[name=end]:checked").val());
    var design = parseInt($("input:radio[name=design]:checked").val());
    var content = parseInt($("input:radio[name=content]:checked").val());


    if (size === "large") {
      if (focus === 1) {
        $(".output").text(cee)
      }else if (focus > 1) {
          if (end > 1 ) {
            $(".output").text(ruby)}
          }if (focus > 1) {
              if (end === 1) {
                $(".output").text(design);}


      }





    }else {
        $("output").text(ruby);
    }

    event.preventDefault();
  });
});
