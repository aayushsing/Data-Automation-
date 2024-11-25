Key Features
Image Upload and OCR: Users upload an image (e.g., a document photo), and the system uses OCR (Optical Character Recognition) to extract data.
Preview Extracted Data: Displays the extracted content in a responsive table for review before saving.
Save to Excel: Organizes and saves the data into an Excel file (data.xlsx) with sorting by name and date.
Export to PDF: Converts the previewed table into a downloadable PDF file.
Enhanced UI/UX:
Modern design using Bootstrap.
Smooth animations and hover effects for buttons.
Fully responsive for desktop and mobile use.
Technologies Used
Backend: Python with Flask for handling OCR, data processing, and file management.
Frontend: HTML, CSS (with Bootstrap), and JavaScript for user interaction.
Libraries:
pytesseract for OCR.
pandas and openpyxl for Excel operations.
FPDF for generating PDFs.
Workflow
Upload: Users upload an image through the web interface.
Data Extraction: Extracted data is displayed in a preview table.
Save or Export:
Save the data to Excel after confirming.
Export the table to a PDF file for download.
