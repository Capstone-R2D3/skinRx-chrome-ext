localStorage.clear();

chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        const data = JSON.stringify(request.data);
        localStorage.setItem('ingredients', data);

        const brand = JSON.stringify(request.brand);
        localStorage.setItem('brand', brand);

        const product = JSON.stringify(request.product);
        localStorage.setItem('product', product);
    }
);
