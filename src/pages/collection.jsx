import  { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets as frontEndAssets } from "../assets/frontend_assets/assets";
import Title from '../components/Title';
import ProductItem from "../components/ProductItem";
const Collection = () => {
  const {products, search, showSearch} = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [FilterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState('relevant');

  const toggleCategory = (e)=>{
    if(category.includes(e.target.value)){
      setCategory(prev=>prev.filter(item=>item != e.target.value))
    }else{
      setCategory(prev=>[...prev, e.target.value])
    }
  }

  const toggleSubCategory = (e)=>{
    if(subCategory.includes(e.target.value)){
      setSubCategory(prev=>prev.filter(item=>item != e.target.value))
    }else{
      setSubCategory(prev=>[...prev, e.target.value])
    }
  }

  const applyFilter = ()=>{
      let productsCopy = products.slice();
      if(showSearch && search){
        productsCopy = productsCopy.filter(item=>item.name.toLowerCase().includes(search.toLowerCase()))
      }
      if(category.length>0){
        productsCopy = productsCopy.filter(item=>category.includes(item.category));
      }

      if(subCategory.length>0){
        productsCopy = productsCopy.filter(item=>subCategory.includes(item.subCategory));
      }
      setFilterProducts(productsCopy);

  }

  const sortProduct=()=>{
    let FilterProductsCopy = FilterProducts.slice();
    switch(sortType){
      case 'low-high':
        setFilterProducts(FilterProductsCopy.sort((a,b)=>(a.price-b.price)));
        break;
      case 'high-low':
        setFilterProducts(FilterProductsCopy.sort((a,b)=>(b.price - a.price)));
        break;

        default:
          applyFilter();
          break;
    }
  }

  
  
  useEffect(()=>{
    setFilterProducts(products);
  },[])

  useEffect(()=>{
    applyFilter();
  }, [category, subCategory, search, showSearch])

  useEffect(()=>{
    sortProduct();
  }, [sortType])
 

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      {/*filter option */}
      <div className='min-w-60'>
            <p onClick={()=>setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS
            <img onClick={()=>setShowFilter(!showFilter)} className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} src={frontEndAssets.dropdown_icon} alt="" />
            </p>
       {/*Catogery filter */}
       <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
            <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
            <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
                    <p className='flex gap-2 '>
                      <input className='w-3' type="checkbox" value={'Men'} onChange={toggleCategory}  />Men
                    </p>
                    <p className='flex gap-2 '>
                      <input className='w-3' type="checkbox" value={'Women'} onChange={toggleCategory} />Women
                    </p>
                    <p className='flex gap-2 '>
                      <input className='w-3' type="checkbox" value={'Kids'} onChange={toggleCategory} />Kids
                    </p>
            </div>
        </div>
         {/*Sub Catogery filter */}   
         <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
            <p className='mb-3 text-sm font-medium'>TYPE</p>
            <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
                    <p className='flex gap-2 '>
                      <input className='w-3' type="checkbox" value={'Topwear'} onChange={toggleSubCategory}  />Topwear
                    </p>
                    <p className='flex gap-2 '>
                      <input className='w-3' type="checkbox" value={'Bottomwear'} onChange={toggleSubCategory} />Bottomwear
                    </p>
                    <p className='flex gap-2 '>
                      <input className='w-3' type="checkbox" value={'Winterwear'}  onChange={toggleSubCategory} />Winterwear
                    </p>
            </div>
        </div>
      </div>
      {/*Right Side */}
      <div className='flex-1 '>
          <div className='flex justify-between text-base sm:text-2xl mb-4'>
                <Title text1={'ALL'} text2={'COLLECTION'}/>
      {/* Product Sort */}
      <select onChange={(e)=>setSortType(e.target.value)} className='border-2 border-gray-300 text-sm px-2'>
        <option value="relevent">Sort by : Relavent</option>
        <option value="low-high">Sort by : Low to High</option>
        <option value="high-low">Sort by : High to Low</option>
      </select>
          </div>
          {/*Map Products*/}
          {/* id, image, name, price */}
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
            {FilterProducts.map((item, index)=>{
              return <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
            })}
          </div>
      </div>
    </div>
  )
}

export default Collection