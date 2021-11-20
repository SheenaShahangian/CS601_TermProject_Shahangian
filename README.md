# Read Me - MET CS 601 Sheena Shahangian

This iteration of my website contains the HTML for 8 pages all styled using CSS. The homepage is the filename "index.html". I have placed the stylesheet in the css directory, and all photos within the "multimedia" directory. JavaScript can be found in the js directory. Please see below for a description of where I have included the requested elements (and where I have provided extras).

The website has been tested in Google Chrome, Firefox, and Safari. It has also been tested for responsiveness.


## GitHub

To view this project on GitHub, please visit this link: https://github.com/SheenaShahangian/CS601_TermProject_Shahangian

The repository is public, however should you have any trouble accessing it, please do not hesitate to reach out to me. I can be reached at sheenas@bu.edu.



## A Couple Notes Before We Begin

* 

## Requested Elements

1. Per the assignment instructions, all pages are styled using the same single external stylesheet. As it is quite long, I have used comments to organize the code. Media styles for tablet screen sizes and mobile screen sizes are located at the bottom of the stylesheet for easy reference.

2. Each element has at least one property value pair (and most of them have a lot more than just one, given I was aiming to create a professional design).

3. In regards to creativity, I have attempted to treat this as a professional website, with clean branding, good amounts of whitespace, consistent brand palette/color usage, and the like.

4. There are well more than the three required distinct differences in how the pages are presented based on screen size. Per the professor's recommendation, the branding and colors remain consistent, no matter the screen size. This is to ensure that the viewer doesn't get confused about which site they are on; it's best practice for the branding to stay the same. Where I have incorporated changes is in doing things like modifying the navigation bar for mobile, changing font size depending on screen size, hiding elements on smaller screens for a more streamlined view, changing text alignment on smaller screens to make reading easier, etc. I go into full detail on how media queries were used to accomplish this below. Before we begin, these are the screen sizes and names I'll be referring to in this report:

   1. Anything referred to as **tablet** is a screen size of: *minimum 641 pixels and maximum 1024 pixels*.
   2. Anything referred to as **mobile** is a screen size of: *maximum 640 pixels*.
   3. Anything referred to as **desktop** is the default and is *1025 pixels or more*.

   I have used media queries to make the following substantial changes using media queries, based on the aforementioned screen sizes:

   * On mobile, the logo image is no longer floated and is represented as a block level element so it can stack above the navigation links.
   * The navigation bar adapts based on screen size. From desktop to tablet dimensions, the navigation link font gets smaller to accommodate the smaller screen size, and a chunky underline is added to all navigation links.  In the mobile version, the links are stacked on top of each other, rather than horizontal. The font is also reduced in size, all links have a chunky underline, they are left aligned, and have had their padding and left margin modified to look good on a smaller screen size.
   * The h1 on tablet is smaller than desktop, the line height is modified, and the font weight is lighter. The h2 and h3 on tablet also have reduced font sizes and line heights as well. These changes made the text less large and intense when viewed on a smaller screen size like tablet.
   * The h1 on mobile is smaller than both desktop and tablet, the line height is modified, and the font weight is lighter. However, beyond that, the text is also aligned to the left, as it has been recommended in the design world for mobile versions to have left aligned text to make things easier to read. To accommodate the left alignment, the left and right margins had to be modified as well. This was to ensure there was enough space on either side of the text. The h2 and h3 elements on mobile also incorporate this reduction of font size, line height, the change to left alignment, and the addition of margin on the left and right side. One thing to note: on mobile, the letter spacing on the h3 was also changed, as it looked too wide otherwise. It is now more condensed and cleaner.
   * Since mobile h3s are left aligned, I wanted to override that feature for h3's used on the image gallery cards. So those were modified to still be center aligned.
   * The paragraph text size is also reduced in size on tablet, compared to desktop. On mobile, the paragraphs are even smaller, but the distinct difference is the change to left alignment, which incorporates the addition of margin on the left and right. I also modified the width of the paragraphs to be 80%, which makes for a cleaner and more streamlined design. The only exception to this on mobile is the price paragraph on the shop page's image gallery cards. For that text, I have used media queries to keep center aligned.
   * The image gallery cards (which represent the cards that the landscape prints are on) use media queries to have a width of 40% on tablet (compared to the default 22% on desktop). This allows the cards to take up more space on the smaller tablet size screen. Similarly, on mobile, a width of 80% is used to allow for each card to take up most of the width of the screen for a single column look on very small devices.
   * On tablet size screens, I used media queries to make my unordered lists have a larger width so that they take up more screen real estate. Their font size is also reduced to accommodate the smaller screen size. On desktop, the percentage of screen the unordered list took up was much smaller, to leverage whitespace. I have done a similar thing with mobile, increasing the width of the unordered list and reducing the font size.
   * On tablet, the td elements for my table have a reduced font size and a reduced line height to accommodate the smaller screen size. For mobile, I have reduced the font size and line height of the td elements even more, for the even smaller screen size. In addition, on mobile, I have also reduced the font size on the th elements.
   * On desktop, all three columns in the table on the biography page are visible. To make the mobile design more streamlined and less cluttered, I have hidden that last column using media queries for the publication location. For tablet, I have done the same, but for publication date/year.
   * On desktop and tablet, the aside takes up 40% of the width and gives a sort of multi-column effect with the content that sits next to it (I used float to accomplish this). On mobile, however, that didn't make sense, so I changed float to none so the aside could take up its own column and sit above the content it previously sat next to on tablet and desktop. The aside is now centered and takes an 80% width.
   * On desktop, the iframe used to embed YouTube videos on the biography page has a width of 60%, and media queries were used to change this to 100% for both tablet and mobile.
   * I have used Flexbox to create a two column layout on portions of both the home page and the biography page. However, on mobile, I do not want two columns for these spots; I'd rather have one, so the content can be larger. Thus I have used media queries to do that and change the flex container to display as a block level element. The cards/contents in that container now have a width of 100% instead of 50%, as the 50% was only relevant for tablet and desktop.



### Incorporation of Other Additional Elements - How I Went Above and Beyond

I've attempted to add some new features beyond the standard requirements listed in the rubric. These include: 

* I have used Google Fonts rather than system fonts to give my website an elevated and customized look. However, I have also specified fallback fonts as well, in case my website visitors' devices cannot render the Google Fonts.

* I have used a variety of selectors, including class selectors, element/type selectors, id selectors, and descendant selectors. As much as possible, I have aimed to focus on element/type and class selectors to ensure greater reusability on the code.

* I have intentionally chosen colors that are easily legible on various colors and surfaces on the website, so that nothing is difficult to read.

* I have included more than one property:value pair on nearly every selector I've used to make sure I fine-tuned my design. Furthermore, I have styled the page in such a way that this new version looks nothing like the HTML version of the website from last week. Specifically, all fonts are changed, colors are added, layout is modified, the pages are responsive, padding is modified, margins are modified, line height and letter spacings are modified, etc. I won't make a comprehensive list here, as it'd be quite long, but these are some of the changes that have been made.

* I have organized my css document with in-depth comments to ensure the design choices are clear and easy to find (which will make this website easier to modify in the future, when needed). I have also used comments to break up my stylesheet into sections that make it more digestible. This will make it easier to modify the css in the future.

* Per the professor's recommendations, I have placed all media queries at the bottom of the stylesheet for easy identification.

* I have incorporated several more than the three required distinct differences based on screen size, as I wanted each device size to really be comprehensive and beautiful on its own (see media queries explanation in the section above for details). Specifically, I have used media queries on 17 different elements on screens with a max width of 640 pixels, and I have used media queries on 10 different elements on screens with a min width of 641 pixels and a max width of 1024 pixels. Generally speaking, the 641 - 1024 pixel screens have more real estate and thus incorporate a lot of the same structure and design as larger screens, which is why they have less elements leveraging media queries. On the other end of the spectrum, smaller screen sizes require much resizing and redesigning.

* I have chosen and used a color palette that I have based my styles on to ensure consistency in branding. You will see those colors across the board on the website.

* I have intentionally limited my font families to two distinct primary fonts (both Google Fonts) in order to keep with design best practices of not having too many fonts on a single page.

* Per the professor's encouragement to look into newer tools like Flexbox, I have incorporated Flexbox for some of my two column layouts (as I read online that floats are less and less common these days and should start to be phased out, although I did use floats too to get some practice in).

* Per the professor's recommendations, I have tried to use rems and percentages as much as possible, and have used pixels as little as possible.

* I have applied meaningful id and class names in the HTML to make the css more understandable.

* I do want to acknowledge that I have incorporated divs, but I have only done this when absolutely necessary and when a semantic element wouldn't work and would produce a warning from the validator.

  