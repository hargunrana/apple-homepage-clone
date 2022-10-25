
# Apple-Homepage
- [totality-corp-apple.netlify.app](totality-corp-apple.netlify.app)

This website is a clone of apple.com made using React, HTML, CSS, Javascript, which includes elements and components like Navigation bar, Footer, Images.

### Approach:
The main idea is to divide the website into various components, which would take some parameters to be used to display. Within each components there would be sub-components which would use those provided parameters and display the content. 

## Components

 - `NavigationBar`
 - `Image`
 - `WatchImage`
 - `Footer`
 - `Data.js` 

#### `NavigationBar`:
- the NavigationBar consists of a Unordered List `<ul>` with the various `NavListItem` Components which would take two parameters i.e `text`, `link`.
- the home button i.e. the Apple logo is displayed useing the `NavIcon` along with the search button and shopping cart button.
- the icons are sourced from [FontAwesome](FontAwesome.com)
- the Styling is done within the `NavigationBar.css` file

    #### `NavListItem`:
    - returns an Anchor Tag `<a>` wrapped within a List item `<li>`.
    #### `NavIcon`:
    - returns an Achor Tag `<a>` with the given parameters as href and inner text.


#### `Image`:
- It consists of an Image Tag `<i>` along with the `Information` component. 
- The provided parameters are `image`, `imagesInfo`, `infoPos`, `bgColor`, `infoLinks` which are used to modify the styling of the component.

    #### `Information`:
    - it takes in `imagesInfo` and `imagesLinks` as paramters
    - The parameters are displayed withi `<h2>`, `<h3>`, `<p>` and `<a>`.

#### `Footer`:
- displays various texts using Paragraph Tag `<p>` and `LinksComponent`.

    #### `LinksComponent`:
    - Takes in `categoryItems` and `categoryTitles` as parameters 
    - the different sections are divided within categories `<div>` which further contains category-column `<div>` to display the content from `CategoryList` component.
    

#### `Data.js`:
- this exports various lists used within the Components containing the texts to be displays
    - `imagesInfo`
    - `infoLinks`
    - `watchImageInfo`
    - `watchLinks`
    - `categoryTitles`
    - `categoryItems`
    

## Tech stacks used

 - React.js
 - HTML
 - CSS
 - JavaScript


## Deployment

The deployment is done used Netlify.
- [totality-corp-apple.netlify.app](totality-corp-apple.netlify.app)


