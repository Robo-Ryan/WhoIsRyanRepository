from PIL import Image

# Correct the file path as provided
img_path = "/Users/ryanmerlini/Documents/RyanLogo.png"
output_path = "/Users/ryanmerlini/Documents/RyanLogoRemovedBackground.png"

# Open the image file
image = Image.open(img_path)

# Convert the image to RGBA (in case it isn't already)
image = image.convert("RGBA")

# Get the data of the image
data = image.getdata()

# Create a new image with a transparent background
new_data = []
for item in data:
    # Change all white (also shades of whites)
    # pixels to transparent
    if item[:3] == (255, 255, 255):
        new_data.append((255, 255, 255, 0))
    else:
        new_data.append(item)

# Update image data
image.putdata(new_data)

# Save the image
image.save(output_path)
print("Image saved at:", output_path)