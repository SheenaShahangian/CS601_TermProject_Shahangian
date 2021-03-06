# Read Me - MET CS 601 Sheena Shahangian

The completed version of my website contains the HTML for 8 fully designed and styled pages that use JavaScript. The homepage is the filename "index.html". I have placed the stylesheet (styles.css) in the css directory, and all photos and icons within the "multimedia" directory. All JavaScript files can be found in the folder named "js". To access the live website (which is hosted on Netlify), please go to: https://vigilant-allen-c8453f.netlify.app/

To keep my code organized, I have split out my project into several JavaScript files with intentionally self-explanatory filenames).

Please note: I have seven pages in the navigation bar, but eight pages total. The eighth page is simply a form submission confirmation page, which should never be included in a main navigation, as that wouldn't make sense. However, this page does have the navigation bar on it, to encourage users to keep perusing the site after they have submitted their form. 

Please see below for a description of where I have included the requested elements (and where I have provided extras).

The website has been tested in Google Chrome, Firefox, and Safari. It has also been tested for responsiveness on different screen sizes.

Information on how I have completed extra credit can be found at the end of this report.




## GitHub

To view this project on GitHub, please visit this link: https://github.com/SheenaShahangian/CS601_TermProject_Shahangian

The repository is public, however should you have any trouble accessing it, please do not hesitate to reach out to me. I can be reached at sheenas@bu.edu.



## A Couple Notes Before We Begin

* All pages are styled using the same single external stylesheet, per the recommendation provided during week 2. As it is quite long, I have used comments to organize the code and make the stylesheet easy and clean to navigate. Media styles for tablet screen sizes and mobile screen sizes are located at the bottom of the stylesheet for easy reference, and thorough comments are provided throughout those sections as well.

* When running code through a validator, please note that two pages use Vue and thus will inevitably give HTML validation errors: these include shop.html and articles.html.

  

## The Intended Audience

Before diving into how I've met and exceeded requirements, it's important to note who the intended audience of this website is. For a living, I am a professional photographer who specializes in photographing small weddings (referred to as elopements) in adventurous locations (e.g., the mountains). To use the industry terminology, I am what is called an "adventure elopement photographer." My business's website (not to be confused with this portfolio assignment) focuses solely on this, with the intent of functioning as a sales funnel to get clients to inquire and book with me. My business's website (again, not to be confused with this term project, to be clear) is not a portfolio, but rather what I refer to as my "inquiry machine."

As such, before this course, I didn't really have a portfolio that showed off my overall creative skillset, beyond photographing adventure elopements. I, for example, also take and sell my landscape photographs. Furthermore, I am an avid traveler, and hope to provide travel advice and guidance to people visiting the mountain west. I'd love to have a portfolio that showcases that imagery and expertise. I also work as a freelance writer for a major wedding blog, and I want my portfolio to show off that work as well. In essence,  I wanted this term project to be my creative portfolio, showing off all the creative and artistic endeavors I work on as a creative professional. This site, while touching on my work as an adventure elopement photographer, is intended to go beyond that. It is intended to show that I am a well-rounded creative professional with a skill set beyond simply photographing weddings.

All of that said, there are a few target audiences for this site. The first would be any online publication that focuses on either the outdoors or wedding industry, looking for a freelance writer with expertise in these fields. This site, with its plethora of content and photographs within these niches, fully exemplifies my qualifications for freelance gigs like these.

Another target audience would be outdoors brands who want to work with a photographer who is well-versed in the outdoors space. I have yet to pursue commercial outdoors photography, beyond adventure elopements, but the idea interests me. I want a site that shows off that something like that could be in my wheelhouse, should the opportunity present itself.

The last target audience would be anyone interested in buying landscape prints from someone who spends much of her life and work in the great outdoors. I'm a big believer in always finding a way to monetize a website, and in this example, adding a landscape photography storefront was a perfect fit. While this is a portfolio site, there is no reason why I can't also point visitors towards making a purchase if they like my work.

See the linked image below for a brief recap of my target audience for this portfolio site:

<img width="1284" alt="Screen Shot 2021-12-10 at 11 25 18 PM" src="https://user-images.githubusercontent.com/74014027/145666745-5f77764c-4e65-4e91-a212-94ee6f6a0986.png">

## Noteworthy Changes Made Since My Live Presentation

I have made sure to incorporate all feedback provided to me during my live presentation on Friday. The first thing I did was make sure I implemented a hamburger style menu for mobile, as requested. For desktop and tablet, you will see the standard menu (with some style changes depending on screen size), but per the professor's request to not clutter the page too much, I have created an interactive hamburger for mobile screen sizes.

Per the request made about meaningful validation on the contact form, all user input errors that I write to the DOM on my contact form how contain detailed information on how to provide a valid input.

Lastly, it was requested that I better style the quiz form on the travels page. I have given it a background and rounded corners, much like the article cards on the articles page. In addition, I have used Flexbox on desktop screen size to make sure the labels are left aligned and the selects are right aligned, per request.

On tablet and mobile, I make all of these elements block level, as I believe this best suits the design for smaller screens.



## Requested Elements

### Design and Layout

* The layout and design of the site are intended to take a colorful, yet minimalist approach. I did not want to overload the site with information and design elements that would detract from the content. Yet, I still wanted to ensure there was a cohesive brand associated with this site. This approach makes sense, as this site is meant to emanate an aura of professionality. It is not intended to be too showy or over-the-top. Yet, I also wanted it to have enough color and design to maintain the visitor's interest.
* I custom created my own site logo and intentionally narrowed down on a refined color palette to use throughout the site. The color palette is consistent on every single page, and these pages all use the same stylesheet intentionally. Furthermore, I also custom designed all of my own icons for this website, rather than downloading icons off the web. I wanted to provide a fully customized and branded experience to the viewer, and this helped with that.
* All pages on the website clearly belong to the same site, and the design and layout are consistent. I have intentionally used class selectors in my css to allow the reuse of designs on various pages. This further enhances the consistency in design and layout on the page.
* As I speak to in greater detail in the CSS section, the site is responsive to three different screen sizes. I want to ensure my site functions for the greatest number of users as possible.

I have linked an image below showing the brand palette for my website. You'll notice the six swatch cards are similar in aesthetic and tone and have a very intentional feeling to them. Meanwhile, the color for the button is bright and loud. This is intentional marketing best practice, as you want your buttons to be easily noticed and clicked on. Bright colors make this possible. While there are six swatches primarily used, you will also notice that there are really only four colors used, as two are in the green family, two are in the pink family, one is in the brown/red family, and one is an off-white. This choice was intentional to ensure the color palette felt professional and not over-the-top. Yet, I did want to make sure the website had color, so that emphasis could be made on important elements on the site. This color palette achieves that mission.

<img width="911" alt="Screen Shot 2021-12-11 at 11 55 38 AM" src="https://user-images.githubusercontent.com/74014027/145688343-9855822b-4c2c-4f57-b436-d4ee8577333b.png">

### Text

* I have opted to use typefaces that are clean and legible. All typefaces used are san serif, as those are most legible when read on the screen (as indicated in our textbook).
* I have opted to go above and beyond by using Google Fonts, rather than the standard system fonts. I have, however, made sure to set fallback options for those Google Fonts in case the user's device cannot access them.
* I have chosen to only use 2 typefaces, per standard graphic design recommendation to not have too many typefaces in a single design. However, to ensure variety, I have leveraged various weights of the two typefaces. You will notice there feels like there is a variety of typefaces that are used, while still remaining cohesive in style. This is acheived by using a variety of weights and casing, all within the same font family.
* All content has been proof-read for quality, presentation, and errors. My IDE performs appropriate spell-checking as well.

### Navigation

* All pages on the website can be accessed via the main navigation bar. To access the home page, you can click the logo, as is customary in modern-day websites. The only exception to this linking structure is the contact form confirmation page (confirmation.html). This is because it is not customary to have a success page like this in the main navigation. It should only be visible once the user completes the call to action (in this case, submitting the contact form). You will notice, however, that this page does still have a navigation bar at the top, to encourage users to keep browsing, even after submitting the form. On desktop, I also have the contact navigation link as underlined (to show it's active) when you're on the confirmation page, because that makes stylistic sense, given that the user has just completed the contact form.
* The main navigation bar is crafted with a clean and uncluttered design to make traveling through the site easy.
* The website is well-organized, and the names of each tab in the navigation are abundantly clear as to what you can expect to see on the page. This is with the intent to increase click-through rates. The relationships between the pages are clear, and internal linking is provided throughout the site where it makes sense.
* All hyperlinks, whether in the navigation and beyond, are meaningful in their names.
* All page titles are appropriate and refer exactly to what that page is about.
* As the screen size narrows, I have ensured that line height is abundant enough so that links don't stack on top of each other in a messy way or feel too close. I intentionally left plenty of breathing room.
* Per the professor's feedback during my live presentation, I have applied a clean-designed hamburger menu for mobile to ensure the menu doesn't take up too much of the screen otherwise. I have custom made my own hamburger icon for this. To expand the menu on mobile, click the hamburger icon. To collapse the menu, click on the hamburger icon yet again.

### High Quality Imagery

* All images in the HTML have alt text attributed to them to ensure accessibility.
* Images have dimensions included where appropriate. However as requested, I would like to mention that explicit width and height are not always incorporated in my design, as I have certain images that I wanted to take up certain percentage of their containers (e.g., hero images that take up 100% container width or carousel images that I intend to take up 75% of the width of their container). For these, including explicit width and height would not have been appropriate and would have negatively impacted an intentional design choice. I have chosen percentages for a responsive site experience.
* All images were intentionally chosen to match the aesthetic of the website, and they have all been run through an image optimizer before being added to the multimedia folder. This image optimizer does not impact quality of images, but reduces the file size to make the site load faster. I have also sized images so that they don't take up excessive space if it's not needed. For example, images that function as hero images naturally are larger file sizes with larger dimensions. However, images I have used for two-column layouts or four-column layouts are smaller, as they will never take up the full desktop screen size. Meanwhile, icons used throughout the site take on more of a thumbnail or smaller size, as that is what is appropriate, given they will not be displayed in large formats.
* All images used on the website are custom images taken by myself. This is an important aspect of the theme of my website, as I am a professional photographer. 

### Mechanics

The site has been thoroughly tested to make sure there are no missing graphics or broken links. Tests have been conducted in the following browsers: Chrome, Firefox, and Safari. I have also tested out the website on various screen sizes and device sizes (using Chrome Dev tools).

### HTML Mastery

* I have applied meaningful id and class names in the HTML to make the css more understandable and provide meaning to my various elements used.
* Comments are used throughout my HTML to ensure readability and for making future modifications easier. The markup is more navigable due to the comments.
* I have incorporated semantic HTML throughout the website, and have avoided using divs unless they genuinely were the most appropriate elements to use. You will notice all pages on the website include a header, main, and footer, at a bare-minimum. Beyond that, focus was put on ensuring I used as much semantic HTML as possible. This includes, but is not limited to, using section tags, article tags, and aside tags.

### CSS Mastery

* Each element has at least one property value pair (and most of them have a lot more than just one, given I was aiming to create a professional design).

* In regards to creativity, I have attempted to treat this as a professional website, with clean branding, good amounts of whitespace, consistent brand palette/color usage, and the like.

* I have used media queries and Flexbox to ensure responsiveness for different screen sizes (I will speak to this in greater detail further down).

* I have used a variety of selectors, including class selectors, element/type selectors, id selectors, and descendant selectors. As much as possible, I have aimed to focus on element/type and class selectors to ensure greater reusability on the code.

* I have used Google Fonts rather than system fonts to give my website an elevated and customized look. However, I have also specified fallback fonts as well, in case my website visitors' devices cannot render the Google Fonts.

* I have intentionally chosen colors that are easily legible on various colors and surfaces on the website, so that nothing is difficult to read.

* I have intentionally limited my font families to two distinct primary fonts (both Google Fonts) in order to keep with design best practices of not having too many fonts on a single page.

* I have chosen and used a color palette that I have based my styles on to ensure consistency in branding. You will see those colors across the board on the website.

* I have included more than one property:value pair on nearly every selector I've used to make sure I fine-tuned my design. Specifically, all fonts are changed, colors are added, layout is modified, the pages are responsive, padding is modified, margins are modified, line height and letter spacings are modified, etc. This is by no means a comprehensive list, as it'd be quite long, but this is a sample of changes made.

* I have organized my css document with in-depth comments to ensure the design choices are clear and easy to find (which will make this website easier to modify in the future, when needed). I have also used comments to break up my stylesheet into sections that make it more digestible. This will make it easier to modify the css in the future.

* Per the professor's recommendation during lecture, I have placed all media queries at the bottom of the stylesheet for easy identification.

* Per the professor's recommendation during lecture, I have tried to use rems and percentages as much as possible, and have used pixels as little as possible.

* Per the recommendation in week 2's assignment, I have included all styles in one css file. This makes sense in this case, as the website is not a large enterprise endeavor. Should that change at any point, one could make the case for a multitude of stylesheets.

* I have incorporated several distinct differences based on screen size, as I wanted each device size to really be comprehensive and beautiful on its own (see media queries explanation further down for details). Specifically, I have used media queries on 39 different elements on screens with a max width of 640 pixels, and I have used media queries on 23 different elements on screens with a min width of 641 pixels and a max width of 1024 pixels. Generally speaking, the 641 - 1024 pixel screens have more real estate and thus incorporate a lot of the same structure and design as larger screens, which is why they have less elements leveraging media queries. On the other end of the spectrum, smaller screen sizes require much resizing and redesigning.

* It's important for me to acknowledge that I have incorporated divs, but I have only done this when absolutely necessary and when a semantic element wouldn't work and would produce a warning from the validator. While warnings are listed as acceptable, I wanted to avoid them as much as possible.

* There are several distinct differences in how the pages are presented based on screen size. Per the professor's recommendation, the branding and colors remain consistent, no matter the screen size. This is to ensure that the viewer doesn't get confused about which site they are on; it's best practice for the branding to stay the same. Where I have incorporated changes is in doing things like modifying the navigation bar for mobile, changing font size depending on screen size, hiding elements on smaller screens for a more streamlined view, changing the number of columns, changing text alignment on smaller screens to make reading easier, etc. I go into full detail on how media queries were used to accomplish this below. Before we begin, these are the screen sizes and names I'll be referring to in this report:

  1. Anything referred to as **mobile** in this report is a screen size of: *maximum 640 pixels*.
  2. Anything referred to as **tablet** in this report is a screen size of: *minimum 641 pixels and maximum 1024 pixels*.
  3. Anything referred to as **desktop** in this report is the default and is *1025 pixels or more*.

  I have used media queries to make the following substantial changes, based on the aforementioned screen sizes. This is by no means a comprehensive list of changes made using media queries, however, as that would be extremely long:

  * On mobile, the logo image is no longer floated and is represented as a block level element so it can stack above the navigation links.
  * The navigation bar adapts based on screen size. From desktop to tablet dimensions, the navigation link font gets smaller to accommodate the smaller screen size, and a chunky underline is added to all navigation links.  In the mobile version, the links are stacked on top of each other, rather than horizontal (and they use a hamburger menu to show and hide). The font is also reduced in size, all links have a chunky underline, they are left aligned, and have had their padding and left margin modified to look good on a smaller screen size.
  * The h1 on tablet is smaller than desktop, the line height is modified, and the font weight is lighter. The h2 and h3 on tablet also have reduced font sizes and line heights as well. These changes made the text less large and intense when viewed on a smaller screen size like a tablet.
  * The h1 on mobile is smaller than both desktop and tablet, the line height is modified, and the font weight is lighter. However, beyond that, the text is also aligned to the left, as it has been recommended in the design world for mobile versions to have left aligned text to make things easier to read. To accommodate the left alignment, the left and right margins had to be modified as well. This was to ensure there was enough space on either side of the text. The h2 and h3 elements on mobile also incorporate this reduction of font size, line height, the change to left alignment (in most cases), and the addition of margin on the left and right side. One thing to note: on mobile, the letter spacing on the h3 was also changed, as it looked too wide otherwise. It is now more condensed and cleaner.
  * Since mobile h3s are left aligned, I wanted to override that feature for h3's used on the image gallery cards. So those were modified to still be center aligned.
  * The paragraph text size is also reduced in size on tablet, compared to desktop. On mobile, the paragraphs are even smaller, but the distinct difference is the change to left alignment, which incorporates the addition of margin on the left and right. I also modified the width of the paragraphs to be 80%, which makes for a cleaner and more streamlined design. There are exceptions to this on mobile; for example, the price paragraph on the shop page's image gallery cards. For that text, I have used media queries to keep it center aligned.
  * The image gallery cards (which represent the cards that the framed landscape prints are on) use media queries to have a width of 40% on tablet (compared to the default 22% on desktop). This allows the cards to take up more space on the smaller tablet size screen. Similarly, on mobile, a width of 80% is used to allow for each card to take up most of the width of the screen for a single column look on very small devices.
  * Similarly, the four column info cards (e.g., used on the home page), take up 22% width on desktop and tablet, yet on mobile, they transition to 90% width of the flex container they are in.
  * On tablet size screens, I used media queries to make my unordered lists have a larger width so that they take up more screen real estate. Their font size is also reduced to accommodate the smaller screen size. On desktop, the percentage of screen the unordered list took up was much smaller, to leverage whitespace. I have done a similar thing with mobile, increasing the width of the unordered list and reducing the font size.
  * On tablet, the td elements for my table have a reduced font size and a reduced line height to accommodate the smaller screen size. For mobile, I have reduced the font size and line height of the td elements even more, for the even smaller screen size. In addition, on mobile, I have also reduced the font size on the th elements.
  * On desktop, all three columns in the table on the biography page are visible. To make the mobile design more streamlined and less cluttered, I have hidden that last column using media queries for the publication location. For tablet, I have done the same, but for publication date/year.
  * On desktop and tablet, the aside takes up 40% of the width and gives a sort of multi-column effect with the content that sits next to it (I used float to accomplish this). On mobile, however, that didn't make sense, so I changed float to none so the aside could take up its own column and sit above the content it previously sat next to on tablet and desktop. The aside is now centered and takes an 80% width.
  * On desktop, the iframe used to embed YouTube videos on the biography page has a width of 60%, and media queries were used to change this to 100% for both tablet and mobile.
  * **Extra Credit Note: **I have used Flexbox to create a two column layout on portions of the home page, the biography page, the travels page, and the form submission confirmation page. However, on mobile, I do not want two columns for these spots; I'd rather have one, so the content can be larger. Thus I have used media queries to do that and change the flex container to display like a block level element. The cards/contents in that container now have a width of 100% instead of 50%, as the 50% was only relevant for tablet and desktop. Similarly, on the articles page, I have also used Flexbox to create a two column layout for displaying four of my articles. This two column layout is consistent on both desktop and tablet settings, but turns into a one column layout when you transition to mobile-like width.
  * Generally speaking, media queries are used on this site to make font size and text alignment feel proportionate to screen size. They are also used to ensure that multi-column layouts render as a single column on mobile, as that makes more sense on that screen size. All of these changes are to increase readability, while still maintaining the intended design and aesthetic.

### JavaScript and DOM Mastery

At the most basic level, JavaScript was used to make the buttons on my website interactive, whether that was a button using window.open() to go to an external site or calling functions that performed other conditional actions.

You'll notice that, aside from my h1 animations and navigation hamburger functionality for mobile, I don't really use the same JavaScript across all pages consistently. It tends to vary on a page-by-page basis, unlike, for example, my styles. Given that, I have opted to split up my JavaScript into various different files to ensure faster load times.

All JavaScript files can be found in the js folder. I will avoid speaking to the shopapp.js and articlesapp.js files, as those I go into more detail on in the Vue section (below). But I will speak to all the other js files below and what they do.

Given the interconnectedness of the DOM in my JavaScript, I have opted to group together the section on DOM with the section on JavaScript, as they go hand-in-hand in much of my code.

#### 1. animations.js

This JavaScript file is responsible for the animations of text that you see on the h1 on every page of the website. While I specifically used animations on h1s, they can be used on any text with the class "animated_heading". You'll notice I use the query selector(document.querySelector()) to grab the element from the DOM with that class name.

This is done so I can split the contents of this text into an array by character. I then re-assign the inner text of that heading to be blank, as I'll want to replace it with the animated text. The reason for splitting the contents of the original text into an array was so that I could make each letter into a span that could then have animations applied to it.

So I then use a function I named eachLetterInSpan() that converts the original text so that each letter is wrapped in span tags with a class of "letter_span", and this completed string with spans is written to the innerHTML.

My makeAnimation() function is really where the magic happens here, though. First, I use querySelectorAll to get all elements that are of the class "letter_span", which was all the letter spans I created in the previous function. Essentially, I need to get all the letters (that are contained in the spans of class .letter_span). I do this so I can then add the class "fading_animation" to each of them, which gives the letter an opacity of 1 (whereas you'll notice that the class letter_span in the CSS actually has an opacity of 0.15). Essentially, this allows an animation to each letter where it goes from being nearly transparent to completely opaque.

**Extra Credit Note: **You'll notice in this JavaScript file the use of an ES6 feature: the template string. It is used in my eachLetterInSpan() function. I have also used the for...of loop as well within this same function, which is another ES6 feature. I have also only used let and const here, rather than var.

#### 2. bucketlist.js

The intent of the bucketlist.js file is to fetch data I have included in a JSON file (by the name of bucketlist.json) that contains the names of destinations that are on my travel bucket list. The program fetches this data and then populates an unordered list located in an aside on the travels page (https://vigilant-allen-c8453f.netlify.app/travels.html) with this content. Please note, in order for fetch to work, this feature must be viewed on the live site.

I have a variable I name bucketListContainer in this JavaScript file that I do the following on: document.querySelector(".travel_list"). I use the querySelector to grab the element from the DOM with the class name travel_list, which is what will eventually hold the fetched contents of my travel bucket list.

After fetching the necessary data from the JSON file (using fetch, introduced in Module 5), I then use bucketListContainer.innerHTML to essentially write in the new list items into the container.

**Extra Credit Note: **You'll notice in this JavaScript file the use of an ES6 feature: the template string. It is used when populating my li (list items) with the contents/locations from the JSON file. Arrow functions and promises, both new ES6 features, are used in this file as well. I have also only used let and const here, rather than var. Furthermore, I have also used an async function, per the professor's recommendation (which is an ES8 feature).

I have also used fetch and data stored in a JSON file that I then use to populate content on the website. This is another extra credit item.

#### 3. carousel.js

As much of my website is imagery-focused, I wanted to try my hand at building a carousel in JavaScript. The carousel I built lives on the travels page (travels.html or https://vigilant-allen-c8453f.netlify.app/travels.html), and has "next" and "prev" buttons that allow the user to click and circle through the images in forward or reverse order for as long as they'd like (it'll circle back to the beginning in a loop, no matter). I had to use a little bit of mathematical magic, using the modulus operator to make this work.

In travels.html I have four divs that contain only an image that will represent a carousel slide. As such, each div is of the class "carousel_slide". In addition all images, except for the first one are of the class "hidden_slide". The first image is of class "visible_slide", as I want this slide to be the one that is seen in the carousel (as the carousel shows one image at a time).

Underneath the divs you'll find two buttons. One is used to go to the next image and the other is used to go to the previous image. Each of these buttons has a DOM event (the onclick event). For the previous button, a click triggers the previousSlide() function, and for the next button, a click triggers the nextSlide() function.

So how do we actually go from one slide/image to the next? That's where my carousel.js file comes in. 

This file contains both the previousSlide() and nextSlide() functions. However, before we do anything with those functions, first we must get all the items in the carousel. I do this with this line: const carouselItems = document.querySelectorAll(".carousel_slide"); which uses querySelectorAll to grab all divs with the class "carousel_slide".

I also set a slide index that keeps track of which slide we're on.

The nextSlide() function's responsibility is to hide the current slide and make the one in the next index over visible (we are changing the class name of the current slide to "hidden_slide" and the next one to "visible_slide"). 

The previousSlide() function does something similar, but in the opposite direction. It, too, hides the current slide, by changing its class name (which in turn will change its styles and make it invisible). However, it will now make the previous image (by index) the visible one.

**Extra Credit Note: **You'll notice in this JavaScript file the use of an ES6 feature: the use of let and const rather than var.

#### 4. contactform.js

As the name implies, contactform.js contains the logic and program that is used for my contact form (contact.html or https://vigilant-allen-c8453f.netlify.app/contact.html).

As can be expected, this program starts with grabbing various elements in the DOM. These include the form itself, the first name input, the last name input, the email input, and the phone number input.

With this contact form, I wanted to level-up what we learned from the assignments. I wanted to add additional fields, like email and phone numbers (with the appropriate verifications). I also wanted to include a text area where users can provide a detailed message to me about why they are contacting me. I also experimented with including placeholder text in the text area, but I digress, as that is HTML. Let's get back to JavaScript!

When the user clicks the submit button, an event listener is set up to run validations. If the validations don't pass, the form won't submit. If they do, the user is directed to a confirmation page that lets them know their form has successfully submitted (this page is confirmation.html). So let's talk about what happens with these validation checks.

I very much liked the validation checks that were asked of us for the week 4 assignment for first and last name, and have implemented something similar. First and last names must include a-z characters, whether upper or lowercase. They can't include other characters, and they must be at least two characters in length. I trim whitespace to not allow for dummy spaces as text.

Beyond these validations, however, I also use a regex to validate that the user has inputted a valid email. This validation goes beyond the standard HTML5 validation for email.

Furthermore, I perform validation for a phone number, which accepts a few different variations of phone numbers. For example, the user could enter their phone number as 6789259183 or they could enter it as 678-925-9183 or they could enter it as (678)925-9183. It also accepts other quirky variations like: (678-925-9183. This validation offers more flexibility to the user.

When a form field is valid and the user submits, a success message is written to the DOM. Otherwise, a meaningful error message is written to the DOM. This is to ensure that the user knows what they did wrong and can course-correct when filling out the form again. I have used colors and bold text to get the point across.

Specifically, I have spans that are hidden when the form is first accessed. I then use document.getElementById() to grab the necessary span to write either a meaningful error message or a success message to the DOM, as appropriate in that scenario.

**Extra Credit Note: **You'll notice in this JavaScript file the use of an ES6 feature: using const and let rather than var. I have also used an arrow function within the addEventListener() method.

#### 5. dropdowns.js

One of the things I love seeing on websites is a drop-down/accordion Q&A. Specifically, I think it provides websites with a clean way to have a content-rich page, without making a page feel like it's full of large blocks of text. These dropdown accordions make it easy to expose and hide information, as needed. As such, I have included one of the shop page (shop.html or https://vigilant-allen-c8453f.netlify.app/shop.html), so that questions about purchasing items on the shop can be addressed (this is located underneath the prints themselves). I have also included a dropdown Q&A on the elopements page (elopements.html or https://vigilant-allen-c8453f.netlify.app/elopements.html), as elopements are a new concept to many, and I wanted to answer some common questions about them.

To explain how this works, let's reference shop.html. Towards the bottom of the page, I have a section with a class name of "dropdown_content". This section contains frequently asked questions and their answers. Each Q&A combination is contained within an article, and within that article are two key elements. The first element is a div with class "question_and_icon" which contains the question alone, with an arrow icon. The second element is a paragraph, which we want to be invisible at first, that contains the answer to the question.

Now that we've gone over the HTML, that'll further clarify what is going on in the dropdown.js file. You'll notice that the div with the "question_and_icon" class, which as I mentioned earlier, contains the question and arrow icon, has an onclick event so that when it's clicked on, a function toggleDropdownAccordion() is called.

This function grabs the answer, which defaults to being hidden originally, and changes its class to "visible" so that stylistically it now shows up. We also need the functionality to re-hide as well, so we can close a question up. I have a toggleFlag that is a boolean that allows us to check the status of whether an answer is visible or not. If the flag is true, we actually want to hide the answer contents. So we do so, and then set the flag to false.

In regards to the DOM, the way I access the answer is through the following line of code: const answer = question.nextElementSibling; where I use the nextElementSibling to access the answer, which then allows me to modify the answer content so it then incorporates either the class name "visible" or "invisible", which allows for that toggling.

**Extra Credit Note: **You'll notice in this JavaScript file the use of an ES6 feature: using const and let rather than var.

#### 6. travelform.js

At the bottom of my travels page, I have incorporated a fun little quiz form that helps the viewer determine which travel destination they should go to next. I accept the user's answers, calculate the results, and then write those results to the DOM.

I assigned ids to all of my selectors that are used for each question on the quiz. Then, within my travelform.js file, I use document.getElementById() to get the user's responses from these selectors. It's these responses that I use to determine the answer to the quiz.

**Extra Credit Note: **You'll notice in this JavaScript file the use of an ES6 feature: using let rather than var. I have also used template strings when concatenating the various aspects of the user results to write to the DOM.

#### 7. nav.js

This JavaScript file is used on every page of the website, as it is used to allow my hamburger menu to work. 

**Extra Credit Note: **You'll notice in this JavaScript file the use of an ES6 feature: using let rather than var. I have also used a for...of loop, which is another ES6 feature.



### Vue Mastery

I have opted to go above and beyond by including Vue on more than one page on my website. As Vue is new to me, I wanted to ensure I experimented on multiple pages. The first place that Vue is used on the site is on the "shop.html" page. This page is where I have landscape prints listed for sale. The second use of Vue is on the "articles.html" page. I'll speak to each next:

#### Shop Page Use of Vue

One of the pages that uses Vue on my website is the shop page. Specifically, there is a section with the id of "shopapp" that is used to introduce the print shop and show eight prints that can be purchased that has used Vue. The corresponding JavaScript file that contains my Vue instance is named shopapp.js and is located in the js folder.

The name of the print shop and the print shop introductory paragraph are populated with data from the shopapp.js file, and I have used the double curly braces to do so. I have done the same to render data for each print's name, the price for each print (which was an excellent fit, since that price is the same for all prints, which makes price updates an easy update from one single location in the shopapp.js file), and the shop call-to-action button text on each print's button (again, which is the same, so using Vue's expressions to tie the data to the appropriate location in the HTML using double curly braces was a natural fit).

The images of each framed landscape print are clickable, and previously I had hard-coded in the URL into the HTML for this. With the introduction of Vue, I have used Vue data binding to link URLs specified in the shopapp.js file (which contains the Vue instance), to those href tags.

Lastly, I used v-on:click, which calls the window.open() method that I use to make the buttons clickable and redirect to my gallery delivery system where a user can actually complete a purchase for a print.

#### Articles Page Use of Vue

The other page on my site that uses Vue is the articles page. This page is used to display a collection of articles that I have written for various publications. Specifically, there is a section with the id of "articlesapp" that is used to introduce the articles and show four interactive cards with information about each article. The corresponding JavaScript file that contains my Vue instance is named articlesapp.js and is located in the js folder.

The h2 and introductory paragraph that introduce the articles page are populated with data from the articlesapp.js file, and I have used the double curly braces to do so. I have done the same to render data for each article's title/name, each article's publisher (which was an excellent fit, since one publisher is listed multiple times), each article's blurb of informational text that talks about what the article is about, and each article's call-to-action buttons' text (each card has two buttons, one that says "Read More" and one that says "Go to Article". Again, with the button text, the text is consistent across all article cards, so using Vue's expressions to tie the data to the appropriate location in the HTML using double curly braces was a natural fit).

On the articles page, I have truly tried to put Vue to the test to create an interactive page. You'll notice that when you first enter this page and go down to the section showing the cards with article information on them, that there are icons over each article title. I've designed custom icons for these, and when you hover on those icons, the icon design changes slightly and shows the name of the publication in small text. When you hover off, it then becomes the original article icon (which is a generic, non-publisher specific design). I have used v-show and boolean values to determine which icon is shown when, and I use @mouseover and @mouseleave to call methods located in my Vue instance which change those boolean values so that what shows varies depending on whether or not the icon is hovered over.

Furthermore, you'll notice each article's card at first contains a button that says "Read More". This can be clicked (and uses v-on:click) to show a blurb of text about what the article is about. You'll also notice that when this button is clicked, the blurb shows and the "Read More" button disappears. This is because the boolean value associated with v-show for that button has been modified. You'll also notice that the "Go to Article" button, which was previously not visible, is now visible, due to a change in its v-show boolean value. Thus, when you click "Read More", the "Read More" button disappears and you see a blur of text about the article and another button saying "Go to Article". This dynamic behavior leverages Vue.

Lastly, v-on:click is used on the "Go to Article" buttons to call the window.open() method, which then opens up the actual article's URL in a new tab when the button is clicked.



### Validation/Accessibility

* In order to make the website accessible, I have ensured that all images have appropriate and descriptive alt text. In addition to that, all form controls used on the site have labels included with them.

* In case Google Fonts cannot be rendered or accessed, I have specified fallback fonts for my site.

* I have run my css through a validator and it passes with no errors and no warnings.

* I have run all HTML pages through validators (all the ones that don't use Vue) and they all pass with no errors and no warnings. Please see how I have performed validation on Vue pages in the section below.

* Not only is using semantic HTML introduced with HTML5 important from a development standpoint, as it provides additional meaning to the code when I look at it to make modifications as a developer, but it is also an important aspect of accessibility for screen readers. I want my site to be accessible to everyone, which is why ensuring I have used semantic HTML as much as possible has been a priority. As a basis for this, for example, all pages have at the bare minimum  a header element (with a nav element nested within it), a main element, and a footer element. These provide context for those using screen readers. Furthermore, from a code standpoint, I also can see how it makes my code easier to digest and modify. The meaning and intent are clear.

  Other examples of semantic HTML elements used on my website include (but are not limited to): the table tag (to indicate a table of data), the form tag (to indicate a form the user can fill out), the article tag (to indicate a self-contained component on a page), the section tag (which I commonly used to group related content into grouped sections), and the aside (which I use for content that feels more like an informational sidebar rather than primary content).

#### A Note About Validation

Please note that if you run the HTML on the shop.html page or the articles.html page, you will receive inevitable errors and warnings for the parts of the page that have incorporated Vue, as the validator does not understand Vue. That said, I have ensured that these pages passed all validations prior to the addition of Vue, and also double checked that all errors were Vue-related and not actual HTML errors.

I have provided a screenshot image link below of the shop.html page run through HTML validation to show that the errors and warnings are all Vue related. For example, when it says the a tag is missing an href attribute or img tag is missing the src attribute, that is because I have used Vue to do that.

<img width="1594" alt="Screen Shot 2021-12-11 at 11 06 02 AM" src="https://user-images.githubusercontent.com/74014027/145687028-56bdd2d2-75a6-4229-ab28-902459f7973b.png">

I have provided a screenshot image link below of the articles.html page run through HTML validation to show that the errors and warnings are all Vue related. Again, you will see a similar trend of the validator complaining about attributes not being allowed or attributes being missing. All attributes are there, just simply using Vue.

<img width="1586" alt="Screen Shot 2021-12-11 at 11 06 12 AM" src="https://user-images.githubusercontent.com/74014027/145687079-0ead154d-9d19-4719-85df-0f23c61f8083.png">



### Extra Credit - How I Went Above and Beyond

I've attempted to add some new features beyond the standard requirements listed in the rubric. I have noted these throughout the report above, in sections named **Extra Credit Note**, but I'll provide an overview again here. These include: 

#### Making My Site Responsive Using CSS Flexbox

I have incorporated Flexbox for my multi-column layouts (as I read online that floats are less and less common these days and should start to be phased out, although I did use floats too to get some practice in). You'll notice Flexbox, for example, used on the articles pages for the two-column layout of articles. It is also used on the home page, the biography page, the travels page, and the confirmation page for two column layouts as well. I have also used it for four column layouts on the site as well.

Let's take the home page as a good example of frequent use of Flexbox. I have a four column layout (on desktop view) in the section with the h2 "The Many Sides of Sheena". This four column layout is created using Flexbox. I'll provide an image linked below of this part of the website:

<img width="1672" alt="Screen Shot 2021-12-10 at 10 46 41 AM" src="https://user-images.githubusercontent.com/74014027/145618694-78fb88c2-b5ca-4966-8a0d-f7f6e2fbceae.png">



I also have another example of a four column layout on the travels page, as can be seen via the image linked below:

<img width="1667" alt="Screen Shot 2021-12-10 at 2 48 30 PM" src="https://user-images.githubusercontent.com/74014027/145645593-271d33b5-d3dc-4678-8201-7639346fa4d6.png">

As you scroll further down the home page, you'll see another h2 "Let's Go on a Journey", which has an introductory blurb. Underneath that blurb paragraph, you'll come across a two column layout (on desktop view). This was also accomplished using Flexbox. I use both the two column and four column layout throughout the website, but this page highlights both of them nicely in one place. I'll provide an image linked below of this part of the website:

<img width="1061" alt="Screen Shot 2021-12-10 at 10 47 24 AM" src="https://user-images.githubusercontent.com/74014027/145618801-fbc66021-c0a3-4d23-ab45-cfa22e2ec770.png">

Flexbox has allowed me to create a website with a more complex layout that felt more dynamic and interesting than having everything lined up in single columns going down the page, as would be standard otherwise for any block level elements. You'll notice the number of columns does change as screen size is modified. For example, on the home page, the two column layout is two columns on desktop and tablet screen sizes, but becomes single column on desktop, as that is recommended design best practice. Meanwhile, for the four column layout, I have opted to keep four columns on desktop only, and have them become a single column on both tablet and mobile.

Another use of Flexbox on my website, as mentioned earlier in this report, was on my articles page, where I wanted to have card-like columns for each article. A linked image below shows this design using Flexbox yet again:

<img width="1671" alt="Screen Shot 2021-12-10 at 1 31 33 PM" src="https://user-images.githubusercontent.com/74014027/145637626-9b76ab33-655d-40c7-ac69-65537c5c4e9d.png">



Please note, the images linked above are not an exhaustive collection of all uses of Flexbox on my website, but rather a sample example.

#### Adding ES6 or Higher Functionality + Including Content From Module 5 (Including the Fetch API)

I have used multiple ES6 functionality and higher, along with the content taught in Module 5 regarding fetch, async, and await. Specifically, I have used fetch to grab data from a JSON file I created. This file contains a list of places I have on my travel bucket list, which is pulled and populated in a list on the travels page on my website. For ES6 functionality and higher, you'll notice an abundant use of template strings throughout the project's JavaScript files. I have also leveraged the for...of loop, arrow functions, using let and const instead of var, and promises. My goal was to test out several ES6 functionalities in this term project.

Please note, I have provided detailed notes about where ES6 and higher functionality was included within my section above on JavaScript and DOM mastery. Should you like to see more details on this, please reference the **Extra Credit Note** sections in that area of the report.



#### Additional Ways I Have Gone Above and Beyond

* I have created custom imagery for my website, including my own logo, and icons that I personally designed. All images used on the website are also images that I have taken.

* I have run all imagery through an image optimizer prior to being added to the website, to ensure they are not too large.

* I have included meta descriptions on all HTML pages to give my website an added SEO benefit.

  
