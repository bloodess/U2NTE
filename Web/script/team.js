$(function()
{
  //On cache la partie "compétences"
  $(".list-group").animate({height: "toggle"},0);

  //Lors du clic sur le bouton, on affiche la partie "compétences"
  $(".btn").click(function()
  {
    //Le div compétences de la fiche actuelle
    var competences = $(this).parent().parent().find(".card-body").find(".list-group");
    //Animation pour afficher la div et tourner le bouton
    competences.animate({height: "toggle"},250);
    $(this).find("span").toggleClass("show-div");
  });
})
