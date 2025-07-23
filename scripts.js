// form submission
document.getElementById("lead-form")
.addEventListener("submit",function(e) {
   e.preventDefault();
   
   // Get Form Values
   const firstname = this.elements[0].value;
   const lastname = this.elements[1].value;
   const email = this.elements[2].value;

   // in real scenario, you would send this data to a server 
   console.log("Lead Capture:",{firstname,lastname,email});

   //show configuration
   alert("Thank you for your interest! we will contact you shortly with our offers, procedures and requirements")
    
   // Reset form
   this.reset()
})
// show popup after 5 seconds

setTimeout(function(){
document.getElementById('email-popup').style.display="flex"
},5000);

// close popup when X is clicked
document.querySelector(".close-btn").addEventListener("click",function(e){
document.getElementById("email-popup").style.display="none";
})

// close when clicking outside content
document.getElementById("email-popup").addEventListener("click",function(e){
if(e.target===this){
   this.style.display="none";
}
});

