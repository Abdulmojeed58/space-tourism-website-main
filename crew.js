

const section = document.querySelector('section')


section.addEventListener("click", (e)=>{
    if(e.target.classList.contains("link-btn")) {
    let id = e.target.dataset.id
      fetchData(id)
    }
  })
  
  function fetchData(id){
      fetch('./data.json')
      .then(res => res.json())
      .then(datas => {
          let data = Object.entries(datas)
          let destinations = data[1][1]
  
          destinations.forEach((des)=>{
              if(des.name === id){
                  let element = `
                  <div class="content">
        <article>
          <h3>01 Pick your destination</h3>

          <div class="place">
            <h2>${des.role}</h2>
            <h1>${des.name}</h1>
            <p>${des.bio}</p>
            <div class="buttons">
            
              <button data-id="Douglas Hurley" class="link-btn white"></button>
              <button data-id="Mark Shuttleworth" class="link-btn"></button>
              <button data-id="Victor Glover" class="link-btn"></button>
              <button data-id="Anousheh Ansari" class="link-btn"></button>
            
          </div>
        </article>
      </div>
        <div class="crew-image">
          <img src="${des.images.png}" alt="">
        </div>
                  `
                  return section.innerHTML = element
  
              }
          })
          
          }
      )
  }
  
  
  
  window.addEventListener("DOMContentLoaded", ()=>{
    let id = "Douglas Hurley"
    fetchData(id)
  })