// track style
var style_update = {
  'Point': new ol.style.Style({
    image: new ol.style.Circle({
      fill: new ol.style.Fill({
        color: 'rgba(255,255,0,0.4)'
      }),
      radius: 2,
      stroke: new ol.style.Stroke({
        color: '#ff0',
        width: 1
      }),
    }),
  }),

  'LineString': new ol.style.Style({
    stroke: new ol.style.Stroke({
      color: '#FFEC00',
      width:1.5
    })
  }),
  'MultiLineString': new ol.style.Style({
    stroke: new ol.style.Stroke({
      color: '#FFEC00',
      width: 1.5
    })
  })
};

var style_update1 = {
  'Point': new ol.style.Style({
    image: new ol.style.Circle({

      fill: new ol.style.Fill({
        color: 'rgba(0,255,0,0.4)'
      }),

      radius: 2,

      stroke: new ol.style.Stroke({
        color: '#ff0',
        width: 1
      })
    })
  }),

  'LineString': new ol.style.Style({
    stroke: new ol.style.Stroke({
      color: '#00FFEC',
      width:1.5
    })
  }),
  'MultiLineString': new ol.style.Style({
    stroke: new ol.style.Stroke({
      color: '#00FFEC',
      width: 1.5
    })
  })
};



var style_1124 = function(feature){
  var geom = feature.getGeometry().getType()
  var name = feature.get('name')
  switch (geom) {
    case 'Point':
    return new ol.style.Style({
        image: new ol.style.Circle({
          fill: new ol.style.Fill({
            color: 'rgba(0,255,0,0.4)'
          }),
          radius: 2,
          stroke: new ol.style.Stroke({
            color: '#ff0',
            width: 1
          })
        }),
        text: new ol.style.Text({
          font:'bold 10pt Arial',
          text: name,
        })
      })

      break;
    case 'LineString':
      return new ol.style.Style({
          stroke: new ol.style.Stroke({
            color: '#FF000',
            width:1.5
          })
      })
      break;
    case 'MultiLineString':
      return new ol.style.Style({
        stroke: new ol.style.Stroke({
          color: '#FF000',
          width: 1.5
        })
      })
    default:
      return null
  }
};
