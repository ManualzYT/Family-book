

var array_names_of_family = [ "Manvel Simonyan" , "Inessa Simonyan" , "Harutyun Simonyan" , "Narine Marandyan" ]; 
var array_images_of_family = [ "Me.jpg" , "Inessa.jpg" , "Dad.jpg" , "Mom.jpg" ]; 

var i = 0; 
function nextslide() {
i++;
var numbers_of_family_members = 4
if (i>numbers_of_family_members)
{
i=0;    
}
var updated_image = array_images_of_family[i];
var updated_name = array_names_of_family[i];
document.getElementById("family_member_image").src = updated_image;
document.getElementById("family_member_name").innerHTML =updated_name; 
}