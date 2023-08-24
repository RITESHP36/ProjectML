import cv2
from openpyxl import Workbook

# Load the image
image = cv2.imread('Python_ML\Timetable Data\8.jpg')

# Apply image processing techniques to isolate green areas
# This depends on the specifics of your image and may require some experimentation

# Extract text using OCR (Tesseract)
# You'll need to install pytesseract and configure Tesseract accordingly
import pytesseract

# Extracted text from green areas
green_text = pytesseract.image_to_string(green_area_image)

# Create an Excel workbook and worksheet
wb = Workbook()
ws = wb.active

# Split and organize the extracted data and fill it into Excel
# You need to specify the cell locations where the data should go

# Save the Excel file
wb.save('timetable.xlsx')
