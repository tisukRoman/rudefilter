
let button = document.getElementById('button');

button.addEventListener('click', function(){
    let field = document.getElementById('field');
    let content = field.value;
    content = content.replace(/\w*ху[йяеёи]\w*?/gi, '***');
    content = content.replace(/\w*пизд[ауоыиэяюёе]\w*?/gi, '***');
    content = content.replace(/\w*бля[тд]\w*?/gi, '***');
    content = content.replace(/\w*[её]ба?\w*?/gi, '***');
    field.value = content;
});

