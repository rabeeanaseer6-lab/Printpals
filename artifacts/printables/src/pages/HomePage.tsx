import { useState, useMemo } from "react";
import { Search, Printer, BookOpen, Shapes, Calculator, Cat, Apple, Leaf, Heart, CalendarDays, LayoutGrid, Download, Star, Users, FileText, ChevronDown } from "lucide-react";
import { Link } from "wouter";
import { ContentLibrary, CATEGORY_META, type Category } from "@/lib/content-library";
import PrintCard from "@/components/PrintCard";

const ALL_CATEGORIES: Category[] = ['alphabet', 'numbers', 'math', 'shapes', 'animals', 'fruits', 'vegetables', 'anatomy', 'planners', 'master'];

const CAT_ICONS: Record<string, React.ReactNode> = {
  alphabet: <BookOpen className="w-4 h-4" />,
  numbers: <Calculator className="w-4 h-4" />,
  math: <Calculator className="w-4 h-4" />,
  shapes: <Shapes className="w-4 h-4" />,
  animals: <Cat className="w-4 h-4" />,
  fruits: <Apple className="w-4 h-4" />,
  vegetables: <Leaf className="w-4 h-4" />,
  anatomy: <Heart className="w-4 h-4" />,
  planners: <CalendarDays className="w-4 h-4" />,
  master: <LayoutGrid className="w-4 h-4" />,
};

export default function HomePage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<Category | "all">("all");
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");

  const filtered = useMemo(() => {
    let items = ContentLibrary;
    if (activeCategory !== "all") {
      items = items.filter(i => i.category === activeCategory);
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      items = items.filter(i =>
        i.title.toLowerCase().includes(q) ||
        i.tags.some(t => t.toLowerCase().includes(q)) ||
        i.description.toLowerCase().includes(q)
      );
    }
    return items;
  }, [search, activeCategory]);

  const totalCount = ContentLibrary.length;

  return (
    <div className="min-h-screen" style={{ background: '#f8f7ff', fontFamily: "'Inter', 'Segoe UI', sans-serif" }}>

      {/* ═══════════════════ MEGA HEADER ═══════════════════ */}
      <header className="no-print sticky top-0 z-50 shadow-md" style={{ background: 'white', borderBottom: '1.5px solid #ede9fe' }}>
        {/* Top bar */}
        <div style={{ background: 'linear-gradient(90deg, #7c3aed, #a855f7)', padding: '6px 0', textAlign: 'center' }}>
          <p style={{ color: 'white', fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.02em' }}>
            🎨 {totalCount}+ Free Printable Worksheets — No Sign-up Required!
          </p>
        </div>

        {/* Main nav bar */}
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 20px', display: 'flex', alignItems: 'center', gap: 16, height: 64 }}>
          {/* Logo */}
          <Link href={base + "/"} style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', flexShrink: 0 }}>
            <div style={{ background: 'linear-gradient(135deg, #7c3aed, #a855f7)', borderRadius: 12, padding: '8px 10px', display: 'flex' }}>
              <Printer style={{ width: 22, height: 22, color: 'white' }} />
            </div>
            <div>
              <div style={{ fontWeight: 900, fontSize: '1.25rem', color: '#1a1a2e', lineHeight: 1 }}>PrintPals</div>
              <div style={{ fontSize: '0.62rem', color: '#7c3aed', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase' }}>Free Printables</div>
            </div>
          </Link>

          {/* Nav links */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: 4, marginLeft: 8 }} className="hidden md:flex">
            <button
              onClick={() => setMegaMenuOpen(!megaMenuOpen)}
              style={{ display: 'flex', alignItems: 'center', gap: 4, padding: '6px 14px', borderRadius: 8, border: 'none', cursor: 'pointer', fontWeight: 600, fontSize: '0.88rem', color: '#1a1a2e', background: megaMenuOpen ? '#f3f0ff' : 'transparent', transition: 'all 0.15s' }}
            >
              Categories <ChevronDown style={{ width: 14, height: 14, transform: megaMenuOpen ? 'rotate(180deg)' : '', transition: 'transform 0.2s' }} />
            </button>
            <Link href={base + "/about"} style={{ padding: '6px 14px', borderRadius: 8, fontWeight: 600, fontSize: '0.88rem', color: '#555', textDecoration: 'none' }}>About</Link>
          </nav>

          {/* Search */}
          <div style={{ flex: 1, maxWidth: 500, position: 'relative' }}>
            <Search style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', width: 16, height: 16, color: '#9ca3af' }} />
            <input
              type="search"
              value={search}
              onChange={e => { setSearch(e.target.value); setActiveCategory("all"); }}
              placeholder="Search: lion, circle, fraction, planner..."
              style={{ width: '100%', paddingLeft: 40, paddingRight: 16, paddingTop: 10, paddingBottom: 10, borderRadius: 12, border: '2px solid #e5e7eb', background: '#f9fafb', fontSize: '0.88rem', outline: 'none', transition: 'border 0.15s', boxSizing: 'border-box' }}
              onFocus={e => { e.currentTarget.style.borderColor = '#7c3aed'; e.currentTarget.style.background = 'white'; }}
              onBlur={e => { e.currentTarget.style.borderColor = '#e5e7eb'; e.currentTarget.style.background = '#f9fafb'; }}
            />
          </div>

          <span style={{ fontSize: '0.8rem', color: '#9ca3af', fontWeight: 500, flexShrink: 0, display: 'none' }} className="md:block">
            {filtered.length} results
          </span>
        </div>

        {/* Mega menu dropdown */}
        {megaMenuOpen && (
          <div
            style={{ position: 'absolute', top: '100%', left: 0, right: 0, background: 'white', borderBottom: '2px solid #ede9fe', boxShadow: '0 8px 32px rgba(124,58,237,0.12)', zIndex: 100, padding: '24px 0' }}
            onMouseLeave={() => setMegaMenuOpen(false)}
          >
            <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 20px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: 12 }}>
                {ALL_CATEGORIES.map(cat => {
                  const meta = CATEGORY_META[cat];
                  const count = ContentLibrary.filter(i => i.category === cat).length;
                  return (
                    <button
                      key={cat}
                      onClick={() => { setActiveCategory(cat); setMegaMenuOpen(false); setSearch(""); }}
                      style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '14px 16px', borderRadius: 12, border: '1.5px solid #e5e7eb', background: meta.color + '55', cursor: 'pointer', textAlign: 'left', transition: 'all 0.15s' }}
                      onMouseEnter={e => { e.currentTarget.style.borderColor = '#7c3aed'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                      onMouseLeave={e => { e.currentTarget.style.borderColor = '#e5e7eb'; e.currentTarget.style.transform = ''; }}
                    >
                      <span style={{ fontSize: '1.5rem', marginBottom: 6 }}>{meta.icon}</span>
                      <span style={{ fontWeight: 700, fontSize: '0.9rem', color: '#1a1a2e' }}>{meta.label}</span>
                      <span style={{ fontSize: '0.75rem', color: '#6b7280', marginTop: 2 }}>{count} sheets</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </header>

      {/* ═══════════════════ HERO SECTION ═══════════════════ */}
      <section className="no-print" style={{ background: 'linear-gradient(135deg, #f3f0ff 0%, #fdf4ff 50%, #fff7ed 100%)', borderBottom: '1.5px solid #ede9fe', padding: '48px 20px 40px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#7c3aed', color: 'white', padding: '6px 16px', borderRadius: 999, fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 20 }}>
            <Star style={{ width: 12, height: 12 }} /> Free Forever · No Login
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', fontWeight: 900, color: '#1a1a2e', lineHeight: 1.15, margin: '0 0 16px' }}>
            {totalCount}+ Free Printable Worksheets<br />
            <span style={{ background: 'linear-gradient(135deg, #7c3aed, #a855f7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>for Kids & Educators</span>
          </h1>
          <p style={{ color: '#6b7280', fontSize: '1.08rem', maxWidth: 600, margin: '0 auto 28px', lineHeight: 1.65 }}>
            Coloring pages, alphabet tracing, number sheets, animal art, fruit collections, math references, planners — all generated instantly as SVG. Print-ready, zero ads.
          </p>

          {/* Stats bar */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 24, fontSize: '0.88rem', color: '#4b5563', fontWeight: 600 }}>
            {[
              { icon: <FileText style={{ width: 16, height: 16, color: '#7c3aed' }} />, label: `${totalCount}+ Sheets` },
              { icon: <Download style={{ width: 16, height: 16, color: '#7c3aed' }} />, label: 'Instant Download' },
              { icon: <Printer style={{ width: 16, height: 16, color: '#7c3aed' }} />, label: 'Print Ready' },
              { icon: <Star style={{ width: 16, height: 16, color: '#7c3aed' }} />, label: '100% Free' },
              { icon: <Users style={{ width: 16, height: 16, color: '#7c3aed' }} />, label: 'For All Ages' },
            ].map((s, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                {s.icon} {s.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ CATEGORY TABS ═══════════════════ */}
      <div className="no-print" style={{ background: 'white', borderBottom: '1.5px solid #f3f4f6', position: 'sticky', top: 113, zIndex: 40 }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 16px', display: 'flex', alignItems: 'center', gap: 6, overflowX: 'auto', height: 52, scrollbarWidth: 'none' }}>
          <button
            onClick={() => { setActiveCategory("all"); setSearch(""); }}
            style={{
              display: 'flex', alignItems: 'center', gap: 6, padding: '6px 14px', borderRadius: 999, fontSize: '0.82rem', fontWeight: 700, whiteSpace: 'nowrap', border: '2px solid', cursor: 'pointer', transition: 'all 0.15s', flexShrink: 0,
              background: activeCategory === "all" ? '#1a1a2e' : 'white',
              color: activeCategory === "all" ? 'white' : '#4b5563',
              borderColor: activeCategory === "all" ? '#1a1a2e' : '#e5e7eb',
            }}
          >
            <LayoutGrid style={{ width: 14, height: 14 }} />
            All ({totalCount})
          </button>

          {ALL_CATEGORIES.map(cat => {
            const meta = CATEGORY_META[cat];
            const count = ContentLibrary.filter(i => i.category === cat).length;
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => { setActiveCategory(isActive ? "all" : cat); setSearch(""); }}
                style={{
                  display: 'flex', alignItems: 'center', gap: 6, padding: '6px 13px', borderRadius: 999, fontSize: '0.82rem', fontWeight: 700, whiteSpace: 'nowrap', border: '2px solid', cursor: 'pointer', transition: 'all 0.15s', flexShrink: 0,
                  background: isActive ? meta.color : 'white',
                  color: isActive ? '#1a1a2e' : '#6b7280',
                  borderColor: isActive ? '#1a1a2e' : '#e5e7eb',
                }}
              >
                {CAT_ICONS[cat]} {meta.label} ({count})
              </button>
            );
          })}
        </div>
      </div>

      {/* ═══════════════════ MAIN GRID ═══════════════════ */}
      <main style={{ maxWidth: 1280, margin: '0 auto', padding: '28px 16px 48px' }}>
        {filtered.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '80px 20px' }}>
            <div style={{ fontSize: '4rem', marginBottom: 16 }}>🔍</div>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#374151', marginBottom: 8 }}>No results found</h3>
            <p style={{ color: '#9ca3af', marginBottom: 20 }}>Try "lion", "circle", "fraction 1/2", or "number 5"</p>
            <button
              onClick={() => { setSearch(""); setActiveCategory("all"); }}
              style={{ padding: '10px 24px', background: '#7c3aed', color: 'white', border: 'none', borderRadius: 12, fontWeight: 700, cursor: 'pointer', fontSize: '0.9rem' }}
            >
              Show All Printables
            </button>
          </div>
        ) : (
          <>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
              <h2 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#1a1a2e' }}>
                {activeCategory === "all" ? "All Printables" : CATEGORY_META[activeCategory as Category].label}
                <span style={{ marginLeft: 8, fontWeight: 400, color: '#9ca3af', fontSize: '0.9rem' }}>({filtered.length} sheets)</span>
              </h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(175px, 1fr))', gap: '1rem' }}>
              {filtered.map(item => (
                <PrintCard key={item.id} item={item} base={base} />
              ))}
            </div>
          </>
        )}
      </main>

      {/* ═══════════════════ MEGA FOOTER ═══════════════════ */}
      <footer className="no-print" style={{ background: '#1a1a2e', color: 'white', marginTop: 0 }}>
        {/* Main footer grid */}
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '48px 20px 32px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 40 }}>
          {/* Column 1: Company */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <div style={{ background: '#7c3aed', borderRadius: 10, padding: '7px 9px' }}>
                <Printer style={{ width: 18, height: 18, color: 'white' }} />
              </div>
              <span style={{ fontWeight: 900, fontSize: '1.1rem' }}>PrintPals</span>
            </div>
            <p style={{ color: '#9ca3af', fontSize: '0.85rem', lineHeight: 1.65, marginBottom: 16 }}>
              The largest free printable worksheet library for kids, parents, and educators. Every sheet is generated dynamically as SVG — no image uploads ever.
            </p>
            <p style={{ color: '#6b7280', fontSize: '0.78rem' }}>
              © {new Date().getFullYear()} PrintPals. All rights reserved.
            </p>
          </div>

          {/* Column 2: Legal */}
          <div>
            <h4 style={{ fontWeight: 800, fontSize: '0.88rem', letterSpacing: '0.06em', textTransform: 'uppercase', color: '#d1d5db', marginBottom: 16 }}>Legal</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                { label: 'About PrintPals', href: '/about' },
                { label: 'Privacy Policy', href: '/privacy-policy' },
                { label: 'Terms of Service', href: '/terms' },
                { label: 'Disclaimer', href: '/disclaimer' },
              ].map(link => (
                <li key={link.href}>
                  <Link
                    href={base + link.href}
                    style={{ color: '#9ca3af', textDecoration: 'none', fontSize: '0.88rem', transition: 'color 0.15s' }}
                    onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => e.currentTarget.style.color = 'white'}
                    onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => e.currentTarget.style.color = '#9ca3af'}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Categories */}
          <div>
            <h4 style={{ fontWeight: 800, fontSize: '0.88rem', letterSpacing: '0.06em', textTransform: 'uppercase', color: '#d1d5db', marginBottom: 16 }}>Categories</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px 16px' }}>
              {ALL_CATEGORIES.map(cat => (
                <li key={cat}>
                  <button
                    onClick={() => { setActiveCategory(cat); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#9ca3af', fontSize: '0.85rem', padding: 0, textAlign: 'left', transition: 'color 0.15s', display: 'flex', alignItems: 'center', gap: 5 }}
                    onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.color = 'white'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.color = '#9ca3af'; }}
                  >
                    <span>{CATEGORY_META[cat].icon}</span>
                    {CATEGORY_META[cat].label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Social */}
          <div>
            <h4 style={{ fontWeight: 800, fontSize: '0.88rem', letterSpacing: '0.06em', textTransform: 'uppercase', color: '#d1d5db', marginBottom: 16 }}>Follow Us</h4>
            <p style={{ color: '#9ca3af', fontSize: '0.85rem', marginBottom: 16, lineHeight: 1.6 }}>
              Share your colored pages! Tag us and inspire other families.
            </p>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 20 }}>
              {[
                { label: 'Pinterest', color: '#e60023', emoji: '📌' },
                { label: 'Instagram', color: '#c13584', emoji: '📷' },
                { label: 'Facebook', color: '#1877f2', emoji: '👍' },
                { label: 'Twitter/X', color: '#000', emoji: '🐦' },
                { label: 'YouTube', color: '#ff0000', emoji: '▶️' },
              ].map(s => (
                <button
                  key={s.label}
                  title={s.label}
                  style={{ background: '#2d2d4e', border: 'none', borderRadius: 8, padding: '8px 10px', color: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.78rem', transition: 'all 0.15s' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = s.color; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = '#2d2d4e'; }}
                >
                  {s.emoji} {s.label}
                </button>
              ))}
            </div>
            <div style={{ background: '#2d2d4e', borderRadius: 12, padding: '14px 16px' }}>
              <p style={{ color: '#d1d5db', fontSize: '0.82rem', fontWeight: 600, marginBottom: 8 }}>Newsletter</p>
              <div style={{ display: 'flex', gap: 6 }}>
                <input
                  type="email"
                  placeholder="your@email.com"
                  style={{ flex: 1, padding: '7px 10px', borderRadius: 8, border: 'none', background: '#1a1a2e', color: 'white', fontSize: '0.82rem', outline: 'none' }}
                />
                <button style={{ padding: '7px 14px', background: '#7c3aed', border: 'none', borderRadius: 8, color: 'white', fontWeight: 700, fontSize: '0.82rem', cursor: 'pointer' }}>
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid #2d2d4e', padding: '16px 20px' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
            <p style={{ color: '#6b7280', fontSize: '0.78rem' }}>
              All worksheets are generated dynamically as SVG — zero image uploads, always print-ready.
            </p>
            <p style={{ color: '#6b7280', fontSize: '0.78rem' }}>
              Made with ❤️ for kids and educators worldwide
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
