from PIL import Image, ImageDraw
import os

def create_circular_favicon():
    # Open the original avatar image
    img_path = "public/my-avatar.png"
    if not os.path.exists(img_path):
        print(f"Error: {img_path} not found!")
        return
    
    # Open and convert to RGBA
    img = Image.open(img_path).convert("RGBA")
    
    # Create different sizes for favicon
    sizes = [16, 32, 180]  # Common favicon sizes
    
    for size in sizes:
        # Resize image to square
        img_resized = img.resize((size, size), Image.Resampling.LANCZOS)
        
        # Create a mask for circular shape
        mask = Image.new('L', (size, size), 0)
        draw = ImageDraw.Draw(mask)
        draw.ellipse((0, 0, size, size), fill=255)
        
        # Create output image with transparent background
        output = Image.new('RGBA', (size, size), (0, 0, 0, 0))
        output.paste(img_resized, (0, 0))
        output.putalpha(mask)
        
        # Save the circular favicon
        if size == 16:
            output.save("public/favicon-16x16.png", "PNG")
        elif size == 32:
            output.save("public/favicon-32x32.png", "PNG")
        elif size == 180:
            output.save("public/apple-touch-icon.png", "PNG")
    
    print("Circular favicons created successfully!")
    print("- favicon-16x16.png")
    print("- favicon-32x32.png") 
    print("- apple-touch-icon.png")

if __name__ == "__main__":
    create_circular_favicon()
