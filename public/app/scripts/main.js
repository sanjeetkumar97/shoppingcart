import {Router} from './router';
import {CommonModel} from './model';
import {CommonView} from './view';

class Application {
	constructor(){
		new Router();
		Backbone.history.start();
	}
}

$(() => {
	
	$('.spinner').hide();

	$(document).ajaxStart(function(){
        $('.spinner').show();
    });
    $(document).ajaxStop(function(){
        $('.spinner').hide();
    });

	var commonModel = new CommonModel();
	var commonView = new CommonView({model:commonModel});
	$('#app').html(commonView.render().$el);

	new Application();
	$('#cart').hide();
	//$('#signup').hide();
	$('#account-link').hide();
	$('#logout').hide();
});
