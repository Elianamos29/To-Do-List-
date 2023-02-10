$(document).ready(function (){
  // Add task on enter
  $('input[type="text"]').keypress(function(event){
      var inputValue = $(this).val();
      if(event.which === 13 && inputValue){ 
        
        var newTask = $('<li><span><i class="fa fa-trash"></i></span>' + inputValue + '</li>');
        $('ul').append(newTask);
        $(this).val("");

      }
    });
    
    // Mark task as complete
    $("ul").on("click", "li", function(){
      $(this).toggleClass("complete-task");
     });
    
    // Delete task
    $("ul").on("click","span", function (event){
      $(this).parent().fadeOut(500, function(){
        $(this).remove();
      }); 
      event.stopPropagation();
    });

    //toggle input
    $(".fa-plus").click(function(){
      $("input").fadeToggle(500, function(){
   
      })
    })
  });