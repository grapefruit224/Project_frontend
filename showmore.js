const listPic = document.querySelector('.list-pic');
const btn  = document.querySelector('.showmore_button');
let pageToPatch = 1;

btn.addEventListener('click', ()=>{fetchImage(pageToPatch += 1)});


async function fetchImage(pageNum){
    try {
        const response = await fetch(`https://picsum.photos/v2/list?page=${pageNum}&limit=3`);
        if (!response.ok) {
            throw new Error('네트워크 응답에 문제가 있습니다.');
        }
        const datas = await response.json();
        makeImageList(datas);
        console.log(datas);
    }catch(error){
        console.error(error);
    }


}


function makeImageList(datas){
    datas.forEach((data)=>{
        listPic.insertAdjacentHTML('beforeend', `<li><img class='add_img' src="${data.download_url}" alt=""></li>`);
    });
}