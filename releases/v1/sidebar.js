const links = document.querySelectorAll('.sidebar a');
const contents = document.querySelectorAll('.content');

function showContent(contentId) {
  contents.forEach(content => {
    if (content.id === contentId) {
      content.style.display = 'block';
    } else {
      content.style.display = 'none';
    }
  });
}

links.forEach(link => {
  const contentId = link.getAttribute('data-content-id');
  link.addEventListener('click', () => {
    showContent(contentId);
  });
});

const firstLink = document.querySelector('.sidebar a');
const firstContentId = firstLink.getAttribute('data-content-id');
const firstContent = document.getElementById(firstContentId);
firstContent.style.display = 'block';

function file() {
  const dataContent = document.getElementById('file');
  showContent(dataContent.id);
}
function file1() {
  const dataContent = document.getElementById('file');
  showContent(dataContent.id);
}
function domain1() {
  const dataContent = document.getElementById('site');
  showContent(dataContent.id);
}