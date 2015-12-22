/* Dfadmin builder 
	copyright 2014 . sximo builder com 
*/
jQuery(document).ready(function($){

  //$('#myModal').modal('show');
	$('.msg').click(function(){
		$(this).remove();						 
	});

    $('input[type="file"]').change(function(){
      var f = this.files[0];  
      var name = f.name;
      
      $(this).closest('.browse-wrap').next('.upload-path').text(name);
      
    });

  // $('[data-toggle="tooltip"]').tooltip();
								
      /*Return to top*/
      var offset = 220;
      var duration = 500;
      var button = $('<a href="#" class="back-to-top"><i class="fa fa-angle-up"></i></a>');
      button.appendTo("body");
      
      jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() > offset) {
            jQuery('.back-to-top').fadeIn(duration);
        } else {
            jQuery('.back-to-top').fadeOut(duration);
        }
      });
    
      jQuery('.back-to-top').click(function(event) {
          event.preventDefault();
          jQuery('html, body').animate({scrollTop: 0}, duration);
          return false;
      });

 
	$('.panel-trigger').click(function(e){
		e.preventDefault();
		$(this).toggleClass('active');
	});

	$('.dropdown, .btn-group').on('show.bs.dropdown', function(e){
		$(this).find('.dropdown-menu').first().stop(true, true).fadeIn(100);
	});
	$('.dropdown, .btn-group').on('hide.bs.dropdown', function(e){
		$(this).find('.dropdown-menu').first().stop(true, true).fadeOut(100);
	});
	$('.popup').click(function (e) {
		e.stopPropagation();
	});	
     window.prettyPrint && prettyPrint();

	$(".checkall").click(function() {
		var cblist = $(".ids");
		if($(this).is(":checked"))
		{				
			cblist.prop("checked", !cblist.is(":checked"));
		} else {	
			cblist.removeAttr("checked");
		}	
	});
	
	$('.nav li ul li.active').parents('li').addClass('active');
	
    $('.navbar-minimalize').click(function () {
      var w = $("body");
      w.toggleClass("minimize-sidemenu");
			
		if( w.hasClass('minimize-sidemenu'))
		{
			$('#sidemenu').removeClass('expanded-menu');
      //$('.status-report-maximize').hide();
      //$('.status-report-minimize').show();
      $('.status-report-maximize').addClass('hide');
      $('.status-report-minimize').removeClass('hide');
			$.cookie("sximo-sidebar",'minimize-sidemenu', {expires: 365, path: '/'});
		} else {
      //$('.status-report-maximize').show();
      //$('.status-report-minimize').hide();
      $('.status-report-minimize').addClass('hide');
      $('.status-report-maximize').removeClass('hide');
			$('#sidemenu').addClass('expanded-menu');
			 $.cookie("sximo-sidebar",'maximaze-sidemenu', {expires: 365, path: '/'});	
		}		
    })	
})

;(function ($, window, document, undefined) {
  $('#modal').modal('show');
    var pluginName = "sximMenu",
        defaults = {
            toggle: true
        };

    function Plugin(element, options) {
        this.element = element;
        this.settings = $.extend({}, defaults, options);
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
    }

    Plugin.prototype = {
        init: function () {

            var $this = $(this.element),
                $toggle = this.settings.toggle;

            $this.find('li.active').has('ul').children('ul').addClass('collapse in');
            $this.find('li').not('.active').has('ul').children('ul').addClass('collapse');

            $this.find('li').has('ul').children('a').on('click', function (e) {
                e.preventDefault();

                $(this).parent('li').toggleClass('active').children('ul').collapse('toggle');

                if ($toggle) {
                    $(this).parent('li').siblings().removeClass('active').children('ul.in').collapse('hide');
                }
            });
        }
    };

    $.fn[ pluginName ] = function (options) {
        return this.each(function () {
            if (!$.data(this, "plugin_" + pluginName)) {
                $.data(this, "plugin_" + pluginName, new Plugin(this, options));
            }
        });
    };

})(jQuery, window, document);