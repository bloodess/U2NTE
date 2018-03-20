$(function()
{
  $(".card-text").hide();
  $(".list-group").hide();

  $(".btn").click(function()
  {
    $(this).parent().parent().find(".card-body").find(".card-text").toggle();
    $(this).parent().parent().find(".card-body").find(".list-group").toggle();

    if($(this).is(":visible"))
    {
      console.log("visible");
    }
  });
})
