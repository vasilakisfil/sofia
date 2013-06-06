
var orthodontiki ="";

orthodontiki += "<div id=\"customHeight\"><h4 id=\"customMargin1\">Τι είναι η Ορθοδοντική</h4>";
orthodontiki += "<p class=\"small justify\">Ορθοδοντική είναι η ειδικότητα της Οδοντιατρικής που ασχολείται με την ανάπτυξη των γνάθων \
και του προσώπου, την ανατολή των δοντιών και την διευθέτηση των δοντιών στα οδοντικά τόξα. \
Με την Ορθοδοντική επιτυγχάνεται η βελτίωση της αισθητικής του προσώπου, η καλή λειτουργία του στόματος \
(μάσηση, ομιλία κτλ.) και η προστασία των δοντιών και των ούλων από πιθανά μελλοντικά προβλήματα (κατάγματα δοντιών, \
τερηδόνα, περιοδοντίτιδα, προβλήματα από τις αρθρώσεις κ.ά.).</p>";

orthodontiki += "<h4 id=\"customMargin2\">Γιατί στον Ορθοδοντικό</h4>";
orthodontiki += "<p class=\"small justify\">\
Η Ορθοδοντική είναι ξεχωριστή αναγνωρισμένη ειδικότητα της Οδοντιατρικής στην Ευρώπη και στις ΗΠΑ. \
Οι ορθοδοντικοί είναι οδοντίατροι (5 έτη σπουδών στην Οδοντιατρική Σχολή) οι οποίοι στη συνέχεια έχουν \
ειδικευθεί (3,5 έτη σπουδών) στην Ορθοδοντική. Ο τίτλος της Ορθοδοντικής Ειδικότητας απονέμεται μετά από \
εξετάσεις του Υπουργείου Υγείας μετά το πέρας της εξειδίκευσης. Είναι λοιπόν οι ειδικοί για την αντιμετώπιση \
των ορθοδοντικών προβλημάτων παιδιών, εφήβων και ενηλίκων.</p>";

orthodontiki += "<h4 id=\"customMargin2\">Πότε;</h4>"; 
orthodontiki += "<p class=\"small justify\">\
Για τα παιδιά ο πρώτος ορθοδοντικός έλεγχος σύμφωνα με την Αμερικανική Ένωση \
Ορθοδοντικών (ΑΑΟ) πρέπει να γίνεται <strong>πριν την ηλικία των 7 ετών</strong>. Η πρώιμη διάγνωση ορθοδοντικών ανωμαλιών μπορεί να προλάβει την επιδείνωσή \
τους και να κάνει την αντιμετώπισή τους πολύ πιο εύκολη για τον ασθενή αποφεύγοντας εξαγωγές ή χειρουργικές θεραπείες. <strong>Είναι λάθος τακτική \
η αναμονή μέχρι την πλήρη αντικατάσταση όλων των παιδικών δοντιών από τα μόνιμα για να γίνει η πρώτη επίσκεψη στον ορθοδοντικό</strong></p> \
<p class=\"small justify\">\
Η Ορθοδοντική όμως με τις σύγχρονες τεχνικές πλέον απευθύνεται τόσο σε παιδιά όσο και σε ενήλικες οποιασδήποτε ηλικίας. \
Υπάρχουν περιπτώσεις που η <strong>ορθοδοντική ενηλίκων</strong> εφαρμόζεται όχι μόνο για λόγους αισθητικής αλλά και θεραπευτικά για την αντιμετώπιση \
άλλων προβλημάτων υγείας του στοματογναθικού συστήματος, καθώς και για σαν προστάδιο προσθετικής οδοντιατρικής εργασίας. </p></div>";




// $(document).on("click", ".alertbox", function(e) {
//     bootbox.alert(orthodontiki, function() {
//         console.log("Alert Callback");
//     });
// });

$(document).on("click", ".alertbox", function(e) {
  bootbox.dialog(orthodontiki, {
      "label" : "Εντάξει",
      "class" : "btn-success"
  })
});
