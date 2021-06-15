  // https://velog.io/@gicomong/reverse-card
const street = document.querySelector('.street');
const sky = document.querySelector('.sky');
for (let i=1; i<15; i++) {
	const roadDiv = document.createElement("div");
	roadDiv.className = `road road_${i}`;
	street.appendChild(roadDiv);
	
	const skyDiv = document.createElement("div");
	skyDiv.className = `cloud cloud_${i}`;
	sky.appendChild(skyDiv);
}
