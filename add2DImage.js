function add2DImage({ name, url, x = 0, y = 0, z = -5, color, width = 20, height = 20 } = {}) {
    if (!name || !url) {
        return game.modding.terminal.error('[Add2DImage] ' + (url ?
            `Missing Name! Please provide a unique name for the image: "${url.split('/').pop().split(/[#?]/)[0]}"` :
            'Missing URL! Please provide an image link.'
        ));
    }

    const img = { emissive: url };

    if (color) {
        if (Array.isArray(color)) color = `hsl(${color[0] ?? 0}, ${color[1] ?? 100}%, ${color[2] ?? 50}%)`;
        img.emissiveColor = color;
    }

    game.setObject({
        id: name,
        type: {
            id: name, ...img,
            obj: "https://starblast.data.neuronality.com/mods/objects/plane.obj"
        },
        position: { x, y, z },
        scale: { x: width, y: height, z: 0 },
        rotation: { x: Math.PI, y: 0, z: 0 }
    });

    game.modding.terminal.echo(`\n[[b;slategrey;]Added 2D image\n> Name: [[b;;]${name}]\n> Image: [[b;;]${url.split('/').pop().split(/[#?]/)[0]}]\n> Position: ([[b;;]${x}], [[b;;]${y}], [[b;;]${z}])\n> Dimensions: [[b;;]${width}x${height}]${color ? '\n> Color: [[b;;]' + color : ''}]\n`);
}

// Example usage:
add2DImage({
    name: "myImage", // give any unique name (don't reuse the same name for other images)
    url: "https://raw.githubusercontent.com/.../image.png", // paste your raw image URL here
    x: 0, // horizontal position (0 = center), default value: 0
    y: 0, // vertical position (0 = center), default value: 0
    z: -10, // depth (negative value = far away, positive value = closer), default value: -5
    width: 20, // image width, default value: 20
    height: 20, // image height, default value: 20

    /**
     * Color Option (Optional)
     * -----------------------
     * 1. Array Format: [Hue (0-360), Saturation (0-100), Lightness (0-100)]
     * color: [120, 100, 50]
     * 
     * 2. String Format: Supports HSL, Hex, RGB, or Color Names
     * color: 'hsl(120, 100%, 50%)'
     * color: '#00ff00'
     * color: 'rgb(0, 255, 0)'
     * color: 'green'
     */
});
