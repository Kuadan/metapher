PennController.ResetPrefix(null);
PennController.AddHost("http://spellout.net/ibexfarm/ajax/download/metapher/data_includes/");
PennController(
    defaultKey
        .wait()
    ,
    newText("test sentence", "Das Mädchen meint, dass Koestlichkeit und ... absolut identisch sind.")
        .settings.center()
        .settings.bold()
        .print()
    ,
    newText("instruction", "Waehlen Sie bitte ein Bild.")
        .print()
    ,
    newImage("competitor", "37_1_related_JPG.JPG")
        .settings.size(200,200) // Don't print it yet
        //.print()
    ,
    newImage("target", "38_4_JPG.JPG")
        .settings.size(200,200) // Don't print it yet
        //.print()
    ,
    newCanvas("tanks", 500, 200)
        .settings.add(   0, 0, getImage("competitor") ) // 0 = left of canvas
        .settings.add( 300, 0, getImage("target") )  // 300 = 100px to the right of the right edge of competitor
        .print() // This prints the canvas, i.e. target and competitor side by side
    ,
    newSelector("tank")
        .settings.add( getImage("target") , getImage("competitor") )
        .wait()

);
