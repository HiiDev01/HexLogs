import React, { useEffect, useState } from 'react'
import Nav from '../components/Nav'
import { IoSearch } from "react-icons/io5";
import '../styles/Product.css'
import { FaArrowRight, FaAngleDown, FaAngleUp, } from "react-icons/fa6";
import { MdAddShoppingCart } from "react-icons/md";
import { CgMenuGridR } from "react-icons/cg";
import { supabase } from './Client';
import { useAuth } from '../context/AuthProvider';
import { FaTimes } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';



const Product = () => {
  const [products, setProducts] = useState([]);
  const [showCartBox, setShowCartBox] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [quantity, setQuantity] = useState(1);
  const {user} = useAuth();
  const navigate = useNavigate()
  if(!products) return null



  useEffect(() => {
    handleFetchProduct();
  }, []);
      
  const handleFetchProduct = async () => {
    const { data, error } = await supabase.from('products').select('*');
    if (error) {
      console.error("Error fetching products:", error);
      return;
    }
    setProducts(data)
    console.log(data)
  }
  
  const handleCart = (product) =>{
    setSelectedProduct(product)
    setShowCartBox(true)
    if(showCartBox){
      document.body.style.overflow = 'hidden'
    }else{
      document.body.style.overflow = 'auto'
    }
    setQuantity(1)
  }

  const handleClose = () => {
    setShowCartBox(false);
  };

  const increaseQty = () => {
    setQuantity(prev => prev + 1)
  }
  const decreaseQty = () => {
    setQuantity(prev => (prev > 1 ? prev - 1 : 1))
  }

  const totalPrice = selectedProduct ? selectedProduct.price * quantity : 0;

  const handlePurchase = async() =>{

    if(!user){
      toast.error('signIn to continue purchase')
      navigate('/login');
      return
    }
  
    const {data: productData, error: dataError} = await supabase
    .from('products')
    .select("id, quantity, price")
    .eq("id", selectedProduct.id)
    .single()

    if(dataError){
      console.log('failed to fetch quantity data')
      return;
    }
    const avaliableQty = productData.quantity;
    if(quantity > avaliableQty){
      toast.error(`there is only ${productData.quantity} for purchase`);
      return
    }


    const order = {
      user_id: user.id,
      product_id: selectedProduct.id,
      name: selectedProduct.name,
      quantity: quantity,
      total_price: selectedProduct.price * quantity
    }
    const {data, error} = await supabase
    .from('orders')
    .insert([order])
    .select()

    await supabase
    .from('products')
    .update({quantity: selectedProduct.quantity - quantity})
    .eq('id', selectedProduct.id)

    if(error){
      console.log('failes to insert order');
      toast.error('failed to place order. try again')
    }else{
      toast.success('items successfully purchase.. check your email for crendtials');
      console.log('order successfully place', data)
      setShowCartBox(false)
    }
  }

  return (
    <div className='product'>
      <Nav />
      <div className='productContainer'>
        <div className='productwrap'>
          <div className='searchBar'>
            <input type="search" placeholder='search product.....' />
            <button><IoSearch size={25} /></button>
          </div>
        </div>

        <div className='productDiscount'>
          <div className='discountCon'>
            <h1>Reseller server 30% discount for resellers</h1>
            <a href="/"><FaArrowRight size={22} /></a>
          </div>
        </div>

        <div className='sorting'>
          <button className='allsort'><CgMenuGridR size={30}/></button>
          <div className='sortBtncon'>
            <select name="" id="">
              <option value="">-- sort by --</option>
              <option value="old">old account</option>
              <option value="new">new account</option>
            </select>
          </div>
        </div>

        <div className='productListCon'>
          {products.map((product)=>(
            <div key={product.id} className='products'>
              <div className='chilOne'>
                <div className='imgCon'>
                  <img src={product.img} alt={product.name} />
                </div>
                <div className='childOneDet'>
                  <h3><span>[#{product.id}]</span> <span>{product.name}</span></h3>
                  <p>{product.number_of_pics} pcs</p>
                </div>
              </div>

              <div className='childTwoDet'>
                <small>&#x20A6; {product.price}</small>
                <button onClick={()=> handleCart(product)}><MdAddShoppingCart size={20}/></button>
                <a href="/">more info</a>
              </div>

            </div>
          ))}
        </div>
      </div>
      {showCartBox && selectedProduct && (
        <div className='cartPopupWrapper'>
          <div className='cartPopupBox'>
            <button onClick={handleClose} className='closeCart'>
              <FaTimes size={23}/>
            </button>
            <div className='cartnav'>
              <h2>{selectedProduct.name}</h2>
            </div>
            <div className='cartBox'>
              <div className='carthead'>
                <div className='cartheaditem'>
                  <span>avaliable:</span>
                  <span className='quantityNumb'>
                    {selectedProduct.quantity}</span>
                </div>
                <div className='cartheaditem'>
                  <span>price:</span>
                  <span className='priceNumb'>{selectedProduct.price}</span>
                </div>
              </div>
              <div className='quantity'>
                <button onClick={decreaseQty}>-</button>
                <span>{quantity}</span>
                <button onClick={increaseQty}>+</button>
              </div>
              <div className='totalPrice'>
                <span className='ttprice'>total price:</span>
                <span className='ttNumber'>{totalPrice}</span>
              </div>
              <button onClick={handlePurchase} className='purchasebtn'>purchase now</button>
            </div>
          </div>

        </div>
      )}
    </div>
  )
}

export default Product;
