const SIDEBAR_WIDTH = 'sidebar_width';

function resizeSidebar(element,callback){

	element.addEventListener('pointerdown',onPointerdown)


	function onPointerdown(e){
      e.preventDefault()
      document.addEventListener('pointermove',onPointerMove)
      document.addEventListener('pointerup',onPointerUp,{once:true})
	}

	function onPointerMove(e){
		e.preventDefault()
      callback(e.pageX)
	}

	function onPointerUp(){
       document.removeEventListener('pointermove',onPointerMove)
	}

}


resizeSidebar(document.querySelector('.resizer'),function(xy){
	 let sideBarWidth = xy + 'px'
	sessionStorage.setItem(SIDEBAR_WIDTH,sideBarWidth)
     document.body.style.setProperty('--sidebar',sideBarWidth)
})


const sidebarWidth = sessionStorage.getItem(SIDEBAR_WIDTH)

if(sidebarWidth !== null){
	document.body.style.setProperty('--sidebar',sidebarWidth)
}