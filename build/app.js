$(function() {

  var $calendar       = $('.month-view'),
      $startMonday    = $('.change--week-starts--monday'),
      $startSunday    = $('.change--week-starts--sunday'),
      $firstMonday    = $('.change--first-day--monday'),
      $firstWednesday = $('.change--first-day--wednesday'),
      $firstFriday    = $('.change--first-day--friday');

  $startMonday.on('click', function(){
    $calendar.attr('data-week-starts', 'monday');
  });

  $startSunday.on('click', function(){
    $calendar.attr('data-week-starts', 'sunday');
  });

  $firstMonday.on('click', function(){
    $calendar.attr('data-first-day', 'monday');
  });

  $firstWednesday.on('click', function(){
    $calendar.attr('data-first-day', 'wednesday');
  });

  $firstFriday.on('click', function(){
    $calendar.attr('data-first-day', 'friday');
  });

});
