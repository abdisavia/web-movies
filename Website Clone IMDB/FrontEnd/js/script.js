let events = (()=>{
    let ulImg_jumb = document.querySelector("#imgJumb");
    let listImg_jumb = ulImg_jumb.querySelectorAll("li");
    let ulPagination_jumb = document.querySelector("#pagination");
    let pagination = ulPagination_jumb.querySelectorAll("li");
    let btnBurger = document.querySelector('#btnBurger');
    let menu = document.querySelector('#menu');
    cacheDOM();
    function cacheDOM(){
        btnBurger.addEventListener('click',showMenu);
    }

    function showMenu(){
        menu.classList.remove('right-[-50rem]');
        menu.classList.add('right-[-2rem]');
    }
    
    function changeImg(e){
        listImg_jumb.forEach(img=>{
            if(!img.classList.contains("hidden")){
                img.classList.add("hidden");
            }
        });
        listImg_jumb[e].classList.remove("hidden");
    };

    function addPagination(){
        if(listImg_jumb.length != 0){
            let index = -1;
            listImg_jumb.forEach(()=>{
                ulPagination_jumb.appendChild(createBtnPagination(index+=1));
            });
        }
    };

    function createBtnPagination(index){
        let paginat = document.createElement("li");
        let btnPagination = document.createElement("button");
        paginat.appendChild(btnPagination);
        btnPagination.setAttribute('class',"bg-white rounded-full w-3 h-3  mx-1 hover:bg-gray-300 focus:bg-gray-400");
        btnPagination.setAttribute('type','button');
        btnPagination.setAttribute('onclick', 'events.changeImg('+index+')');
        return paginat;
    }
    return{
        addPagination : addPagination,
        changeImg : changeImg
    }
})();

events.addPagination()
