import os
import re

# Define the root directory for the docs folder
root_dir = "./docs"

# Template for front matter
front_matter_template = """---
id: {id}
title: "{title}"
description: "{description}"
---
"""

# Function to clean up the file name (remove leading numbers and hyphens)
def clean_file_name(file_name):
    base_name = os.path.splitext(file_name)[0]
    cleaned_name = re.sub(r"^\d+", "", base_name)  # Remove leading numbers
    cleaned_name = cleaned_name.lstrip("-").replace("-", " ")  # Remove leading hyphens and replace hyphens with spaces
    return cleaned_name.capitalize(), cleaned_name

# Function to generate front matter for a file
def generate_front_matter(file_name, folder_name):
    title, id_name = clean_file_name(file_name)
    unique_id = f"{folder_name}-{id_name}"  # Prefix folder name to ensure uniqueness
    description = f"{title} page in {folder_name.replace('-', ' ').capitalize()} of CircuitVerse documentation."
    return front_matter_template.format(id=unique_id, title=title, description=description)

# Function to overwrite front matter in a file
def overwrite_front_matter_in_file(file_path, folder_name):
    print(f"Processing file: {file_path}")  # Debug: Log the file being processed
    try:
        with open(file_path, "r") as file:
            content = file.read()

        # Extract the content after existing front matter
        if content.strip().startswith("---"):
            # Find the closing `---` of the existing front matter
            content_after_front_matter = content.split("---", 2)[2].strip()
        else:
            content_after_front_matter = content.strip()

        # Generate new front matter
        file_name = os.path.basename(file_path)
        front_matter = generate_front_matter(file_name, folder_name)
        new_content = front_matter + "\n\n" + content_after_front_matter

        print(f"Generated new front matter: \n{front_matter}")  # Debug: Show new front matter

        # Write the updated content back to the file
        with open(file_path, "w") as file:
            file.write(new_content)
        print(f"Updated front matter for: {file_path}")  # Debug: Confirm success
    except Exception as e:
        print(f"Error processing file {file_path}: {e}")

# Walk through all .mdx files in the directory and subdirectories
def process_all_mdx_files(root_directory):
    for subdir, _, files in os.walk(root_directory):
        folder_name = os.path.basename(subdir)  # Get the folder name (e.g., chapter1)
        for file in files:
            if file.endswith(".mdx"):
                file_path = os.path.join(subdir, file)
                overwrite_front_matter_in_file(file_path, folder_name)

if __name__ == "__main__":
    print(f"Starting front matter overwrite for all .mdx files in {root_dir}...\n")
    process_all_mdx_files(root_dir)
    print("\nFront matter overwrite complete!")

