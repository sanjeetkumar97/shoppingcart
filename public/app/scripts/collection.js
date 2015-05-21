import {ShirtModel,JeansModel,CartModel,SearchModel,ShoeModel,SareeModel,BoyModel,GirlModel,KurtiModel,SandleModel,DealModel,TrendModel,BrandModel} from './model';

class ShirtCollection extends Backbone.Collection{
	constructor(options){
		super(options);
		this.model = ShirtModel;
		this.url = '/api/shirts';
	}
}

var shirts = new ShirtCollection();
    shirts.toJSON();
    shirts.fetch();
    //shirts.fetch({async:false});
//------------------------------------

//--------------------------------------------
class JeansCollection extends Backbone.Collection{
        constructor(options){
            super(options);
            this.model = JeansModel;
            this.url = '/api/jeanses'
        }
    }

var jeanses = new JeansCollection();
    jeanses.toJSON();
    jeanses.fetch();
//--------------------------------------------
class ShoeCollection extends Backbone.Collection{
    constructor(options){
        super(options);
        this.model = ShoeModel;
        this.url = '/api/shoes';
    }
}
var shoes = new ShoeCollection();
    shoes.toJSON();
    shoes.fetch();
//--------------------------------------------------------
class SareeCollection extends Backbone.Collection{
    constructor(options){
        super(options);
        this.model = SareeModel;
        this.url = '/api/sarees';
    }
}
var sarees = new SareeCollection();
    sarees.toJSON();
    sarees.fetch();
   
//-------------------------------------------
class BoyCollection extends Backbone.Collection{
    constructor(options){
        super(options);
        this.model = BoyModel;
        this.url = '/api/boys';
    }
}
var boys = new BoyCollection();
    boys.toJSON();
    boys.fetch();
//--------------------------------
class GirlCollection extends Backbone.Collection{
    constructor(options){
        super(options);
        this.model = GirlModel;
        this.url = '/api/girls';
    }
}
var girls = new GirlCollection();
    girls.toJSON();
    girls.fetch();
//--------------------------------
class KurtiCollection extends Backbone.Collection{
    constructor(options){
        super(options);
        this.model = KurtiModel;
        this.url = '/api/kurtis';
    }
}
var kurtis = new KurtiCollection();
    kurtis.toJSON();
    kurtis.fetch();

//-----------------------------------------------
class SandleCollection extends Backbone.Collection{
    constructor(options){
        super(options);
        this.model = SandleModel;
        this.url = '/api/sandles';
    }
}
var sandles = new SandleCollection();
    sandles.toJSON();
    sandles.fetch();

//-----------------------------------------------
class CartCollection extends Backbone.Collection{
    constructor(options){
        super(options);
        this.model = CartModel;
    }
}
var cartCollection = new CartCollection();
//----------------------------------------

class SearchCollection extends Backbone.Collection{
        constructor(options){
            super(options);
            this.model = SearchModel;
            //this.url = '/api/jeanses'
        }
    }
var searchResults = new SearchCollection();
//-----------------------------------------
class DealCollection extends Backbone.Collection{
    constructor(options){
        super(options);
        this.model = DealModel;
    }
}

var deal1 = new DealModel({
    id:'54e59adb63111f400cef561d',
    image:'app/images/shirts/styleoffice.jpg',
    name:'official',
    price:2300,
    color:'white',
    size:'xxl',
    available:'available',
    delivery:'5 to 10'
});
var deal2 = new DealModel({
    id:'552882f454112e3c0b271b75',
    image:'app/images/kurtis/amazing.jpg',
    name:'amazing kurti',
    price:2000,
    color:'mixed white',
    size:'medium',
    available:'available',
    delivery:'5 to 10'
});
var deal3 = new DealModel({
    id:'55283ee41eec283401215834',
    image:'app/images/girls/casual1.jpg',
    name:'casual girl',
    price:4000,
    color:'mixed',
    size:'medium',
    available:'available',
    delivery:'5 to 9'
});
var deal4 = new DealModel({
    id:'5528e1b8550a16580a8c525a',
    image:'app/images/sandles/ballsbeauty.jpg',
    name:'balls beauty sandle',
    price:2260,
    color:'black',
    size:'7',
    available:'available',
    delivery:'4 to 9'
});

var deals = new DealCollection([deal1,deal2,deal3,deal4]);
//---------------------------------------------------

class TrendCollection extends Backbone.Collection{
    constructor(options){
        super(options);
        this.model = TrendModel;
    }
}
var trend1 = new TrendModel({
    id:'551d8b2e0b21e08c15981308',
    image:'app/images/jeanses/printed.jpg',
    name:'printed jeans',
    price:1600,
    color:'dark blue',
    size:'32',
    available:'available',
    delivery:'3 to 5'
});

var trend2 = new TrendModel({
    id:'5527bf80488f70980a8e8e35',
    image:'app/images/sarees/goldlook.jpg',
    name:'gold look saree',
    price:2200,
    color:'creamy',
    size:'midum',
    available:'available',
    delivery:'3 to 9'
});

var trend3 = new TrendModel({
    id:'55282b948d59af7009de93e0',
    image:'app/images/boys/weddingspecial.jpg',
    name:'wedding special boy',
    price:5000,
    color:'white',
    size:'midum',
    available:'available',
    delivery:'4 to 9'
});

var trend4 = new TrendModel({
    id:'5527af3af75797b40656dde3',
    image:'app/images/shoes/multicolor.jpg',
    name:'multi color shoe',
    price:4400,
    color:'mixed',
    size:'8',
    available:'available',
    delivery:'5 to 9'
});

var trends = new TrendCollection([trend1,trend2,trend3,trend4]);
//---------------------------------------------------

class BrandCollection extends Backbone.Collection{
    constructor(options){
        super(options);
        this.model = BrandModel;
    }
}

var brand1 = new BrandModel({
    id:'5527b045f75797b40656dde8',
    image:'app/images/shoes/pumared.jpg',
    name:'puma red shoe',
    price:6000,
    color:'red',
    size:'9',
    available:'available',
    delivery:'5 to 9'
});

var brand2 = new BrandModel({
    id:'5528028f4f5310b00fb594bc',
    image:'app/images/boys/funtime2.jpg',
    name:'fun boy dress',
    price:1132,
    color:'orange',
    size:'medium',
    available:'available',
    delivery:'5 to 9'
});

var brand3 = new BrandModel({
    id:'5528e6b2550a16580a8c525e',
    image:'app/images/sandles/blueleather.jpg',
    name:'blue leather sandle',
    price:3000,
    color:'blue',
    size:'8',
    available:'available',
    delivery:'4 to 9'
});

var brand4 = new BrandModel({
    id:'55289e2254112e3c0b271b9c',
    image:'app/images/kurtis/romantic.jpg',
    name:'gharana kurti',
    price:2000,
    color:'pink',
    size:'8',
    available:'available',
    delivery:'6 to 9'
});

var brands = new BrandCollection([brand1,brand2,brand3,brand4]);

//-----------------------------------------------------

export {shirts,jeanses,shoes,sarees,boys,girls,kurtis,sandles,deals,trends,brands,cartCollection,searchResults};