$(function() {

  // Show the move-to-top button for every post.
  $('a.post_control.move_to_top').show();

  function enlarge() {
    $('img.inline_external_image')
      .not('.enlarged')
      .not('.touched')
      .addClass('touched')

      // Save screen space.
      .css('maxHeight', 100)

      // Let me restart the GIF by hovering.
      .on('mouseenter', function() {
        var el = $(this);
        el.attr('src', el.attr('src') + "#" + Math.random());
      })

      // Automatically load the image.
      .click();
  }

  enlarge();
  setInterval(enlarge, 1000);

});
