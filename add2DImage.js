function add2DImage({ name, url, x = 0, y = 0, z = -5, width = 20, height = 20 } = {}) {
    if (!url) {
        game.modding.terminal.error("\nPlease provide a URL for the image.\n> Example:\n  - add2DImage({ name: 'myImage', url: 'https://example.com/image.png' });");
        return;
    } else if (!name) {
        game.modding.terminal.error("\nPlease provide a unique name for the object.\n> Example:\n  - add2DImage({ name: 'myImage', url: 'https://example.com/image.png' });");
        return;
    }

    game.setObject({
        id: name,
        type: {
            id: name,
            obj: "https://starblast.data.neuronality.com/mods/objects/plane.obj",
            emissive: url,
        },
        position: { x, y, z },
        scale: { x: width, y: height, z: 0 },
        rotation: { x: Math.PI, y: 0, z: 0 },
    });

    game.modding.terminal.echo(`Added 2D image with name "${name}" at position (${x}, ${y}, ${z}) with dimensions (${width}x${height})`);
}

// Example usage:
add2DImage({
    name: "myImage", // give any unique name (don't reuse the same name for other images)
    url: "https://example.com/image.png", // paste your image URL here
    x: 0, // horizontal position (0 = center)
    y: 0, // vertical position (0 = center)
    z: -5, // depth (negative value = far away, positive value = closer)
    width: 20, // image width
    height: 20, // image height
});
