let iterator = 1;
const Main = document.querySelector('main');
const Img = document.createElement('img');
const logPictures = async () =>{
  	//const response = await fetch('https://picsum.photos/v2/list?limit=9');
	const response = await fetch(`https://picsum.photos/v2/list?page=${iterator}&limit=9`);
  	const pictures = await response.json();
  	for(const picture of pictures){
		const {download_url:url} = picture;
		Img.src = url;
		Img.style.width = '300px';
		Img.style.height = '300px';
		Main.height += `${920}`
		Main.appendChild(Img.cloneNode(true));
	}
	Main.style.backgroundColor = 'crimson';
	iterator++;
}
logPictures();
const InfiniteScroll = () =>{
	const EndofPage = window.innerHeight + window.scrollY >= document.body.offsetHeight;
	if(EndofPage) logPictures();
}
window.addEventListener("scroll",InfiniteScroll);

