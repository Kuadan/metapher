PennController.ResetPrefix(null);
PennController.AddHost("http://vfoss.org:9090/ibex/");
PennController.Sequence( "instructions1", "picture1", "picture2", "picture3", "instructions2", randomize("items") );
PennController("instructions1" ,
    defaultText
          .settings.css("font-size", "25pt")
          .settings.left()
          .print()
        ,
        newText("intro1", "Hallo und willkommen zu unserer Studie!")
        ,
        newText("intro2", "In diesem Experiment wirst du Teile von Sätzen lesen, die zusammen mit vier Bildern erscheinen werden.")
        ,
        newText("intro3", "Du musst dich entscheiden, welches von den vier Bildern den Satz am besten vervollständigen könnte.")
        ,
        newText("intro4", "Du sollst so schnell wie möglich antworten! Versuch dich also auf deine Intuition zu verlassen. Wenn du nicht schnell genug bist, wird eine Meldung auf dem Bildschirm gezeigt.")
        ,
        newText("intro5", "Du wirst drei Übungsbeispiele bekommen, bevor es mit dem eigentlichen Experiment losgeht.")
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
          newText("example1", "Das Mädchen isst gerne...")
              .settings.css("font-size", "40pt")
              .settings.css("padding-left", "1pt")
              .print()
          ,
          newText("null"," ")
          ,
          newTimer("removeText1",3000)
              .start()
              .wait()
          ,
          getText("example1")
              .settings.text(" ")
          ,
          newImage("pic1","http://vfoss.org:9090/ibex/37_1_related.jpg")
          ,
          newImage("pic2", "http://vfoss.org:9090/ibex/38_2.jpg")
          ,
          newImage("pic3","http://vfoss.org:9090/ibex/38_3.jpg")
          ,
          newImage("pic4", "http://vfoss.org:9090/ibex/41_4.jpg")
          ,
          newCanvas("tanks", 700, 500)
              .settings.add(  -330, 20, getImage("pic1") )
              .settings.add( -350, 440, getImage("pic2") )
              .settings.add(   350, 20, getImage("pic3") )
              .settings.add( 350, 440, getImage("pic4") )
              .print()
          ,
          // nichts gewählt
          newTimer("reminder1", 3000)
              .settings.callback( getSelector("tank").select(getText("null")) )
              .settings.callback( getText("example1").settings.text("... Sei bitte schneller! ")  )
              .start()
          ,
          newSelector("tank")
              .settings.add( getImage("pic1") , getImage("pic2"), getImage("pic3"), getImage("pic4") )
              .settings.callback(  getTimer("reminder1").stop() )
              .settings.callback( getText("example1").settings.text(" ")  )
              .shuffle()
           //.settings.log()
              .wait()
          ,
          getCanvas("tanks")
            .remove()
      ,
          newText("pleasewait", "Gehe zum nächsten Satz")
          .settings.css("font-size", "20pt")
          .settings.css("margin-top", "250pt")
          .settings.css("padding-left", "20pt")
          .print()
      ,
      newTimer("wait", 10)
          .start()
          .wait()
      ,
      newButton("button", "weiter")
          .print()
          .wait()
      ,
      getText("pleasewait")
          .remove()

      );

PennController("picture2",
           defaultImage
                    .settings.size(640, 360)
                ,
                newText("example2", "Der Apotheker macht Sport im ...")
                    .settings.css("font-size", "40pt")
                    .settings.css("padding-left", "1pt")
                    .print()
                ,
                newText("null"," ")
                ,
                newTimer("removeText2",2000)
                    .start()
                    .wait()
                ,
                getText("example2")
                    .settings.text(" ")
                ,
          newImage("pic5","http://vfoss.org:9090/ibex/example6.jpg")
          ,
          newImage("pic6", "http://vfoss.org:9090/ibex/example2.jpg")
          ,
          newImage("pic7","http://vfoss.org:9090/ibex/example3.jpg")
          ,
          newImage("pic8", "http://vfoss.org:9090/ibex/example7.jpg")
          ,
          newCanvas("tanks", 700, 500)
              .settings.add(  -330, 20, getImage("pic5") )
              .settings.add( -350, 440, getImage("pic6") )
              .settings.add(   350, 20, getImage("pic7") )
              .settings.add( 350, 440, getImage("pic8") )
              .print()
          ,
          newTimer("reminder2", 3000)
              .settings.callback( getSelector("tank").select(getText("null")) )
              .settings.callback( getText("example2").settings.text("Sei bitte schneller!")  )
              .start()
          ,
          newSelector("tank")
              .settings.add( getImage("pic5") , getImage("pic6"), getImage("pic7"), getImage("pic8") )
              .settings.callback( getTimer("reminder2").stop() )
              .settings.callback( getText("example2").settings.text(" ")  )
              .shuffle()
              .wait()
        ,
        getCanvas("tanks")
          .remove()
    ,
    newText("pleasewait", "Gehe zum nächsten Satz")
    .settings.css("font-size", "20pt")
    .settings.css("padding-left", "1pt")
    .settings.css("margin-top", "250pt")
    .print()
    ,
    newTimer("wait", 10)
      .start()
      .wait()
,
    newButton("button", "weiter")
      .print()
      .wait()
,
    getText("pleasewait")
    .remove()

       );

       PennController("picture3",
                   defaultImage
                           .settings.size(640, 360)
                       ,
                       newText("example3", "Der Urlauber schwimmt im...")
                           .settings.css("font-size", "40pt")
                           .settings.css("padding-left", "1pt")
                           .print()
                       ,
                       newText("null"," ")
                       ,
                       newTimer("removeText3",2000)
                           .start()
                           .wait()
                       ,
                       getText("example3")
                           .settings.text(" ")
                 ,
                 newImage("pic9","http://vfoss.org:9090/ibex/39_1.jpg")
                 ,
                 newImage("pic10", "http://vfoss.org:9090/ibex/48_1_related.jpg")
                 ,
                 newImage("pic11","http://vfoss.org:9090/ibex/37_2.jpg")
                 ,
                 newImage("pic12", "http://vfoss.org:9090/ibex/48_3.jpg")
                 ,
                 newCanvas("tanks", 700, 500)
                     .settings.add(  -330, 20, getImage("pic9") )
                     .settings.add( -350, 440, getImage("pic10") )
                     .settings.add(   350, 20, getImage("pic11") )
                     .settings.add( 350, 440, getImage("pic12") )
                     .print()
                 ,
                 newTimer("reminder3", 3000)
                     .settings.callback( getSelector("tank").select(getText("null")) )
                     .settings.callback( getText("example3").settings.text("Sei bitte schneller!")  )
                     .start()
                 ,
                 newSelector("tank")
                     .settings.add( getImage("pic9") , getImage("pic10"), getImage("pic11"), getImage("pic12") )
                     .settings.callback(  getTimer("reminder3").stop() )
                     .settings.callback( getText("example3").settings.text(" ")  )
                     .shuffle()
                  //.settings.log()
                     .wait()
                 ,
                 getCanvas("tanks")
                   .remove()
               ,
               newText("pleasewait", "Gehe zum nächsten Satz")
               .settings.css("font-size", "20pt")
               .settings.css("margin-top", "220pt")
               .settings.css("padding-left", "1pt")
               .print()
               ,
               newTimer("wait", 10)
                 .start()
                 .wait()
           ,
               newButton("button", "weiter")
                 .print()
                 .wait()
           ,
               getText("pleasewait")
               .remove()

             );

             PennController("instructions2" ,
                 defaultText
                       .settings.css("font-size", "25pt")
                       .settings.left()
                       .settings.css("margin-top", "50pt")
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
                 row => PennController( "items" ,
                     defaultImage
                         .settings.size(640, 360)
                     ,
                     newText("test sentence", row.sentence)
                         .settings.css("font-size", "40pt")
                         .settings.css("padding-left", "1pt")
                         .print()
                     ,
                     newText("null"," ")
                     ,
                     newTimer("removeText",2000)
                       .start()
                       .wait()
                     ,
                     getText("test sentence")
                       .settings.text(" ")
                     ,
                     newCanvas("tanks", 700, 500)
                       .settings.add(  -330, 20, newImage("target", row.metaphoric) )
                       .settings.add( -350, 440, newImage("competitor", row.literal) )
                       .settings.add(   350, 20, newImage("distractor1", row.distr1) )
                       .settings.add( 350, 440, newImage("distractor2", row.distr2) )
                       .print()
                       .settings.log()

                     ,
                     newTimer("reminder", 3000)
                     //  .settings.callback( getText("test sentence").settings.text("Sei bitte schneller!") )
                       .settings.callback( getSelector("tank").select(getText("null")) )
                       .settings.callback( getText("test sentence").settings.text("Sei bitte schneller!") )
                       .start()
                     ,
                     newSelector("tank")
                       //.settings.log()
                       .settings.add( getImage("target") , getImage("competitor"), getImage("distractor1"), getImage("distractor2") )
                       .settings.callback( getTimer("reminder").stop() )
                       .settings.callback( getText("test sentence").settings.text(" ")  )
                       .shuffle()
                       .settings.log()
                       .wait()
                    ,
                    getCanvas("tanks")
                      .remove()
                    ,
                    newText("pleasewait", "Gehe zum nächsten Satz")
                       .settings.css("font-size", "20pt")
                       .settings.css("padding-left", "1pt")
                       .settings.css("margin-top", "250pt")
                       .print()
                   ,
                   newTimer("wait", 10)
                       .start()
                       .wait()
                   ,
                   newButton("button", "weiter")
                    .print()
                    .wait()
              ,
                  getText("pleasewait")
                  .remove()

                     )
                     .log( "item" , row.item )
             );
