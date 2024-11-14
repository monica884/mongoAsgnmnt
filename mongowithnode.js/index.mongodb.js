
// Select the database to use.
use("pakclassified25")


// db.Advertisements.insertOne([
//   {
//     "Name": "new porduct", "Price": 134,
//     "Description": "new product "
//   }
// ]

// );

   db.Advertisements.insertMany([
     {
       "Name": "newporductone", "Price": 134,
       "Description": "new productone "
     },
     {
       "Name": "newporductone", "Price": 1334,
       "Description": "new productone "
     },

     {
       "Name": "newporducttow", "Price": 134,
       "Description": "new productone "
     },

     {
       "Name": "newporductthree", "Price": 134,
       "Description": "new productone "
     }
   ]);


  //Piplines
 db.Advertisements.aggregate([
   {
     $match: {}
   },

   {
     $project: {
       _id: 0,
       Name: 1,
       Title: 1
     }
   },
   {
     $group: { _id: "$Name", totalQuantity: { $sum: "$quantity" } }
   }
  // {
  //   $sort:{
  //     Title:-1
  //   }
  // }

  //   {
  //     $lookup: {
  //         from: "AdvertisementStatus",
  //         localField: "StatusId",
  //         foreignField: "_id",
  //         as: "Status"
  //     },
  // },
 ]);
