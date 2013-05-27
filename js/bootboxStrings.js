
var orthodontiki = "<h4>Γιατί στον Ορθοδοντικό</h4>";
orthodontiki += "<p class=\"small justify\">\
Η Ορθοδοντική είναι ξεχωριστή αναγνωρισμένη ειδικότητα της Οδοντιατρικής στην Ευρώπη και στις ΗΠΑ. \
Οι ορθοδοντικοί είναι οδοντίατροι (5 έτη σπουδών στην Οδοντιατρική Σχολή) οι οποίοι στη συνέχεια έχουν \
ειδικευθεί (3,5 έτη σπουδών) στην Ορθοδοντική. Ο τίτλος της Ορθοδοντικής Ειδικότητας απονέμεται μετά από \
εξετάσεις του Υπουργείου Υγείας μετά το πέρας της εξειδίκευσης. Είναι λοιπόν οι ειδικοί για την αντιμετώπιση \
των ορθοδοντικών προβλημάτων παιδιών, εφήβων και ενηλίκων</p><br />";
orthodontiki += "<h4>Τι είναι η Ορθοδοντική</h4>"
orthodontiki += "<p class=\"small justify\">Ορθοδοντική είναι η ειδικότητα της Οδοντιατρικής που ασχολείται με την ανάπτυξη των γνάθων \
και του προσώπου, την ανατολή των δοντιών και την διευθέτηση των δοντιών στα οδοντικά τόξα. \
Με την Ορθοδοντική επιτυγχάνεται η βελτίωση της αισθητικής του προσώπου, η καλή λειτουργία του στόματος \
(μάσηση, ομιλία κτλ.) και η προστασία των δοντιών και των ούλων από πιθανά μελλοντικά προβλήματα (κατάγματα δοντιών, \
τερηδόνα, περιοδοντίτιδα, προβλήματα από τις αρθρώσεις κ.ά.)</p>";

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