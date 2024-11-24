        /////  First testimonial /////

        var firstimg = $("#videoThumb");
        var firstconfigObject = {
            sourceUrl: firstimg.attr("data-videourl"),
            triggerElement: "#" + firstimg.attr("id"),
            progressCallback: function () {
                console.log("Callback Invoked.");
            }
        };

        var firstvideoBuild = new YoutubeOverlayModule(firstconfigObject);
        firstvideoBuild.activateDeployment();

        /////  Second testimonial /////

        var secondimg = $("#videoThumb_2");
        var secondconfigObject = {
            sourceUrl: secondimg.attr("data-videourl"),
            triggerElement: "#" + secondimg.attr("id"),
            progressCallback: function () {
                console.log("Callback Invoked.");
            }
        };

        var secondvideoBuild = new YoutubeOverlayModule(secondconfigObject);
        secondvideoBuild.activateDeployment();

        /////  Third testimonial /////

        var thirdimg = $("#videoThumb_3");
        var thirdconfigObject = {
            sourceUrl: thirdimg.attr("data-videourl"),
            triggerElement: "#" + thirdimg.attr("id"),
            progressCallback: function () {
                console.log("Callback Invoked.");
            }
        };

        var thirdvideoBuild = new YoutubeOverlayModule(thirdconfigObject);
        thirdvideoBuild.activateDeployment();

        /////  Fourth testimonial /////

        var fourthimg = $("#videoThumb_4");
        var fourthconfigObject = {
            sourceUrl: fourthimg.attr("data-videourl"),
            triggerElement: "#" + fourthimg.attr("id"),
            progressCallback: function () {
                console.log("Callback Invoked.");
            }
        };

        var fourthvideoBuild = new YoutubeOverlayModule(fourthconfigObject);
        fourthvideoBuild.activateDeployment();

        // $('#main-testimonial-carousell').owlCarousel({
        //     loop: true,
        //     margin: 10,
        //     nav: true,
        //     center: false,
        //     dots: true,
        //     responsive: {
        //         0: {
        //             items: 1,
        //             nav:true
        //         },
        //         600: {
        //             items: 2
        //         },
        //         1000: {
        //             items: 3,
        //             nav: false
        //         }
        //     }
        // })
        $('#main-testimonial-carousell .owl-carousel').owlCarousel({
            loop: false,
            margin: 10,
            nav: true,
            center: false,
            dots: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        })

        $('.owl-carousel').owlCarousel({
            loop: true,
            margin: 10,
            nav: false,
            center: true,
            dots: false,
            responsive: {
                0: {
                    items: 1.25
                },
                600: {
                    items: 1.7
                },
                1000: {
                    items: 2.5
                }
            }
        })