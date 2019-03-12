PennController.ResetPrefix(null);
PennController.AddHost("http://vfoss.org:9090/ibex/");
PennController("instructions" ,
    defaultText
      .settings.css("font-size", "15pt")
      .settings.center()
      .print()
    ,
        newText("intro1", "Hallo und willkommen zu unserer Studie!")
    ,
        newText("intro2", "In diesem Experiment wirst du Teile von Sätzen lesen, die zusammen mit vier Bildern erscheinen werden.")
        //.print()
    ,
        newText("intro3", "Du musst entschieden, welches von den vier Bildern den Satz am besten vervollständigen könnten.")
        //.print()
    ,
        newText("intro4", "Du sollst versuchen, so schnell wie möglich zu antworten! Versuch dich also, auf deine Intuition zu verlassen.")
    ,
        newText("intro5", "Du wirst zwei Übungen dafür bekommen, bevor es mit dem eigentlichen Experiment losgeht.")
    ,
        newText("intro6", "Klicke auf ‚weiter’ um mit den Übungen anzufangen.")
        //.print()")
    ,
        newButton("button", "weiter") // Handle exception: an all-digit string would be evaluated as a charCode
          .print()
          .wait()                 // Start when 1, 2, 3 or 4 is pressed (weird character not on keyboard)
)
.setOption("hideProgressBar", true);

PennController(
      newText("example1", "Das Mädchen meint dass Köstlichkeit und ... absolut identisch sind")
            .settings.css("font-size", "40pt")
            .print()
      ,
      newImage("pic1","http://vfoss.org:9090/ibex/37_1_related_JPG.JPG")
            .settings.size(640, 360)
            //.print()
      ,
      newImage("pic2", "http://vfoss.org:9090/ibex/37_2_JPG.JPG")
            .settings.size(640,360)
            //.print()
      ,
      newImage("pic3","http://vfoss.org:9090/ibex/38_3_JPG.JPG")
            .settings.size(640,360)
            //.print()
      ,
      newImage("pic4", "http://vfoss.org:9090/ibex/38_4_JPG.JPG")
            .settings.size(640,360)
            //.print()
      ,
      newCanvas("tanks", 700, 400)
            .settings.add(  0, 0, getImage("pic1") ) // 0 = left of canvas
            .settings.add( 700, 0, getImage("pic2") )  // 300 = 100px to the right of the right edge of competitor
            .settings.add(   0, 400, getImage("pic3") ) // 0 = left of canvas
            .settings.add( 700, 400, getImage("pic4") )  // 300 = 100px to the right of the right edge of competitor
            .print()
      ,
     newSelector("tank")
           .settings.add( getImage("pic1") , getImage("pic2"), getImage("pic3"), getImage("pic4") )
           .wait()
       );

//PennController.Sequence( randomize("picture") );
PennController.Template( PennController.GetTable("itemlist.csv"),
    row => PennController( "picture" ,
        defaultImage
            .settings.size(640, 360)
        ,
        newText("test sentence", row.sentence)
            //.settings.css("position", "absolute")
            .settings.css("font-size", "40pt")
            //.settings.css("margin", "30px")
            .settings.css("padding-left", "380pt")
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
        // ,
        // newSelector("tank")
        // .settings.add( getImage("img1"), getImage("img2"), getImage("img3"), getImage("img4") )
        // .wait()
        //,
        newTimer("removeText",1500)
          .start()
          .wait()
        ,
        getText("test sentence")
          .settings.text(" ")
          //.remove()
        ,
        newCanvas("tanks", 700, 400)
          .settings.add(  0, 0, newImage("pic1", row.picture1) ) // 0 = left of canvas
          .settings.add( 700, 0, newImage("pic2", row.picture2) )  // 300 = 100px to the right of the right edge of competitor
          .settings.add(   0, 400, newImage("pic3", row.picture3) ) // 0 = left of canvas
          .settings.add( 700, 400, newImage("pic4", row.picture4) )  // 300 = 100px to the right of the right edge of competitor
          .print()
        ,
        newTimer("reminder", 4000)
          .settings.callback( getText("test sentence").settings.text("Zu langsam!") )
          .start()
        ,
        newSelector("tank")
          //.settings.log()
          .settings.add( getImage("pic1") , getImage("pic2"), getImage("pic3"), getImage("pic4") )
          .settings.callback( getTimer("reminder").stop() )
          .shuffle()
          .wait()
        )
);
