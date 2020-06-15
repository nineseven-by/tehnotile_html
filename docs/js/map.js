$(document).ready(function() {
	//MAP
	if($('<div id="page-map1"></div>').length){
		ymaps.ready(initMap1);

	}

	if($('<div id="page-map2"></div>').length){
		ymaps.ready(initMap2);

	}

});

// Карта списка аптек
function initMap1() {

	var icon = "img/content/label.png";

	var myMap = new ymaps.Map("page-map1", {
        center:[53.9324054,27.6511743],
        zoom: 16,
        controls: []
    }); 
            
    var myPlacemark = new ymaps.Placemark([53.9324054,27.6511743],{
        	
        },{
        iconLayout: 'default#image',
        iconImageHref: icon, 
        iconImageSize: [30, 42],
        iconImageOffset: [-15, -38]
	});    

    myMap.geoObjects.add(myPlacemark);
 //    myMap.controls.add(
    //     new ymaps.control.ZoomControl()
    // );
	 myMap.controls.add(new ymaps.control.ZoomControl({options: { position: { right: 10, top: 50 }}}));
    myMap.behaviors.disable('scrollZoom')  
}

function initMap2() {

	var icon = "img/content/label.png";

	var myMap = new ymaps.Map("page-map2", {
        center:[53.9324054,27.6511743],
        zoom: 16,
        controls: []
    }); 
            
    var myPlacemark = new ymaps.Placemark([53.9324054,27.6511743],{
        	
        },{
        iconLayout: 'default#image',
        iconImageHref: icon, 
        iconImageSize: [30, 42],
        iconImageOffset: [-15, -38]
	});    

    myMap.geoObjects.add(myPlacemark);
 //    myMap.controls.add(
    //     new ymaps.control.ZoomControl()
    // );
	 myMap.controls.add(new ymaps.control.ZoomControl({options: { position: { right: 10, top: 50 }}}));
    myMap.behaviors.disable('scrollZoom')  
}
