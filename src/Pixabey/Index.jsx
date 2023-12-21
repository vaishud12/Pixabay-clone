import Navbar from "./Navbar"
import Header from "./Header"
import "./Index.css"
import ModalImage from "react-modal-image";
import { useState, useEffect } from "react"

const Pixabay = () => {
  const [data, setData] = useState([])
  const [search1, setSearch] = useState("")
  const [imgpath,setImgpath]=useState("")

  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=41082987-fb212ac70b502d0348b89a678&q=${search1}&image_type=photo&pretty=true`)
    .then(res => res.json())
    .then((d) => setData(d.hits))
  })
  // const openModal = (image) => {
  //       setSelectedImage(image);
  //     };
    
  //     const closeModal = () => {
  //       setSelectedImage(null);
  //     };
  const imageTags = [
    // Nature
    "Landscape",
    "Forest",
    "Mountains",
    "Beach",
    "Sunset",
    "Waterfall",
    "Flowers",
    "Wildlife",
    // Animals
    "Dogs",
    "Cats",
    "Birds",
    "Elephants",
    "Lions",
    "Butterflies",
    "Fish",
    "Horses",
    // Travel
    "City",
    "Street",
    "Architecture",
    "Skyline",
    "Landmarks",
    "Adventure",
    "Culture",
    "Vacation",
    
    // Food
    "Food",
    "Restaurant",
    "Cooking",
    "Vegetarian",
    "Sushi",
    "Dessert",
    "Coffee",
    "Pizza",
    
    // Technology
    "Smartphone",
    "Laptop",
    "Coding",
    "Data",
    "Artificial Intelligence",
    "Virtual Reality",
    "Robotics",
    "Internet of Things",
    
    // Business
    "Office",
    "Meeting",
    "Teamwork",
    "Finance",
    "Charts",
    "Entrepreneur",
    "Success",
    "Work",
    
    // Abstract
    "Abstract",
    "Pattern",
    "Texture",
    "Grunge",
    "Geometric",
    "Art",
    "Creativity",
    "Background",
    // Health and Fitness
    "Exercise",
    "Yoga",
    "Running",
    "Healthy Lifestyle",
    "Nutrition",
    "Gym",
    "Meditation",
    "Wellness",
    // Family and Relationships
    "Family",
    "Love",
    "Friends",
    "Children",
    "Couple",
    "Relationships",
    "Emotions",
    "Happiness",
    // Seasons
    "Spring",
    "Summer",
    "Autumn",
    "Winter",
    "Snow",
    "Rain",
    "Sunshine",
    "Holidays",
    
    // Events
    "Wedding",
    "Birthday",
    "Party",
    "Concert",
    "Festival",
    "Celebration",
    "Fireworks",
    "Graduation",
    // Sports
    "Soccer",
    "Basketball",
    "Tennis",
    "Swimming",
    "Running",
    "Yoga",
    "Gymnastics",
    "Cycling",
    // Science and Education
    "Science",
    "Education",
    "Research",
    "Laboratory",
    "Astronomy",
    "Books",
    "Learning",
    "Knowledge",
  ];
  return (
    <div className='pixaby'>
        <div className="navhead">
        <Navbar />
        <Header />
      <center className='inp'>
      <div className="input-container">
      <i class="fa-solid fa-magnifying-glass"></i><input type="search" placeholder='Search image here What do you want' onChange={(e) => setSearch(e.target.value)} /></div>
        </center>
        </div>
        <div className="icon-btns">
        <button><i className="fa-solid fa-house"></i>Home</button>
  <button><i className="fa-solid fa-camera-retro"></i>Photos</button>
  <button><i className="fa-solid fa-paintbrush"></i>Illustrations</button>
  <button><i className="fa-solid fa-pen-nib"></i>Vectors</button>
  <button><i className="fa-solid fa-music"></i>Music</button>
  <button><i className="fa-solid fa-music"></i>Videos</button>
        
        </div>
        <div className="imageBtn">
          {imageTags.map((e) => {
          return(
              <button onClick={()=>setSearch(e)}>{e}</button>
            )
        })}
          </div>

        <div className="api">
         {data && data.map((x) => {
        return(
          <section key={x.id} className='secImg' onClick={()=>{
            setImgpath(x.webformatURL)
          }}>
            {/* <img src={x.webformatURL} height={x.webformatWidth} width={x.webformatWidth} alt="" /> */}
            
                <ModalImage
                  small={x.webformatURL}
                  large={x.largeImageURL}
                  alt={x.tags}
                />

          {/* <div className="pop-up">
            <span onClick={()=>setImgpath(null)}>❎</span>
          </div> */}
          </section>
        )
      })}
        </div>
      
      
    </div>
  )
}

export default Pixabay