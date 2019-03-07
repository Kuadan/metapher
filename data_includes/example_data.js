PennController.Sequence( randomize("picture") );
PennController.ResetPrefix(null);
PennController.AddHost("http://vfoss.org:9090/ibex/");
PennController.Template( PennController.GetTable("itemlist.csv") ,
    row => PennController( "picture" ,
        defaultImage
            .settings.size(640, 360)
        ,
        newText("test sentence", row.sentence)
            .settings.css("position", "absolute")
            .settings.css("font-size", "40pt")
            .settings.css("margin", "30px")
            .print()

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
        // ,
        // newSelector("tank")
        // .settings.add( getImage("img1"), getImage("img2"), getImage("img3"), getImage("img4") )
        // .wait()
        ,
        newTimer("hurry", 2000)
          .start()
          .wait()
        ,
        getText("test sentence")
          .remove()
        ,
        newCanvas("tanks", 700, 400)
          .settings.add(  0, 0, newImage("pic1", row.picture1) ) // 0 = left of canvas
          .settings.add( 700, 0, newImage("pic2", row.picture2) )  // 300 = 100px to the right of the right edge of competitor
          .settings.add(   0, 400, newImage("pic3", row.picture3) ) // 0 = left of canvas
          .settings.add( 700, 400, newImage("pic4", row.picture4) )  // 300 = 100px to the right of the right edge of competitor
          .print()
        ,
        newTimer("quick", 4000)
          .start()
        ,
        newSelector("tank")
          //.settings.log()
          .settings.add( getImage("pic1") , getImage("pic2"), getImage("pic3"), getImage("pic4") )
        ,
        getSeletor()
        ,
        getTimer("quick")
           .test.ended()
          
    )
);
