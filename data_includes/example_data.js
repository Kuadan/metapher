//PennController.Sequence( randomize("picture") );

//PennController.ResetPrefix(null);
//PennController.AddHost("http://spellout.net/ibexfarm/ajax/download/metapher/data_includes/");

//PennController.Template( PennController.GetTable("testlist.csv") ,
    //row => PennController( "picture" ,
      //  defaultImage
            //.settings.size(300, 300)
        //,
        //newText("test sentence", row.sentence)
            //.print()
        //,
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
        //newCanvas("tanks", 600, 600)
        //  .settings.add(   0, 0, newImage("pic1", row.picture1) ) // 0 = left of canvas
        //  .settings.add( 300, 0, newImage("pic2", row.picture2) )  // 300 = 100px to the right of the right edge of competitor
        //  .settings.add(   0, 300, newImage("pic3", row.picture3) ) // 0 = left of canvas
        //  .settings.add( 300, 300, newImage("pic4", row.picture4) )  // 300 = 100px to the right of the right edge of competitor
        //  .print()
        //,
        //newSelector("tank")
          //  .settings.add( getImage("pic1") , getImage("pic2"), getImage("pic3"), getImage("pic4") )
          //  .wait()
    //)
//);

// ========== START OF CODE TO COPY INTO YOUR DATA FILE ==========
var IMAGES_TO_PRELOAD = [
    // CHANGE THESE TO THE URLS OF THE IMAGES THAT YOU WANT TO PRELOAD
    "http://spellout.net/ibexfarm/ajax/download/metapher/data_includes/37_1_related_JPG.JPG",
    "http://elelur.com/data_images/mammals/alpine-ibex/alpine-ibex-01.jpg"
];

define_ibex_controller({
    name: "Preloader",
    jqueryWidget: {
        _init: function () {
            this.element.append("Loading images...");

            this.preloadedImages = [ ];
            var numToPreload = IMAGES_TO_PRELOAD.length;
            for (var i = 0; i < IMAGES_TO_PRELOAD.length; ++i) {
                var img = new Image();
                img.src = IMAGES_TO_PRELOAD[i];
                var self = this;
                img.onload = function () {
                    --numToPreload;
                    if (numToPreload == 0) {
                        self.options._finishedCallback([ ]);
                    }
                }
                this.preloadedImages.push(img);
            }
        }
    },
    properties: {
        countsForProgressBar: false
    }
});
// ========= END OF CODE TO COPY INTO YOUR DATA FILE ==========

// 'preload' should be the first item in the shuffle sequence so that images are preloaded
// before any other items are displayed.
var shuffleSequence = seq("preload", "img1", "img2");

var items = [
    // Define the 'preload' item.
    ["preload", "Preloader", { }],

    ["img1", "Form", { html: "<img width='300px' src='http://elelur.com/data_images/mammals/alpine-ibex/alpine-ibex-01.jpg'>" } ],
    ["img2", "Form", { html: "<img width='300px' src='http://spellout.net/ibexfarm/ajax/download/metapher/data_includes/37_1_related_JPG.JPG'>" } ]
];
