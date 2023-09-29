import { disableBodyScroll, enableBodyScroll} from 'body-scroll-lock';
import {closeModalHelper} from './utilities/close-modal';
const galleryEl= document.querySelector(".gallery-list");
const modalEl={
	modal:document.querySelector("[data-modal]"),
	modalCloseBtn:document.querySelector("[data-modal-close]"),
	modalInfoEl:document.querySelector(".modal-info")
};
const {modal, modalCloseBtn, modalInfoEl}=modalEl;

const openModal= (e)=>{
	if(!e.target.classList.contains("button-more")){
	return
	}
	const open =()=>{
		modal.classList.toggle("is-open");
		getCocktail(e.target.dataset.idDrink).then(rez=>{
			createMarkupCartoFav(rez, modalInfoEl)
			
		})
		disableBodyScroll(e)
	}
	
	setTimeout(open, 500);
	const closeEscape =(e)=>{
		if(e.key ="Escape"){
			closeModalHelper(e)
		}
	document.addEventListener("keydown", closeEscape)	
	}
}
const closeModal = (e)=>{
		
	if(e.target===modalCloseBtn.firstChild || e.target===modal){
		setTimeout(closeModalHelper(e), 500)
	}else{return}
	
}

galleryEl.addEventListener("click", openModal)
modal.addEventListener("click", closeModal)
