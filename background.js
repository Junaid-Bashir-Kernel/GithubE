chrome.omnibox.onInputEntered.addListener((repo) => {
 // Encode user input for special characters , / ? : @ & = + $ #
 //var newURL = 'https://www.google.com/search?q=' + encodeURIComponent(text);
 let newURL='https://github.com/Junaid-Bashir-Kernel'+"/"+encodeURI(repo)
 chrome.tabs.create({ url: newURL });

});