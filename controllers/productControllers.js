const path = require('path');

const {productData} = require('../data/productData')

const productController = (req, res) => {
    const { search } = req.body
    let filteredProductData = productData.sort((a,b) => a.title.localeCompare(b.title))
    if(search?.length)  {
        filteredProductData = filteredProductData
            .filter( product => product.title.toLowerCase().startsWith(search.toLowerCase()))
    }
    const filepath = path.join(__dirname, '..', 'views', 'products', 'productList')
    return res.render(filepath, {
        productList : filteredProductData,
        search
    })
}

module.exports = {
    productController
}