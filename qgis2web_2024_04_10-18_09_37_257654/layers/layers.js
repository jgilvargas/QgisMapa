var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_EstadosVenezuela_1 = new ol.format.GeoJSON();
var features_EstadosVenezuela_1 = format_EstadosVenezuela_1.readFeatures(json_EstadosVenezuela_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EstadosVenezuela_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EstadosVenezuela_1.addFeatures(features_EstadosVenezuela_1);
var lyr_EstadosVenezuela_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EstadosVenezuela_1, 
                style: style_EstadosVenezuela_1,
                popuplayertitle: "EstadosVenezuela",
                interactive: true,
                title: '<img src="styles/legend/EstadosVenezuela_1.png" /> EstadosVenezuela'
            });
var format_Esequibo_2 = new ol.format.GeoJSON();
var features_Esequibo_2 = format_Esequibo_2.readFeatures(json_Esequibo_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Esequibo_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Esequibo_2.addFeatures(features_Esequibo_2);
var lyr_Esequibo_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Esequibo_2, 
                style: style_Esequibo_2,
                popuplayertitle: "Esequibo",
                interactive: true,
                title: '<img src="styles/legend/Esequibo_2.png" /> Esequibo'
            });

lyr_OSMStandard_0.setVisible(true);lyr_EstadosVenezuela_1.setVisible(true);lyr_Esequibo_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_EstadosVenezuela_1,lyr_Esequibo_2];
lyr_EstadosVenezuela_1.set('fieldAliases', {'osm_id': 'osm_id', 'boundary': 'boundary', 'admin_level': 'admin_level', 'parents': 'parents', 'name': 'name', 'local_name': 'local_name', 'name_en': 'name_en', });
lyr_Esequibo_2.set('fieldAliases', {'osm_id': 'osm_id', 'boundary': 'boundary', 'admin_level': 'admin_level', 'parents': 'parents', 'name': 'name', 'local_name': 'local_name', 'name_en': 'name_en', });
lyr_EstadosVenezuela_1.set('fieldImages', {'osm_id': '', 'boundary': '', 'admin_level': '', 'parents': '', 'name': '', 'local_name': '', 'name_en': '', });
lyr_Esequibo_2.set('fieldImages', {'osm_id': '', 'boundary': '', 'admin_level': '', 'parents': '', 'name': '', 'local_name': '', 'name_en': '', });
lyr_EstadosVenezuela_1.set('fieldLabels', {'osm_id': 'no label', 'boundary': 'no label', 'admin_level': 'no label', 'parents': 'no label', 'name': 'no label', 'local_name': 'no label', 'name_en': 'no label', });
lyr_Esequibo_2.set('fieldLabels', {'osm_id': 'no label', 'boundary': 'no label', 'admin_level': 'no label', 'parents': 'no label', 'name': 'no label', 'local_name': 'no label', 'name_en': 'no label', });
lyr_Esequibo_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});