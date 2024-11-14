
use('E-Commerce');
db.createCollection('Products')
 db.Products.insertMany([
     { 'id': 1, 'Name': 'Product A', 'Details': 'id 1 product A' },
     { 'id': 2, 'Name': 'Product B', 'Details': 'id 2 product B' },
     { 'id': 3, 'Name': 'Product B', 'Details': 'id 3 product C' },
     { 'id': 4, 'Name': 'Product B', 'Details': 'id 4 product D' }
 ]

 )

// db.Products.findOne(
//     {'Name':'Product A'}
// )