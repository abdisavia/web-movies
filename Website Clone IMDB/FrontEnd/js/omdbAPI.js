$.ajax({
    url: "http://www.omdbapi.com/?apikey=929c59ff&s=harry potter",
    success: result => {
        const movies = result.Search;
        let cards = '';
        movies.forEach(m => {
            cards += `<li class=""w-[20rem] h-[25rem] bg-slate-500 mx-[1.37rem] rounded-[1.38rem] after:left-0 after:bg-gradient-to-t after:from-slate-800 after:absolute after:bottom-0 after:h-[15rem] after:w-full relative">
                        <img src="${m.Poster} alt="" class="object-cover object-center w-full h-full rounded-[1.38rem]">
                        <div class="absolute bottom-5 z-20 w-full text-center">
                        <p class="font-['Poppins'] text-sm font-bold">${m.Title}</p>
                        <p class="font-['Poppins'] text-sm font-light">${m.Year}</p>
                        </div>
                    </li>`;
                });
                $('#cards1').html(cards);
    },
    error: (e) => {
        alert(e.responseText)
    }
});