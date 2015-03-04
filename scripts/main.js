
function formBuilder(spec,$el){
  // BEGIN EDITING HERE
  var el = '' +
    '<h1>' + spec.title + '</h1>' +
    '<h3>' + spec.desc + '</h3>';

  // $el.html("<i>HTML Form Results Here</i>");
  $el.append(el);

  // console.log(spec.params);
  spec.params.forEach(function (param) {

    param.type = (param.type === 'string') ? 'text' : param.type;
    param.type = (param.type === 'int') ? 'number' : param.type;

    if (param.type === 'textarea') {

      $el.append('<textarea maxlength="' + param.max_length + '"></textarea>');

    } else if (param.type === 'select') {

      $el.append('<select>');
      param.values.forEach(function (val) {
        $el.append('<option>' + val + '</option>');
      })
      $el.append('</select>');

    } else {

      if (param.label) {
        $el.append('<label>' + param.label);
      }

      $el.append('<input type="' + param.type + '" name="' + param.name + '" style="display:block; width: 100%; max-width: 300px;">');

      if (param.label) {
        $el.append('</label>')
      }
    }

    // for (p in param) {
    //   $el.prop(p, param[p]);
    // }

  });
  // STOP EDITING HERE
}


var element = $('#result');

samples.forEach(function (sample) {
  formBuilder(sample, element);
});

// formBuilder(samples, $('#result'));

