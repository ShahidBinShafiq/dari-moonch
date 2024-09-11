



import { bannerImages } from '../data/data'
const Banner =()=> {
  return (
    <div className="banner-wrapper">
    <div className="banner-inner">
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
<div class="carousel-inner">
{
bannerImages.map((bannerImg, index)=>{
return(
  <div className={`carousel-item ${index=== 0 ? "active" : ""}`}>
  <img src={bannerImg} class="d-block w-100" alt="..."/>
</div>
)
})
}

</div>
<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
<span class="carousel-control-prev-icon" aria-hidden="true"></span>
<span class="visually-hidden">Previous</span>
</button>
<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
<span class="carousel-control-next-icon" aria-hidden="true"></span>
<span class="visually-hidden">Next</span>
</button>
</div>
    </div>
  </div>

  )
}


export default Banner;
