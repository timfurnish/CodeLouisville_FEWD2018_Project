$(document).ready(function () {
 
 
  $.getJSON('./data/articles.json', function (data) {
    console.log(data);
    var statusHTML = '';
    var currentYear = '';
    $.each(data,function (index, article) {
        if (currentYear != article.year) {
          if (index !=0) {statusHTML += '</ul>'}
          statusHTML += '<h5>' + article.year + '</h5><ul class="list-unstyled">';
        } 
        
       
        statusHTML += '<li class="TOC">';
        statusHTML += '<a href="' + article.artURL + '">' + article.title + '</a> - <span class="month">' + article.month + '</span></li>'; 

      currentYear = article.year;
      
    });


    statusHTML += '</ul>';


    $('#tableOfContents').html(statusHTML)    
  }); // end getJSON


}); // end ready





