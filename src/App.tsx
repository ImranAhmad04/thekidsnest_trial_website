import React, { useState, useEffect } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  MessageCircle,
  Truck,
  ShieldCheck,
  RotateCcw,
  Sparkles,
  Check,
  HelpCircle,
  Package,
  Layers,
  HeartHandshake
} from 'lucide-react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedPackageId, setSelectedPackageId] = useState<string>('pkg-3');
  const [deliveryArea, setDeliveryArea] = useState<'sylhet' | 'outside'>('sylhet');

  const contactInfo = {
    phone: '01570-294935',
    phoneFormatted: '+880 1570-294935',
    whatsappNumber: '8801570294935',
    email: 'thekidsnestbd@gmail.com',
    location: 'Sylhet, Bangladesh',
    facebookUrl: 'https://www.facebook.com/thekidsnestbd',
    facebookHandle: 'thekidsnestbd',
  };

  const deliveryRates = {
    sylhet: {
      label: 'Sylhet Sadar',
      range: '40 - 60 Taka',
      short: '40-60 ৳',
    },
    outside: {
      label: 'Outside Sylhet (All Bangladesh)',
      range: '60 - 150 Taka',
      short: '60-150 ৳',
    },
  };

  const packages = [
    {
      id: 'pkg-1',
      packageNumber: 'Package 1',
      title: '1 Pcs Baby Washable Diaper',
      quantity: '1 Pcs Diaper Shell + Absorbent Insert',
      price: '250',
      priceFormatted: '250 Taka',
      whyChoose: 'Test and learn how to use washable diaper',
      badge: 'Starter Trial',
      idealFor: 'Perfect for parents new to cloth diapering wanting to test softness & fit.',
      highlights: [
        '1 washable waterproof outer diaper',
        'Includes soft absorbent cotton insert',
        'Adjustable snaps that grow with baby',
        'Wash, dry & reuse hundreds of times',
      ],
    },
    {
      id: 'pkg-2',
      packageNumber: 'Package 2',
      title: '3 Diaper Pack',
      quantity: '3 Pcs Baby Washable Diaper + Inserts',
      price: '660',
      priceFormatted: '660 Taka',
      whyChoose: 'Great rotation pack for day-time use while washing & drying',
      badge: 'Popular Choice',
      idealFor: 'Ideal for alternating through the day with zero stress.',
      highlights: [
        '3 washable waterproof diaper shells',
        'Multiple cotton absorption inserts included',
        'Washable rotation system for easy laundry',
        'Saves thousands of taka over disposables',
      ],
    },
    {
      id: 'pkg-3',
      packageNumber: 'Package 3',
      title: '5 Pack Baby Washable Diaper',
      quantity: '5 Pcs Baby Washable Diaper + Inserts',
      price: '999',
      priceFormatted: '999 Taka',
      whyChoose: 'If you want to use baby washable diaper in daily basis instead of regular diaper then you should choose it',
      badge: 'Best Value • Full Switch',
      idealFor: 'The complete solution to completely replace costly single-use disposables.',
      highlights: [
        '5 washable waterproof diaper shells',
        'Full set of absorbent cotton inserts',
        'Complete daily replacement for disposable diapers',
        'Maximum savings, 100% skin protection',
      ],
    },
  ];

  const currentYear = new Date().getFullYear();
  const activePackage = packages.find((p) => p.id === selectedPackageId) || packages[2];

  const getWhatsAppUrl = () => {
    const areaText =
      deliveryArea === 'sylhet'
        ? `Sylhet Sadar (${deliveryRates.sylhet.range})`
        : `Outside Sylhet (${deliveryRates.outside.range})`;

    const text = `Hi TheKidsNest! I want to order ${activePackage.packageNumber}: ${activePackage.title} (${activePackage.priceFormatted}). Delivery Area: ${areaText}. Please confirm my order and share delivery details.`;

    return `https://wa.me/${contactInfo.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#1F2A44]">
      {/* Top Banner with Contact & Delivery Charges */}
      <div className="bg-[#1F2A44] text-[#FDFBF7] text-xs sm:text-sm py-2 px-4">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-2 sm:gap-4 flex-wrap">
            <span className="font-semibold text-[#F4C95D] flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" /> Care Begins Here
            </span>
            <span className="hidden md:inline text-white/40">|</span>
            <span className="inline-flex items-center gap-1 text-white/90">
              <Truck className="w-3.5 h-3.5 text-[#A9D3E5]" />
              <span>
                Delivery Charge: <strong className="text-[#F4C95D]">Sylhet Sadar 40–60 Taka</strong>,{' '}
                <strong className="text-[#A9D3E5]">Outside Sylhet 60–150 Taka</strong>
              </span>
            </span>
          </div>
          <div className="flex items-center gap-3 sm:gap-5">
            <a
              href={`tel:${contactInfo.phone}`}
              className="flex items-center gap-1 hover:text-[#F4C95D] transition-colors"
              id="top-bar-phone"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{contactInfo.phoneFormatted}</span>
            </a>
            <a
              href={contactInfo.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-[#A9D3E5] transition-colors"
              id="top-bar-fb"
            >
              <Facebook className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">thekidsnestbd</span>
            </a>
          </div>
        </div>
      </div>

      {/* ===== STRICT NAVIGATION: Home, About us, Product, Contact us ===== */}
      <header className="nav" id="top">
        <div className="nav-inner">
          <a className="brand flex items-center gap-3" href="#home" id="brand-link">
            <img
              src="/assets/logo.jpg"
              alt="TheKidsNest - Care Begins Here"
              className="brand-mark shadow-xs"
              referrerPolicy="no-referrer"
              onError={(e) => {
                (e.currentTarget as HTMLElement).style.display = 'none';
              }}
            />
            <div className="flex flex-col">
              <span className="font-bold text-xl tracking-tight text-[#0C294A]" style={{ fontFamily: 'Fraunces, serif' }}>
                TheKids<span className="text-[#E97E8B]">Nest</span>
              </span>
              <span className="text-[11px] tracking-wide font-semibold text-[#0C294A]/80">
                Care Begins Here
              </span>
            </div>
          </a>

          {/* Strict navigation menu: Home, About us, Product, Contact us */}
          <nav className="nav-links" id="main-nav-links">
            <a href="#home" id="nav-home">Home</a>
            <a href="#about" id="nav-about">About us</a>
            <a href="#product" id="nav-product">Product</a>
            <a href="#contact" id="nav-contact">Contact us</a>
          </nav>

          <a
            className="btn btn-whatsapp nav-cta"
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            id="nav-cta-btn"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Order on WhatsApp</span>
          </a>

          <button
            className="nav-toggle"
            id="navToggle"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* Mobile menu dropdown */}
        <nav
          className={`nav-links-mobile ${mobileMenuOpen ? 'open' : ''}`}
          id="navMobile"
          style={{ display: mobileMenuOpen ? 'flex' : 'none' }}
        >
          <a href="#home" onClick={() => setMobileMenuOpen(false)}>Home</a>
          <a href="#about" onClick={() => setMobileMenuOpen(false)}>About us</a>
          <a href="#product" onClick={() => setMobileMenuOpen(false)}>Product</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact us</a>
          <a
            className="btn btn-whatsapp"
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
          >
            <MessageCircle className="w-4 h-4" />
            <span>Order via WhatsApp ({contactInfo.phone})</span>
          </a>
        </nav>
      </header>

      {/* ===== 1. HOME SECTION ===== */}
      <section className="hero" id="home">
        <div className="hero-inner">
          <div className="hero-copy">
            <p className="kicker">Care Begins Here</p>
            <h1>
              Washable Diapers<br />
              Gentle on Skin —<br />
              <em>Easy on Budget.</em>
            </h1>
            <p className="lede">
              Switch from expensive disposable diapers to breathable, washable baby cloth diapers. Soft cotton protection that keeps your baby dry and rash-free through every stage.
            </p>

            {/* Delivery Charge Callout in Hero */}
            <div className="bg-[#F6F1E8] border border-[#1F2A44]/10 rounded-2xl p-4 my-6 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#1F2A44] text-[#F4C95D] flex items-center justify-center shrink-0">
                <Truck className="w-5 h-5" />
              </div>
              <div className="text-sm">
                <div className="font-bold text-[#1F2A44]">Fast Home Delivery Available</div>
                <div className="text-[#4A5878]">
                  Sylhet Sadar: <span className="font-semibold text-[#1F2A44]">40–60 Taka</span> • Outside Sylhet: <span className="font-semibold text-[#1F2A44]">60–150 Taka</span>
                </div>
              </div>
            </div>

            <div className="hero-actions">
              <a
                className="btn btn-primary"
                href="#product"
                id="hero-view-packages-btn"
              >
                View Diaper Packages
              </a>
              <a
                className="btn btn-whatsapp"
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-order-btn"
              >
                <MessageCircle className="w-4 h-4" />
                Order on WhatsApp ({contactInfo.phone})
              </a>
            </div>

            {/* Quick trust metrics */}
            <div className="mt-8 pt-6 border-t border-[#1F2A44]/10 flex flex-wrap gap-6 text-sm text-[#4A5878]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#A8C7A0]" />
                <span>100% Rash-Free Cotton Lining</span>
              </div>
              <div className="flex items-center gap-2">
                <RotateCcw className="w-4 h-4 text-[#F4C95D]" />
                <span>Washable & Reusable 300+ Times</span>
              </div>
            </div>
          </div>

          <div className="hero-media">
            <img
              src="/assets/diapers-baby.png"
              alt="Baby lying beside soft washable cloth diapers by TheKidsNest"
              className="hero-img"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Feature Strip */}
      <section className="features">
        <div className="feature" id="feature-1">
          <div className="w-10 h-10 rounded-full bg-[#F4C95D]/20 text-[#1F2A44] flex items-center justify-center mb-3">
            <RotateCcw className="w-5 h-5" />
          </div>
          <h3>Reusable & Washable</h3>
          <p>Durable waterproof shell lasts hundreds of washes. Rinse, wash, line-dry, and reuse — saving thousands of taka each month.</p>
        </div>
        <div className="feature" id="feature-2">
          <div className="w-10 h-10 rounded-full bg-[#A9D3E5]/20 text-[#1F2A44] flex items-center justify-center mb-3">
            <Layers className="w-5 h-5" />
          </div>
          <h3>Adjustable Snaps</h3>
          <p>Snaps easily adjust to fit your baby comfortably as they grow from newborn stage up to active toddlerhood.</p>
        </div>
        <div className="feature" id="feature-3">
          <div className="w-10 h-10 rounded-full bg-[#A8C7A0]/20 text-[#1F2A44] flex items-center justify-center mb-3">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h3>Soft Cotton Inner</h3>
          <p>Breathable inner lining paired with high-absorption cotton inserts prevents moisture buildup and stops diaper rashes.</p>
        </div>
      </section>

      {/* ===== 2. ABOUT US SECTION ===== */}
      <section className="about" id="about">
        <div className="about-media">
          <img
            src="/assets/diapers-flat.png"
            alt="Washable cloth diapers laid flat with soft absorbent cotton inserts"
            className="about-img"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="about-copy">
          <p className="kicker">About us</p>
          <h2>Care begins here — Made for happy, healthy babies.</h2>
          <p>
            <strong>TheKidsNest</strong> was started to solve a common frustration for parents across Bangladesh: disposable diapers are expensive, generate endless non-biodegradable waste, and frequently cause red, painful rashes on tender baby skin.
          </p>
          <p>
            Based in <strong>Sylhet, Bangladesh</strong>, we specialize in high quality <strong>washable cloth diapers</strong>. Our diapers are designed with a leak-proof waterproof outer layer, non-toxic adjustable snap buttons, and soft, highly absorbent cotton inserts.
          </p>
          <p>
            Whether you are testing your very first washable diaper or looking to replace single-use disposable diapers entirely on a daily basis, we provide tested quality and swift doorstep delivery.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a
              href={contactInfo.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#1F2A44] hover:text-[#F1A7B5] transition-colors"
              id="about-fb-link"
            >
              <Facebook className="w-4 h-4 text-[#1877F2]" />
              Follow The Kids Nest on Facebook (thekidsnestbd)
            </a>
          </div>
        </div>
      </section>

      {/* ===== 3. PRODUCT SECTION (PACKAGES & DELIVERY) ===== */}
      <section className="product-section py-20 px-[6vw] max-w-6xl mx-auto" id="product">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="kicker center">Diaper Packages</p>
          <h2 className="text-3xl sm:text-4xl font-semibold mb-3" style={{ fontFamily: 'Fraunces, serif' }}>
            Choose Your Washable Diaper Package
          </h2>
          <p className="text-[#4A5878] text-base">
            Select the pack that best matches your baby's needs. All packages feature washable waterproof diaper shells and absorbent cotton inserts.
          </p>
        </div>

        {/* The 3 Packages */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {packages.map((pkg) => {
            const isSelected = selectedPackageId === pkg.id;
            return (
              <div
                key={pkg.id}
                onClick={() => setSelectedPackageId(pkg.id)}
                className={`relative bg-[#FDFBF7] rounded-3xl p-7 border-2 flex flex-col justify-between transition-all cursor-pointer ${
                  isSelected
                    ? 'border-[#1F2A44] shadow-xl -translate-y-1.5 ring-2 ring-[#1F2A44]'
                    : 'border-[#1F2A44]/15 hover:border-[#1F2A44]/40 bg-white'
                }`}
                id={`package-card-${pkg.id}`}
              >
                {pkg.badge && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#F4C95D] text-[#1F2A44] text-xs font-bold py-1 px-4 rounded-full shadow-sm whitespace-nowrap">
                    {pkg.badge}
                  </span>
                )}

                <div>
                  <div className="text-xs uppercase tracking-wider font-extrabold text-[#4A5878] mb-1">
                    {pkg.packageNumber}
                  </div>
                  <h3 className="text-xl font-bold mb-1 text-[#1F2A44]" style={{ fontFamily: 'Fraunces, serif' }}>
                    {pkg.title}
                  </h3>
                  <div className="text-xs text-[#4A5878] mb-4">
                    {pkg.quantity}
                  </div>

                  {/* Price */}
                  <div className="flex items-baseline gap-1.5 mb-5 pb-4 border-b border-[#1F2A44]/10">
                    <span className="text-3xl font-extrabold text-[#1F2A44]">৳{pkg.price}</span>
                    <span className="text-sm font-semibold text-[#4A5878]">Taka</span>
                  </div>

                  {/* Why should choose this pack */}
                  <div className="bg-[#F6F1E8] rounded-2xl p-4 mb-5 border border-[#1F2A44]/10">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-[#1F2A44] mb-1">
                      <HelpCircle className="w-3.5 h-3.5 text-[#F1A7B5]" />
                      <span>Why choose {pkg.packageNumber}?</span>
                    </div>
                    <p className="text-xs font-medium text-[#1F2A44] leading-relaxed">
                      "{pkg.whyChoose}"
                    </p>
                  </div>

                  {/* Highlights */}
                  <ul className="text-xs text-[#4A5878] space-y-2 mb-6">
                    {pkg.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-[#A8C7A0] shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <button
                    type="button"
                    className={`w-full py-3 px-4 rounded-full font-bold text-sm transition-all flex items-center justify-center gap-2 ${
                      isSelected
                        ? 'bg-[#1F2A44] text-[#FDFBF7] shadow'
                        : 'bg-[#F6F1E8] text-[#1F2A44] hover:bg-[#1F2A44]/10'
                    }`}
                  >
                    {isSelected ? (
                      <>
                        <Check className="w-4 h-4 text-[#F4C95D]" />
                        <span>Selected Package</span>
                      </>
                    ) : (
                      'Select This Package'
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Note about other diaper brands (Avonee, Mina, Savlon Twinkle, Happy Nappy, etc.) - NO IMAGE */}
        <div className="bg-[#FDFBF7] border-2 border-dashed border-[#1F2A44]/20 rounded-3xl p-6 sm:p-7 mb-10" id="other-brands-note">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5">
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-2xl bg-[#F4C95D]/30 text-[#1F2A44] flex items-center justify-center shrink-0 mt-0.5">
                <Package className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-[#1F2A44]">Note / Additional Brands</span>
                  <span className="text-[11px] font-bold bg-[#1F2A44] text-[#FDFBF7] px-2.5 py-0.5 rounded-full">19+ Other Brands</span>
                </div>
                <h4 className="text-base sm:text-lg font-bold text-[#1F2A44] mt-1 mb-1" style={{ fontFamily: 'Fraunces, serif' }}>
                  We also sell diapers like Avonee, Mina, Savlon Twinkle, Happy Nappy & other 19 brands
                </h4>
                <p className="text-xs sm:text-sm text-[#4A5878] m-0">
                  Looking for regular or disposable brands? Ask us in WhatsApp for available sizes, packs, and pricing details.
                </p>
              </div>
            </div>

            <a
              href={`https://wa.me/${contactInfo.whatsappNumber}?text=${encodeURIComponent(
                'Hi TheKidsNest! I would like to inquire about diapers like Avonee, Mina, Savlon Twinkle, Happy Nappy, and other brands. Please share available sizes and prices.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp text-xs sm:text-sm font-bold py-2.5 px-4 shrink-0 flex items-center gap-2"
              id="ask-whatsapp-other-brands-btn"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Ask in WhatsApp for Details</span>
            </a>
          </div>
        </div>

        {/* DELIVERY CHARGE INFORMATION BOX */}
        <div className="bg-[#F6F1E8] rounded-3xl p-6 sm:p-8 border border-[#1F2A44]/15 mb-10" id="delivery-rates-card">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-md">
              <div className="flex items-center gap-2 text-xs font-extrabold tracking-wider uppercase text-[#1F2A44] mb-1">
                <Truck className="w-4 h-4 text-[#1F2A44]" />
                <span>Delivery Charge Details</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#1F2A44]" style={{ fontFamily: 'Fraunces, serif' }}>
                Where should we deliver?
              </h3>
              <p className="text-xs sm:text-sm text-[#4A5878] mt-1">
                Select your delivery destination below to calculate your package and message us directly on WhatsApp.
              </p>
            </div>

            {/* Delivery Area Selector */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full md:w-auto">
              <button
                type="button"
                onClick={() => setDeliveryArea('sylhet')}
                className={`flex flex-col p-4 rounded-2xl border-2 text-left transition-all cursor-pointer ${
                  deliveryArea === 'sylhet'
                    ? 'border-[#1F2A44] bg-[#FDFBF7] shadow-md ring-1 ring-[#1F2A44]'
                    : 'border-transparent bg-white/70 hover:bg-white'
                }`}
                id="delivery-btn-sylhet"
              >
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="font-bold text-sm text-[#1F2A44]">In Sylhet Sadar</span>
                  {deliveryArea === 'sylhet' && <Check className="w-4 h-4 text-[#1F2A44]" />}
                </div>
                <div className="text-base font-extrabold text-[#1F2A44]">40 – 60 Taka</div>
                <div className="text-[11px] text-[#4A5878]">Fast doorstep delivery</div>
              </button>

              <button
                type="button"
                onClick={() => setDeliveryArea('outside')}
                className={`flex flex-col p-4 rounded-2xl border-2 text-left transition-all cursor-pointer ${
                  deliveryArea === 'outside'
                    ? 'border-[#1F2A44] bg-[#FDFBF7] shadow-md ring-1 ring-[#1F2A44]'
                    : 'border-transparent bg-white/70 hover:bg-white'
                }`}
                id="delivery-btn-outside"
              >
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="font-bold text-sm text-[#1F2A44]">Outside Sylhet</span>
                  {deliveryArea === 'outside' && <Check className="w-4 h-4 text-[#1F2A44]" />}
                </div>
                <div className="text-base font-extrabold text-[#1F2A44]">60 – 150 Taka</div>
                <div className="text-[11px] text-[#4A5878]">Across all Bangladesh</div>
              </button>
            </div>
          </div>
        </div>

        {/* WhatsApp Checkout Bar with selected package & delivery */}
        <div className="bg-[#1F2A44] text-[#FDFBF7] rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-xs text-[#F4C95D] font-bold uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" /> Ready to Order
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-1" style={{ fontFamily: 'Fraunces, serif' }}>
              {activePackage.packageNumber}: {activePackage.title} (৳{activePackage.price} Taka)
            </h3>
            <p className="text-xs sm:text-sm text-white/80">
              Delivery Area: <strong>{deliveryRates[deliveryArea].label}</strong> ({deliveryRates[deliveryArea].range}). Message us on WhatsApp ({contactInfo.phoneFormatted}) with your full address.
            </p>
          </div>

          <a
            className="btn btn-whatsapp btn-large text-base shrink-0"
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            id="product-whatsapp-checkout-btn"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Order on WhatsApp Now</span>
          </a>
        </div>
      </section>

      {/* How to Order Guide */}
      <section className="order" id="how-to-order">
        <p className="kicker center">How to Order</p>
        <h2 className="center">Simple ordering & doorstep delivery across Bangladesh</h2>
        <div className="steps">
          <div className="step" id="step-1">
            <span className="step-dot">1</span>
            <h4>Choose Your Package</h4>
            <p>
              Select <strong>Package 1 (250 Taka)</strong>, <strong>Package 2 (660 Taka)</strong>, or <strong>Package 3 (999 Taka)</strong> based on your routine.
            </p>
          </div>
          <div className="step" id="step-2">
            <span className="step-dot">2</span>
            <h4>Message on WhatsApp</h4>
            <p>
              Tap the WhatsApp button or message <strong>01570-294935</strong> with your delivery address.
            </p>
          </div>
          <div className="step" id="step-3">
            <span className="step-dot">3</span>
            <h4>Doorstep Delivery</h4>
            <p>
              Delivery charge: <strong>40–60 Taka</strong> in Sylhet Sadar, or <strong>60–150 Taka</strong> outside Sylhet. We confirm and dispatch promptly.
            </p>
          </div>
        </div>
        <div className="order-cta">
          <a
            className="btn btn-primary btn-large"
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            id="order-steps-cta-btn"
          >
            <MessageCircle className="w-5 h-5 text-[#25D366]" />
            <span>Order on WhatsApp ({contactInfo.phone})</span>
          </a>
        </div>
      </section>

      {/* ===== 4. CONTACT US SECTION ===== */}
      <section className="contact-section py-20 px-[6vw] max-w-6xl mx-auto" id="contact">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="kicker center">Contact Us</p>
          <h2 className="text-3xl sm:text-4xl font-semibold mb-3" style={{ fontFamily: 'Fraunces, serif' }}>
            Get in touch with The Kids Nest
          </h2>
          <p className="text-[#4A5878] text-base">
            Need help choosing between Package 1, 2, or 3? Have questions about washing or delivery? We respond quickly!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Card 1: Phone & WhatsApp */}
          <div className="bg-[#F6F1E8] rounded-3xl p-8 border border-[#1F2A44]/10 text-center flex flex-col items-center justify-between" id="contact-phone-card">
            <div className="w-14 h-14 rounded-full bg-[#25D366]/20 text-[#0d3b1e] flex items-center justify-center mb-4">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold mb-1">WhatsApp & Phone</h4>
              <p className="text-xs text-[#4A5878] mb-3">Fast responses for orders & inquiries</p>
              <div className="text-lg font-bold text-[#1F2A44] mb-1">{contactInfo.phoneFormatted}</div>
              <div className="text-xs text-[#4A5878]">Mobile: {contactInfo.phone}</div>
            </div>
            <div className="mt-6 flex flex-col gap-2 w-full">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp text-sm py-2.5 justify-center w-full"
                id="contact-wa-action"
              >
                <MessageCircle className="w-4 h-4" /> Message WhatsApp
              </a>
              <a
                href={`tel:${contactInfo.phone}`}
                className="text-xs font-bold text-[#1F2A44] hover:underline"
              >
                Call: {contactInfo.phone}
              </a>
            </div>
          </div>

          {/* Card 2: Facebook Page */}
          <div className="bg-[#F6F1E8] rounded-3xl p-8 border border-[#1F2A44]/10 text-center flex flex-col items-center justify-between" id="contact-fb-card">
            <div className="w-14 h-14 rounded-full bg-[#1877F2]/15 text-[#1877F2] flex items-center justify-center mb-4">
              <Facebook className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold mb-1">Facebook Page</h4>
              <p className="text-xs text-[#4A5878] mb-3">Official Page & Customer Reviews</p>
              <div className="text-base font-bold text-[#1F2A44] mb-1">The Kids Nest</div>
              <div className="text-xs text-[#4A5878]">facebook.com/{contactInfo.facebookHandle}</div>
            </div>
            <div className="mt-6 w-full">
              <a
                href={contactInfo.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary text-sm py-2.5 justify-center w-full"
                id="contact-fb-action"
              >
                <Facebook className="w-4 h-4" /> Visit Facebook Page
              </a>
            </div>
          </div>

          {/* Card 3: Location & Delivery */}
          <div className="bg-[#F6F1E8] rounded-3xl p-8 border border-[#1F2A44]/10 text-center flex flex-col items-center justify-between" id="contact-location-card">
            <div className="w-14 h-14 rounded-full bg-[#F4C95D]/30 text-[#1F2A44] flex items-center justify-center mb-4">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold mb-1">Location & Email</h4>
              <p className="text-xs text-[#4A5878] mb-3">Sylhet Sadar & Nationwide Shipping</p>
              <div className="text-base font-bold text-[#1F2A44] mb-1">{contactInfo.location}</div>
              <a
                href={`mailto:${contactInfo.email}`}
                className="text-xs text-[#4A5878] hover:text-[#1F2A44] underline break-all"
                id="contact-email-link"
              >
                {contactInfo.email}
              </a>
            </div>
            <div className="mt-6 w-full">
              <a
                href={`mailto:${contactInfo.email}?subject=Inquiry%20from%20Website`}
                className="btn btn-ghost text-sm py-2.5 justify-center w-full"
                id="contact-email-action"
              >
                <Mail className="w-4 h-4" /> Send Email
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="contact border-t border-[#1F2A44]/10" id="footer">
        <div className="contact-inner">
          <div className="contact-brand">
            <div className="flex items-center gap-3 mb-3">
              <img
                src="/assets/logo.jpg"
                alt="TheKidsNest - Care Begins Here"
                className="footer-mark shadow-xs"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.currentTarget as HTMLElement).style.display = 'none';
                }}
              />
              <div className="flex flex-col">
                <span className="text-lg font-bold text-[#0C294A]" style={{ fontFamily: 'Fraunces, serif' }}>
                  TheKids<span className="text-[#E97E8B]">Nest</span>
                </span>
                <span className="text-[10px] tracking-wider uppercase font-semibold text-[#4A5878]">
                  Care Begins Here
                </span>
              </div>
            </div>
            <p className="text-sm text-[#4A5878] mb-3">
              "Care Begins Here" — Washable cloth diapers for babies. Shipped directly from Sylhet to all across Bangladesh.
            </p>
            <div className="text-xs text-[#4A5878] space-y-1 mb-4">
              <div>• Sylhet Sadar Delivery: <strong>40–60 Taka</strong></div>
              <div>• Outside Sylhet Delivery: <strong>60–150 Taka</strong></div>
            </div>
            <div className="flex items-center gap-3">
              <a
                href={contactInfo.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#1877F2]/10 text-[#1877F2] flex items-center justify-center hover:scale-110 transition-transform"
                aria-label="The Kids Nest on Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#25D366]/20 text-[#0d3b1e] flex items-center justify-center hover:scale-110 transition-transform"
                aria-label="Message on WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="contact-details">
            <h4>Direct Contact</h4>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-[#25D366]"
            >
              <Phone className="w-4 h-4 text-[#25D366]" />
              <span>WhatsApp: {contactInfo.phoneFormatted}</span>
            </a>
            <a
              href={`mailto:${contactInfo.email}`}
              className="flex items-center gap-2 hover:text-[#F1A7B5]"
            >
              <Mail className="w-4 h-4 text-[#4A5878]" />
              <span>{contactInfo.email}</span>
            </a>
            <p className="flex items-center gap-2 text-sm text-[#4A5878]">
              <MapPin className="w-4 h-4 text-[#F4C95D]" />
              <span>{contactInfo.location}</span>
            </p>
          </div>

          <div className="contact-links">
            <h4>Menu Links</h4>
            <a href="#home">Home</a>
            <a href="#about">About us</a>
            <a href="#product">Product</a>
            <a href="#contact">Contact us</a>
            <a
              href={contactInfo.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#1877F2] hover:underline"
            >
              Facebook Page ↗
            </a>
          </div>
        </div>

        <p className="copyright text-center text-xs text-[#4A5878] pb-8 mt-8 border-t border-[#1F2A44]/10 pt-6">
          © {currentYear} TheKidsNest (The Kids Nest BD). All rights reserved. Slogan: <em>Care Begins Here</em>.
        </p>
      </footer>
    </div>
  );
}
