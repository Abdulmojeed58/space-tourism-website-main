

const place = document.querySelector('.place')


place.addEventListener("click", (e)=>{
    if(e.target.className==="link-btn") {
      let id = e.target.dataset.id
      fetchData(id)
    }
  })
  
  function fetchData(id){
      fetch('./data.json')
      .then(res => res.json())
      .then(datas => {
          let data = Object.entries(datas)
          console.log(data)
          let destinations = data[0][1]
  
          destinations.forEach((des)=>{
              if(des.name === id){
                  let element = `
                  <div class="content">
                  <h3>01 Pick your destination</h3>
                  <div class="moon-img">
                    <img src="${des.images.png}" alt="">
                  </div>
                </div>
          
                  <article>
                    <div class="bottons">
                      
                      <button class="link-btn" data-id="Moon">moon</button>
                      <button class="link-btn" data-id="Mars">mars</button>
                      <button class="link-btn" data-id="Europa">europa</button>
                      <button class="link-btn" data-id="Titan">titan</button>
                    </div>
          
                    <div class="place">
          
                      <h1>${des.name}</h1>
                      <p class="content">${des.description}</p>
                      <div class="line"></div>
                      <div class="bottom">
                        <div class="distance">
                          <p>avg. distance</p>
                          <h3>${des.distance}</h3>
                        </div>
                        <div class="time">
                          <p>est. travel time</p>
                          <h3>${des.travel}</h3>
                        </div>
                      </div>
                    </div>
                  </article>
                  `
                  return place.innerHTML = element
  
              }
          })
          
          }
      )
  }
  
  
  
  window.addEventListener("DOMContentLoaded", ()=>{
    let id = "Moon"
    fetchData(id)
  })