//npm start to Run



//3 ways to create component in react 1.function 2.class 3.arrow
/*
function App()
{
return(
     <h1>Function component-Pruthvi</h1>
)
}
export default App
*/



//2nd method class way of creating react component
/*import React from "react"
class App extends React.Component
{
render()
{
  return(
    <h1>Class component-Pruthvi Rai</h1>
  )
}
}
export default App
*/

//3rd method arrow way creating react
//()=>{}        const let var-only this three variable names can be used
//JSX Java Script XML 
//1.Wrapping 2.Fragment like <Fragment>...</Fragment> 3.Fragment braces like <>...<\>

/*import SKILL from "./skills"
let App=()=>{
  return(
    <>
      <h1>Pruthvi profile</h1>
      <img src="https://source.unsplash.com/random/200x200/?Rabbit" alt="rabbit"/>
      <hr></hr>
      <h3>About Me</h3>
      <p>I am Pruthvi Rai from 2nd year ISE 'A' </p>
      <SKILL/>
      
    </>
  )
  }
  export default App*/

  //DAY 3 REACT
  //Understanding state
  /*import { useState } from "react"//1st change for using hooks(useState)
  function App()
  {
    //2nd change created a hoo(2-variable,method)
    const [val,setVal]=useState('https://source.unsplash.com/random/200x200/?rabbit')
    const change=()=>{
      setVal('https://source.unsplash.com/random/200x200/?cow')
    }
    return(
      <>
      <h2>Pruthvi Profile</h2>
      <img src={val} alt="rabbit"/>
      <button onClick={change}>change</button>
      </>
    )
  }
  export default App*/

  //Understand props
  /*import Twostar from "./twostar"
  function App()
  {
    return(
      <>
      <h1>Star Student of ISE 3A Detail</h1>
      <h3>Pruthvi</h3>
      <p>From Puttur</p>
      <hr></hr>
      <Twostar name="Manvi" star="Power star"/>
      <Twostar name="Maneesh" star="Super star"/>
      <Twostar name="Shravya" star="Twinkle star"/>
      
      </>
    )
  }
  export default App*/

//Phase 1 front end
//forms --->2 ways controlled and uncontrolled (useRef) way

/*function App()
{
  const submit=()=>
  {
    alert("data submitted")
  }
    return(
        <>
        <h1>Form Demo </h1>
        <hr></hr>
        <form onSubmit={submit}>
            <label>Name</label>
            <input type="text" name="name" />
            <button >submit</button>

        </form>
        </>
    )
}
export default App*/

// 6/02/2024 edata=elementdata
/*import { useState } from "react";
function App()
{
  let [fdata,setFdata]=useState("");  //variable-hook
  let[tdata,setTdata]=useState({
    place:" ",
    cost:" ",
    transport:" ",
    pic:" "
  });

  const mrbean=(e)=>{
    let ename=e.targetname;
    let edata=e.target.value;
    setTdata({...tdata,[ename]:edata})
  }

  const chutki=(e)=>{
    e.preventDefault()
    setFdata(tdata)
  }

  return(
    <>
      <center>
        <h2 style={{color:'maroon',fontFamily:'cursive'}}>
          Tripper App
        </h2>
        </center>
      <hr></hr>
      <form onSubmit={chutki}>
        <labe>Place</labe>
        <input type="text" name="Place" onChange={mrbean}/>
        <br></br>
        <label>Cost</label>
        <input type="text" name="Cost" onChange={mrbean}/>
        <br></br>
        <label>Transport</label>
        <input type="text" name="Transport" onChange={mrbean}/>
        <br></br>
        <label>Place pic</label>
        <input type="text" name="Pic" onChange={mrbean}/>
        <br></br>

        <button>Submit</button>
        </form>
      <p> {fdata.place}</p>
      <p> {fdata.cost}</p>
      <p> {fdata.transport}</p>
      <p> {fdata.pic}</p>
      </>
  )
}
export default App*/

// import React, { useState } from 'react';
// import './App.css';

// function App() {
//   const [cart, setCart] = useState([]);
//   const [products, setProducts] = useState([
//     { id: 1, name: 'Adidas Shoe', price: 10999, img: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/ec595635a2994adea094a8bf0117ef1a_9366/Samba_OG_Shoes_White_B75806_02_standard_hover.jpg', category: 'Category 1', rating: 4 },
//     { id: 2, name: 'Gosriki women kurti', price: 620, img: 'https://rukminim2.flixcart.com/image/850/1000/xif0q/ethnic-set/d/k/l/5xl-shank-maroon-5xl-gosriki-original-imagh33syerfpu32.jpeg?q=20&crop=false', category: 'Category 2', rating: 3 },
//     { id: 3, name: 'SONY tv', price: 59000, img: 'https://m.media-amazon.com/images/I/71d5fMDvq9L.jpg', category: 'Category 1', rating: 5 },
//     { id: 4, name: 'Samsung Refrigerator', price: 50000, img: 'https://images.samsung.com/is/image/samsung/p6pim/in/rt28c3922s9-hl/gallery/in-ref-tmf-rt3000-449401-rt28c3922s9-hl-535085978?$1300_1038_PNG$', category: 'Category 1', rating: 4 },
//     { id: 5, name: 'Stylish bag', price: 500, img: 'https://images.dailyobjects.com/marche/product-images/1201/kelp-lunar-daypack-images/Kelp-Lunar-Daypack.png?tr=cm-pad_resize,v-2,w-768,h-648,dpr-1', category: 'Category 1', rating: 4 },
//     // Add more products here
//   ]);

//   const addToCart = (product) => {
//     setCart([...cart, product]);
//   };

//   const removeFromCart = (productId) => {
//     setCart(cart.filter(item => item.id !== productId));
//   };

//   const incrementQuantity = (productId) => {
//     const updatedCart = cart.map(item => {
//       if (item.id === productId) {
//         return { ...item, quantity: item.quantity + 1 };
//       }
//       return item;
//     });
//     setCart(updatedCart);
//   };

//   const decrementQuantity = (productId) => {
//     const updatedCart = cart.map(item => {
//       if (item.id === productId && item.quantity > 1) {
//         return { ...item, quantity: item.quantity - 1 };
//       }
//       return item;
//     });
//     setCart(updatedCart.filter(item => item.quantity !== 0));
//   };

//   return (
//     <div className="App">
//       <header>
//         <nav>
//           <div className="logo">Shopping Cart</div>
//           <input type="text" placeholder="Search..." />
//           <ul>
//             <li>All</li>
//             <li>Category 1</li>
//             <li>Category 2</li>
//             {/* Add more categories here */}
//           </ul>
//         </nav>
//       </header>
//       <main>
//         <div className="product-list">
//           {products.map(product => (
//             <div key={product.id} className="product-card">
//               <img src={product.img} alt={product.name} />
//               <h3>{product.name}</h3>
//               <p>${product.price}</p>
//               <div>Rating: {product.rating}</div>
//               <button onClick={() => addToCart(product)}>Add to Cart</button>
//             </div>
//           ))}
//         </div>
//         <div className="cart">
//           <h2>Shopping Cart</h2>
//           <ul>
//             {cart.map(item => (
//               <li key={item.id}>
//                 <span>{item.name}</span>
//                 <button onClick={() => incrementQuantity(item.id)}>+</button>
//                 <span>{item.quantity}</span>
//                 <button onClick={() => decrementQuantity(item.id)}>-</button>
//                 <button onClick={() => removeFromCart(item.id)}>Remove</button>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </main>
//     </div>
//   );
// }

// export default App;
// components/Home.js
import React, { useState } from 'react';

function Home() {
  
  const [selectedOption, setSelectedOption] = useState('');


  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div style={{ backgroundColor: '#ffffff' ,border:'2px solid #b80000', padding: '20px' }}>
      <header style={{ textAlign: 'center' }}>
        <h1 style={{ color: 'red' }}>Welcome to our Heartcare Website!</h1>
        <img
          src="https://www.hcigroupglobal.com/wp-content/uploads/2022/11/health-icon-4-3.png"
          alt="Heartcare logo"
          width="50"
          height="50"
        />
        <h3>Global heartcare to fit your lifestyle</h3>
      </header>
      <main style={{ textAlign: 'center' }}>
        <img
          src="https://heartcareintl.org/wp-content/uploads/2020/12/slider1.jpg"
          alt="A smiling child after heart surgery"
        />
        <section>
          <h1>OUR MISSION:</h1>
          <p>
            <h3>
              Heart Care International saves the lives of needy children born with congenital heart defects.
            </h3>
          </p>
          
         
          <label htmlFor="dropdownMenu">More info</label>
          <select id="dropdownMenu" value={selectedOption} onChange={handleOptionChange}>

            <option value="AboutUs">About us</option>
            <option value="Education">Education</option>
            <option value="Get involved">Get involved</option>
          </select>

          
          {selectedOption === 'AboutUs' && (
            <p>
              
The Covid-19 pandemic created worldwide challenges, to say the least. Heart Care International is proud to have responded to the call by creating virtual opportunities for pediatric cardiac healthcare through patient tele-conferencing and global grand rounds. We will continue these efforts as we resume travel to our host hospitals.
Created in 1994, Heart Care International is a not-for-profit 501(c)(3) organization based in Greenwich, Connecticut, with a dual mission. We team with hospitals in developing countries to provide high quality, compassionate, and completely free surgical cardiac care to needy children and teenagers with heart disease. Also critical to our mission, we help develop self-sustaining pediatric cardiac centers through education – in-person and via web-based tele-communications. Dedicated medical professionals volunteer 100% of their time to staff our medical missions and contribute to our year-long ongoing training. Medical supplies and equipment are donated from medical companies or purchased through philanthropic donations. We take our place in the world seriously and continually strive to heal children’s hearts, even during pandemic times.


            </p>
          )}

          {selectedOption === 'Education' && (
            <p>
              <center><h3>Training</h3></center>
<center><h4>Hands-on-work</h4></center>
Heart Care International believes that through education and hands-on training, we can help build pediatric cardiac care units in developing countries. We also believe that the medical training has to be custom-made to the needs and interests of the host country medical team. We are successful when we can work collaboratively and respectfully with HCI’s host hospital medical teams.
<center><h4>Tele-Conferencing</h4></center>
When travel isn’t possible, HCI’s virtual health care system allows us to continue our education and training. Through doctor-to-doctor tele-conferences, patient cases can be reviewed in real-time between in-country medical professionals and HCI team members, generating suggestions and collegial brainstorming opportunities for the local teams.

<center><h4>Handbook For Parents and Families</h4></center>
Heart Care International’s Logistics Director and ICU Nursing Team Captain, Betsy Tirado RN, created a Parent/Family Handbook which is distributed to all families with children undergoing heart procedures on each mission. This guide offers important information about congenital heart defects (CHD, detailed explanations of CHD medical terminology, and what to expect during recovery once home.


            </p>
          )}

          {selectedOption === 'Get involved' && (
            <p>
              <center><h3>Memorial or Honorary Gifts</h3></center>
You can honor a friend, a loved one, or even celebrate a special event through a donation. We’ll send a letter notifying the family of your gift (amount won’t be included). All of this can be done online, or you can contact us at info@heartcareintl.org for assistance.
<center><h3>Matching Gifts</h3></center>
A fast and easy way to DOUBLE your contribution! Be sure to check with your employer. Contact info@heartcareintl.org if further assistance would be helpful.
<center><h3>Planned Giving</h3></center>
A stock gift or Other Financial Asset is an easy way to support our work and receive favorable tax considerations. Contact us at info@heartcareintl.org for more information.

            </p>
          )}
        </section>
      </main>
    </div>
  );
}

export default Home;
