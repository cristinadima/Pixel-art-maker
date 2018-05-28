
$(function(){
  $('#input_height').val(8);
  $('#input_width').val(8);
  makeGrid();
});


function makeGrid() {

  var height,width,table, row,cell;

  table = $('#pixel_canvas');
  height = Number($('#input_height').val());
  width  = Number($('#input_width').val());

  table.children().remove();

  for (var i = 0; i < height; i++){
    row = document.createElement('tr');
    table.append(row);
    for (var j = 0;j < width;j++){
      cell = document.createElement('td');

        row.append(cell);
      }
    }
  $('td').css('background-color','#fff')
}

function hexc(colorval) {
    var parts = colorval.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    delete(parts[0]);
    for (var i = 1; i <= 3; ++i) {
        parts[i] = parseInt(parts[i]).toString(16);
        if (parts[i].length == 1) parts[i] = '0' + parts[i];
    }
    color = '#' + parts.join('');

    return color;
}


$('#submit').click(makeGrid);

$('table').on('click','td',function(){
  var color = $('#colorPicker').val()
  var bgColor = $(this).css('backgroundColor');
  if (hexc(bgColor) === color ){
    $(this).css('background-color','#fff');
  }else{
    $(this).css('background-color',color);
  }
})
