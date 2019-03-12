PennController.Sequence( randomize("picture") );
PennController.ResetPrefix(null);
PennController.AddHost("http://vfoss.org:9090/ibex/");
// Run this before every trial
PennController.Header(
    newVar("score", 0)          // The score Var element is part of every trial
        .settings.global()      // Global: its value is NOT reset each time
);

// INSTRUCTIONS
PennController( "instructions" ,
    defaultText
        .print()
    ,
    newText("intro1", "Welcome. You will see four patches of different colors aligned horizontally.")
    ,
    newText("intro2", "You have 1 second to select the color whose name is shown above the line of patches.")
    ,
    newText("intro3", "Place your fingers above the numeric keys 1, 2, 3 and 4 on your keyboard.")
    ,
    newText("intro4", "Press 1, 2, 3 or 4 to start.")
    ,
    newKey("numeric", "1234ï¿½") // Handle exception: an all-digit string would be evaluated as a charCode
        .wait()                 // Start when 1, 2, 3 or 4 is pressed (weird character not on keyboard)
)
.setOption("hideProgressBar", true); // Do not show the progress bar on first screen


PennController.Template( PennController.GetTable("itemlist.csv") ,
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

        // getSelector("shape")
        // .wait()
        )
);
var manualSendResults = true;
var items = [["send", "__SendResults__", {}]];
var shuffleSequence = seq("instructions", "trial", "send", "end"); // Order of labels reflects order of definition in this script


// FINAL SCREEN
PennController( "end" ,
    newText("end", "Game over! Your final score is:")
        .print()
    ,
    newText("final score", "")
        .settings.text( getVar("score") )   // Can't pass getVar("score") directly to newText
        .settings.center()
        .settings.bold()
        .settings.css("font-size", "x-large") // Make it stand out
        .print()
    ,
    newTimer("ever", 1)                     // Dummy timer
        .wait()                             // Will wait forever (never started)
)
.setOption("countsForProgressBar", false); // No need to 'complete' this screen to fill the progress bar
