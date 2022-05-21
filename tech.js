

const section = document.querySelector('section')


section.addEventListener("click", (e)=>{
    if(e.target.classList.contains("btn")) {
    let id = e.target.dataset.id
      fetchData(id)
    }
  })
  
  function fetchData(id){
      fetch('./data.json')
      .then(res => res.json())
      .then(datas => {
          let data = Object.entries(datas)
          let destinations = data[2][1]
  
          destinations.forEach((des)=>{
              if(des.name === id){
                  let element = `
                  <div class="content">
        <h3>03 SPACE LAUNCH 101</h3>
        <article>
          <div class="buttons-btn">
            <button data-id="Launch vehicle" class="btn">1</button>
            <button data-id="Spaceport" class="btn">2</button>
            <button data-id="Space capsule" class="btn">3</button>
          </div>
          <div class="place">
            <h2>The terminology...</h2>
            <h1>${des.name}</h1>
            <p>${des.description}</p>
            
          </div>
        </article>
      </div>
        <div class="tech-image">
          <img src="${des.images.portrait}" alt="">
        </div>
                  `
                  return section.innerHTML = element
  
              }
          })
          
          }
      )
  }
  
  
  
  window.addEventListener("DOMContentLoaded", ()=>{
    let id = "Launch vehicle"
    fetchData(id)
  })