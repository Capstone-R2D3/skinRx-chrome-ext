localStorage.clear();

chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        console.log('request: ', request)
        console.log('request data: ', request.data)
        console.log('request product: ', request.product)
        console.log('request brand: ', request.brand)

        const data = JSON.stringify(request.data);
        localStorage.setItem('ingredients', data);

        const brand = JSON.stringify(request.brand);
        localStorage.setItem('brand', brand);

        const product = JSON.stringify(request.product);
        localStorage.setItem('product', product);
    }
);
