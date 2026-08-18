import docx, re, json, os, sys

sys.stdout.reconfigure(encoding='utf-8')

def clean_text(t):
    return t.strip().replace('\u2013', '–').replace('\u2014', '—').replace('\u2018', "'").replace('\u2019', "'").replace('\u201c', '"').replace('\u201d', '"')

def parse_docx():
    doc_path = 'Texas Pro Plumbing (texasproplumbing.com) - Master Production Content Suite (All 105 Pages) - QA Passed.docx'
    doc = docx.Document(doc_path)
    full_text = '\n'.join([p.text for p in doc.paragraphs])
    
    page_matches = list(re.finditer(r'Page ID:\s*([A-Z0-9\-]+)', full_text))
    print(f"Total page matches in docx: {len(page_matches)}")
    
    target_ids = [
        'G-001', 'G-002', 'G-003', 'G-004', 'G-005', 'G-006', 'G-007',
        'S-008', 'S-009', 'S-010', 'S-011', 'S-012', 'S-013', 'S-014', 'S-015',
        'CT-016', 'CT-025', 'CT-034', 'CT-043', 'CT-052', 'CT-061', 'CT-070', 'CT-079', 'CT-088', 'CT-097'
    ]
    
    pages = {}
    
    for i in range(len(page_matches)):
        start_pos = page_matches[i].start()
        end_pos = page_matches[i+1].start() if i+1 < len(page_matches) else len(full_text)
        block = full_text[start_pos:end_pos].strip()
        pid = page_matches[i].group(1).strip()
        
        if pid in target_ids:
            lines = [clean_text(l) for l in block.split('\n') if l.strip()]
            
            page = {
                'id': pid,
                'pageType': '',
                'url': '',
                'path': '',
                'location': '',
                'primaryKeyword': '',
                'secondaryKeywords': '',
                'lsiKeywords': '',
                'metaTitle': '',
                'metaDescription': '',
                'schemaTypes': 'PlumbingService, LocalBusiness, FAQPage, BreadcrumbList',
                'h1': '',
                'heroCallout': '',
                'leadSubtitle': '',
                'introParagraphs': [],
                'sections': [],
                'faqs': [],
                'internalLinks': []
            }
            
            in_faqs = False
            in_links = False
            in_images_or_schema = False
            current_section = None
            
            for line in lines:
                # Check for termination boundaries
                if 'Suggested Images' in line or 'Recommended JSON' in line or line.startswith('```json') or (line.startswith('{') and len(line) < 5):
                    in_images_or_schema = True
                    in_faqs = False
                    current_section = None
                    continue
                    
                if 'Internal Links Used' in line or 'Internal Links' in line:
                    in_links = True
                    in_faqs = False
                    in_images_or_schema = False
                    current_section = None
                    continue
                    
                if in_links:
                    if line.startswith('-') or line.startswith('•') or line.startswith('*'):
                        page['internalLinks'].append(line.lstrip('-•* ').strip())
                    elif len(line) > 5 and not line.startswith('Page ID') and not line.startswith('{') and not line.startswith('}'):
                        page['internalLinks'].append(line.strip())
                    continue
                    
                if in_images_or_schema:
                    continue
                    
                # Header Metadata Parsing
                if line.startswith('Page ID:'):
                    if '|' in line:
                        for part in line.split('|'):
                            if 'Page Type:' in part:
                                page['pageType'] = part.replace('Page Type:', '').strip()
                    continue
                elif line.startswith('Page Type:'):
                    page['pageType'] = line.replace('Page Type:', '').strip()
                    continue
                elif line.startswith('Full Canonical URL:') or line.startswith('Canonical URL:'):
                    page['url'] = line.split(':', 1)[1].strip()
                    path = page['url'].replace('https://texasproplumbing.com', '')
                    page['path'] = path if path else '/'
                    continue
                elif line.startswith('Relative URL Path:'):
                    page['path'] = line.replace('Relative URL Path:', '').strip()
                    continue
                elif line.startswith('Target Location:'):
                    page['location'] = line.replace('Target Location:', '').strip()
                    continue
                elif line.startswith('Primary Focus Keyword:') or line.startswith('Primary Keyword:'):
                    page['primaryKeyword'] = line.split(':', 1)[1].strip()
                    continue
                elif line.startswith('Secondary Keywords:'):
                    page['secondaryKeywords'] = line.replace('Secondary Keywords:', '').strip()
                    continue
                elif line.startswith('LSI Keywords / Semantic Entities:') or line.startswith('LSI Keywords:'):
                    page['lsiKeywords'] = line.split(':', 1)[1].strip()
                    continue
                elif line.startswith('Search Intent:'):
                    continue
                elif line.startswith('Target Meta Title:'):
                    page['metaTitle'] = line.replace('Target Meta Title:', '').strip()
                    continue
                elif line.startswith('Target Meta Description:'):
                    page['metaDescription'] = line.replace('Target Meta Description:', '').strip()
                    continue
                elif line.startswith('JSON-LD Schema Types:') or line.startswith('JSON-LD Schema:'):
                    page['schemaTypes'] = line.split(':', 1)[1].strip()
                    continue
                elif line.startswith('Word Count:') or line.startswith('Status:'):
                    continue
                    
                # Hero / H1 parsing
                if not page['h1'] and not any(line.startswith(pfx) for pfx in ['Page', 'Full', 'Canonical', 'Relative', 'Target', 'Primary', 'Secondary', 'LSI', 'Search', 'JSON', 'Word', 'Status', '⚡']):
                    page['h1'] = line
                    continue
                if line.startswith('⚡') or ('Call (800) 555-PLUMB' in line and len(line) < 140):
                    page['heroCallout'] = line
                    continue
                if not page['leadSubtitle'] and page['h1'] and len(line) < 130 and not line.endswith('.') and not any(line.startswith(pfx) for pfx in ['Page', 'Full', 'Canonical', 'Relative', 'Target', 'Primary', 'Secondary', 'LSI', 'Search', 'JSON', 'Word', 'Status', '⚡']):
                    page['leadSubtitle'] = line
                    continue
                    
                # FAQs section
                if 'Frequently Asked Questions' in line or 'FAQ' in line:
                    in_faqs = True
                    current_section = None
                    continue
                    
                if in_faqs:
                    if '?' in line and len(line) < 160:
                        page['faqs'].append({'question': line, 'answer': ''})
                    elif page['faqs'] and not page['faqs'][-1]['answer']:
                        page['faqs'][-1]['answer'] = line
                    elif page['faqs'] and page['faqs'][-1]['answer'] and not line.startswith('Suggested') and not line.startswith('Recommended') and not line.startswith('{'):
                        page['faqs'][-1]['answer'] += ' ' + line
                    continue
                    
                # Body Content Sections
                is_num_heading = re.match(r'^[1-9]\.\s+[A-Z]', line)
                is_short_heading = (len(line) < 85 and not line.endswith('.') and not line.startswith('When ') and not line.startswith('If ') and not line.startswith('At ') and not line.startswith('Our ') and not line.startswith('In ') and not line.startswith('Whether ') and not line.startswith('To ') and not line.startswith('From ') and not line.startswith('By ') and not line.startswith('With ') and not line.startswith('For ') and not line.startswith('This ') and not line.startswith('We '))
                
                if is_num_heading or is_short_heading:
                    current_section = {'heading': line, 'paragraphs': []}
                    page['sections'].append(current_section)
                else:
                    if current_section is None:
                        page['introParagraphs'].append(line)
                    else:
                        current_section['paragraphs'].append(line)
            
            if not page['path'] and page['url']:
                p = page['url'].replace('https://texasproplumbing.com', '')
                page['path'] = p if p else '/'
                
            pages[pid] = page
            
    print(f"Successfully processed {len(pages)} pages.")
    
    os.makedirs('src/data', exist_ok=True)
    with open('src/data/pagesData.json', 'w', encoding='utf-8') as f:
        json.dump(pages, f, indent=2, ensure_ascii=False)
        
    js_content = f"// Auto-generated 25 Core Pages Content Suite (Direct from Docx)\nexport const pagesContent = {json.dumps(pages, indent=2, ensure_ascii=False)};\n"
    with open('src/data/pagesData.js', 'w', encoding='utf-8') as f:
        f.write(js_content)
        
    print("Saved src/data/pagesData.json and src/data/pagesData.js")

if __name__ == '__main__':
    parse_docx()
