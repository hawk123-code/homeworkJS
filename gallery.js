/*Name this external file gallery.js*/

function upDate(previewPic){
    console.log('upDate function triggered');
    console.log('previewPic:', previewPic); 
    const x=document.getElementById('image');
    x.style.backgroundImage=`url(${previewPic.src})`;
    x.style.backgroundColor='#b3b3b3';
    x.innerHTML=previewPic.alt;
       }
       function unDo(){
        const x=document.getElementById('image');
        x.style.backgroundImage="url('')";
        x.style.backgroundColor='#8e68ff';
        x.innerHTML="Hover over an image below to display here.";
       }
