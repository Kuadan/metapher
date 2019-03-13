PennController.ResetPrefix(null);
PennController.AddHost("http://vfoss.org:9090/ibex/");
PennController.Sequence( "instructions1", "picture1", "picture2", "instructions2", randomize("picture") );

PennController("instructions1" ,
    defaultText
          .settings.css("font-size", "25pt")
          .settings.center()
          .print()
    ,
        newText("intro1", "Hallo und willkommen zu unserer Studie!")
    ,
        newText("intro2", "In diesem Experiment wirst du Teile von Sätzen lesen, die zusammen mit vier Bildern erscheinen werden.")
    ,
        newText("intro3", "Du musst entschieden, welches von den vier Bildern den Satz am besten vervollständigen könnten.")
    ,
        newText("intro4", "Du sollst versuchen, so schnell wie möglich zu antworten! Versuch dich also, auf deine Intuition zu verlassen.")
    ,
        newText("intro5", "Du wirst zwei Übungen dafür bekommen, bevor es mit dem eigentlichen Experiment losgeht.")
    ,
        newText("intro6", "Klicke auf ‚weiter’ um mit den Übungen anzufangen.")
    ,
        newButton("button", "weiter")
            .print()
            .wait()
)
.setOption("hideProgressBar", true);

PennController("picture1",
      defaultImage
              .settings.size(640, 360)
     ,
        newText("example1", "Das Mädchen meint liebt Süßgikeit und isst gern...")
              .settings.css("font-size", "40pt")
              .settings.center()
              .print()
    ,
        newText("null"," ")
    ,
        newTimer("removeText1",1500)
            .start()
            .wait()
        ,
        getText("example1")
            .settings.text("... Jetzt ein Bild auswählen..")
        ,
        newImage("pic1","http://vfoss.org:9090/ibex/37_1_related_JPG.JPG")
        ,
        newImage("pic2", "http://vfoss.org:9090/ibex/37_2_JPG.JPG")
        ,
        newImage("pic3","http://vfoss.org:9090/ibex/37_3_JPG.JPG")
        ,
        newImage("pic4", "http://vfoss.org:9090/ibex/37_4_JPG.JPG")
        ,
        newCanvas("tanks", 700, 400)
            .settings.add(  0, 0, getImage("pic1") )
            .settings.add( 700, 0, getImage("pic2") )
            .settings.add(   0, 400, getImage("pic3") )
            .settings.add( 700, 400, getImage("pic4") )
            .print()
        ,
        newTimer("reminder1", 3000)
            .settings.callback( getSelector("tank").select(getText("null")) )
            .settings.callback( getText("example1").settings.text("... zu langsam, next ")  )
            .start()
        ,
        newSelector("tank")
           .settings.add( getImage("pic1") , getImage("pic2"), getImage("pic3"), getImage("pic4") )
           .settings.callback(  getTimer("reminder1").stop() )
           .shuffle()
           //.settings.log()
           .wait()
        ,
        newTimer("pause", 2000)
               .start()
               .wait()
      );

PennController("picture2",
     defaultImage
            .settings.size(640, 360)
      ,
      newText("example2", "Die Apothekerin arbeitet viel und braucht ...")
            .settings.css("font-size", "40pt")
            .settings.center()
            .print()
      ,
      newText("null"," ")
      ,
      newTimer("removeText2",1500)
            .start()
            .wait()
      ,
      getText("example2")
            .settings.text("... Jetzt ein Bild auswählen..")
      ,
    newImage("pic5","http://vfoss.org:9090/ibex/38_1_JPG.JPG")
      ,
      newImage("pic6", "http://vfoss.org:9090/ibex/38_2_JPG.JPG")
      ,
      newImage("pic7","http://vfoss.org:9090/ibex/38_3_JPG.JPG")
      ,
      newImage("pic8", "http://vfoss.org:9090/ibex/38_4_JPG.JPG")
      ,
      newCanvas("tanks", 700, 400)
            .settings.add(  0, 0, getImage("pic5") )
            .settings.add( 700, 0, getImage("pic6") )
            .settings.add(   0, 400, getImage("pic7") )
            .settings.add( 700, 400, getImage("pic8") )
            .print()
      ,
      newTimer("reminder2", 3000)
          .settings.callback( getSelector("tank").select(getText("null")) )
          .settings.callback( getText("example2").settings.text("... zu langsam, next ")  )
          .start()
      ,
     newSelector("tank")
           .settings.add( getImage("pic5") , getImage("pic6"), getImage("pic7"), getImage("pic8") )
           .wait()
       );

PennController("instructions2" ,
    defaultText
          .settings.css("font-size", "25pt")
          .settings.center()
          .print()
    ,
        newText("intro1", "Das war die Übung!")
    ,
        newText("intro2", "Jetzt werden wir mit dem Experiment starten.")
    ,
        newText("intro3", "Wenn du noch Fragen hast, wende dich bitte jetzt an die Experimentleiterin.")
    ,
        newText("intro4", "Ansonsten kannst du auf ‚weiter’ klicken.")
    ,
        newButton("button", "weiter")
          .print()
          .wait()
)
.setOption("hideProgressBar", true);


PennController.Template( PennController.GetTable("itemlist.csv"),
    row => PennController( "picture" ,
        defaultImage
            .settings.size(640, 360)
        ,
        newText("test sentence", row.sentence)
            .settings.css("font-size", "40pt")
            .settings.css("padding-left", "380pt")
            .print()
        ,
        newText("null2"," ")
        ,
        newTimer("removeText2",1000)
          .start()
          .wait()
        ,
        getText("test sentence")
          .settings.text(" ")
        ,
        newCanvas("tanks", 700, 400)
          .settings.add(  0, 0, newImage("pic1", row.picture1) )
          .settings.add( 700, 0, newImage("pic2", row.picture2) )
          .settings.add(   0, 400, newImage("pic3", row.picture3) )
          .settings.add( 700, 400, newImage("pic4", row.picture4) )
          .print()
        ,
        newTimer("reminder2", 3000)
          //.settings.callback( getText("test sentence").settings.text("Zu langsam!") )
          .settings.callback( getSelector("tank").select(getText("null")) )
          .settings.callback( getText("test sentence").settings.text("... zu langsam, next ")  )
          .start()
        ,
        newSelector("tank")
          //.settings.log()
          .settings.add( getImage("pic1") , getImage("pic2"), getImage("pic3"), getImage("pic4") )
          .settings.callback( getTimer("reminder2").stop() )
          .shuffle()
          .settings.log()
          .wait()
        )
);
