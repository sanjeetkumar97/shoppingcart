class CommonModel extends Backbone.Model{
	defaults(){
		return {
			//email:'mymail@gmail.com'
		}
	}
}
class HomeModel extends Backbone.Model{
	defaults(){
		return {

		}
	}
}
class ShirtModel extends Backbone.Model{
	defaults() {
	    return {
	      id : 0,
	      image: 'app/images/shirts/adidas.jpg',
	      name: 'some shirt',
	      price: 100,
	      color: 'white',
	      size:'xl',
	      available:'available',
	      delivery:'3 to 4'
	    };
  	}

  	parse(response,xhr){
			response.id = response._id;
			return response;
		}
	
}

class DealModel extends Backbone.Model{
	defaults() {
	    return {
	      id : 0,
	      image: 'app/images/shirts/adidas.jpg',
	      name: 'some shirt',
	      price: 100,
	      color: 'white',
	      size:'xl',
	      available:'available',
	      delivery:'3 to 4'
	    };
  	}
}

class TrendModel extends Backbone.Model{
	defaults() {
	    return {
	      id : 0,
	      image: 'app/images/shirts/adidas.jpg',
	      name: 'some shirt',
	      price: 100,
	      color: 'white',
	      size:'xl',
	      available:'available',
	      delivery:'3 to 4'
	    };
  	}
}

class BrandModel extends Backbone.Model{
	defaults() {
	    return {
	      id : 0,
	      image: 'app/images/shirts/adidas.jpg',
	      name: 'some shirt',
	      price: 100,
	      color: 'white',
	      size:'xl',
	      available:'available',
	      delivery:'3 to 4'
	    };
  	}
}

class JeansModel extends Backbone.Model{

	defaults() {
		return {
		id : 0,
		image:'app/images/jeans/bootcut.jpg',
		name:'bootcut',
		price:1000,
		color:'blue',
		size:'xl',
		available:'available',
		delivery:'3 to 4'
	};
  }

  parse(response,xhr){
			response.id = response._id;
			return response;
		}
}
//------------------------

class ShoeModel extends Backbone.Model{

	defaults() {
		return {
		id : 0,
		image:'app/images/shoes/blackgrey.jpg',
		name:'sport shoe',
		price:1000,
		color:'blue',
		size:'xl',
		available:'available',
		delivery:'3 to 4'
	};
  }

  parse(response,xhr){
			response.id = response._id;
			return response;
		}
}

class SareeModel extends Backbone.Model{

	defaults() {
		return {
		id : 0,
		image:'app/images/shoes/blackgrey.jpg',
		name:'banarsi',
		price:1000,
		color:'blue',
		size:'xl',
		available:'available',
		delivery:'3 to 4'
	};
  }

  parse(response,xhr){
			response.id = response._id;
			return response;
		}
}

//---------------------------
class BoyModel extends Backbone.Model{

	defaults() {
		return {
		id : 0,
		image:'app/images/shoes/blackgrey.jpg',
		name:'boy suit',
		price:1000,
		color:'blue',
		size:'xl',
		available:'available',
		delivery:'3 to 4'
	};
  }

  parse(response,xhr){
			response.id = response._id;
			return response;
		}
}
//----------------------
class GirlModel extends Backbone.Model{
	defaults() {
		return {
		id : 0,
		image:'app/images/shoes/blackgrey.jpg',
		name:'girl suit',
		price:1000,
		color:'blue',
		size:'xl',
		available:'available',
		delivery:'3 to 4'
	};
  }

  parse(response,xhr){
			response.id = response._id;
			return response;
		}
}
//----------------------
class KurtiModel extends Backbone.Model{
	defaults() {
		return {
		id : 0,
		image:'app/images/shoes/blackgrey.jpg',
		name:'kurti suit',
		price:1000,
		color:'blue',
		size:'xl',
		available:'available',
		delivery:'3 to 4'
	};
  }

  parse(response,xhr){
			response.id = response._id;
			return response;
		}
}
//------------------------
class SandleModel extends Backbone.Model{
	defaults() {
		return {
		id : 0,
		image:'app/images/shoes/blackgrey.jpg',
		name:'modern sandle',
		price:1000,
		color:'blue',
		size:'xl',
		available:'available',
		delivery:'3 to 4'
	};
  }

  parse(response,xhr){
			response.id = response._id;
			return response;
		}
}
//------------------------
class SignupModel extends Backbone.Model{
	defaults(){
		return {
			userId: "",
			fname:"",
			lname:"",
			email:"",
			pone:"",
			ptwo:"",
			gen:""	
		}
	}

	parse(response,xhr){
			response.userId = response._id;
			return response;
		}

	validate(attrs) {
		//var errors = [];
		var errors = this.errors = {};
		if (!attrs.fname) errors.fname = 'firstname is required';
		if (!attrs.lname) errors.lname = 'lastname is required';
		if (!attrs.email) errors.email = 'email is required';
		if(attrs.email.indexOf('@') == -1) errors.invalidemail = 'invalid email';
		if (!attrs.pone) errors.pone = 'Password is required';
		if (!attrs.ptwo) errors.ptwo = 'password is required';
		if(attrs.pone != attrs.ptwo) errors.match = 'password are not matching';
		if (!attrs.gen) errors.gen = 'gender is required';
		if (!_.isEmpty(errors)){
			$('#box').empty();
			var errmsg = [];
			if(errors.fname){
				errmsg.push('Firstname is required ');
			}
			if(errors.lname){
				errmsg.push('Lastname is required ');
			}
			if(errors.email){
				errmsg.push('Email is required ');
			}
			else if(errors.invalidemail){
				errmsg.push('Invalid email ');
			}
			if(errors.pone){
				errmsg.push('Password is required ');
			}
			if(errors.ptwo){
				errmsg.push('Retype the password ');
			}
			if(errors.match){
				errmsg.push('Passwords are not matching ');
			}
			if(errors.gen){
				errmsg.push('Gender is required ');
			}
			alert(errmsg);
			return errors;
		} 
	}

	urlRoot(){
		return "/api/signup";
	}
}

var signupModel = new SignupModel();
//-------------------------------
class LoginModel extends Backbone.Model{
	defaults(){
		return {
		userId:"",
		fname:"",
		lname:"",
		email:"",
		pwd:"",
		}
	}
	urlRoot(){
		return "/api/login";
	}
}

var loginModel = new LoginModel();
//--------------------------------
class CartModel extends Backbone.Model{
	defaults(){
		return {
			item:"",
			qtn:0,
			charge:"",
			price:""
		}
	}
}

//var cartModel = new CartModel();

//-------------------------------
class AccountModel extends Backbone.Model{
	defaults(){
		return {
		fname:"",
		lname:"",
		email:""
		}
	}
}

var accountModel = new AccountModel();

class MessageModel extends Backbone.Model{
	defaults(){
		return {
			message:"Attention please this is a message box"
		}
	}
}

var messageModel = new MessageModel();

class ItemDetailModel extends Backbone.Model{
	defaults() {
	    return {
	      id : '',
	      image: '',
	      name: '',
	      price: 0,
	      color: '',
	      size:'',
	      available:'',
	      delivery:''
	    };
  	}
	
}

var itemDetailModel = new ItemDetailModel();

class SearchModel extends Backbone.Model{

	defaults() {
		return {
		id : 0,
		image:'',
		name:'',
		price:0,
		color:'',
		size:'',
		available:'',
		delivery:''
	};
  }

}

//--------------------------
export {CommonModel,HomeModel,ShirtModel,
	JeansModel,SignupModel,signupModel,LoginModel,
	loginModel,CartModel,AccountModel,
	accountModel,messageModel,itemDetailModel,SearchModel,ShoeModel,SareeModel,BoyModel,GirlModel,KurtiModel,SandleModel,DealModel,TrendModel,BrandModel};