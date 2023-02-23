const dataResources = [
  {
    'title': 'Website Community PIWCom',
    'link': 'https://dribbble.com/shots/20351663-Landing-Page-Website-Community-PIWCom',
    'description': 'PIWCom adalah design yang dilakukan untuk memperbarui tugas hasil design mata kuliah saat perkuliahan.',
    'linkPertama': 'https://dribbble.com/shots/20351663-Landing-Page-Website-Community-PIWCom',
    'tags': ['all', 'design'],
  },
  {
    'title': 'Redesign Winampp Application',
    'link': 'https://dribbble.com/shots/20500264-Redesign-Winamp-Application',
    'description': 'PIWCom adalah design yang dilakukan untuk memperbarui tugas hasil design mata kuliah saat perkuliahan.',
    'linkPertama': 'https://dribbble.com/shots/20351663-Landing-Page-Website-Community-PIWCom',
    'tags': ['all', 'design'],
  },
]

const resources = document.querySelector("#projectContainer");
let category = "";
let filteredDataResources = [];

function filterResources(category) {
  // Filter data
  filteredDataResources = dataResources.filter (resourceData => {
    if (resourceData.tags.includes(category)) {
      // clone new card
      const resourceCard = copyTemplateCard(resourceData);
      // attach new card to container
      resources.appendChild(resourceCard);
    }
  })
}
filterResources("all");

const template = document.querySelector("#wrap");
function copyTemplateCard(resourceCard) {
  // clone template
  const resourceTemplate = document.importNode(template.content, true);
  const card = resourceTemplate.querySelector("#projectItem");
  //  insert title information from array
  const title = card.querySelector("#title");
  title.innerText = resourceData.title;
  title.href = resourceData.link;
  // insert description information from array
  const description = card.querySelector("#description");
  description.innerText = resourceData.description;
  // insert tag information from array  
  tagsContainer = card.querySelector("#tagsContainer");
  // map though tags to create a tag element for each tag in the array
  resourceData.tags.map(resourceDataTag => {
    const individualTag = document.createElement("span")
    // create a tag for all tags except the first one called 'all'
    if ( resourceDataTag !== 'all' ) {
      // add styles
      individualTag.classList = "inline-block bg-teal-400 text-blue-100 rounded-full px-3 py-1 mb-1 text-sm font-semibold"
    // add text
    individualTag.innerHTML = `#${resourceDataTag}`
    // append/atach tag to tags container
    tagsContainer.appendChild(individualTag)
    } 
  })
  // return the new cloned card with the information from the array inserted into it.
  return card;
}