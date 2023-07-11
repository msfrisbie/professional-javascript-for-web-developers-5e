document.addEventListener('copy', (e) => {
  e.clipboardData.setData('text/plain', 'foo');
  e.preventDefault(); // default behaviour is to copy any selected text
});

