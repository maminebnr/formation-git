import math 
def calculate_circle_area(radius):
    """Calculate the area of a circle given its radius."""
    if radius < 0:
        raise ValueError("Radius cannot be negative.")
    area = math.pi * (radius ** 2)
    return area
a=input("Enter the radius of the circle: ")
print(f"The area of the circle with radius {a} is: {calculate_circle_area(float(a))}")
