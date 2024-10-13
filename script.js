function highlight() {
    //Write your code here
   const select = document.querySelectorAll("strong")
	select.forEach((code) => {
		code.style.color = `green`
	})

}


function return_normal() {
    //Write your code here
	 const select = document.querySelectorAll('strong');
	select.forEach((code) => {
		code.style.color = `black`
	})
}