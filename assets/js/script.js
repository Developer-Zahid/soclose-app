window.addEventListener("load", function(){
	let pageHeight = document.documentElement.scrollHeight;
	let pageWrapper = document.querySelector(".page-wrapper");
	pageWrapper.setAttribute("style", `--page-wrapper-height: ${pageHeight}px`)
})