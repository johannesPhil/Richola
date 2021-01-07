let projects = document.querySelector(".projects"),
	baseUrl = "https://richola-api.herokuapp.com";

fetch(baseUrl + "/projects")
	.then((response) => response.json())
	.then((data) => {
		console.log(data);
		// data = data.slice(0, 10);
		data.map((item) => {
			console.log(item.image[0].formats.large.url);
			let card = document.createElement("div"),
				imgContainer = document.createElement("div"),
				cardImg = document.createElement("img"),
				desc = document.createElement("div"),
				header = document.createElement("h3"),
				text = document.createElement("p");
			card.classList.add("project-card");
			imgContainer.classList.add("card-img");
			desc.classList.add("project-desc");
			header.classList.add("project-title");
			text.classList.add("project-text");

			imgContainer.appendChild(cardImg);

			cardImg.src = item.image[0].formats.medium.url;
			header.textContent = item.title;
			text.textContent = item.description;

			desc.innerHTML += header.outerHTML + text.outerHTML;
			card.innerHTML += imgContainer.outerHTML + desc.outerHTML;

			projects.appendChild(card);
		});
	})
	.catch((err) => {
		console.log(err);
	});
