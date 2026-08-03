import os
import zipfile
import re
from pathlib import Path

def extract_docx_text(path):
    with zipfile.ZipFile(path, 'r') as z:
        if 'word/document.xml' not in z.namelist():
            return ''
        data = z.read('word/document.xml').decode('utf-8', errors='ignore')
        return re.sub(r'<.*?>', '', data)

root = Path('sourcefiles-ce/Aptransco_sourcefiles')
out_dir = Path('scripts/output')
out_dir.mkdir(parents=True, exist_ok=True)
for dirpath, _, filenames in os.walk(root):
    for filename in filenames:
        if filename.lower().endswith('.docx'):
            path = Path(dirpath) / filename
            text = extract_docx_text(path)
            out_file = out_dir / (filename + '.txt')
            out_file.write_text(text, encoding='utf-8')
print('done', len(list(out_dir.glob('*.txt'))))
