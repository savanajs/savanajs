# SavanaJS
## Build wildest web applications with Savana.js

### Insert:
```html
<script src="lib/js/savana.min.js"></script>
<link href="lib/css/savana.min.css" rel="stylesheet">
```
### Use:
```javascript
$savana(document).done(function(e) {
  Your code here ...   
});
```
### Bower install:
```javascript
bower install savanajs
```

### Sumary:
```html
/*
 * Sumary
 *--------------------------------------------------------------------------------------------------------------------
 * 1 ---- DOM - $savana(selector).fn();
 *
 * 1.1 -- done ........................................ Initiator standard framework
 * 1.2 -- onLoad ...................................... Initiator Framework after the onload window
 * 1.3 -- on .......................................... Call events. (click, hover, change, keyup, etc)
 * 1.4 --    .......................................... 
 * 1.5 -- each ........................................ Get an HTML element set
 * 1.6 -- push ........................................ Insert content within HTML elements
 * 1.7 -- destroy ..................................... Remove HTML elements
 * 1.8 -- addClass .................................... Add a class in the HTML element
 * 1.9 -- toggleClass ................................. Add or remove a class element if it exists or not
 * 1.10 - hasClass .................................... Add or remove a class in the target elements
 * 1.11 - removeClass ................................. Retira uma classe nos elementos alvo
 * 1.12 - attr ........................................ Add attributes in HTML elements
 * 1.13 - removeAttr .................................. Remover atributos em elementos HTML
 * 1.14 - styles ...................................... Add CSS styles of the elements
 * 1.15 - parent ...................................... Find the father of one element
 * 1.16 - parents ..................................... Find the father of one element
 * 1.17 - insert ...................................... Insert HTML content before or after said members
 * 1.18 - wrap ........................................ Insert a parent element for an element
 * 1.19 - exchange .................................... Change an HTML element by another HTML element
 * 1.20 - copy ........................................ Copy an HTML element
 * 1.21 - changeTo .................................... Change an HTML element place
 * 1.22 - animate ..................................... Insert class animations in element - Plugin CSS by Daniel Eden
 * 1.23 - hide ........................................ Hide HTML elements
 * 1.24 - show ........................................ Show elements
 * 1.25 - serialize ................................... Catch values and forms of field names automatically
 * 1.26 - find ........................................ Search elements within elements
 * 1.27 - child ....................................... Search the sons of elements
 * 1.28 - eq .......................................... Search element by its position
 * 1.29 - first ....................................... Search element in the first position
 * 1.30 - last ........................................ Search element in the last position
 * 1.31 - isChecked ................................... Check if a checkbox or radio element is checked
 * 1.32 - isSelected .................................. Checks whether a checkbox or radio element is selected
 * 1.33 - size ........................................ Returns the size in width and height of an element
 * 1.34 - position .................................... Returns the X and Y of an element
 * 1.36 - isEmpty ..................................... Verify that the contents of an element is empty
 * 1.37 - delegate .................................... Call events dynamics. (click, hover, change, keyup, etc)
 * 1.38 - scroll ...................................... Initiator Framework after page scroll.
 * 1.39 - load ........................................ Get content from an external page
 
 * 2 ---- HELPERS - savana.fn();
 *
 * 2.1 --- removeAllSpaces ............................ Remove the empty spaces of an occurrence
 * 2.2 --- getNumberOfString .......................... Just pick numbers from one occurrence
 * 2.3 --- debug ...................................... Displays a message to the developer
 * 2.4 --- toJSON ..................................... String conversion JSON
 * 2.5 --- toXML ...................................... String conversion to XML
 * 2.6 --- Async ...................................... Asynchronous makes access to other files with promise. (Does not work in earlier versions of IE9)
 * 2.7 --- URL ........................................ Returns the current url browser
 * 2.8 --- params ..................................... Returns an array of the parameters divided by "/" in the URL
 * 2.9 --- have ....................................... Checks for a specific value in an array or text
 * 2.10 -- isFunction ................................. Checks if the occurrence is a function
 * 2.11 -- isObject ................................... Checks whether the occurrence is an object
 * 2.12 -- isString ................................... Checks if the occurrence is a string
 * 2.13 -- isCPF ...................................... Checks if the occurrence is a CPF
 * 2.14 -- formatMoney ................................ Converts a number in monetary format
 * 2.15 -- rewrite .................................... Remove spaces and special characters in strings
 * 2.16 -- isEmail .................................... Checks whether an email address is valid
 * 2.17 -- isNumber ................................... Checks if the occurrence is a number
 * 2.18 -- isLetter ................................... Checks whether the occurrence are letters
 * 2.19 -- isURL ...................................... Checks if the occurrence is a URL
 * 2.20 -- convertMoneyToFloat ........................ Monetary value of conversion to float
 * 2.21 -- getValueBill ............................... String conversion JSON
 * 2.22 -- installment ................................ Take the value of the installment
 * 2.23 -- financing .................................. Financing with interest
 * 2.24 -- upperAllFirstLetter ........................ Leave the first letter of each word capitalized
 * 2.25 -- setCookie .................................. Record cookie in the browser
 * 2.26 -- getCookie .................................. Take the value of the cookie in the browser
 * 2.27 -- deleteCookie ............................... Delete the browser cookie
 * 2.28 -- isIE ....................................... Verify if the browser is IE
 * 2.29 -- percent .................................... Returns the percentage of a discount
 * 2.30 -- discountPercent ............................ Calculating a percentage discount
 * 2.31 -- limitLetter ................................ Limit letters in a string
 * 2.32 -- limitWord .................................. Limiting words in a string
 * 2.33 -- dialogClose ................................ Limiting words in a string
 * 2.34 -- strUpper ................................... String conversion to uppercase
 * 2.35 -- strLower ................................... String conversion to uppercase
 * 2.36 -- messageBox ................................. Alert box to the user
 * 2.37 -- loadPreloader .............................. Loads the loader
 * 2.38 -- showPreloader .............................. Open the loader
 * 2.39 -- hidePreloader .............................. Close loader
 * 2.40 -- loadAlert .................................. Loads the custom alert
 * 2.41 -- alert ...................................... Opens the custom alert
 * 2.42 -- confirm .................................... Open a box confirmation to the User
 * 2.43 -- loadConfirm ................................ Load the box confirmation
 * 2.44 -- extend ..................................... Is the object inherit characteristics from another object
 * 2.45 -- now ........................................ Returns the number of seconds since 1970
 * 2.46 -- getParams .................................. Returns a parameter value in the url
 * 2.47 -- urlCurrent ................................. Returns the current url of the page
 * 2.48 -- redirect ................................... Does redirect to another page
 * 2.49 -- now ........................................ Take milliseconds
 * 2.50 -- today ...................................... Get current date and time
 * 2.51 -- eventStop .................................. Cancel a default event
 * 2.52 -- modal(Load, Close e Open) .................. Load, closes and opens a modal
 * 2.53 -- whatDevice (desktop, tablet and mobile) .... Show the device of user
 * 2.54 -- whatBrowser ................................ Show the device of user
 * 2.55 -- objToJSON .................................. Convert object to JSON
 * 2.56 -- ajax ....................................... Asynchronous makes access to other
 * 2.57 -- createClass ................................ Create objects in script in a simpler form
 * 2.58 -- convertHTML ................................ Convert a content string to HTML
 * 2.59 -- daysDifferenceBetweenDates ................. Returns the day difference between a start date and end date
*/
```
