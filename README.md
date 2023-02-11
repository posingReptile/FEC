# Front-End Capstone: Grootiful
==============================


## Table of Contents
### [I. Description](#description)
### [II. Project Overview & Demos](#project-overview--demos)
#### --[Overview](#overview)
#### --[Related Products](#related-products)
#### --[Questions & Answers](#questions--answers)
#### --[Ratings & Reviews](#ratings--reviews)
### [III. Contributions](#contributions)

### I. Description
Grootiful is a markup up of a client-facing retail portal. The application is made up of four widgets which work together to provide information about the product in such a way the customer will want to purchase the product(s).  The four main widgets are Overview, Related Products, Questions & Answers, and Ratings & Reviews. The Overview widget allows a customer to get general information about a product and add the product to their cart for purchase. Related Products displays other items similar to the selected product to entice the customer to bundle their purchase. The Questions & Answers widget allows the customer to query questions, view or add answers, and ask questions of their own. Lastly, Ratings & Reviews displays a filterable list of other customer's feedback, breaks down the products characteristics, and allows customers to add reviews of their own. 


### II. Project Overview & Demos
#### Overview

The Overview section features general product information, product description and a carousel of images. The user can see the item's name, price/sale price, catergory, which changes base on the currently selected product. Furthermore, the user can can see features, and description undeneath the overview.

A user can use the image carousels on the left to scroll and change the main image into view by clicking on any of the arrows or the image thumbnails.

<!-- ![](https://github.com/2212-fec5-hawkeye/FEC/blob/main/QuestionAnswerInput.gif) -->

At the top of the product details is the star ratings (out of 5 rounded to the nearest quarter) of the product. The number is sum review by other users as well as a link that scrolls the user's page down to the Rating and Reviews section.

By clicking on the displayed image, a user can see the expanded view of it and once more for the zoomed view.

Clicking on a style thumbnail will update the images and information for that particular style.

Under the style selector a user can select an available size for the selected product style and the quantity they wish to add to their cart. Attempting to add-to-cart without selecting a size will pop up a message instructing them to do so.

Clicking on the show cart button will open a modal that will feature all of the items currently in the users cart allow the remove any items or checking out the entire cart.

A user can also share the product on social media on Twitter, Facebook, or Pinterest.

A user can also toggle dark mode in the site base on the user's intial settings.

#### Related Products



#### Questions & Answers

Search inquiry that allows users to input a search term and only render questions with that search term the search term will also be highlighted in rendered question and answer

![](https://github.com/2212-fec5-hawkeye/FEC/blob/main/ReadMeGifs/QuestionAnswerInput.gif)

Render all the questions when the Load more questions button is clicked allowing users to indefinitly scroll through all the questions related to the product 

![](https://github.com/2212-fec5-hawkeye/FEC/blob/main/ReadMeGifs/LoadMoreQuestions.gif)

Users are able to mark a question or answer helpful once which is how the questions and answer are sorted Users can also report answers

![](https://github.com/2212-fec5-hawkeye/FEC/blob/main/ReadMeGifs/QuestionAnswerHelpfulReport.gif)

User can add questions. If there are invalid inputs in mandatory slots, it will show an error message

![](https://github.com/2212-fec5-hawkeye/FEC/blob/main/ReadMeGifs/NewQuestion.gif)

User can add answers. If there are invalid inputs in mandatory slots, it will show an error message

![](https://github.com/2212-fec5-hawkeye/FEC/blob/main/ReadMeGifs/NewAnswer.gif)


#### Ratings & Reviews

When a customer scrolls down to the bottom of the page they are able to view the Ratings & Reviews widget which is broken down into Product Rating, Product Breakdown, Reviews List, and Add a New Review.
![](https://github.com/2212-fec5-hawkeye/FEC/blob/main/ReadMeGifs/scrollReview.gif)

Inside the Product Rating, the user is able to view the average rating, percentage of reviewers who recommeded the product, and a visual display of the star rating breakdown. Clicking on each star rating value(s) will add a filter(s) to the reviews list which will only show reviews which received that star rating(s). You are also able to remove the star filters individually or clear all filters.
![](https://github.com/2212-fec5-hawkeye/FEC/blob/main/ReadMeGifs/StarFilters.gif)

The Product Breakdown dynamically shows each products characteristics and how other customers rated those characteristics.

The Reviews List displays the two reviews at a time. A user can click the 'More Reviews' button and two more reviews will display on the screen. When the reviews list gets long enough, it becomes scrollable.
![](https://github.com/2212-fec5-hawkeye/FEC/blob/main/ReadMeGifs/MoreReviews.gif)

 As well as filter the reviews by stars, the customer can also sort by helpfulness, newest, or relevancy, the default is relevancy. 
![](https://github.com/2212-fec5-hawkeye/FEC/blob/main/ReadMeGifs/SortOptions.gif)
 
 Each review can be be marked helpful or reported if inappropriate. 
![](https://github.com/2212-fec5-hawkeye/FEC/blob/main/ReadMeGifs/HelpfulReview.gif)

The 'Add Review' button will open up a modal window where a customer can add a review of their own. The user is required to fill out all of the fields except for review summary and they can also add up to five photos. If a customer tries to submit a review without the required fields, they modal will remain and they will be prompted on the fields still needing completion. To exit the review modal without submitting a review, a user can click the 'X' button or outside of the modal window.
![](https://github.com/2212-fec5-hawkeye/FEC/blob/main/ReadMeGifs/AddReview.gif)



### III. Contributions 
(explain current contributors and the process required to make a contribution to the project)
This project was created by Anthony Chen, Andrew Sittner, and Claire Tunakan for their Hack Reactor Front-End Capstone. 

If you wish to contribute to the project, please proceed as follows.
1. Fork Repository to your own github and clone into desired location

2. From file directory create a branch: <br>
`git checkout -b {branch-name}`

3. After making desired changes, stage changes: <br>
`git add {file-name}`<br>
or to add all changed files in current directory<br>
`git add .`

4. Commit changes: <br>
`git commit`<br>
or to add commit message in command-<br>
`git commit -m '{message}'`

5. Push code to your forked repository: <br>
`git push {remote [origin]} {branch-name}`

6. Submit pull request.

Once submitted, your request will be reviewed by one of the creators. Creators reserve the rights to accept, modify, request, or deny changes to any pull requests submitted.





