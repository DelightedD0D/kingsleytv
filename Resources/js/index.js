$(document).ready(function () {
    
// Main Menu Animation & Interaction //
    
    
    var lastGroup = $('#last-group line').toArray();
    var secondGroup = $('#second-group line').toArray();
    var firstGroup = $('#first-group line').toArray();
    

    
   // On Window Load Animations //
    
    TweenMax.set('svg', {
        visibility: 'visible'
    })
        
 
    // First Timeline for Window Load Animations //---------------------------------------------------------//

    var tl = new TimelineMax();

    tl.staggerFromTo(lastGroup, 0.5, {
        opacity: '0',
        scale: '0'
    }, {
        opacity: '0.3',
        scale: '2.5',
    }, 0.01)
    
    .staggerTo(lastGroup, 0.5, {
        scale: '1',
        ease: Elastic.easeOut
    },0.01, '-=0.5')
    
    
    .staggerFromTo(secondGroup, 0.5, {
        opacity: '0',
        scale: '0'
    }, {
        opacity: '0.3',
        scale: '2.5'
    }, 0.01, '-=1')
    
    .staggerTo(secondGroup, 0.5, {
        scale: '1',
        ease: Elastic.easeOut
    },0.01, '-=0.5')
    
    
    .staggerFromTo(firstGroup, 0.5, {
        opacity: '0',
        scale: '0'
    }, {
        opacity: '0.3',
        scale: '2.5'
    }, 0.01, '-=1')
    
    .staggerTo(firstGroup, 0.5, {
        scale: '1',
        ease: Elastic.easeOut
    },0.01, '-=0.5');
    
    // Second Timeline for Window Load Animations (Affects repeat yoyoing opacity animation)------------------------//
    
    var tl2 = new TimelineMax({
        repeat: -1,
        yoyo: true
    }).delay(3)
    
    tl2.staggerFromTo(lastGroup, 0.3, {
        opacity: '0.3'
    }, {
        opacity: '1'
    }, 0.09)
    
    .staggerFromTo(lastGroup, 0.5, {
        scale: '1'
    }, {
        scale: '2',
    }, 0.01)
    
    .staggerTo(lastGroup, 1.5, {
        scale: '1',
        ease: Elastic.easeOut.config(3, 0.2)
    },0.01, '-=0.5')
    
    .staggerFromTo(secondGroup, 0.3, {
        opacity: '0.3'
    }, {
        opacity: '1'
    }, 0.09)
    
    .staggerTo(secondGroup, 0.5, {
        scale: '2',
    }, 0.01)
    
    .staggerTo(secondGroup, 1.5, {
        scale: '1',
        ease: Elastic.easeOut.config(2, 0.1)
    },0.01, '-=0.5')
    
    .staggerFromTo(firstGroup, 0.3, {
        opacity: '0.3'
    }, {
        opacity: '1'
    }, 0.09)
    
    .staggerTo(firstGroup, 0.5, {
        scale: '2',
    }, 0.01)
    
    .staggerTo(firstGroup, 1.5, {
        scale: '1',
        ease: Elastic.easeOut.config(3, 0.2)
    },0.01, '-=0.5')


  
    // Menu items intro animation on window load -------------------------------------------------------------------//

    var contactCircle = $('.contact-circle');
    var contactPath = $('#contact .circle-path');
    
    var aboutCircle = $('.about-circle');
    var aboutPath = $('#about .circle-path');
    
    var caseStudiesCircle = $('.case-studies-circle');
    var caseStudiesPath = $('#case-studies .circle-path');
    
    var experimentsCircle = $('.experiments-circle');
    var experimentsPath = $('#experiments .circle-path');
    
    var menuPagesCircle = $('#menu-pages circle').toArray();
    
    
    
    
    TweenMax.set(aboutCircle, {
        scale: '0.7',
        transformOrigin: '50% 50%'
    })
    
    TweenMax.set(contactCircle, {
        scale: '0.7',
        transformOrigin: '50% 50%'
    })
    
    TweenMax.set(experimentsCircle, {
        scale: '0.7',
        transformOrigin: '50% 50%'
    })
    
    TweenMax.set(caseStudiesCircle, {
        scale: '0.7',
        transformOrigin: '50% 50%'
    })
    
    
    
    
    TweenMax.fromTo(contactPath, 0.5, {
        opacity: '0'
    }, {
        opacity: '1'
    })
    
    TweenMax.fromTo(contactCircle, 0.5, {
        opacity: '0'
    }, {
        opacity: '1',
        ease: Linear.easeOut
    })
    
    
    TweenMax.fromTo(aboutPath, 0.5, {
        opacity: '0'
    }, {
        opacity: '1'
    }).delay(1);
    
    TweenMax.fromTo(aboutCircle, 0.5, {
        opacity: '0'
    }, {
        opacity: '1',
        ease: Linear.easeOut
    }).delay(1);
    
    
    TweenMax.fromTo(caseStudiesPath, 0.5, {
        opacity: '0'
    }, {
        opacity: '1'
    }).delay(1.5);
    
    TweenMax.fromTo(caseStudiesCircle, 0.5, {
        opacity: '0'
    }, {
        opacity: '1',
        ease: Linear.easeOut
    }).delay(1.5);
    
    
    TweenMax.fromTo(experimentsPath, 0.5, {
        opacity: '0'
    }, {
        opacity: '1'
    }).delay(2);
    
    TweenMax.fromTo(experimentsCircle, 0.5, {
        opacity: '0'
    }, {
        opacity: '1',
        ease: Linear.easeOut
    }).delay(2);
    
    
    
// Drag and Drop Cursor Animation -------------------------------------------------------------------//
    
    
    var dragCursor = $('#drag-cursor');
    var mainStroke = $('#main-stroke');
    var pulsingStroke = $('#pulsing-stroke');
    
    TweenMax.set(pulsingStroke, {
        strokeWidth: '0.1'
    });
    
    tl.fromTo(dragCursor, 1, {
        opacity: '0'
    }, {
        opacity: '1'
    })
    
    .fromTo(pulsingStroke, 1.2, {
        strokeWidth: '2',
        opacity: '1',
        scale: '1',
        transformOrigin: '50% 50%'
    }, {
        strokeWidth: '0.1',
        opacity: '0',
        scale: '1.4',
        repeat: -1,
        //ease: Expo.easeOut
    });
    
    
// Drag and Drop Interactions -------------------------------------------------------------------//
    
    var aboutDrop = $('#about .circle-path'); // --A droppable-- //
    var experimentDrop = $('#experiments .circle-path');
    var contactDrop = $('#contact .circle-path');
    var caseStudiesDrop = $('#case-studies .circle-path');

    
    var overlapThreshold = '90%';
    
    
    var customDraggable = Draggable.create(dragCursor, {
        bounds: window,
        throwProps: true,
        throwResistance: '9000',
        //        cursor: 'pointer'
        
        minimumMovement: '1',
        
        onPress: cursorPressed,
        
        onRelease: cursorReleased,
        
        onDrag: cursorDragged,
        
        onDragEnd: cursorDropped
        
    });
    
    
    
    // My Interactive Functions  -----------------------------------------------------------------------------------//

    var menuPagesPath = $('.circle-path').toArray();
    var pulsingStroke = $('#pulsing-stroke');

    var contactIcon = $('#contact-icon');
    var caseStudiesIcon = $('#case-studies-icon');
    var aboutIcon = $('#about-icon');
    var experimentsIcon = $('#experiments-icon');

    TweenMax.set(caseStudiesIcon, {
        scale: '1.1',
        transformOrigin: '50% 50%'
    })

    // Contact Morph -------------------------------------------------------------------------------//
    var morphContactTl = new TimelineMax();

    morphContactTl.paused(true);

    morphContactTl.to(contactCircle, 0.4, {
        morphSVG: {
            shape: contactIcon,
            shapeIndex: 'auto'
        },
        scale: '0.8',
        transformOrigin: '50% 50%',
        ease: Back.easeOut.config(2)
    })
    
    // Case Studies Morph -------------------------------------------------------------------------------//
    
    
    var morphCaseStudiesTl = new TimelineMax();

    morphCaseStudiesTl.paused(true);

    morphCaseStudiesTl.to(caseStudiesCircle, 0.4, {
        morphSVG: {
            shape: caseStudiesIcon,
            shapeIndex: '5'
        },
//        scale: '1.25',
        ease: Back.easeOut.config(2)
    })
    
    // About Morph -------------------------------------------------------------------------------//
    
    var morphAboutTl = new TimelineMax();

    morphAboutTl.paused(true);

    morphAboutTl.to(aboutCircle, 0.4, {
        morphSVG: {
            shape: aboutIcon,
            shapeIndex: '5'
        },
        ease: Back.easeOut.config(2)
    })
    
    // Experiments Morph -------------------------------------------------------------------------------//
    
    var morphexperimentsTl = new TimelineMax();

    morphexperimentsTl.paused(true);

    morphexperimentsTl.to(experimentsCircle, 0.4, {
        morphSVG: {
            shape: experimentsIcon,
            shapeIndex: 'auto'
        },
        ease: Back.easeOut.config(2)
    })



    function cursorPressed (e) {
    
    for ( var i = 0; i < menuPagesPath.length; ++i) {
        
        TweenMax.to(menuPagesPath[i], 0.5, {
            scale: '2',
            opacity: '0.2',
            strokeWidth: '0.5',
            transformOrigin: '50% 50%',
        })
        
        TweenMax.to(menuPagesPath[i], 4, {
            rotation: '360',
            transformOrigin: '50% 50%',
            repeat: -1,
            ease: Linear.easeOut
        })
  
    }
    
    TweenMax.to(pulsingStroke, 0.5, {
        opacity: '0'
    })
    
    
    // Animation For Each Menu Item ----------------------------------------------------------------------------/
    
    morphContactTl.play();
    morphCaseStudiesTl.play();
    morphAboutTl.play();
    morphexperimentsTl.play();

};


    function cursorReleased (e) {
    
    for ( var i = 0; i < menuPagesPath.length; ++i) {
        
        TweenMax.to(menuPagesPath[i], 0.5, {
            scale: '1',
            opacity: '1',
            strokeWidth: '1',
            transformOrigin: '50% 50%'
        })
        
        TweenMax.to(menuPagesPath[i], 0.5, {
            rotation: '0',
            transformOrigin: '50% 50%'
        })
        
    }
    
    TweenMax.fromTo(pulsingStroke, 1.2, {
        strokeWidth: '2',
        opacity: '1',
        scale: '1',
        transformOrigin: '50% 50%'
    }, {
        strokeWidth: '0.1',
        opacity: '0',
        scale: '1.4',
        repeat: -1,
//        ease: Expo.easeOut
    })
    
    morphContactTl.reverse();
    morphCaseStudiesTl.reverse();
    morphAboutTl.reverse();
    morphexperimentsTl.reverse();


};
    
    var experimentWords = $('.experiments-words');
    var aboutWords = $('.about-words');
    var caseStudiesWords = $('.case-studies-words');
    var contactWords = $('.contact-words');

    
    TweenMax.set(experimentWords, {
        visibility: 'visible'
    })
    
    TweenMax.set(aboutWords, {
        visibility: 'visible'
    })
    
    TweenMax.set(caseStudiesWords, {
        visibility: 'visible'
    })
    
    TweenMax.set(contactWords, {
        visibility: 'visible'
    })
    
    var splitExperiments = new SplitText('.experiments-words', {type: 'chars'});
    var splitCaseStudies = new SplitText('.case-studies-words', {type: 'chars'});
    var splitAbout = new SplitText('.about-words', {type: 'chars'});
    var splitContact = new SplitText('.contact-words', {type: 'chars'});
    
    TweenMax.set(splitExperiments.chars, {y: 30});
    TweenMax.set(splitAbout.chars, {y: 30});
    TweenMax.set(splitContact.chars, {y: 30});
    TweenMax.set(splitCaseStudies.chars, {y: 30});
    
    
    function cursorDragged (e) {
        
        if (this.hitTest(aboutDrop, overlapThreshold)) {
            TweenMax.staggerTo(splitAbout.chars, 0.3, {
                y: '0',
                ease: Back.easeOut.config(3)
            }, 0.01)
            } else if (this.hitTest(experimentDrop, overlapThreshold)) {
                TweenMax.staggerTo(splitExperiments.chars, 0.3, {
                    y: '0',
                    ease: Back.easeOut.config(3)
                }, 0.01)
            } else if (this.hitTest(contactDrop, overlapThreshold)) {
                TweenMax.staggerTo(splitContact.chars, 0.3, {
                    y: '0',
                    ease: Back.easeOut.config(3)
                }, 0.01)
            } else if (this.hitTest(caseStudiesDrop, overlapThreshold)) {
                TweenMax.staggerTo(splitCaseStudies.chars, 0.3, {
                    y: '0',
                    ease: Back.easeOut.config(3)
                }, 0.01)
            } else {
                TweenMax.staggerTo(splitAbout.chars, 0.25, {
                    y: '30'
                }, 0.01)
                
                TweenMax.staggerTo(splitExperiments.chars, 0.25, {
                    y: '30'
                }, 0.01)
                
                TweenMax.staggerTo(splitContact.chars, 0.25, {
                    y: '30'
                }, 0.01)
                
                TweenMax.staggerTo(splitCaseStudies.chars, 0.25, {
                    y: '30'
                }, 0.01)
            }
        
    };
    
    // Page Transitions Settings -------------------------------------------------------------------------------//
    
    var pageTransition = $('.transition');
    
    TweenMax.set(pageTransition, {
        visibility: 'visible',
        scale:'0',
        transformOrigin: '50% 50%'
    })
    
    var aboutHref = $('#about .circle-path').attr('href');
    
    
    function cursorDropped (e) {
        
        if (this.hitTest(aboutDrop, overlapThreshold)) {
            
//            TweenMax.to(pageTransition, 0.5, {
//                scale: '100',
//                ease: Power1.easeOut
//            })
            
            if (window.location === aboutHref) {
                return;
            }
            
            History.pushState(null, 'About', aboutHref);
            loadContent(aboutHref);
        }
    };

    function loadContent(url){
        $.get(url, function (data) {
            var content = $(data).find('.container-contents').html();
            $('.container').html(content);
        });
    }

    History.Adapter.bind( window, "statechange", function() {

        var state = History.getState();
        loadContent(state.url);
    });


});



















































































































































































