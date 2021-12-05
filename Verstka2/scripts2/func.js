function createActive(hbId, hbiId) {
	let select = document.getElementById(hbiId);
	let hb = document.getElementById(hbId);
	select.addEventListener('click', function (){
		hb.classList.toggle('active')
	})
}
