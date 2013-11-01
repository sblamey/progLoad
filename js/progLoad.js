// progLoad.js by R. Scott Blamey, rscott@wisnet.com
// 10/30/2013
//
// Add HTML in this format to the <body> of your HTML document:
// <add file="inc/1024.html" above=1024></add>
// and add this to your document's <head>:
// <script src="js/progLoad.js" type="text/javascript"></script>

$( document ).ready(function() {

    function addContent() {
        windowWidth = $(window).width();
        
        $('add').each(function(){
            var addObj=$(this);
            if(addObj.attr("above") < windowWidth) {
                var file = addObj.attr("file");
                $.get(file, function(data) {
                    addObj.html(data);
                });
            }
        });
    }
    addContent();
    window.onresize=function(){addContent();};
});