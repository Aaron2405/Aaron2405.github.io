(function(){

    const sliders = [...document.querySelectorAll('.curso_body')];
    const buttonNext = document.querySelector('#next');
    const buttonBefore = document.querySelector('#before');

    let value;

    buttonNext.addEventListener('click', ()=>{
        changePosition(1);
    });

    buttonBefore.addEventListener('click', ()=>{
        changePosition(-1);
    });

    const changePosition = (add)=>{
        const currentCurso = document.querySelector('.curso_body--show').dataset.id;
        value = Number(currentCurso);
        value += add;

        sliders[Number(currentCurso)-1].classList.remove('curso_body--show');
        if(value === sliders.length+1 || value === 0){
            value = value === 0 ? sliders.length : 1;
        }

        sliders[value-1].classList.add('curso_body--show');
    }

})();