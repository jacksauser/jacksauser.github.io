var projects = [
{
  title: "Music Player",
  author: "Jack Sauser",
  year: "Senior",
  published_loc: "Northwestern",
  clickable: true,
  cover: "assets/music_player_cover.jpg",
  description: "Interactive music player frontend for mobile devices."

},

{
  title: "AI Games",
  author: "Jack Sauser",
  year: "Senior",
  published_loc: "Northwestern",
  clickable: true,
  cover: "assets/music_player_cover.jpg",
  description: "Interactive games playing again an AI."

},

];

function createProjects(projects, shelfSelector){
  let shelf= document.querySelector(shelfSelector);
  if (shelf){
    if(projects instanceof Array){
      for (let project of projects){
        // You will add your content here for
        let html = `
        <h1 class="title">${project.title}</h1>
        <h2 class="author">${project.author}</h2>
        <img class="cover" src="${project.cover}" alt="Cover photo for ${project.title}">
        <div class="book-info">
          <span class="publisher">&copy; ${project.publisher}</span>,
          <span class="pages">${project.pages} pages</span>`


        let container = document.createElement("div");
        container.className="book";
        container.innerHTML = html;
        container.tabIndex = books.indexOf(book);
        shelf.append(container);
      }

    }

  }

}


