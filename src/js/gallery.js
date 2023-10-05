import { fetchRandomCocktails } from "./utilities/fetch-data";
import { createCocktailCards } from "./utilities/render-gallery"; 
const galleryEl= document.querySelector(".gallery-list")

fetchRandomCocktails(9).then(res=>{
	createCocktailCards(res,galleryEl)
})