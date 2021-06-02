// This is the data we will be using to create our articles. Look at it, then proceed to line 93.
// OPTIONAL: if you're feeling adventurous, try to make this data an export from a different module, and import it here.
// You can read about ES6 modules here: https://exploringjs.com/es6/ch_modules.html#sec_basics-of-es6-modules
import Data from './Data'

/*
  Step 1: Write a component called 'articleMaker' to create an article.
  Your component is a function that takes an article object as its only argument,
  and returns a DOM node looking like the one below:
*/
function articleMaker(artObj){

  const article = document.createElement('div')
  const title = document.createElement('h2')
  const date = document.createElement('p')
  const p1 = document.createElement('p')
  const p2 = document.createElement('p')
  const p3 = document.createElement('p')
  const btnSpan = document.createElement('span')

  article.appendChild(title)
  article.appendChild(date)
  article.appendChild(p1)
  article.appendChild(p2)
  article.appendChild(p3)
  article.appendChild(btnSpan)

  article.classList.add('article')
  date.classList.add('date')
  btnSpan.classList.add('expandButton')

  title.textContent = artObj.title
  date.textContent = artObj.date
  p1.textContent = artObj.firstParagraph
  p2.textContent = artObj.secondParagraph
  p3.textContent = artObj.thirdParagraph
  btnSpan.textContent = '+'

  btnSpan.addEventListener('click', () => {
    article.classList.toggle('article-open')
  })

return article
}

const accordion = document.querySelector('.articles')

Data.forEach(artElement => {
  const artEl = articleMaker(artElement)
  accordion.appendChild(artEl)
})

// panelData.forEach(panelElement => {
//   const pEl = makePanel(panelElement)
//   accordion.appendChild(pEl)
// })

/*
  <div class="article">
    <h2>{title of the article}</h2>
    <p class="date">{date of the article}</p>

    {three separate paragraph elements}

    <span class="expandButton">+</span>
  </div>
  */

  
  /*
  Step 2: Still inside `articleMaker`, add an event listener to the span.expandButton.
  This listener should toggle the class 'article-open' on div.article.

  Step 3: Don't forget to return something from your function!

  Step 4: Outside your function now, loop over the data. At each iteration you'll use your component
  to create a div.article element and append it to the DOM inside div.articles (see index.html).

  Step 5: Try adding new article object to the data array. Make sure it is in the same format as the others.
  Refresh the page to see the new article.
*/
