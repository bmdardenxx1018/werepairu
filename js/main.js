$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip({
           placement: 'right',
           title: "WeRepair is 347-777-7777.",
           animation: true,
           delay: 500
    });
      
  });
  
  
  /*JavaScript Icon Change */
  function changeIconMap(){
    var map = document.getElementById('mapPlace');
    map.innerHTML = "&#xf041;";
    
   setTimeout(function(){
      map.innerHTML = "&#xf279;";
    }, 2000);
  
  }
  
  changeIconMap();
  setInterval(changeIconMap, 5000);
  
  
  function changeIconService(){
    var services = document.getElementById('servicePlace');
    services.innerHTML = "&#xf013;";
    
   setTimeout(function(){
     services.innerHTML = "&#xf085;";
    }, 2000);
  
  }
  
  changeIconService();
  setInterval(changeIconService, 5000);
  
  
  function changeIconSocial(){
    var social = document.getElementById('socialPlace');
    social.innerHTML = "&#xf015;";
    
   setTimeout(function(){
     social.innerHTML = "&#xf245;";
    }, 2000);
  
  }
  
  changeIconSocial();
  setInterval(changeIconSocial, 5000);

  $(document).ready(function() {

    $('#my_form').submit(function(e) {
      e.preventDefault();
      var first_name = $('#first_name').val();
      var last_name = $('#last_name').val();
      var email = $('#email').val();
      
      
      $(".error").remove();
  
      if (first_name.length < 1) {
        $('#first_name').after('<span class="error">This field is required</span>');
      }
      if (last_name.length < 1) {
        $('#last_name').after('<span class="error">This field is required</span>');
      }
      
      if (email.length < 1) {
        $('#email').after('<span class="error">This field is required</span>');
      
        
      } else {
        var completeform = document.querySelector('#my_form');

        completeform.reset();

      }
      
    });
    
  });
  
  