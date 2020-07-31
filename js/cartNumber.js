function onLoadCartNumber () {
    let cameraNumber = localStorage.getItem("cartNumber");
    
    if(cameraNumber) {
        unit.textContent = cameraNumber;
    };
}