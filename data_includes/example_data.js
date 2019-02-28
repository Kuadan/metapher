PennController.Sequence( randomize("picture") );
PennController.ResetPrefix(null);
PennController.AddHost("http://files.lab.florianschwarz.net/ibexfiles/PennController/SampleTrials/");
// No need to filter: rating-table.csv only contains what we need for this template
// No need to filter: rating-picture.csv only contains what we need for this template
PennController.Template( PennController.GetTable("picturefull.csv") ,
    row => PennController( "picture" ,
        defaultImage
            .settings.size(200, 200)
        ,
        newText("test sentence", row.Sentence)
            .print()
        ,
        newCanvas("patches", 500, 200)
            .settings.add(   0, 0, newImage("color1", row.Color1) )
            .settings.add( 300, 0, newImage("color2", row.Color2) )
            .print()
        ,
        newSelector("patch")
            .settings.add( getImage("color1") , getImage("color2") )
            .wait()
    )
);
