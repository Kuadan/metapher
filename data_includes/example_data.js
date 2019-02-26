PennController.ResetPrefix(null);
PennController.AddHost("http://spellout.net/ibexfarm/ajax/download/metapher/data_includes/");
PennController(
    defaultKey
        .wait()
    ,
    newText("test sentence", "Das Mädchen meint, dass Köstlichkeit und ... absolut identisch sind.")
        .settings.center()
        .settings.bold()
        .print()
    ,
    newText("instruction", "Wählen Sie bitte ein Bild.")
        .print()
    ,
    newImage("target", "37_1_related_JPG.JPG")
        .settings.size(300,300) // Don't print it yet
        //.print()
    ,
    newImage("competitor1", "37_2_JPG.JPG")
        .settings.size(300,300) // Don't print it yet
        //.print()
    ,
    newImage("competitor2", "37_3_JPG.JPG")
        .settings.size(300,300) // Don't print it yet
        //.print()
    ,
    newImage("competitor3", "37_4_JPG.JPG")
        .settings.size(300,300) // Don't print it yet
        //.print()
    ,
    newCanvas("tanks", 600, 600)
        .settings.add(   0, 0, getImage("target") ) // 0 = left of canvas
        .settings.add( 300, 0, getImage("competitor1") )  // 300 = 100px to the right of the right edge of competitor
        .settings.add(   0, 300, getImage("competitor2") ) // 0 = left of canvas
        .settings.add( 300, 300, getImage("competitor3") )  // 300 = 100px to the right of the right edge of competitor
        .print() // This prints the canvas, i.e. target and competitor side by side
    ,
    newSelector("tank")
        .settings.add( getImage("target") , getImage("competitor1"), getImage("competitor2"), getImage("competitor3") )
      
);
