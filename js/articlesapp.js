let articlesapp = new Vue({
    el: '#articlesapp',
    data: {

        // heading and intro paragraph for the articles section
        articlesPageSecondaryHeading: "Sharing My Experiences and Expertise",
        articlesIntroParagraph: `As a wedding industry professional, it's my job to know the ins and outs of the industry. 
        It's this skill set that has made me a freelance writer for Green Wedding Shoes, a major US-based wedding blog. 
        I write on all sorts of wedding planning related topics, providing helpful advice and guidance to couples as they 
        put together their dream wedding day. In addition to my writing for Green Wedding Shoes, I have also submitted my 
        writing to a few other publications, where I've shared my experiences as an elopement photographer, along with my 
        journey as a woman in the great outdoors. This is just a small sample of my writing.`,

        // button text
        readMoreButtonText: "Read More",
        goToArticleButtonText: "Go to Article",
        
        // icon image for articles
        articleIcon: "multimedia/article-icon.png", // standard icon
        gwsArticleIcon: "multimedia/article-icon-gws.png", // Green Wedding Shoes icon
        thoughtCatalogArticleIcon: "multimedia/article-icon-thought-catalog.png", // Thought Catalog icon
        outboundArticleIcon: "multimedia/article-icon-outbound.png", // The Outbound icon

        // all article titles
        articleOneTitle: `When to Send Wedding Invitations`,
        articleTwoTitle: `A Story For the Folks Who Never Thought They’d Be "Outdoorsy"`,
        articleThreeTitle: `Here’s Why Elopements Aren’t Just A COVID-19 Trend`,
        articleFourTitle: `Where to Buy Dried Flowers and What You Need to Know About Them`,

        // publication names
        gws: "Green Wedding Shoes",
        outbound: "The Outbound",
        thoughtCatalog: "Thought Catalog",



        /* ----------------- DATA ABOUT ICON VISIBILITY -----------------  */

        // booleans to indicate if the standard non-brand specific article icon is visible, which we default to visible
        articleOneStandardIconVisibility: true,
        articleTwoStandardIconVisibility: true,
        articleThreeStandardIconVisibility: true,
        articleFourStandardIconVisibility: true,
        
        // booleans to indicate if the brand specific article icon is visible, which we default to not visible
        articleOneSpecificIconVisibility: false,
        articleTwoSpecificIconVisibility: false,
        articleThreeSpecificIconVisibility: false,
        articleFourSpecificIconVisibility: false,
        


        /* ----------------- DATA ABOUT ARTICLE BLURBS -----------------  */
        // blurbs about each article when the user wants to read more
        articleOneBlurb: `In this guide, I go into depth on the etiquette of sending wedding invitations and how you can properly plan for the process.`,
        articleTwoBlurb: `In my article for the Outbound, I dive into my experience with the great outdoors and how I went from a city girl to someone who 
        lives for outdoors adventures.`,
        articleThreeBlurb: `In my Thought Catalog article, I explain why elopements are not a trend created from the pandemic, and why they are (and have been) a
        strong niche in the wedding industry.`,
        articleFourBlurb: `In this article, I do a deep-dive into all things dried flowers, including where to get them and how to care for them.`,

        // booleans to indicate if the article blurbs are visible, which we default to not visible
        isBlurbOneVisible: false,
        isBlurbTwoVisible: false,
        isBlurbThreeVisible: false,
        isBlurbFourVisible: false,


        /* ----------------- DATA ABOUT BUTTON VISIBILITY -----------------  */
        
        // booleans to indicate if the read more buttons are visible, which we default to visible
        isReadMoreButtonOneVisibility: true,
        isReadMoreButtonTwoVisibility: true,
        isReadMoreButtonThreeVisibility: true,
        isReadMoreButtonFourVisibility: true,

        // booleans to indicate if the go to article buttons are visible, which default to not visible
        isGoToArticleOneVisibility: false,
        isGoToArticleTwoVisibility: false,
        isGoToArticleThreeVisibility: false,
        isGoToArticleFourVisibility: false,

    },

    methods: {

        /* When this method is called, the standard article icon for article one is hidden and the brand specific 
        one takes its place */
        hoverIconOne: function() {
            this.articleOneStandardIconVisibility = false; // hide the standard icon, always when hovered
            this.articleOneSpecificIconVisibility = true;
        },

        /* When this method is called, the standard article icon for article two is hidden and the brand specific 
        one takes its place */
        hoverIconTwo: function() {
            this.articleTwoStandardIconVisibility = false; // hide the standard icon, always when hovered
            this.articleTwoSpecificIconVisibility = true;
        },

        /* When this method is called, the standard article icon for article three is hidden and the brand specific 
        one takes its place */
        hoverIconThree: function() {
            this.articleThreeStandardIconVisibility = false; // hide the standard icon, always when hovered
            this.articleThreeSpecificIconVisibility = true;
        },

        /* When this method is called, the standard article icon for article four is hidden and the brand specific 
        one takes its place */
        hoverIconFour: function() {
            this.articleFourStandardIconVisibility = false; // hide the standard icon, always when hovered
            this.articleFourSpecificIconVisibility = true;
        },

        /* When an article icon is un-hovered, we revert back to the standard article icon. */
        unHoverIcon: function() {
            // re-show the standard icon for article one, and hide the brand-specific icon
            this.articleOneStandardIconVisibility = true;
            this.articleOneSpecificIconVisibility = false;

            // re-show the standard icon for article two, and hide the brand-specific icon
            this.articleTwoStandardIconVisibility =  true;
            this.articleTwoSpecificIconVisibility = false;

            // re-show the standard icon for article three, and hide the brand-specific icon
            this. articleThreeStandardIconVisibility = true;
            this.articleThreeSpecificIconVisibility = false;

            // re-show the standard icon for article four, and hide the brand-specific icon
            this.articleFourStandardIconVisibility = true;
            this.articleFourSpecificIconVisibility = false;
        },

        /* This method is triggered when the user wants to read more about article one. Thus, we 
        now hide the read more button, un-hide the article blurb, and show the button to read the 
        full article. */
        articleOneReadMore: function() {
            this.isReadMoreButtonOneVisibility = false; // hide the read more button
            this.isBlurbOneVisible = true; // display the blurb about the article
            this.isGoToArticleOneVisibility = true; // unhide the go to article button
        },

        /* This method is triggered when the user wants to read more about article two. Thus, we 
        now hide the read more button, un-hide the article blurb, and show the button to read the 
        full article. */
        articleTwoReadMore: function() {
            this.isReadMoreButtonTwoVisibility = false; // hide the read more button
            this.isBlurbTwoVisible = true; // display the blurb about the article
            this.isGoToArticleTwoVisibility = true; // unhide the go to article button
        }, 

        /* This method is triggered when the user wants to read more about article three. Thus, we 
        now hide the read more button, un-hide the article blurb, and show the button to read the 
        full article. */
        articleThreeReadMore: function() {
            this.isReadMoreButtonThreeVisibility = false; // hide the read more button
            this.isBlurbThreeVisible = true; // display the blurb about the article
            this.isGoToArticleThreeVisibility = true; // unhide the go to article button
        }, 

        /* This method is triggered when the user wants to read more about article four. Thus, we 
        now hide the read more button, un-hide the article blurb, and show the button to read the 
        full article. */
        articleFourReadMore: function() {
            this.isReadMoreButtonFourVisibility = false; // hide the read more button
            this.isBlurbFourVisible = true; // display the blurb about the article
            this.isGoToArticleFourVisibility = true; // unhide the go to article button
        }
    }
});