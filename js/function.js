

// Thêm công việc mới khi click vào button "thêm"
      
$(document).ready(
    function(){
        $('#button').click(
            function(){
                var toAdd = $('input[name=ListItem]').val();
                $('ul').append('<li>' + '<p>'+ toAdd + '</p>' + '<span class="edit">' + '<i class="fas fa-pen" >' + '</i>' + '</span>' + '<span class="checked">'+ '<i class="fas fa-check">' + '</i>' + '</span>' + '<span class="close">'+ '<i class="fas fa-times">' + '</i>' + '</span>' + '</li>');
            });       

       $("input[name=ListItem]").keyup(function(event){
          if(event.keyCode == 13){
            $("#button").click();
          }         
      });
      
     
      $('input').focus(function() {
        $(this).val('');
      });
      
      $('ul').sortable();  
      
    }
);


// Khi button xóa được click thì ẩn phần tử li chứa nó
  var close = document.getElementsByClassName("close");
  var i;
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }













