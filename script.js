function volume_sphere(e) {
    //Write your code here
	e.preventDefault();
  let r=document.getElementById('radius').value;
	let result=((4/3)*(Math.PI)*(r*r*r));
	let vol=document.getElementById('volume');
	vol.value=result;
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
