PennController.Sequence( randomize("picture") );

PennController.ResetPrefix(null);
PennController.AddHost("http://spellout.net/ibexfarm/ajax/download/metapher/data_includes/");

PennController.Template( PennController.GetTable("testlist.csv") ,
      row => PennController( "picture" ,
       defaultImage
        settings.size(300, 300)
        ,
        newText("test sentence", row.sentence)
          .print()
       ,
        // newImage("img1", row.picture1)
        //     .settings.size(300,300)
        //     .print()
        // ,
        // newImage("img2", row.picture2)
        //     .settings.size(300,300)
        //     .print()
        // ,
        // newImage("img3", row.picture3)
        //     .settings.size(300,300)
        //     .print()
        // ,
        // newImage("img4", row.picture4)
        //     .settings.size(300,300)
        //     .print()
         ,
         //newSelector("tank")
         //.settings.add( getImage("img1"), getImage("img2"), getImage("img3"), getImage("img4") )
         //.wait()
        newCanvas("tanks", 600, 600)
         .settings.add(   0, 0, newImage("pic1", row.picture1) ) // 0 = left of canvas
         .settings.add( 300, 0, newImage("pic2", row.picture2) )  // 300 = 100px to the right of the right edge of competitor
         .settings.add(   0, 300, newImage("pic3", row.picture3) ) // 0 = left of canvas
         .settings.add( 300, 300, newImage("pic4", row.picture4) )  // 300 = 100px to the right of the right edge of competitor
         .print()
        ,
        newSelector("tank")
            .settings.add( getImage("pic1") , getImage("pic2"), getImage("pic3"), getImage("pic4") )
            .wait()
    )
);
