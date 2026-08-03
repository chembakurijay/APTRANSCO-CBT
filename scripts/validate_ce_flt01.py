from pathlib import Path
import re

t = Path("data/civil/ce-flt01.js").read_text(encoding="utf-8")
ids = re.findall(r'"id": (\d+)', t)
imgs = [m for m in re.findall(r'"image": "([^"]*)"', t) if m]
print("count", len(ids), "first", ids[0], "last", ids[-1])
print("with images", len(imgs))
missing = []
for p in imgs:
    if not Path(p).exists():
        missing.append(p)
print("missing images", len(missing))
if missing:
    print(missing[:5])
