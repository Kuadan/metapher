PennController.Sequence( randomize("picture") );

PennController.ResetPrefix(null);
PennController.AddHost("http://spellout.net/ibexfarm/ajax/download/metapher/data_includes/");

PennController.Template( PennController.GetTable("testlist.csv") ,
    row => PennController( "picture" ,
        defaultImage
            .settings.size(300, 300)
        ,
        newText("test sentence", row.Sentence)
            .print()
        ,
        newCanvas("tanks", 600, 600)
          .settings.add(   0, 0, getImage("picture1", row.picture1) ) // 0 = left of canvas
          .settings.add( 300, 0, getImage("picture2", row.picture2) )  // 300 = 100px to the right of the right edge of competitor
          .settings.add(   0, 300, getImage("picture3", row.picture3) ) // 0 = left of canvas
          .settings.add( 300, 300, getImage("picture4", row.picture4) )  // 300 = 100px to the right of the right edge of competitor
          .print()
        ,
        newSelector("tank")
            .settings.add( getImage("picture1") , getImage("picture2"), getImage("picture3"), getImage("picture4") )
            .wait()
    )
);
