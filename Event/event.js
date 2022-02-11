'use strict'

{
        const osaka = document.querySelector('.img-osaka');
        const kyoto = document.querySelector('.img-kyoto');
        const hyogo = document.querySelector('.img-hyogo');
        const online = document.querySelector('.img-online');
    
        const dosaka = document.querySelector('.detail-osaka');
        const dkyoto = document.querySelector('.detail-kyoto');
        const dhyogo = document.querySelector('.detail-hyogo');
        const donline = document.querySelector('.detail-online');
    
        const osaka2 = document.querySelector('.img-osaka2');
        const kyoto2 = document.querySelector('.img-kyoto2');
        const hyogo2 = document.querySelector('.img-hyogo2');
        const online2 = document.querySelector('.img-online2');
    
        // osaka
    
        osaka.addEventListener('click', ()=>{
            osaka.classList.add('show');
            osaka2.classList.add('show');
            dosaka.classList.add('show');
        });
    
        osaka2.addEventListener('click', ()=>{
            osaka.classList.remove('show');
            osaka2.classList.remove('show');
            dosaka.classList.remove('show');
        });
    
        // kyoto
    
        kyoto.addEventListener('click', ()=>{
            kyoto.classList.add('show');
            kyoto2.classList.add('show');
            dkyoto.classList.add('show');
        });
    
        kyoto2.addEventListener('click', ()=>{
            kyoto.classList.remove('show');
            kyoto2.classList.remove('show');
            dkyoto.classList.remove('show');
        });
    
        // hyogo
    
        hyogo.addEventListener('click', ()=>{
            hyogo.classList.add('show');
            hyogo2.classList.add('show');
            dhyogo.classList.add('show');
        });
    
        hyogo2.addEventListener('click', ()=>{
            hyogo.classList.remove('show');
            hyogo2.classList.remove('show');
            dhyogo.classList.remove('show');
        });
    
        // online
    
        online.addEventListener('click', ()=>{
            online.classList.add('show');
            online2.classList.add('show');
            donline.classList.add('show');
        });
    
        online2.addEventListener('click', ()=>{
            online.classList.remove('show');
            online2.classList.remove('show');
            donline.classList.remove('show');
        });
}