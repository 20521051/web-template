import {swapJS} from "/assets/script/main.js"
window.onload = (event) => {
    let search = document.getElementsByClassName("search_input");
    search.value = swapJS.outSearchText;
    document.getElementsByClassName("search_header").innerHTML +=swapJS.outSearchText;
  };
const ul = document.querySelector('ul.pagination');
let allPages = 15;

function elem(allPages, page){
    let li = '';

    let beforePages = page - 1;
    let afterPages = page + 1;
    let liActive;

    if(page > 1){
        li += `<li class="pagination-item" onclick="elem(allPages, ${page-1})" ><i class='bx bxs-chevron-left bx-flip-vertical'></i></li>`;
        
    }

    for (let pageLength = beforePages; pageLength <= afterPages; pageLength++){

        if(pageLength > allPages){
            continue;
        }
        if(pageLength == 0){
            pageLength = pageLength + 1;
        }

        if(page == pageLength){
            liActive = 'pagination-item--active';
        }else{
            liActive = '';
        }

        li += `<li class="pagination-item ${liActive}" onclick="elem(allPages, ${pageLength})" ><span class="pagination-item_link">${pageLength}</span></li>`
    }

    if(page < allPages){
        li += `<li class="pagination-item" onclick="elem(allPages, ${page+1})" ><i class='bx bxs-chevron-right bx-flip-vertical'></i></li>`;
        
    }

    ul.innerHTML = li;
}
elem(allPages, 1);