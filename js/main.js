const button = document.querySelector("#theme-toggle");

button.addEventListener("click", () => {
	const isDark = document.body.classList.toggle("dark");
	button.textContent = isDark ? "Switch to light mode" : "Switch to dark mode"; 
}); 

