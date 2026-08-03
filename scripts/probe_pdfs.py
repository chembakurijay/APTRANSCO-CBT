import fitz

files = [
    ("DDRC",           "DDRC"),
    ("SOM",            "SOM"),
    ("Geotech",        "Soil"),
    ("Steel Structures","Steel"),
    ("FM&HHM",         "Fluid"),
]

for fname, subject in files:
    path = f"sourcefiles-ce/Aptransco_sourcefiles/Civil/{fname}.pdf"
    doc  = fitz.open(path)
    pg   = doc[5]
    text = pg.get_text("text").strip()[:80]
    imgs = len(pg.get_images(full=True))
    vec  = len(pg.get_drawings())
    print(f"{subject:6s} | pages={len(doc)} | text_chars={len(text)} | embedded_imgs={imgs} | vector_drawings={vec}")
    print(f"         sample_text={repr(text[:60])}")
    doc.close()
