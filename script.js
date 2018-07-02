/*I want that to be  displayed once the new member is fully registered, and want to have displayes its name*/
function thankyou()
{  
    //I tried to make an if statment here to only happen if the form had been submited, but it didnt work.
    // if (document.getElementById("submit") == true)
    // {
    //     var newmember = document.forms["form"]["name"].value;
    //     alert("Thank you for register ! "+ newmember)
    // }  
    
    //I go with this solution for now and wait for your feedback on this , it will display even if the form is not full filled that is tha bad part 
    var newmember = document.forms["form"]["name"].value;
    alert("Thank you for register ! "+ newmember)
}


document.addEventListener('DOMContentLoaded', function() {
    var collapsibles = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(collapsibles);
});

