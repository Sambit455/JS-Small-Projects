document.addEventListener('DOMContentLoaded', () => {
  const colorContainer = document.getElementById('color-container');

  
  colorContainer.addEventListener('click', (event) => {
      const clickedElement = event.target;
      
      if (clickedElement.classList.contains('color-box')) {
          const colorName = clickedElement.dataset.color;
          alert(`You clicked on ${colorName} color`);
      }
  });

  document.body.addEventListener('click', () => {
      console.log('Body clicked (Bubbling phase)');
  });

  document.body.addEventListener('click', () => {
      console.log('Body clicked (Capturing phase)');
  }, true);

  document.addEventListener('click', () => {
      console.log('Document clicked (Bubbling phase)');
  });

  document.addEventListener('click', () => {
      console.log('Document clicked (Capturing phase)');
  }, true);
});