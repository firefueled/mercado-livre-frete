/**
 * Substitutes emojis into text nodes.
 * If the node contains more than just text (ex: it has child nodes),
 * call replaceText() on each of its children.
 *
 * @param  {Node} node    - The target DOM Node.
 * @return {void}         - Note: the emoji substitution is done inline.
 */
function addShipping(node) {
  // finds product nodes
  const products = node.querySelectorAll('.rowItem.item')
  console.log('products ', products)

  // loops through product nodes
  // for each product node
  products.forEach(async product => {
    // exists if shipping node exists
    // const shippingNode
    // if (shippingNode != null) return

    // // get id used for the shipping price request
    const productId = product.id
    console.log('productId ', productId)

    if (productId == null) return

    // // find the price node
    const productPriceNode = product.querySelector('.item__price')
    console.log('productPriceNode ', productPriceNode)

    if (productPriceNode == null) return

    // // get shipping price with request
    // const shippingPrice = await getProductShipping(productId)

    // // build shipping price node
    // const shippingNode = buildShippingNode(shippingPrice)

    // // add shipping price node to the product node
    // product.addSibbling(shippingNode)
    productPriceNode.after('Frete: R$ 20,30')
  })
}

// Start the recursion from the body tag.
addShipping(document.body);

// Now monitor the DOM for additions and substitute emoji into new nodes.
// @see https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver.
const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.addedNodes && mutation.addedNodes.length > 0) {
      // This DOM change was new nodes being added. Run our substitution
      // algorithm on each newly added node.
      // for (let i = 0; i < mutation.addedNodes.length; i++) {
      //   const newNode = mutation.addedNodes[i];
      //   addShipping(newNode);
      // }
    }
  });
});
observer.observe(document.body, {
  childList: true,
  subtree: true
});
