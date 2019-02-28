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
        .wait()
);
PennController(
    defaultKey
        .wait()
    ,
    newText("test sentence", "Die Apothekerin bedauert, dass Vollbeschäftigung und ... am Leben nicht zusammenzupassen scheinen..")
        .settings.center()
        .settings.bold()
        .print()
    ,
    newText("instruction", "Wählen Sie bitte ein Bild.")
        .print()
    ,
    newImage("competitor", "38_1_JPG.JPG")
        .settings.size(300,300) // Don't print it yet
        //.print()
    ,
    newImage("competitor2", "38_2_JPG.JPG")
        .settings.size(300,300) // Don't print it yet
        //.print()
    ,
    newImage("competitor3", "38_3_JPG.JPG")
        .settings.size(300,300) // Don't print it yet
        //.print()
    ,
    newImage("competitor4", "38_4_JPG.JPG")
        .settings.size(300,300) // Don't print it yet
        //.print()
    ,
    newCanvas("tanks", 600, 600)
        .settings.add(   0, 0, getImage("competitor") ) // 0 = left of canvas
        .settings.add( 300, 0, getImage("competitor2") )  // 300 = 100px to the right of the right edge of competitor
        .settings.add(   0, 300, getImage("competitor3") ) // 0 = left of canvas
        .settings.add( 300, 300, getImage("competitor4") )  // 300 = 100px to the right of the right edge of competitor
        .print() // This prints the canvas, i.e. target and competitor side by side
    ,
    newSelector("tank")
        .settings.add( getImage("competitor") , getImage("competitor2"), getImage("competitor3"), getImage("competitor4") )
        .wait()
);
PennController.ResetPrefix(null);
PennController.Template(
    // 'row' will successively point to each row of the table (feel free to use another name)
    row => PennController(
        // row.Sentence will iteratively take the value of the column 'Sentence' for each row
        newText( "sentence" , row.Sentence )
        ,
        newScale("judgment",    "cold", "cool", "lukewarm", "warm", "hot")
            .settings.labelsPosition("top")
            .settings.before( getText("sentence") )
            .settings.size("auto")
            .print()
            .wait()
    )
);
