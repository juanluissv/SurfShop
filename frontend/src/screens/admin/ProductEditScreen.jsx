import { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import Message from '../../components/Message';
import Loader from '../../components/Loader';
import FormContainer from '../../components/FormContainer';
import { toast } from 'react-toastify';
import {
  useGetProductDetailsQuery,
  useUpdateProductMutation,
  useUploadProductImageMutation,
} from '../../slices/ProductApiSlice';

const ProductEditScreen = () => {

    const { id: productId } = useParams();

    const [name, setName] = useState('');
    const [brand, setBrand] = useState('');
    const [gender, setGender] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);

    const [size1, setSize1] = useState('');
    const [size2, setSize2] = useState('');
    const [size3, setSize3] = useState('');
    const [size4, setSize4] = useState('');

    const [c1, setC1] = useState('');
    const [c2, setC2] = useState('');
    const [c3, setC3] = useState('');
    const [c4, setC4] = useState('');

    const [img1c1, setImg1c1] = useState('');
    const [img2c1, setImg2c1] = useState('');
    const [img3c1, setImg3c1] = useState('');
    const [img4c1, setImg4c1] = useState('');

    const [img1c2, setImg1c2] = useState('');
    const [img2c2, setImg2c2] = useState('');
    const [img3c2, setImg3c2] = useState('');
    const [img4c2, setImg4c2] = useState('');

    const [img1c3, setImg1c3] = useState('');
    const [img2c3, setImg2c3] = useState('');
    const [img3c3, setImg3c3] = useState('');
    const [img4c3, setImg4c3] = useState('');

    const [img1c4, setImg1c4] = useState('');
    const [img2c4, setImg2c4] = useState('');
    const [img3c4, setImg3c4] = useState('');
    const [img4c4, setImg4c4] = useState('');

    const { data: product, isLoading, refetch, error } = useGetProductDetailsQuery(productId);

    console.log(product);

    const [updateProduct, { isLoading: loadingUpdate }] = useUpdateProductMutation();

    const [uploadProductImage, { isLoading: loadingUpload }] = useUploadProductImageMutation();


    const navigate = useNavigate();
    
    useEffect(() => {
        if(product) {
            setName(product.name);
            setBrand(product.brand);
            setGender(product.gender);
            setCategory(product.category);
            setDescription(product.description);
            setPrice(product.price);

            setC1(product.c1);
            setC2(product.c2);
            setC3(product.c3);
            setC4(product.c4);

            setSize1(product.size1);
            setSize2(product.size2);
            setSize3(product.size3);
            setSize4(product.size4);

            setImg1c1(product.img1c1);
            setImg2c1(product.img2c1);
            setImg3c1(product.img3c1);
            setImg4c1(product.img4c1);

            setImg1c2(product.img1c2);
            setImg2c2(product.img2c2);
            setImg3c2(product.img3c2);
            setImg4c2(product.img4c2);

            setImg1c3(product.img1c3);
            setImg2c3(product.img2c3);
            setImg3c3(product.img3c3);
            setImg4c3(product.img4c3);

            setImg1c4(product.img1c4);
            setImg2c4(product.img2c4);
            setImg3c4(product.img3c4);
            setImg4c4(product.img4c4);



        }
    }, [product]);   

    const uploadFileHandler = async (e) => {
        const formData = new FormData();
        formData.append('image', e.target.files[0]);
        try {
            const res = await uploadProductImage(formData).unwrap();
            toast.success(res.message);
        } catch (err) {
            toast.error(err?.data?.message || err.error);
        }

    }

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            await updateProduct({
                productId,
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


            }).unwrap();
            toast.success('Product updated');
            refetch();
            navigate('/admin/productlist');
        } catch (err) {
            toast.error(err?.data?.message || err.error)
        };
    };


  return (
    <div class=""><br/><br/><br/><br/><br/>
    <div className="breadcrumb-area bg-gray">
            <div className="container">
                <div className="breadcrumb-content text-center">
                    <ul>
                        <li>
                            <a href="index.html">Home</a>
                        </li>
                        <li className="active">Edit Product </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="container">

        <FormContainer><br/><br/>
            <h3>Edit Product Details</h3>
            {loadingUpdate && <Loader />}
            {isLoading ? <Loader /> : error ? <Message variant='danger'>{error.data.message}</Message> : (
                <Form onSubmit={submitHandler}>
                    <Form.Group controlId='name' className='my-3'>
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='Enter name'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        ></Form.Control>
                    </Form.Group>

                    <Form.Group controlId='price' className='my-3'>
                        <Form.Label>Price</Form.Label>
                        <Form.Control
                            type='number'
                            placeholder='Enter price'
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        ></Form.Control>
                    </Form.Group>                   

                    <Form.Group controlId='brand' className='my-3'>
                        <Form.Label>Brand</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='Enter brand'
                            value={brand}
                            onChange={(e) => setBrand(e.target.value)}
                        ></Form.Control>
                    </Form.Group>

                    <Form.Group controlId='brand' className='my-3'>
                        <Form.Label>Gender</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='Enter Gender'
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
                        ></Form.Control>
                    </Form.Group>                    

                    <Form.Group controlId='category' className='my-3'>
                        <Form.Label>Category</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='Enter category'
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        ></Form.Control>
                    </Form.Group>

                    <Form.Group controlId='description' className='my-3'>
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='Enter description'
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        ></Form.Control>
                    </Form.Group>

                    <Form.Group controlId='description' className='my-3'>
                        <Form.Label>Color 1</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='Color 1 '
                            value={c1}
                            onChange={(e) => setC1(e.target.value)}
                        ></Form.Control>
                    </Form.Group>

                    <Form.Group controlId='description' className='my-3'>
                        <Form.Label>Color 2</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='Color 2 '
                            value={c2}
                            onChange={(e) => setC2(e.target.value)}
                        ></Form.Control>
                    </Form.Group>

                    <Form.Group controlId='description' className='my-3'>
                        <Form.Label>Color 3</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='Color 3 '
                            value={c3}
                            onChange={(e) => setC3(e.target.value)}
                        ></Form.Control>
                    </Form.Group>

                    <Form.Group controlId='description' className='my-3'>
                        <Form.Label>Color 4</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='Color 4 '
                            value={c4}
                            onChange={(e) => setC4(e.target.value)}
                        ></Form.Control>
                    </Form.Group>

                    <Form.Group controlId='description' className='my-3'>
                        <Form.Label>Size 1</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='Size 1 '
                            value={size1}
                            onChange={(e) => setSize1(e.target.value)}
                        ></Form.Control>
                    </Form.Group>

                    <Form.Group controlId='description' className='my-3'>
                        <Form.Label>Size 2</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='Size 2 '
                            value={size2}
                            onChange={(e) => setSize2(e.target.value)}
                        ></Form.Control>
                    </Form.Group>

                    <Form.Group controlId='description' className='my-3'>
                        <Form.Label>Size 3</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='Size 3 '
                            value={size3}
                            onChange={(e) => setSize3(e.target.value)}
                        ></Form.Control>
                    </Form.Group>

                    <Form.Group controlId='description' className='my-3'>
                        <Form.Label>Size 4</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='Size 4 '
                            value={size4}
                            onChange={(e) => setSize4(e.target.value)}
                        ></Form.Control>
                    </Form.Group>

                    <Form.Group controlId='description' className='my-3'>
                        <Form.Label>Color 1 Image1</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='img1c1 '
                            value={img1c1}
                            onChange={(e) => setImg1c1(e.target.value)}
                        ></Form.Control>
                    </Form.Group>

                    <Form.Group controlId='description' className='my-3'>
                        <Form.Label>Color 1 Image2</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='img2c1 '
                            value={img2c1}
                            onChange={(e) => setImg2c1(e.target.value)}
                        ></Form.Control>
                    </Form.Group>

                    <Form.Group controlId='description' className='my-3'>
                        <Form.Label>Color 1 Image3</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='img3c1 '
                            value={img3c1}
                            onChange={(e) => setImg3c1(e.target.value)}
                        ></Form.Control>
                    </Form.Group>

                    <Form.Group controlId='description' className='my-3'>
                        <Form.Label>Color 1 Image4</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='img4c1 '
                            value={img4c1}
                            onChange={(e) => setImg4c1(e.target.value)}
                        ></Form.Control>
                    </Form.Group>

                    <Form.Group controlId='description' className='my-3'>
                        <Form.Label>Color 2 Image1</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='img1c2 '
                            value={img1c2}
                            onChange={(e) => setImg1c2(e.target.value)}
                        ></Form.Control>
                    </Form.Group>

                    <Form.Group controlId='description' className='my-3'>
                        <Form.Label>Color 2 Image2</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='img2c2 '
                            value={img2c2}
                            onChange={(e) => setImg2c2(e.target.value)}
                        ></Form.Control>
                    </Form.Group>

                    <Form.Group controlId='description' className='my-3'>
                        <Form.Label>Color 2 Image3</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='img3c2 '
                            value={img3c2}
                            onChange={(e) => setImg3c2(e.target.value)}
                        ></Form.Control>
                    </Form.Group>

                    <Form.Group controlId='description' className='my-3'>
                        <Form.Label>Color 2 Image4</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='img4c2'
                            value={img4c2}
                            onChange={(e) => setImg4c2(e.target.value)}
                        ></Form.Control>
                    </Form.Group>

                    <Form.Group controlId='description' className='my-3'>
                        <Form.Label>Color 3 Image1</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='img1c3 '
                            value={img1c3}
                            onChange={(e) => setImg1c3(e.target.value)}
                        ></Form.Control>
                    </Form.Group>

                    <Form.Group controlId='description' className='my-3'>
                        <Form.Label>Color 3 Image2</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='img2c3 '
                            value={img2c3}
                            onChange={(e) => setImg2c3(e.target.value)}
                        ></Form.Control>
                    </Form.Group>

                    <Form.Group controlId='description' className='my-3'>
                        <Form.Label>Color 3 Image3</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='img3c3 '
                            value={img3c3}
                            onChange={(e) => setImg3c3(e.target.value)}
                        ></Form.Control>
                    </Form.Group>

                    <Form.Group controlId='description' className='my-3'>
                        <Form.Label>Color 3 Image4</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='img4c3'
                            value={img4c3}
                            onChange={(e) => setImg4c3(e.target.value)}
                        ></Form.Control>
                    </Form.Group>


                    <Form.Group controlId='description' className='my-3'>
                        <Form.Label>Color 4 Image1</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='img1c4 '
                            value={img1c4}
                            onChange={(e) => setImg1c4(e.target.value)}
                        ></Form.Control>
                    </Form.Group>

                    <Form.Group controlId='description' className='my-3'>
                        <Form.Label>Color 4 Image2</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='img2c4 '
                            value={img2c4}
                            onChange={(e) => setImg2c4(e.target.value)}
                        ></Form.Control>
                    </Form.Group>

                    <Form.Group controlId='description' className='my-3'>
                        <Form.Label>Color 4 Image3</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='img3c4 '
                            value={img3c4}
                            onChange={(e) => setImg3c4(e.target.value)}
                        ></Form.Control>
                    </Form.Group>

                    <Form.Group controlId='description' className='my-3'>
                        <Form.Label>Color 4 Image4</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='img4c4'
                            value={img4c4}
                            onChange={(e) => setImg4c4(e.target.value)}
                        ></Form.Control>
                    </Form.Group>
                
                    <Button
                        type='submit'
                        variant='primary'
                        style={{ marginTop: '1rem' }}
                    >
                        Update
                    </Button>
                </Form>
            )}
        </FormContainer><br /><br /><br /><br /><br /><br />
        </div>

    </div>
  )
}

export default ProductEditScreen



















// import { useState, useEffect } from 'react';
// import { Link, useNavigate, useParams } from 'react-router-dom';
// import { Form, Button } from 'react-bootstrap';
// import Message from '../../components/Message';
// import Loader from '../../components/Loader';
// import FormContainer from '../../components/FormContainer';
// import { toast } from 'react-toastify';
// import {
//   useGetProductDetailsQuery,
//   useUpdateProductMutation,
//   useUploadProductImageMutation,
// } from '../../slices/productsApiSlice';

// const ProductEditScreen = () => {
//   const { id: productId } = useParams();

//   const [name, setName] = useState('');
//   const [price, setPrice] = useState(0);
//   const [image, setImage] = useState('');
//   const [brand, setBrand] = useState('');
//   const [category, setCategory] = useState('');
//   const [countInStock, setCountInStock] = useState(0);
//   const [description, setDescription] = useState('');

//   const {
//     data: product,
//     isLoading,
//     refetch,
//     error,
//   } = useGetProductDetailsQuery(productId);

//   const [updateProduct, { isLoading: loadingUpdate }] =
//     useUpdateProductMutation();

//   const [uploadProductImage, { isLoading: loadingUpload }] =
//     useUploadProductImageMutation();

//   const navigate = useNavigate();

//   const submitHandler = async (e) => {
//     e.preventDefault();
//     try {
//       await updateProduct({
//         productId,
//         name,
//         price,
//         image,
//         brand,
//         category,
//         description,
//         countInStock,
//       }).unwrap(); // NOTE: here we need to unwrap the Promise to catch any rejection in our catch block
//       toast.success('Product updated');
//       refetch();
//       navigate('/admin/productlist');
//     } catch (err) {
//       toast.error(err?.data?.message || err.error);
//     }
//   };

//   useEffect(() => {
//     if (product) {
//       setName(product.name);
//       setPrice(product.price);
//       setImage(product.image);
//       setBrand(product.brand);
//       setCategory(product.category);
//       setCountInStock(product.countInStock);
//       setDescription(product.description);
//     }
//   }, [product]);

//   const uploadFileHandler = async (e) => {
//     const formData = new FormData();
//     formData.append('image', e.target.files[0]);
//     try {
//       const res = await uploadProductImage(formData).unwrap();
//       toast.success(res.message);
//       setImage(res.image);
//     } catch (err) {
//       toast.error(err?.data?.message || err.error);
//     }
//   };

//   return (
//     <>
//       <Link to='/admin/productlist' className='btn btn-light my-3'>
//         Go Back
//       </Link>
//       <FormContainer>
//         <h1>Edit Product</h1>
//         {loadingUpdate && <Loader />}
//         {isLoading ? (
//           <Loader />
//         ) : error ? (
//           <Message variant='danger'>{error.data.message}</Message>
//         ) : (
//           <Form onSubmit={submitHandler}>
//             <Form.Group controlId='name'>
//               <Form.Label>Name</Form.Label>
//               <Form.Control
//                 type='name'
//                 placeholder='Enter name'
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//               ></Form.Control>
//             </Form.Group>

//             <Form.Group controlId='price'>
//               <Form.Label>Price</Form.Label>
//               <Form.Control
//                 type='number'
//                 placeholder='Enter price'
//                 value={price}
//                 onChange={(e) => setPrice(e.target.value)}
//               ></Form.Control>
//             </Form.Group>

//             <Form.Group controlId='image'>
//               <Form.Label>Image</Form.Label>
//               <Form.Control
//                 type='text'
//                 placeholder='Enter image url'
//                 value={image}
//                 onChange={(e) => setImage(e.target.value)}
//               ></Form.Control>
//               <Form.Control
//                 label='Choose File'
//                 onChange={uploadFileHandler}
//                 type='file'
//               ></Form.Control>
//               {loadingUpload && <Loader />}
//             </Form.Group>

//             <Form.Group controlId='brand'>
//               <Form.Label>Brand</Form.Label>
//               <Form.Control
//                 type='text'
//                 placeholder='Enter brand'
//                 value={brand}
//                 onChange={(e) => setBrand(e.target.value)}
//               ></Form.Control>
//             </Form.Group>

//             <Form.Group controlId='countInStock'>
//               <Form.Label>Count In Stock</Form.Label>
//               <Form.Control
//                 type='number'
//                 placeholder='Enter countInStock'
//                 value={countInStock}
//                 onChange={(e) => setCountInStock(e.target.value)}
//               ></Form.Control>
//             </Form.Group>

//             <Form.Group controlId='category'>
//               <Form.Label>Category</Form.Label>
//               <Form.Control
//                 type='text'
//                 placeholder='Enter category'
//                 value={category}
//                 onChange={(e) => setCategory(e.target.value)}
//               ></Form.Control>
//             </Form.Group>

//             <Form.Group controlId='description'>
//               <Form.Label>Description</Form.Label>
//               <Form.Control
//                 type='text'
//                 placeholder='Enter description'
//                 value={description}
//                 onChange={(e) => setDescription(e.target.value)}
//               ></Form.Control>
//             </Form.Group>

//             <Button
//               type='submit'
//               variant='primary'
//               style={{ marginTop: '1rem' }}
//             >
//               Update
//             </Button>
//           </Form>
//         )}
//       </FormContainer>
//     </>
//   );
// };

// export default ProductEditScreen;
