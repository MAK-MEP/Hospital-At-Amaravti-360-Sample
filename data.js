var APP_DATA = {
  "scenes": [
    {
      "id": "0-02-entry",
      "name": "02-ENTRY",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 1.955003793345809,
        "pitch": -0.0315478341517359,
        "fov": 1.3474042771833745
      },
      "linkHotspots": [
        {
          "yaw": 2.1776568361564435,
          "pitch": -0.0026222931827302176,
          "rotation": 12.566370614359176,
          "target": "1-01-overall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-01-overall",
      "name": "01-OVERALL",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.08229948669350762,
        "pitch": -0.01686597843483817,
        "fov": 1.3474042771833745
      },
      "linkHotspots": [
        {
          "yaw": -0.6808030653282771,
          "pitch": -0.02310894481273884,
          "rotation": 7.0685834705770345,
          "target": "0-02-entry"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "SAMPLE-01",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
