const changeLang  = document.querySelectorAll('.change-language');
const htmlElement = document.querySelector('html');

changeLang.forEach( element =>
    {
        element.addEventListener('click', ()=>
        {

            if ( htmlElement.dir === 'rtl' )
            {
                htmlElement.dir = 'ltr';
                element.querySelector('span').innerHTML = "Arabic";
            }
            else
            {
                htmlElement.dir = 'rtl';
                element.querySelector('span').innerHTML = "English";
            }
        });
    });