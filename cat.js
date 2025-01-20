function createMycat() {
    // Cat Body(I tried to do the sizing, but I struggled a lot)
    let bodyTriangle = [
        [0.0, 0.6, -0.5, -0.3, 0.5, -0.3]  
    ];

    for (let vertices of bodyTriangle) {
        let triangle = new Triangle();
        triangle.position = [0.0, 0.0]; 
        triangle.color = [0.7, 0.7, 0.7, 1.0]; 
        triangle.size = 60;
        triangle.render = function () {
            drawTriangle(vertices);
        };
        g_shapesList.push(triangle);
    }
    
    // Cat Whiskers 
    let whiskerTriangles = [
        [0.0, 0.4, -0.6, 0.6, -0.6, 0.7],  
        [0.0, 0.4, 0.6, 0.6, 0.6, 0.7],      
        [0.0, 0.4, -0.6, 0.3, -0.6, 0.2],    
        [0.0, 0.4, 0.6, 0.3, 0.6, 0.2]       
    ];

    for (let vertices of whiskerTriangles) {
        let triangle = new Triangle();
        triangle.position = [0.0, 0.0]; 
        triangle.color = [0.7, 0.7, 0.7, 1.0]; 
        triangle.size = 10;
        triangle.render = function () {
            drawTriangle(vertices);
        };
        g_shapesList.push(triangle);
    }

    // Cat Ears 
    let earTriangles = [
        [-0.5, 0.6, -0.7, 0.9, -0.2, 0.9],   
        [0.5, 0.6, 0.7, 0.9, 0.2, 0.9]      
    ];

    for (let vertices of earTriangles) {
        let triangle = new Triangle();
        triangle.position = [0.0, 0.0]; 
        triangle.color = [0.6, 0.6, 0.6, 1.0]; 
        triangle.size = 30;
        triangle.render = function () {
            drawTriangle(vertices);
        };
        g_shapesList.push(triangle);
    }

        

    //Draws the shape
    renderAllShapes();
}
