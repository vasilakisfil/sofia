var LABELS = true;
var map;

var kotsovolosInfowindow = new google.maps.InfoWindow({
    content: "Κωτσόβολος Βουλιαγμένης",
    maxWidth: 200
});

var kotsovolosMarker = new google.maps.Marker({
    position: new google.maps.LatLng(37.923898,23.745089),
    map: map,
    icon: {
      url: "js/kotsos.png",
      scaledSize: new google.maps.Size(90,60)
    },
    zIndex: 0,
    title: "Κωτσόβολος"
});

google.maps.event.addListener(kotsovolosMarker, 'click', function() {
  kotsovolosInfowindow.open(map,kotsovolosMarker);
});



var sofiaContent = "<p><strong>Σοφία Κ. Μαυρουδή</strong> \
<span id=\"spansofiarest\"><strong>D.D.S., MSc.</strong> Ειδική Ορθοδοντικός Γναθολόγος (παθήσεις Κροτοφογναθικής - TMD) \
Μετεκπαιδευθείσα στο Tufts University, Boston, USA</span></p>";
sofiaContent += "<p><strong>Εθνάρχου Μακαρίου 13 και Πύρρωνος 82</strong>, <span id=\"spansofiarest\"> 16341, Ηλιούπολη. \
Τηλέφωνο: 210 9940366 Email: orthodonticos@gmail.com</span></p>";
var iatreioInfowindow = new google.maps.InfoWindow({
    content: sofiaContent,
    maxWidth: 200
});

var iatreioMarker = new google.maps.Marker({
    position: new google.maps.LatLng(37.923965,23.746107),
    map: map,
    icon: {
      url: "js/sofia_small.png",
      scaledSize: new google.maps.Size(30,35)
    },
    zIndex: 9999,
    title: "Ιατρείο"
});

google.maps.event.addListener(iatreioMarker, 'click', function() {
  iatreioInfowindow.open(map,iatreioMarker);
});




var ekklhsiaInfowindow = new google.maps.InfoWindow({
    content:"Εκκλησία Αγίας Παρασκευής Ηλιούπολης",
    maxWidth: 200
});

var ekklhsiaMarker = new google.maps.Marker({
    position: new google.maps.LatLng(37.924156,23.751301),
    map: map,
    icon: {
      url: "js/church.png",
      scaledSize: new google.maps.Size(30,35)
    },
    title: "Εκκλησία Αγίας Παρασκευής Ηλιούπολης"
});

google.maps.event.addListener(ekklhsiaMarker, 'click', function() {
  ekklhsiaInfowindow.open(map,ekklhsiaMarker);
});


  
var metroInfowindow = new google.maps.InfoWindow({
    content: "Μετρό Ηλιούπολης",
    maxWidth: 200
});

var metroMarker = new google.maps.Marker({
    position: new google.maps.LatLng(37.929768,23.744932),
    map: map,
    icon: {
      url: "js/metro.png",
      scaledSize: new google.maps.Size(30,35)
    },
    title: "Μετρό Ηλιούπολης"
});

google.maps.event.addListener(metroMarker, 'click', function() {
  metroInfowindow.open(map,metroMarker);
});



var eisodosInfowindow = new google.maps.InfoWindow({
    content: "Γ' είσοδος Ηλιούπολης",
    maxWidth: 200
});

var eisodosMarker = new google.maps.Marker({
    position: new google.maps.LatLng(37.923827,23.744369),
    map: map,
    title: "Γ' είσοδος Ηλιούπολης"
});

google.maps.event.addListener(eisodosMarker, 'click', function() {
  eisodosInfowindow.open(map,eisodosMarker);
});





var mapOptions = {
  center: new google.maps.LatLng(37.92409,23.746119),
  zoom: 17,
  scrollwheel: false,
  panControl: false,
  zoomControl: true,
  mapTypeControl: false,
  scaleControl: false,
  streetViewControl: false,
  overviewMapControl: false,
  mapTypeId: google.maps.MapTypeId.ROADMAP
};


var SxoleiaOptions = {
       content: "<span class=\"infoBoxText\">Πολυκλαδικά</span> <br /> \
                  <span class=\"infoBoxText\">Σχολεία</span> <br /> \
                  <span class=\"infoBoxText\">Ηλιούπολης</span>"
      ,boxStyle: {
         border: "1px solid black"
        ,textAlign: "left"
        ,fontSize: "8pt"
        ,margin: "-10px 0 0 0"
        ,padding: "4px 56px 15px 35px"
       }
      ,disableAutoPan: true
      ,pixelOffset: new google.maps.Size(-25, 0)
      ,position: new google.maps.LatLng(37.923636,23.745037)
      ,closeBoxURL: ""
      ,isHidden: false
      ,pane: "mapPane"
      ,enableEventPropagation: true
    };
var SxoleiaLabel = new InfoBox(SxoleiaOptions);


function initialize() {
  
  // Create the DIV to hold the control of the labels
  var labelsControlDiv = document.createElement('div');

  map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
  
  var labelsControl = new LabelsControl(labelsControlDiv, map);
  
  labelsControlDiv.index = 1;
  map.controls[google.maps.ControlPosition.TOP_RIGHT].push(labelsControlDiv);
  
  kotsovolosMarker.setMap(map);
  iatreioMarker.setMap(map);
  ekklhsiaMarker.setMap(map);
  eisodosMarker.setMap(map);
  metroMarker.setMap(map);
  
  SxoleiaLabel.open(map);
  
}

google.maps.event.addDomListener(window, 'load', initialize);




function LabelsControl(controlDiv, map) {

  // Set CSS styles for the DIV containing the control
  // Setting padding to 5 px will offset the control
  // from the edge of the map
  controlDiv.style.padding = '5px';

  // Set CSS for the control border
  var controlUI = document.createElement('div');
  controlUI.style.backgroundColor = 'white';
  controlUI.style.borderStyle = 'solid';
  controlUI.style.borderWidth = '2px';
  controlUI.style.cursor = 'pointer';
  controlUI.style.textAlign = 'center';
  controlUI.title = 'Πατήστε για να αποκρυφθούν οι ετικέτες';
  controlDiv.appendChild(controlUI);

  // Set CSS for the control interior
  var controlText = document.createElement('div');
  controlText.style.fontFamily = 'Arial,sans-serif';
  controlText.style.fontSize = '12px';
  controlText.style.paddingLeft = '4px';
  controlText.style.paddingRight = '4px';
  controlText.innerHTML = '<strong id=\"labelscontrol\">Απόκρυψη ετικετών</strong>';
  controlUI.appendChild(controlText);

  // Setup the click event listeners: simply set the map to
  // Chicago
  google.maps.event.addDomListener(controlUI, 'click', function() {
    if (LABELS) {
      kotsovolosMarker.setMap(null);
      ekklhsiaMarker.setMap(null);
      eisodosMarker.setMap(null);
      metroMarker.setMap(null);      
      SxoleiaLabel.close();     
      LABELS = false;

      document.getElementById('labelscontrol').innerHTML ='Εμφάνιση ετικετών';

    } else {
      kotsovolosMarker.setMap(map);
      ekklhsiaMarker.setMap(map);
      eisodosMarker.setMap(map);
      metroMarker.setMap(map);
      SxoleiaLabel.open(map);  
      LABELS = true;
      
      document.getElementById('labelscontrol').innerHTML ='Απόκρυψη ετικετών';
    }
  });

}










