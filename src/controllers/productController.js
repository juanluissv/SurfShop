import asyncHandler from '../middleware/asyncHandler.js';
import Product from '../models/productModel.js';
import { PrintfulClient } from 'printful-client';
import request  from 'request';
  
//GET /api/products
const getProducts = asyncHandler(async (req, res) => {

  const pageSize = 6;
  let page = Number(req.query.pageNumber) || 1;

  const keywordd = req.query.keywordd ? req.query.keywordd : '';
  
    const filterObject = {
        $or: [
            {
                gender: {
                    $regex: keywordd,
                    $options: 'i',
                },        
            },
            {
                name: {
                    $regex: keywordd,
                    $options: 'i',
                },        
            },
           {
                size1: {
                    $regex: keywordd,
                    $options: 'i',
                }
           },
           {
                size2: {
                    $regex: keywordd,
                    $options: 'i',
                }
            },
            {
                size3: {
                    $regex: keywordd,
                    $options: 'i',
                }
            },
           {
                size4: {
                    $regex: keywordd,
                    $options: 'i',
                }
           },
           {
                size5: {
                    $regex: keywordd,
                    $options: 'i',
                }
            },
            {
                c1: {
                    $regex: keywordd,
                    $options: 'i',
                }
            },
            {
                c2: {
                    $regex: keywordd,
                    $options: 'i',
                }
            },
            {
                c3: {
                    $regex: keywordd,
                    $options: 'i',
                }
            },
            {
                c4: {
                    $regex: keywordd,
                    $options: 'i',
                }
            },
            
        ]
      };

    const count = await Product.countDocuments(filterObject);

    const products = await Product.find(filterObject)
    .limit(pageSize)
    .skip(pageSize * (page - 1));
    
    res.json({ products, page, pages: Math.ceil(count / pageSize), count });

});


///GET /api/products/id
const getProductsByID = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if(product) {
        res.json(product);
    } else {
        res.status(404);
        throw new Error('Product not found');
    }
});


///PUT /api/products/id
const updateProduct = asyncHandler(async (req, res) => {
    const { 
        name, 
        brand, 
        gender,
        category, 
        description, 
        price, 
        size1,  
        size2,
        size3,
        size4,
        c1,
        c2,
        c3,
        c4,
        img1c1,
        img2c1,
        img3c1,
        img4c1,
        img1c2,
        img2c2,
        img3c2,
        img4c2,
        img1c3,
        img2c3,
        img3c3,
        img4c3,
        img1c4,
        img2c4,
        img3c4,
        img4c4        
    } = req.body;
    const product = await Product.findById(req.params.id);

    if(product) {
        product.name = name;
        product.brand = brand;
        product.gender = gender;
        product.category = category;
        product.description = description;
        product.price = price;
        product.size1 = size1;
        product.size2 = size2;
        product.size3 = size3;
        product.size4 = size4;
        product.c1 = c1;
        product.c2 = c2;
        product.c3 = c3;
        product.c4 = c4;
        product.img1c1 = img1c1;
        product.img2c1 = img2c1;
        product.img3c1 = img3c1;
        product.img4c1 = img4c1;
        product.img1c2 = img1c2;
        product.img2c2 = img2c2;
        product.img3c2 = img3c2;
        product.img4c2 = img4c2;
        product.img1c3 = img1c3;
        product.img2c3 = img2c3;
        product.img3c3 = img3c3;
        product.img4c3 = img4c3;
        product.img1c4 = img1c4;
        product.img2c4 = img2c4;
        product.img3c4 = img3c4;
        product.img4c4 = img4c4;

        const updatedProduct = await product.save();
        res.json(updatedProduct);
    } else {
        res.status(404);
        throw new Error('Product not found');
    }
});


//POST /api/products
const createProduct = asyncHandler(async (req, res) => {

    const newMen = {
        name: 'men surf tank top',
        price: 30,
        description: 'The Men’s Premium Tank Top is made of a soft-washed and tight-knit fabric to ensure a flawless surface for your designs and an exceptionally soft and smooth feel for the wearer.',
        user: req.user._id,
        image: '/images/sample.jpg',
        gender: 'men',
        brand: 'Cotton Heritage',
        category: 'tops',
        countInStock: 100,
        numReviews: 0,
        rating: 4.5,
        size1: 's',
        size2: 'm',
        size3: 'l',
        size4: 'xl',
        c1: 'charcoal',
        c2: 'pacific',
        c3: 'mint',
        c4: 'white',
        img1c1: '/images/men/top1/c1/img1.jpg',
        img2c1: '/images/men/top1/c1/img2.jpg',
        img3c1: '/images/men/top1/c1/img3.jpg',
        img4c1: '/images/men/top1/c1/img4.jpg',
        img1c2: '/images/men/top1/c2/img1.jpg',
        img2c2: '/images/men/top1/c2/img2.jpg',
        img3c2: '/images/men/top1/c2/img3.jpg',
        img4c2: '/images/men/top1/c2/img4.jpg',
        img1c3: '/images/men/top1/c3/img1.jpg',
        img2c3: '/images/men/top1/c3/img2.jpg',
        img3c3: '/images/men/top1/c3/img3.jpg',
        img4c3: '/images/men/top1/c3/img4.jpg',
        img1c4: '/images/men/top1/c4/img1.jpg',
        img2c4: '/images/men/top1/c4/img2.jpg',
        img3c4: '/images/men/top1/c4/img3.jpg',
        img4c4: '/images/men/top1/c4/img4.jpg',
    }

    const newWomen = {
        name: 'women surf tank top',
        price: 30,
        description: 'This Women’s Racerback Tank Top is soft, lightweight, and form-fitting. The tri-blend fabric gives printed designs a cool, faded look while the raw edge seams add an edgy touch.',
        user: req.user._id,
        image: '/images/sample.jpg',
        gender: 'woman',
        brand: 'Cotton Heritage',
        category: 'tops',
        countInStock: 100,
        numReviews: 0,
        rating: 4.5,
        size1: 'xs',
        size2: 's',
        size3: 'm',
        size4: 'l',
        c1: 'turqoise',
        c2: 'white',
        c3: 'royal',
        c4: 'purple',
        img1c1: '/images/women/top1/c1/img1.jpg',
        img2c1: '/images/women/top1/c1/img2.jpg',
        img3c1: '',
        img4c1: '',
        img1c2: '/images/women/top1/c2/img1.jpg',
        img2c2: '/images/women/top1/c2/img2.jpg',
        img3c2: '',
        img4c2: '',
        img1c3: '/images/women/top1/c3/img1.jpg',
        img2c3: '/images/women/top1/c3/img2.jpg',
        img3c3: '',
        img4c3: '',
        img1c4: '/images/women/top1/c4/img1.jpg',
        img2c4: '/images/women/top1/c4/img2.jpg',
        img3c4: '',
        img4c4: '',
    }
        

    const product = new Product(newWomen);
    //const product = new Product(newMen);

    const createdProduct = await product.save();
    res.status(201).json(createdProduct);
});


//DELETE /api/products/:id
const deleteProduct = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if(product) {
        await Product.deleteOne({ _id: product._id });
        res.json({ message: 'Product removed' });
    } else {
        res.status(404);
        throw new Error('Product not found');
    }
});

const getTopProducts = asyncHandler(async (req, res) => {
    const products = await Product.find({}).sort({ rating: -1 }).limit(3);
  
    res.json(products);
  });


  const createProductReview = asyncHandler(async (req, res) => {
    const { rating, comment } = req.body;
  
    const product = await Product.findById(req.params.id);
  
    if (product) {
      const alreadyReviewed = product.reviews.find(
        (r) => r.user.toString() === req.user._id.toString()
      );
  
      if (alreadyReviewed) {
        res.status(400);
        throw new Error('Product already reviewed');
      }
  
      const review = {
        name: req.user.name,
        rating: Number(rating),
        comment,
        user: req.user._id,
      };
  
      product.reviews.push(review);
  
      product.numReviews = product.reviews.length;
  
      product.rating =
        product.reviews.reduce((acc, item) => item.rating + acc, 0) /
        product.reviews.length;
  
      await product.save();
      res.status(201).json({ message: 'Review added' });
    } else {
      res.status(404);
      throw new Error('Product not found');
    }
  });
  


export {
    getProducts,
    getProductsByID,
    createProduct,
    deleteProduct,
    updateProduct,
    createProductReview,
    getTopProducts
}

























 // printful.products.get(368712841).then((response) => {
    //     response.json().then((val) => {
    //       console.log(JSON.stringify(val));
    //     });
    //   });

    // var options = {
    //     url: 'https://api.printful.com/store/products/368712841',
    //     method: 'GET',
    //     headers: {
    //       'User-Agent': 'my request',
    //       'Authorization': 'Bearer 1kXoMvlRhASrzMERvzOm9iD3JB7BDqXjBv1ztldf',
    //       'Content-Type': 'application/json',
    //       'Accept': 'application/json'
    //     }
    //   };

    //   var callback = (error, response, body) => {
    //     console.log(body);
    //     console.log(response.statusCode);
    //   }
      
      //request(options, callback);
