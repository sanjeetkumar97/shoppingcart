import {HomeModel,itemDetailModel} from './model';
import {HomeView,ShirtView,JeansView,ShoeView,SareeView,BoyView,GirlView,KurtiView,SandleView,DealView,TrendView,BrandView,SearchView,ItemDetailView,SpinnerView} from './view';
import {shirts,jeanses,shoes,sarees,boys,girls,kurtis,sandles,deals,trends,brands,searchResults} from './collection';

class Router extends Backbone.Router{
	constructor(){
		this.routes = {
			'': 'showHome',
	      'home':'showHome',
	      'shirt': 'showShirt',
	      'jeans':'showJeans',
	      'shoe':'showShoe',
	      'saree':'showSaree',
	      'boy':'showBoy',
	      'girl':'showGirl',
	      'kurti':'showKurti',
	      'sandle':'showSandle',
	      'search/:sdata':'showSearch',
	      'hint/:hvalue':'showHint'
		}
		super();
	}
	showHint(hvalue){
			$('#box').empty();
            var spinnerView = new SpinnerView();
            $('#box').html(spinnerView.render().$el);

		jQuery.get('/api/hintResult/'+hvalue,function(data,textStatus,jqXHR){
			for(var i=0;i<data.length;i++){
                data[i].id = data[i]._id;
              }
              searchResults.reset([]);
              searchResults.add(data);
              //console.log(searchResults);
              $('#box').empty();
              $('#wrapper').empty();
              var searchView = new SearchView({collection:searchResults});
              $('#wrapper').html(searchView.render().$el); 

              itemDetailModel = searchResults.get(hvalue);
              console.log(itemDetailModel);
			  $('#popup').empty();
			  var itemDetailView = new ItemDetailView({model:itemDetailModel});
			  $('#popup').html(itemDetailView.render().$el);        
        
       });

	}
	showSearch(sdata){
		//alert('the data is '+data);
			$('#hints').empty();
			$('#popup').empty();
            var spinnerView = new SpinnerView();
            $('#popup').html(spinnerView.render().$el);
		jQuery.ajax({
            url:'/api/search',
            type:"POST",
            data:{
              'search':sdata
            },
            success:function(data,textStatus,jqXHR){ 
              for(var i=0;i<data.length;i++){
                data[i].id = data[i]._id;
              }
              searchResults.reset([]);
              searchResults.add(data);
              console.log(searchResults);

              if(searchResults.length != 0){
              $('#hints').empty();
              $('#popup').empty();
              $('#wrapper').empty();
              var searchView = new SearchView({collection:searchResults});
              $('#wrapper').html(searchView.render().$el);
              }else{
              	$('#hints').empty();
              	$('#popup').empty();
                alert('Sorry no match for '+sdata);
              }
            }
          });   
	}
	showHome(){
		var homeModel = new HomeModel();
		var homeView = new HomeView({model:homeModel});
		var dealView = new DealView({collection:deals});
		var trendView = new TrendView({collection:trends});
		var brandView = new BrandView({collection:brands});

		$('#wrapper').empty();
		//$('#wrapper').html(homeView.render().$el);
		$('#wrapper').append(homeView.render().$el);
		$('#wrapper').append(dealView.render().$el);
		$('#wrapper').append(trendView.render().$el);
		$('#wrapper').append(brandView.render().$el);
	}
	showShirt(){
		var shirtView = new ShirtView({collection:shirts});
		$('#wrapper').empty();
		$('#wrapper').html(shirtView.render().$el);
		//console.log(shirts);
	}
	showJeans(){
		var jeansView = new JeansView({collection:jeanses});
		$('#wrapper').empty();
		$('#wrapper').html(jeansView.render().$el);
	}
	showShoe(){
		var shoeView = new ShoeView({collection:shoes});
		$('#wrapper').empty();
		$('#wrapper').html(shoeView.render().$el);
	}
	showSaree(){
		var sareeView = new SareeView({collection:sarees});
		$('#wrapper').empty();
		$('#wrapper').html(sareeView.render().$el);
	}
	showBoy(){
		var boyView = new BoyView({collection:boys});
		$('#wrapper').empty();
		$('#wrapper').html(boyView.render().$el);
	}
	showGirl(){
		var girlView = new GirlView({collection:girls});
		$('#wrapper').empty();
		$('#wrapper').html(girlView.render().$el);
	}
	showKurti(){
		var kurtiView = new KurtiView({collection:kurtis});
		$('#wrapper').empty();
		$('#wrapper').html(kurtiView.render().$el);
	}
	showSandle(){
		var sandleView = new SandleView({collection:sandles});
		$('#wrapper').empty();
		$('#wrapper').html(sandleView.render().$el);
	}

}

export {Router} ;