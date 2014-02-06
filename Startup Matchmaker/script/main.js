$( "#mobile-nav" ).click(function() {
  $( "nav" ).slideToggle( "slow", function() {
  });
});

$( ".boxes h3" ).click(function() {
  $( ".boxes p,a" ).slideToggle( "slow", function() {
  });
});

