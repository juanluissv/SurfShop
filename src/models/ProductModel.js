import mongoose from 'mongoose';



const reviewSchema = mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    name: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    comment: {
        type: String,
        required: true
    },
}, {
    timestamps: true,
})



const productSchema = mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    name: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    reviews: [reviewSchema],
    rating: {
        type: Number,
        required: false,
        default: 0
    },  
    numReviews: {
        type: Number,
        required: false,
        default: 0
    },  
    price: {
        type: Number,
        required: true,
        default: 0
    },  
    countInStock: {
        type: Number,
        required: true,
        default: 0
    },
    size1: {
        type: String,
        required: false,
        default: 's'    
    },
    size2: {
        type: String,
        required: false,
        default: 'm'    
    },
    size3: {
        type: String,
        required: false,
        default: 'l'    
    },
    size4: {
        type: String,
        required: false,
        default: 'xl'    
    },
    c1: {
        type: String,
        required: false
    },
    c2: {
        type: String,
        required: false
    },
    c3: {
        type: String,
        required: false
    },
    c4: {
        type: String,
        required: false
    },
    img1c1: {
        type: String,
        required: false
    },
    img2c1: {
        type: String,
        required: false
    },
    img3c1: {
        type: String,
        required: false
    },
    img4c1: {
        type: String,
        required: false
    },
    img1c2: {
        type: String,
        required: false
    },
    img2c2: {
        type: String,
        required: false
    },
    img3c2: {
        type: String,
        required: false
    },
    img4c2: {
        type: String,
        required: false
    },
    img1c3: {
        type: String,
        required: false
    },
    img2c3: {
        type: String,
        required: false
    },
    img3c3: {
        type: String,
        required: false
    },
    img4c3: {
        type: String,
        required: false
    },
    img1c4: {
        type: String,
        required: false
    },
    img2c4: {
        type: String,
        required: false
    },
    img3c4: {
        type: String,
        required: false
    },
    img4c4: {
        type: String,
        required: false
    },
    

    }, {
    timestamps: true,
    }
)

const Product = mongoose.model('Product', productSchema)

export default Product;