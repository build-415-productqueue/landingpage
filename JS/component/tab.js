const CONSOLE_LOG = false

/*
 * TabLink represents the side navigation links. "data-tab" is the dataset that connects it
 * to the tab item.
 *
 * @aElement - The 'a href' html element
 * @data - The dataset data from "data-tab"
 * @item - The dataset mapping of the item mapping to the side nav link
 * @tabItem - The matching item for the link
 * @select() - This method removes all the selected class from all the links and
 * only add the selected class for the selected link
 *
 */

class TabLink {
  constructor(htmlElement) {
    // Initializing aElement with htmlElement's value (a tag)
    this.aElement = htmlElement

    // Getting the dataset value of the data-tab for this aElememt
    this.data = this.aElement.dataset.tab
    printToConsole('The data is', this.data)

    //Mapping the item to the link
    this.item = document.querySelector(
      `.css-sec-card-h3-acc[data-tab="${this.data}"]`
    )
    printToConsole('The item is', this.item.innerHTML)

    //Constructing a tabItem object with the value of this.item
    this.tabItem = new TabItem(this.item)

    //On click of a link, select() is invoked.
    this.aElement.addEventListener('click', () => {
      printToConsole('Invoking event listener on click', '')
      this.select()
    })
  }

  // Select() sets the value "css-nav-selected" to the selected link
  select() {
    printToConsole('Withing select()', '')
    const links = document.querySelectorAll('.css-sec-card-h3 a')

    printToConsole('Length of the links is', links.length)
    links.forEach(link => {
      printToConsole('Classlist of link before', link.classList)
      link.classList.remove('css-nav-selected')
      link.classList.add('css-red-sec-card-side-nav-a')
      printToConsole('Classlist of link after', link.classList)
    })

    printToConsole(
      'Classlist of the selected link before',
      this.aElement.classList
    )
    this.aElement.classList.add('css-nav-selected')
    this.aElement.classList.remove('css-red-sec-card-side-nav-a')
    printToConsole(
      'Classlist of the selected link after',
      this.aElement.classList
    )

    this.tabItem.selectTabItem()
  }
}

/*
 * TabItem represents the text that would be displayed when the link is clicked.
 *
 * @h3Item - Contains the value of the h3 item to be displayed when a link is clicked
 * @selectTabItem() - Displays the content mapping to the link selected
 *
 *
 */
class TabItem {
  constructor(htmlElement) {
    //Value of the h3Item to be displayed as text when a link is clicked
    this.h3Item = htmlElement
  }

  //selectTabItem() maps
  selectTabItem() {
    printToConsole('Within selectTabItem()', '')
    // Select all the tab items
    const items = document.querySelectorAll('.css-red-sec-card-text h3')

    // Add the class 'css-sec-card-h3-acc-nodisplay' to all tab items
    items.forEach(item => {
      printToConsole(
        'Classlist of the selected text item before',
        item.classList
      )
      item.classList.add('css-sec-card-h3-acc-nodisplay')
      printToConsole(
        'Classlist of the selected text item after',
        item.classList
      )
    })

    // Remove the class name "css-sec-card-h3-acc-nodisplay" from the selected tab
    printToConsole(
      'Classlist of the selected text item before',
      this.h3Item.classList
    )
    this.h3Item.classList.remove('css-sec-card-h3-acc-nodisplay')
    printToConsole(
      'Classlist of the selected text item after',
      this.h3Item.classList
    )
  }
}

// Getting all the links with in .css-sec-card-h3 a
let links = document.querySelectorAll('.css-sec-card-h3 a').forEach(link => {
  printToConsole('The link is', link.innerHTML)
  link = new TabLink(link)
})

/*
 * This function prints the values to the console based on the constant value CONSOLE_LOG
 *
 * @description - Descripton of the log statement
 * @value - value to be printed
 */
function printToConsole(description, value) {
  if (CONSOLE_LOG) {
    console.log(`----------:: ${description} ::----------:: ${value}`)
  }
}
