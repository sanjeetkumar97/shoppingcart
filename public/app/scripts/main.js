import {Router} from './router';
import {CommonModel,loginModel, accountModel} from './model';
import {CommonView} from './view';

class Application {
	constructor(){
		new Router();
		Backbone.history.start();
	}
}

$(() => {
	var commonModel = new CommonModel();
	var commonView = new CommonView({model:commonModel});
	$('#app').html(commonView.render().$el);

	new Application();
//-----------------------
	if(document.cookie){	
			 var mycookie = document.cookie.split(';');
        	 var em = mycookie[0].substring("email=".length);
        	 var pass = mycookie[1].substring("password= ".length);

         	 loginModel.set({email:em,pwd:pass});

        	 loginModel.save(loginModel.attributes,{

		      success:function(model,response,options){
		                  
		           accountModel.set('fname',loginModel.get('fname'));
		           accountModel.set('lname',loginModel.get('lname'));
		           accountModel.set('email',loginModel.get('email'));
		         
		           $('#account-link').show(); 
		           $('#login').hide();
		           $('#logout').show();
		           $('#cart').show();
		           $('#signup').hide();
		       
		      },

		      error:function(model,xhr,options){
		        console.log('error');
		      }
   		 });
		}

//-------------------------
	$('#cart').hide();
	//$('#signup').hide();
	$('#account-link').hide();
	$('#logout').hide();
});
