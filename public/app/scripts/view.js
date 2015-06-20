var ENTER_KEY = 13;
import { shirts,jeanses,shoes,sarees,boys,girls,kurtis,sandles,trends,brands,deals,cartCollection,searchResults} from './collection';
import {SignupModel,signupModel,LoginModel,
  loginModel,accountModel,messageModel,itemDetailModel} from './model';

 class CommonView extends Backbone.View {
	constructor(options){
		this.events = {
	     'click #signup':'showSignup',
	     'click #login' : 'showLogin',
	     'click #cart':'showCart',
	     'click #account-link':'showAccount',
       'click .s-detail':'showShirtDetail',
       'click .j-detail' : 'showJeansDetail',
       'click .shoe-detail' : 'showShoeDetail',
       'click .saree-detail' : 'showSareeDetail',
       'click .boy-detail' : 'showBoyDetail',
       'click .girl-detail' : 'showGirlDetail',
       'click .kurti-detail' : 'showKurtiDetail',
       'click .sandle-detail' : 'showSandleDetail',
       'click .deal-detail' : 'showDealDetail',
       'click .trend-detail' : 'showTrendDetail',
       'click .brand-detail' : 'showBrandDetail',
       'click .search-detail':'showSearchDetail',
       'click #logout' : 'logout',
       'keyup #search': 'showHint',
       'keypress #search':'enterSearch',
       'click #search-submit':'clickSearch',
       'click .hintItem':'runHint'
	    }
		this.source = $('#common-template').html();
    this.scrollIt = function(){
       if(screen.width < 250 || screen.height < 350){
          $('#popup').css("position","absolute");
          window.scrollTo(0,0);
        }
    }
		super(options);
	}
  runHint(e){
      $('#hints').empty();
      $('#search').val('');
      e.preventDefault();
      var hintId = $(e.currentTarget).data("id");
      console.log(hintId);
     // location.assign("http://localhost:3000/#/hint/"+hintId);
      location.assign("https://aqueous-mountain-5707.herokuapp.com/#/hint/"+hintId);

       }

  showHint(e){
      $('#hints').empty();
      //console.log($('#search').val());
      if (e.which != ENTER_KEY &&  $('#search').val()) {

        $('#hints').empty();
        //----------------------
          var spinnerView = new SpinnerView();
          $('#hints').html(spinnerView.render().$el);
        //----------------------
        e.preventDefault();
        var hint = $('#search').val();

        jQuery.ajax({
            url:'/api/hint',
            type:"POST",
            data:{
              'hint':hint
            },
            success:function(data,textStatus,jqXHR){ 

              $('#hints').empty();
              for(var i=0;i<data.length;i++){
                  data[i].id = data[i]._id;

                  var hintList = document.createElement("li");
                  hintList.innerHTML = data[i].name;
                  hintList.className = "hintItem";
                  hintList.setAttribute('data-id',data[i].id);
                  hints.appendChild(hintList);
                  $('#hints').append(hintList);

              }
            }
          });
      }

  }
 
  clickSearch(e){
     $('#hints').empty();
   
    var sh = $('#search').val();
     e.preventDefault();
      if(sh != ""){
      $('#search').val('');
      location.assign("https://aqueous-mountain-5707.herokuapp.com/#/search/"+sh);
       
      }else{
       // alert('please insert some data');
             $('#box').empty();
             messageModel.set("message","Please insert some data");
             var messageView = new MessageView({model:messageModel});
             $('#box').html(messageView.render().$el);
      }
  }

  enterSearch(e){
     $('#hints').empty();
    if (e.which === ENTER_KEY ) {
        e.preventDefault();
       var sh = $('#search').val();
        if(sh != ""){
        $('#search').val('');
       location.assign("https://aqueous-mountain-5707.herokuapp.com/#/search/"+sh);
        $('#hints').empty();
        }else{
         // alert('please insert some data');
             $('#box').empty();
             messageModel.set("message","Please insert some data");
             var messageView = new MessageView({model:messageModel});
             $('#box').html(messageView.render().$el);
        }
     }
     
  }
  
  showDealDetail(e){
     this.scrollIt();
    e.preventDefault();
   var id = $(e.currentTarget).data("id");
   itemDetailModel = deals.get(id);
    $('#popup').empty();
    var itemDetailView = new ItemDetailView({model:itemDetailModel});
    $('#popup').html(itemDetailView.render().$el);

  }
  showTrendDetail(e){
     this.scrollIt();
    e.preventDefault();
   var id = $(e.currentTarget).data("id");
   itemDetailModel = trends.get(id);
    $('#popup').empty();
    var itemDetailView = new ItemDetailView({model:itemDetailModel});
    $('#popup').html(itemDetailView.render().$el);

  }
  showBrandDetail(e){
     this.scrollIt();
    e.preventDefault();
   var id = $(e.currentTarget).data("id");
   itemDetailModel = brands.get(id);
    $('#popup').empty();
    var itemDetailView = new ItemDetailView({model:itemDetailModel});
    $('#popup').html(itemDetailView.render().$el);

  }
  showShirtDetail(e){
     this.scrollIt();
    e.preventDefault();
   var id = $(e.currentTarget).data("id");
   itemDetailModel = shirts.get(id);
    $('#popup').empty();
    var itemDetailView = new ItemDetailView({model:itemDetailModel});
    $('#popup').html(itemDetailView.render().$el);

  }
  showJeansDetail(e){
     this.scrollIt();
    e.preventDefault();
   var id = $(e.currentTarget).data("id");
   itemDetailModel = jeanses.get(id);
    $('#popup').empty();
    var itemDetailView = new ItemDetailView({model:itemDetailModel});
    $('#popup').html(itemDetailView.render().$el);
  }
  showShoeDetail(e){
     this.scrollIt();
    e.preventDefault();
   var id = $(e.currentTarget).data("id");
   itemDetailModel = shoes.get(id);
    $('#popup').empty();
    var itemDetailView = new ItemDetailView({model:itemDetailModel});
    $('#popup').html(itemDetailView.render().$el);
  }
  showSareeDetail(e){
     this.scrollIt();
    e.preventDefault();
   var id = $(e.currentTarget).data("id");
   itemDetailModel = sarees.get(id);
    $('#popup').empty();
    var itemDetailView = new ItemDetailView({model:itemDetailModel});
    $('#popup').html(itemDetailView.render().$el);
  }
  showBoyDetail(e){
     this.scrollIt();
    e.preventDefault();
   var id = $(e.currentTarget).data("id");
   itemDetailModel = boys.get(id);
    $('#popup').empty();
    var itemDetailView = new ItemDetailView({model:itemDetailModel});
    $('#popup').html(itemDetailView.render().$el);
  }
  showGirlDetail(e){
     this.scrollIt();
    e.preventDefault();
   var id = $(e.currentTarget).data("id");
   itemDetailModel = girls.get(id);
    $('#popup').empty();
    var itemDetailView = new ItemDetailView({model:itemDetailModel});
    $('#popup').html(itemDetailView.render().$el);
  }
   showKurtiDetail(e){
     this.scrollIt();
    e.preventDefault();
   var id = $(e.currentTarget).data("id");
   itemDetailModel = kurtis.get(id);
    $('#popup').empty();
    var itemDetailView = new ItemDetailView({model:itemDetailModel});
    $('#popup').html(itemDetailView.render().$el);
  }
  showSandleDetail(e){
     this.scrollIt();
    e.preventDefault();
   var id = $(e.currentTarget).data("id");
   itemDetailModel = sandles.get(id);
    $('#popup').empty();
    var itemDetailView = new ItemDetailView({model:itemDetailModel});
    $('#popup').html(itemDetailView.render().$el);
  }
  showSearchDetail(e){
     this.scrollIt();
    e.preventDefault();
    var id = $(e.currentTarget).data("id");
    itemDetailModel = searchResults.get(id);
    $('#popup').empty();
    var itemDetailView = new ItemDetailView({model:itemDetailModel});
    $('#popup').html(itemDetailView.render().$el);
  }
	showSignup(){
     this.scrollIt();
	    $('#popup').empty();
	    var signupView = new SignupView({model:signupModel});
	    $('#popup').html(signupView.render().$el);
	  	}
	showLogin(){
     this.scrollIt();
	    $('#popup').empty();
	    var loginView = new LoginView({model:loginModel});
	    $('#popup').html(loginView.render().$el);
	    }
	showCart(){
             this.scrollIt();
            $('#popup').empty();
            var spinnerView = new SpinnerView();
            $('#popup').html(spinnerView.render().$el);

       var sUserId = loginModel.get('userId');
       jQuery.get( '/api/cartItems/'+sUserId, function( data, textStatus, jqXHR ) {
            cartCollection.reset([]);
            cartCollection.add(data);
           // console.log(cartCollection);
            $('#popup').empty();
            var cartView = new CartView({collection:cartCollection});
            $('#popup').html(cartView.render().$el);

            var prices = cartCollection.pluck("price");
            var total = 0;
            for(var i=0;i<prices.length;i++){
              var price = parseInt(prices[i]);
              total = total+price;
             
            }
            $("#total").html(total);
           // document.getElementById("total").innerHTML = total; 
        });
 	   }
 	showAccount(e){
      this.scrollIt();
	   e.preventDefault();
	   $('#popup').empty();
	   var accountView = new AccountView({model:accountModel});
	   $('#popup').html(accountView.render().$el);
 	  }
  logout(){

          document.cookie = "email" + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
          document.cookie = "password" + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
         
          loginModel.unset('email');
          loginModel.unset('pwd');
          accountModel.unset('fname');
          accountModel.unset('lname');
          accountModel.unset('email');
          
           $('#cart').hide();
           $('#signup').show();
           $('#account-link').hide(); 
           $('#login').show();
           $('#logout').hide();
           $('#popup').empty();
  }
	render(){
		var template = Handlebars.compile(this.source);
		var html = template(this.model.toJSON());
		this.$el.html(html);
		return this;
	}
}

class DealView extends Backbone.View {
  constructor(options){
    super(options);
    this.source = $('#deal-template').html();
    this.listenTo(this.collection, 'sync', this.render);
  }
  render(){
    var template = Handlebars.compile(this.source);
    var html = template(this.collection.toJSON());
    this.$el.html(html);
    return this;
  }
}

class TrendView extends Backbone.View {
  constructor(options){
    super(options);
    this.source = $('#trend-template').html();
    this.listenTo(this.collection, 'sync', this.render);
  }
  render(){
    var template = Handlebars.compile(this.source);
    var html = template(this.collection.toJSON());
    this.$el.html(html);
    return this;
  }
}

class BrandView extends Backbone.View {
  constructor(options){
    super(options);
    this.source = $('#brand-template').html();
    this.listenTo(this.collection, 'sync', this.render);
  }
  render(){
    var template = Handlebars.compile(this.source);
    var html = template(this.collection.toJSON());
    this.$el.html(html);
    return this;
  }
}

class HomeView extends Backbone.View {
	constructor(options){
		super(options);
		this.source = $('#home-template').html();
	}
	render(){
		var template = Handlebars.compile(this.source);
		var html = template(this.model.toJSON());
		this.$el.html(html);
		return this;
	}
}

class ShirtView extends Backbone.View {
	constructor(options){
		super(options);
		this.source = $('#shirt-template').html();
    this.listenTo(this.collection, 'sync', this.render);
	}
	render(){
		var template = Handlebars.compile(this.source);
		var html = template(this.collection.toJSON());
		this.$el.html(html);
		return this;
	}
}

class JeansView extends Backbone.View {
	constructor(options){
		super(options);
		this.source = $('#jeans-template').html();
    this.listenTo(this.collection, 'sync', this.render);
	}
	render(){
		var template = Handlebars.compile(this.source);
		var html = template(this.collection.toJSON());
		this.$el.html(html);
		return this;
	}
}

class ShoeView extends Backbone.View {
  constructor(options){
    super(options);
    this.source = $('#shoe-template').html();
    this.listenTo(this.collection, 'sync', this.render);
  }
  render(){
    var template = Handlebars.compile(this.source);
    var html = template(this.collection.toJSON());
    this.$el.html(html);
    return this;
  }
}

class BoyView extends Backbone.View {
  constructor(options){
    super(options);
    this.source = $('#boy-template').html();
    this.listenTo(this.collection, 'sync', this.render);
  }
  render(){
    var template = Handlebars.compile(this.source);
    var html = template(this.collection.toJSON());
    this.$el.html(html);
    return this;
  }
}

class GirlView extends Backbone.View {
  constructor(options){
    super(options);
    this.source = $('#girl-template').html();
    this.listenTo(this.collection, 'sync', this.render);
  }
  render(){
    var template = Handlebars.compile(this.source);
    var html = template(this.collection.toJSON());
    this.$el.html(html);
    return this;
  }
}

class KurtiView extends Backbone.View {
  constructor(options){
    super(options);
    this.source = $('#kurti-template').html();
    this.listenTo(this.collection, 'sync', this.render);
  }
  render(){
    var template = Handlebars.compile(this.source);
    var html = template(this.collection.toJSON());
    this.$el.html(html);
    return this;
  }
}

class SandleView extends Backbone.View {
  constructor(options){
    super(options);
    this.source = $('#sandle-template').html();
    this.listenTo(this.collection, 'sync', this.render);
  }
  render(){
    var template = Handlebars.compile(this.source);
    var html = template(this.collection.toJSON());
    this.$el.html(html);
    return this;
  }
}


class SareeView extends Backbone.View {
  constructor(options){
    super(options);
    this.source = $('#saree-template').html();
    this.listenTo(this.collection, 'sync', this.render);
  }
  render(){
    var template = Handlebars.compile(this.source);
    var html = template(this.collection.toJSON());
    this.$el.html(html);
    return this;
  }
}

class SearchView extends Backbone.View{
  constructor(options){
    super(options);
    this.source = $('#search-template').html();
  }
  render(){
    var template = Handlebars.compile(this.source);
   // var html = template(this.collection.toJSON());
    var html = template({'searches':searchResults.toJSON()});
    this.$el.html(html);
    return this;
  }
}

class SignupView extends Backbone.View {
  constructor(options){
    this.events = {
      "click #close-signup":"closeSignup",
      "click #signupsubmit":"signup"
    }
    this.source = $('#signup-template').html();
    super(options)
  }
  signup (e){
    $('#box').empty();
    var spinnerView = new SpinnerView();
    $('#box').html(spinnerView.render().$el);

    var self = this;
    e.preventDefault();
    var firstName = $('#fname').val();
    var lastName = $('#lname').val();
    var emailId = $('#email').val();
    var password1 = $('#pwd1').val();
    var password2 = $('#pwd2').val();
   
    var gender = $("#gen input[type='radio']:checked").val();

    signupModel.set({fname:firstName,
   					lname:lastName,
   					email:emailId,
   					pone:password1,
   					ptwo:password2,
   					gen:gender
				   });

    signupModel.save(signupModel.attributes,{
    	success:function(model,response,options){
    		//alert('congrats you have successfully signed up');
             $('#box').empty();
             messageModel.set("message","congrats you have successfully signed up");
             var messageView = new MessageView({model:messageModel});
             $('#box').html(messageView.render().$el);
        self.remove();
    	},
    	error:function(model,xhr,options){
    		//alert('Failed to save data');
             $('#box').empty();
             messageModel.set("message","Failed to save data");
             var messageView = new MessageView({model:messageModel});
             $('#box').html(messageView.render().$el);
    	}
  });
  
  //this.remove();
  }

  closeSignup (){
    this.remove();
  }
  render () {
  	var template = Handlebars.compile(this.source);
  	var html = template(this.model.toJSON());
  	this.$el.html(html);
    return this;
  }
}

class LoginView extends Backbone.View{
  constructor(options){
    this.events = {
      "click #close-login":"closeLogin",
      "click #login-submit":"login"
    }
    super(options);
    this.source = $('#login-template').html();
    this.listenTo(this.model, 'remove', this.closeLogin);
  }
  closeLogin (){
    this.remove();
  }
  login (e){
    e.preventDefault();
    $('#box').empty();
    var spinnerView = new SpinnerView();
    $('#box').html(spinnerView.render().$el);

    var em = $('#login-email').val();
    var pass = $('#login-password').val();
    loginModel.set({email:em,pwd:pass});
    loginModel.save(loginModel.attributes,{
      success:function(model,response,options){
        if(loginModel.get('email')){
          // alert('congrats you are logged in');
            $('#box').empty();
             //messageModel.set("message","congrats you are logged in");
            // var messageView = new MessageView({model:messageModel});
            // $('#box').html(messageView.render().$el);

            document.cookie = "email="+em;
           document.cookie = "password="+pass;

           //console.log(loginModel.attributes);
           accountModel.set('fname',loginModel.get('fname'));
           accountModel.set('lname',loginModel.get('lname'));
           accountModel.set('email',loginModel.get('email'));
          // console.log(accountModel.attributes);
           $('#account-link').show(); 
           $('#login').hide();
           $('#logout').show();
           $('#cart').show();
           $('#signup').hide();
        }
        else
        {
          // alert('invalid password');
           $('#box').empty();
             messageModel.set("message","Invalid password please try again");
             var messageView = new MessageView({model:messageModel});
             $('#box').html(messageView.render().$el);
        }
      },

      error:function(model,xhr,options){
        console.log('error');
      }
    });
    $('#login-email').val('');
    $('#login-password').val('');
    this.remove();
  }
  render(){
    var template = Handlebars.compile(this.source);
    var html = template(this.model.toJSON());
    this.$el.html(html);
   // this.$el.html(Handlebars.compile(this.template));
    return this;
  }
}

class CartView extends Backbone.View {
  constructor(options) {
    this.events = {
     "click #close":"closeCart",
     "click .removeItem":"removeCartItem",
     "click #buy":"buy"
    }
    this.source = $('#cart-template').html();
    super(options);
   // this.listenTo(app.Todos, 'add', this.addOne);
  // this.listenTo(cartCollection, 'remove', this.render);
  }
  buy(){
    //alert('this is demo version');
     $('#box').empty();
     messageModel.set("message","This is demo version, you can not buy");
     var messageView = new MessageView({model:messageModel});
     $('#box').html(messageView.render().$el);
  }
  removeCartItem(e){
            $('#box').empty();
            var spinnerView = new SpinnerView();
            $('#box').html(spinnerView.render().$el);
    e.preventDefault();
    var itemId = $(e.currentTarget).data("id");
    var sUserId = loginModel.get('userId');
    //console.log(sUserId);
    console.log(itemId);

    jQuery.ajax({
          url: '/api/cartItemDelete/'+sUserId,
          type: 'PUT',
          data: {
          'itemId': itemId
          },
          success: function( data, textStatus, jqXHR ) {
           cartCollection.reset([]);
           cartCollection.add(data);
          // console.log(cartCollection);
            $('#box').empty();
            $('#popup').empty();
            var cartView = new CartView({collection:cartCollection});
            $('#popup').html(cartView.render().$el);

            var prices = cartCollection.pluck("price");
            var total = 0;
            for(var i=0;i<prices.length;i++){
              var price = parseInt(prices[i]);
              total = total+price;
            }
            $("#total").html(total);
            
          }
      });

  }
  closeCart (){
     this.remove();
  }
  render () {
    var template = Handlebars.compile(this.source);
    var html = template({'carts':cartCollection.toJSON()});
    this.$el.html(html);
    return this;
  }
}

class AccountView extends Backbone.View {
  constructor(options) {
    this.events = {
      "click #close-Accountbox":"closeAccountbox"
    }
    super(options);
    this.source = $('#account-template').html();
    this.listenTo(this.model, 'remove', this.closeAccountbox);
  }
  closeAccountbox (){
    this.remove();
  }
  render () {
    var template = Handlebars.compile(this.source);
    var html = template(this.model.toJSON());
    this.$el.html(html);
    return this;
  }

}

class MessageView extends Backbone.View{
  constructor(options) {
    this.events = {
      "click #exitmessage":"exitMessageBox"
    }
    super(options);
    this.source = $('#message-template').html();
  }
  exitMessageBox(){
    this.model.unset("message");
    this.remove();
  }
  render () {
    var template = Handlebars.compile(this.source);
    var html = template(this.model.toJSON());
    this.$el.html(html);
    return this;
  }
  
}

class SpinnerView extends Backbone.View{
  constructor(options){
    super(options);
    this.source = $('#spinner-template').html();
  }
  render () {
    var template = Handlebars.compile(this.source);
    var html = template();
    this.$el.html(html);
    return this;
  }
}

//-------------------------------
class ItemDetailView extends Backbone.View {
  constructor(options){
    this.events = {
      'click #close-Detail':'closeDetail',
      'click #addtocart':'addToCart'
    }
    this.source = $('#item-detail-template').html();
    super(options);
  }
  addToCart(e){
    e.preventDefault();

    $('#box').empty();
    var spinnerView = new SpinnerView();
    $('#box').html(spinnerView.render().$el);

    if(loginModel.get('email')){
      // console.log(itemDetailModel);

       var sUserId = loginModel.get('userId');
       var sItem = itemDetailModel.get('name');
       var sQtn = $('#quantity').val();
       var sCharge = 'free'
       var sPrice = itemDetailModel.get('price')*sQtn;
       var sItemId = itemDetailModel.get("id");

       //console.log(sUserId);

       jQuery.ajax({
          url: '/api/profile/'+sUserId,
          type: 'PUT',
          data: {
          'cartItem': {item:sItem,qtn:sQtn,charge:sCharge,price:sPrice,itemId:sItemId}
          },
          success: function( data, textStatus, jqXHR ) {
           //console.log(data);
           cartCollection.reset([]);
           cartCollection.add(data);
            $('#box').empty();
            $('#popup').empty();
            var cartView = new CartView({collection:cartCollection});
            $('#popup').html(cartView.render().$el);

            var prices = cartCollection.pluck("price");
            var total = 0;
            for(var i=0;i<prices.length;i++){
              var price = parseInt(prices[i]);
              total = total+price;
            }
            $("#total").html(total);
          }
        });

       this.remove();
    }
    else{
      //alert('You should login first to add items')
             $('#box').empty();
             $('#popup').empty();
             messageModel.set("message","You should login first to add items");
             var messageView = new MessageView({model:messageModel});
             $('#box').html(messageView.render().$el);
    }
  }
  closeDetail (){
    this.remove();
  }
  render (){
    var template = Handlebars.compile(this.source);
    var html = template(this.model.toJSON());
    this.$el.html(html);
    return this;
  }
}

export {CommonView,HomeView,ShirtView,JeansView,ShoeView,SareeView,BoyView,GirlView,KurtiView,SandleView,DealView,TrendView,BrandView,SearchView,ItemDetailView,SpinnerView};