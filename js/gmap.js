$().ready(function() {
	// animacja hovera paginacji
		AnimateColorHover('ul.pager li', '#de0073', '#585858');

		// google map
		var myLatlng = new google.maps.LatLng(18.926527,72.821424);
		var container = document.getElementById('fluidOnGoogleMaps');
		var bw_map_id = 'BW_MAP';
		var bw_map = [ {
			featureType : "all",
			elementType : "all",
			stylers : [ {
				saturation : -100
			} ]
		} ];
		var bw_map_type = new google.maps.StyledMapType(bw_map, {
			name : 'B&W'
		});
		var map = new google.maps.Map(container, {
			zoom : 15,
			center : myLatlng,
			mapTypeId : bw_map_id
		});
		map.mapTypes.set(bw_map_id, bw_map_type);
		var image = 'img/mapPointer.png';
		var marker = new google.maps.Marker( {
			position : myLatlng,
			map : map,
			title : "Fluid agencja interaktywna",
			icon : image
		});
	});
