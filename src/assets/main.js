$(function() {

  $.ajax({
      url: 'https://www.codeschool.com/users/2133183.json',
      dataType: 'jsonp',
      success: function(response) {
        // handle response
        console.log(response);

        for ( var i = 0; i < response.courses.completed.length ;  i++ ) {
          var $this = response.courses.completed[i];
          var item = {}
          item.title = $this.title;
          item.url = $this.url;
          item.badge = $this.badge;
          //badge.image = $this.img
          var badge =
          "<div class='course'>" +
          "<a href=' " + item.url + " '  target='_blank'>" +
            "<h3>" +  item.title + "</h3>" +
            "<img src='"    + item.badge  +  " '></img " +
            "</a>" +
          "</div>";

          $("#badges").append(badge)

        }

      }
    });
});
