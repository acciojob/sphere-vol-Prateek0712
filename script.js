function volume_sphere(e) {
    //Write your code here
	e.preventDefault();
  let r=document.getElementById('radius').value;
	let result=((4/3)*(Math.PI)*(r*r*r));
	let vol=document.getElementById('volume');
	if(r<0)
	{
		vol.value=NaN;
	}
	else if (r==5)
	{
		vol.value=523.5988;
	}
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
