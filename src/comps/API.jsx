import React,{useState} from 'react';

function API({name}) {
    let [data,setData]=useState([])
    let [zip,setzip]=useState(12746)
    let [miles,setmiles]=useState(0)
    
    const handleClick=async(e)=>{
      e.preventDefault()
      const url = `https://realtor-search.p.rapidapi.com/property/search-sale?location=${zip}&search_within_x_miles=${miles}`;
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'a4b32ef39amshbcb90bbe6481d74p188b9djsn12c0f8847183',
          'X-RapidAPI-Host': 'realtor-search.p.rapidapi.com'
        }



      };
      try {
        const response = await fetch(url, options);
        const result = await response.text();
        const formated = JSON.parse(result)
        console.log(formated.data);
        setData(formated.data)
      } catch (error) {
        console.error(error);
      }
    }
    return (
            <div className="RightPage_rightPage">
                        <h1> {name}  </h1>

                <form class="HomePage1_form" onSubmit={handleClick}>
                        <label for="zip">ZIP CODE</label>
                        <input id="zip" name="zip" type="text" placeholder="zip" />
                        <label for="radius">RADIUS</label>
                        <input id="radius" name="radius" type="text" placeholder="radius"/>
                        <button >Button</button>
                        
                        
                        {data.map((item)=>(
                        <div className="content">
                        {console.log(item)}
                        <h5>{item.list_price}</h5>
                        <h5>{item.list_date}</h5>
                        {item.location.address.city}
                        {console.log(item.branding[0].name)}
                        <img src={item.photos[0].href} alt="" />
                        
                        </div>
  ))}
                </form>
            </div>
    )
};
export default API;
