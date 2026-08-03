import zipfile
import re
from pathlib import Path
path = Path('sourcefiles-ce/Aptransco_sourcefiles/MASTER_RULES.docx')
out = Path('master_rules_text.txt')
with zipfile.ZipFile(path, 'r') as z:
    data = z.read('word/document.xml').decode('utf-8', errors='ignore')
    text = re.sub(r'<.*?>', '', data)
    out.write_text(text, encoding='utf-8')
print('WROTE', out.absolute())
