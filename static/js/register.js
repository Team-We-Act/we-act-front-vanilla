var savedVal = 0;

window.onload = function(){
  $('#volunteer-card').on('click', function(){
    savedVal=1;
    let volunteer_card = document.getElementById('volunteer-card')
    console.log(volunteer_card.classList.contains('passive-card'))
    if (volunteer_card.classList.contains('passive-card'))
      volunteer_card.classlist.remove("passive-card");
    if (!volunteer_card.classList.contains('volunteer-card-active'))
      volunteer_card.classlist.add('volunteer-card-active');
  });
}