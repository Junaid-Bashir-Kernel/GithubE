chrome.omnibox.onInputEntered.addListener((repo) => {
 // Encode user input for special characters , / ? : @ & = + $ #
 let newURL='https://github.com/Junaid-Bashir-Kernel'+"/"+encodeURI(repo)
 chrome.tabs.create({ url: newURL });

});