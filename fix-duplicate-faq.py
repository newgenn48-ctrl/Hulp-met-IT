import re
from pathlib import Path

# Base directory
base_dir = Path(r"C:\Users\konia\OneDrive - Stichting Hogeschool Utrecht\hulpmetit-nextgen\app")

# Get all computerhulp pages
computerhulp_pages = list(base_dir.glob("computerhulp-aan-huis-*/page.tsx"))

def remove_duplicate_faq(page_path):
    """Remove duplicate faqData if it exists"""
    content = page_path.read_text(encoding='utf-8')

    # Count faqData occurrences
    faq_count = content.count('const faqData = [')

    if faq_count <= 1:
        return False

    # Find first faqData declaration
    first_match = re.search(r'const faqData = \[.*?\]', content, re.DOTALL)
    if not first_match:
        return False

    first_faq_end = first_match.end()

    # Find second faqData declaration
    second_match = re.search(r'const faqData = \[.*?\]', content[first_faq_end:], re.DOTALL)
    if not second_match:
        return False

    # Remove second faqData (including extra newlines)
    second_start = first_faq_end + second_match.start()
    second_end = first_faq_end + second_match.end()

    # Also remove the extra newlines around it
    while second_end < len(content) and content[second_end] == '\n':
        second_end += 1
    while second_start > 0 and content[second_start - 1] == '\n':
        second_start -= 1

    content = content[:second_start] + content[second_end:]

    page_path.write_text(content, encoding='utf-8')
    return True

# Process all pages
fixed = 0
for page_path in computerhulp_pages:
    city_name = page_path.parent.name.replace('computerhulp-aan-huis-', '')
    if remove_duplicate_faq(page_path):
        print(f"Fixed: {city_name}")
        fixed += 1

print(f"\nFixed {fixed} duplicate FAQ declarations")
