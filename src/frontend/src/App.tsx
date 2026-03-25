import {
  Aperture,
  ChevronDown,
  Heart,
  Instagram,
  MapPin,
  Menu,
  MessageCircle,
  Music,
  Phone,
  Star,
  Video,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "HOME", href: "#home" },
  { label: "SERVICES", href: "#services" },
  { label: "PORTFOLIO", href: "#portfolio" },
  { label: "ABOUT", href: "#about" },
  { label: "CONTACT", href: "#contact" },
];

const SERVICES = [
  {
    id: 1,
    icon: Video,
    title: "Wedding Video Shoot",
    description:
      "Cinematic wedding films that capture every magical moment, from the first look to the last dance. Storytelling through the art of film.",
    image: null,
  },
  {
    id: 2,
    icon: Heart,
    title: "Pre-Wedding Photo Shoot",
    description:
      "Romantic pre-wedding sessions in stunning locations, capturing the love story before your big day.",
    image: "/assets/generated/prewedding.dim_800x600.jpg",
  },
  {
    id: 3,
    icon: Music,
    title: "Song Shoot / Music Video",
    description:
      "Professional music video production with creative direction, dramatic lighting, and cinematic storytelling.",
    image: "/assets/generated/song-shoot.dim_800x600.jpg",
  },
  {
    id: 4,
    icon: Star,
    title: "Event Photography",
    description:
      "Comprehensive event coverage that documents every highlight, emotion, and memory of your special occasion.",
    image: null,
  },
  {
    id: 5,
    icon: Aperture,
    title: "Professional Photography",
    description:
      "Studio-quality portraits and professional photography sessions with expert lighting and composition.",
    image: "/assets/generated/portrait.dim_800x600.jpg",
  },
];

const PORTFOLIO_ITEMS = [
  {
    id: 1,
    image:
      "/assets/uploads/994053ff-e94d-4fdb-b259-f912163d5d61-019d25eb-5507-7506-ae94-dc2b29c95128-1.jpeg",
    category: "TEAM",
    title: "Khusu Cinematic Team",
    baseLikes: 248,
  },
  {
    id: 2,
    image:
      "/assets/uploads/538e6a42-89aa-46da-9925-be5aa7cb7192-019d25eb-54be-71f7-9f05-0d39ba44ab67-2.png",
    category: "BRAND",
    title: "Khusu Cinematic Production",
    baseLikes: 187,
  },
  {
    id: 3,
    image:
      "/assets/uploads/img_1260-019d25eb-5725-72f1-a677-2b447fc93f11-4.jpeg",
    category: "PORTRAITS",
    title: "Rajasthani Shoot",
    baseLikes: 312,
  },
  {
    id: 4,
    image: "/assets/generated/event.dim_800x600.jpg",
    category: "EVENTS",
    title: "Grand Reception Event",
    baseLikes: 203,
  },
  {
    id: 5,
    image: "/assets/generated/portrait.dim_800x600.jpg",
    category: "PORTRAITS",
    title: "Professional Portrait",
    baseLikes: 156,
  },
];

function LikeButton({ baseLikes }: { baseLikes: number }) {
  const [liked, setLiked] = useState(false);
  const [burst, setBurst] = useState(false);

  const handleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!liked) {
      setBurst(true);
      setTimeout(() => setBurst(false), 600);
    }
    setLiked((prev) => !prev);
  };

  return (
    <button
      type="button"
      onClick={handleLike}
      className="relative flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all duration-200"
      style={{
        backgroundColor: liked
          ? "rgba(201,163,91,0.18)"
          : "rgba(11,15,18,0.65)",
        border: `1px solid ${
          liked ? "rgba(201,163,91,0.6)" : "rgba(255,255,255,0.12)"
        }`,
        backdropFilter: "blur(8px)",
      }}
      aria-label={liked ? "Unlike" : "Like"}
    >
      {/* burst particles */}
      {burst &&
        [0, 1, 2, 3, 4, 5].map((i) => (
          <motion.span
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full pointer-events-none"
            style={{
              backgroundColor: "#C9A35B",
              top: "50%",
              left: "50%",
              translateX: "-50%",
              translateY: "-50%",
            }}
            initial={{ scale: 0, x: 0, y: 0, opacity: 1 }}
            animate={{
              scale: [0, 1, 0],
              x: Math.cos((i / 6) * Math.PI * 2) * 18,
              y: Math.sin((i / 6) * Math.PI * 2) * 18,
              opacity: [1, 1, 0],
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        ))}

      <motion.span
        animate={liked ? { scale: [1, 1.4, 1] } : { scale: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        style={{ display: "inline-flex" }}
      >
        <Heart
          className="w-3.5 h-3.5"
          style={{
            color: liked ? "#C9A35B" : "#fff",
            fill: liked ? "#C9A35B" : "none",
            transition: "all 0.2s",
          }}
        />
      </motion.span>
      <span
        className="font-montserrat text-[11px] font-semibold leading-none"
        style={{ color: liked ? "#C9A35B" : "#fff" }}
      >
        {baseLikes + (liked ? 1 : 0)}
      </span>
    </button>
  );
}

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <div
      className="min-h-screen font-montserrat"
      style={{ backgroundColor: "#0B0F12", color: "#E9E6DF" }}
    >
      {/* ── NAVBAR ── */}
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: scrolled
            ? "rgba(11,15,18,0.97)"
            : "rgba(11,15,18,0.85)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid #2A3337",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <img
                src="/assets/uploads/e701d877-1d5d-4857-b655-d73043f6afa2-019d25eb-5766-77b4-a8bf-45a3e108a2a1-5.png"
                alt="Khusu Cinematic"
                className="h-12 w-auto object-contain"
              />
              <div>
                <div
                  className="font-cinzel font-bold tracking-widest text-sm md:text-base leading-none"
                  style={{ color: "#C9A35B" }}
                >
                  KHUSU CINEMATIC
                </div>
                <div
                  className="font-montserrat text-[9px] md:text-[10px] tracking-[0.2em] mt-0.5"
                  style={{ color: "#B9B2A6" }}
                >
                  PHOTOGRAPHY | VIDEOGRAPHY
                </div>
              </div>
            </div>

            {/* Desktop Nav */}
            <nav
              className="hidden lg:flex items-center gap-8"
              data-ocid="nav.panel"
            >
              {NAV_LINKS.map((link) => (
                <button
                  type="button"
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="font-montserrat text-xs tracking-[0.15em] font-medium transition-colors duration-200 hover:text-gold"
                  style={{ color: "#B9B2A6" }}
                  data-ocid={`nav.${link.label.toLowerCase()}.link`}
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Book Now CTA */}
            <div className="hidden lg:block">
              <a
                href="https://wa.me/919602352141"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 font-cinzel text-xs tracking-widest font-semibold transition-all duration-300 hover:shadow-gold"
                style={{
                  backgroundColor: "#C9A35B",
                  color: "#0B0F12",
                  border: "1px solid #C9A35B",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.color = "#C9A35B";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#C9A35B";
                  e.currentTarget.style.color = "#0B0F12";
                }}
                data-ocid="nav.book_now.button"
              >
                BOOK NOW
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              type="button"
              className="lg:hidden p-2"
              style={{ color: "#C9A35B" }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-ocid="nav.menu.toggle"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              style={{
                backgroundColor: "#0B0F12",
                borderTop: "1px solid #2A3337",
              }}
              data-ocid="nav.mobile.panel"
            >
              <div className="px-6 py-4 flex flex-col gap-4">
                {NAV_LINKS.map((link) => (
                  <button
                    type="button"
                    key={link.label}
                    onClick={() => handleNavClick(link.href)}
                    className="text-left font-montserrat text-sm tracking-[0.15em] font-medium transition-colors hover:text-gold py-1"
                    style={{ color: "#B9B2A6" }}
                  >
                    {link.label}
                  </button>
                ))}
                <a
                  href="https://wa.me/919602352141"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 font-cinzel text-xs tracking-widest font-semibold mt-2"
                  style={{ backgroundColor: "#C9A35B", color: "#0B0F12" }}
                  data-ocid="nav.mobile.book_now.button"
                >
                  BOOK NOW
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ── HERO ── */}
      <section
        id="home"
        className="relative flex items-center justify-center"
        style={{ minHeight: "100vh" }}
      >
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('/assets/generated/hero-wedding.dim_1600x900.jpg')",
          }}
        />
        {/* Vignette overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(11,15,18,0.5) 0%, rgba(11,15,18,0.3) 40%, rgba(11,15,18,0.8) 80%, rgba(11,15,18,0.97) 100%)",
          }}
        />

        {/* Hero content */}
        <motion.div
          className="relative z-10 text-center px-4 sm:px-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="font-cinzel text-xs tracking-[0.4em] mb-6"
            style={{ color: "#C9A35B" }}
          >
            KHUSHAL GOYAL PRESENTS
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.9 }}
            className="font-cinzel font-bold leading-tight mb-6"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              color: "#C9A35B",
              textShadow: "0 2px 20px rgba(201,163,91,0.3)",
            }}
          >
            CAPTURING YOUR MOST
            <br />
            PRECIOUS MOMENTS
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="font-montserrat font-light tracking-widest text-sm md:text-base mb-10 max-w-xl mx-auto"
            style={{ color: "#E9E6DF" }}
          >
            Wedding Films &bull; Pre-Wedding Shoots &bull; Music Videos &bull;
            Event Photography
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <button
              type="button"
              onClick={() => handleNavClick("#services")}
              className="inline-flex items-center gap-3 px-8 py-4 font-cinzel text-sm tracking-widest font-semibold transition-all duration-300"
              style={{
                backgroundColor: "#C9A35B",
                color: "#0B0F12",
                border: "1px solid #C9A35B",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = "#C9A35B";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#C9A35B";
                e.currentTarget.style.color = "#0B0F12";
              }}
              data-ocid="hero.explore_services.button"
            >
              EXPLORE SERVICES
            </button>
          </motion.div>

          {/* Down arrow */}
          <motion.div
            className="mt-12"
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            <ChevronDown
              className="w-6 h-6 mx-auto"
              style={{ color: "#C9A35B" }}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* ── SERVICES ── */}
      <section
        id="services"
        style={{ backgroundColor: "#0B0F12" }}
        className="py-24 px-4"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div
              className="font-cinzel text-xs tracking-[0.4em] mb-4"
              style={{ color: "#C9A35B" }}
            >
              WHAT WE OFFER
            </div>
            <h2
              className="font-cinzel font-bold tracking-wider"
              style={{
                fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                color: "#E9E6DF",
              }}
            >
              OUR SERVICES
            </h2>
            <div
              className="w-16 h-px mx-auto mt-6"
              style={{ backgroundColor: "#C9A35B" }}
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className="group relative overflow-hidden rounded-sm"
                  style={{
                    backgroundColor: "#161E22",
                    border: "1px solid #2A3337",
                  }}
                  data-ocid={`services.item.${i + 1}`}
                >
                  {service.image ? (
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div
                        className="absolute inset-0"
                        style={{
                          background:
                            "linear-gradient(to bottom, transparent 30%, rgba(22,30,34,0.9) 100%)",
                        }}
                      />
                    </div>
                  ) : null}
                  <div className="p-6">
                    <div
                      className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-sm"
                      style={{
                        backgroundColor: "rgba(201,163,91,0.12)",
                        border: "1px solid rgba(201,163,91,0.3)",
                      }}
                    >
                      <Icon className="w-5 h-5" style={{ color: "#C9A35B" }} />
                    </div>
                    <h3
                      className="font-cinzel font-semibold text-sm tracking-wider mb-3"
                      style={{ color: "#E9E6DF" }}
                    >
                      {service.title.toUpperCase()}
                    </h3>
                    <p
                      className="font-montserrat text-sm leading-relaxed"
                      style={{ color: "#B9B2A6" }}
                    >
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── PORTFOLIO ── */}
      <section
        id="portfolio"
        style={{ backgroundColor: "#12181C" }}
        className="py-24 px-4"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div
              className="font-cinzel text-xs tracking-[0.4em] mb-4"
              style={{ color: "#C9A35B" }}
            >
              OUR WORK
            </div>
            <h2
              className="font-cinzel font-bold tracking-wider"
              style={{
                fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                color: "#E9E6DF",
              }}
            >
              PORTFOLIO
            </h2>
            <div
              className="w-16 h-px mx-auto mt-6"
              style={{ backgroundColor: "#C9A35B" }}
            />
          </motion.div>

          {/* Masonry-style grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {PORTFOLIO_ITEMS.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="group relative overflow-hidden rounded-sm break-inside-avoid"
                style={{ border: "1px solid #2A3337" }}
                data-ocid={`portfolio.item.${i + 1}`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  style={{ aspectRatio: i % 2 === 0 ? "4/3" : "3/4" }}
                />
                {/* Hover overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-start justify-end p-5"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(11,15,18,0.9) 0%, transparent 60%)",
                  }}
                >
                  <span
                    className="inline-block px-3 py-1 font-cinzel text-[9px] tracking-widest font-semibold mb-2 rounded-sm"
                    style={{ backgroundColor: "#C9A35B", color: "#0B0F12" }}
                  >
                    {item.category}
                  </span>
                  <h3
                    className="font-cinzel text-sm tracking-wider font-semibold"
                    style={{ color: "#E9E6DF" }}
                  >
                    {item.title.toUpperCase()}
                  </h3>
                </div>

                {/* Always-visible category pill */}
                <div className="absolute top-3 left-3">
                  <span
                    className="inline-block px-3 py-1 font-cinzel text-[9px] tracking-widest font-semibold rounded-sm group-hover:opacity-0 transition-opacity duration-300"
                    style={{
                      backgroundColor: "rgba(11,15,18,0.8)",
                      color: "#C9A35B",
                      border: "1px solid rgba(201,163,91,0.4)",
                    }}
                  >
                    {item.category}
                  </span>
                </div>

                {/* Like button — always visible, bottom-right */}
                <div className="absolute bottom-3 right-3">
                  <LikeButton baseLikes={item.baseLikes} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section
        id="about"
        style={{ backgroundColor: "#0B0F12" }}
        className="py-24 px-4"
      >
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div
                className="font-cinzel text-xs tracking-[0.4em] mb-4"
                style={{ color: "#C9A35B" }}
              >
                ABOUT THE ARTIST
              </div>
              <h2
                className="font-cinzel font-bold tracking-wider mb-6"
                style={{
                  fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                  color: "#E9E6DF",
                }}
              >
                KHUSHAL GOYAL
              </h2>
              <div
                className="w-12 h-px mb-8"
                style={{ backgroundColor: "#C9A35B" }}
              />
              <p
                className="font-montserrat text-sm leading-loose mb-6"
                style={{ color: "#B9B2A6" }}
              >
                With a passion for cinematic storytelling, Khushal Goyal founded
                Khusu Cinematic to transform life's most precious moments into
                timeless visual art. Based in India, our team brings
                professional expertise and artistic vision to every project.
              </p>
              <p
                className="font-montserrat text-sm leading-loose mb-8"
                style={{ color: "#B9B2A6" }}
              >
                From grand wedding ceremonies to intimate pre-wedding shoots,
                from high-energy music videos to elegant portrait sessions — we
                bring unmatched dedication and creative excellence to each frame
                we capture.
              </p>
              <blockquote
                className="font-cinzel text-base italic tracking-wide pl-4"
                style={{
                  color: "#C9A35B",
                  borderLeft: "2px solid #C9A35B",
                }}
              >
                "Your vision, our lens. We turn moments into eternal memories."
              </blockquote>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div
                className="relative overflow-hidden rounded-sm"
                style={{ border: "1px solid #2A3337" }}
              >
                <img
                  src="/assets/uploads/0f640b0c-ffd9-4fba-b23a-0de007a9302a-019d25eb-56fb-726d-a125-c4471a370c4f-3.png"
                  alt="Khushal Goyal - Khusu Cinematic"
                  className="w-full h-80 object-cover object-top"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(201,163,91,0.1) 0%, transparent 60%)",
                  }}
                />
              </div>
              {/* Stats */}
              <div
                className="absolute -bottom-6 -left-4 p-5 rounded-sm"
                style={{
                  backgroundColor: "#161E22",
                  border: "1px solid #2A3337",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
                }}
              >
                <div
                  className="font-cinzel font-bold text-2xl"
                  style={{ color: "#C9A35B" }}
                >
                  500+
                </div>
                <div
                  className="font-montserrat text-xs tracking-widest mt-1"
                  style={{ color: "#B9B2A6" }}
                >
                  HAPPY COUPLES
                </div>
              </div>
              <div
                className="absolute -top-6 -right-4 p-5 rounded-sm"
                style={{
                  backgroundColor: "#161E22",
                  border: "1px solid #2A3337",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
                }}
              >
                <div
                  className="font-cinzel font-bold text-2xl"
                  style={{ color: "#C9A35B" }}
                >
                  5+
                </div>
                <div
                  className="font-montserrat text-xs tracking-widest mt-1"
                  style={{ color: "#B9B2A6" }}
                >
                  YEARS EXP.
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section
        id="contact"
        style={{ backgroundColor: "#12181C" }}
        className="py-24 px-4"
      >
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-sm overflow-hidden"
            style={{ border: "1px solid #2A3337" }}
            data-ocid="contact.panel"
          >
            <div className="grid lg:grid-cols-2">
              {/* Left */}
              <div
                className="p-10 lg:p-14 flex flex-col justify-center"
                style={{ backgroundColor: "#161E22" }}
              >
                <div
                  className="font-cinzel text-xs tracking-[0.4em] mb-4"
                  style={{ color: "#C9A35B" }}
                >
                  GET IN TOUCH
                </div>
                <h2
                  className="font-cinzel font-bold tracking-wide leading-tight mb-4"
                  style={{
                    fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                    color: "#E9E6DF",
                  }}
                >
                  LET'S CREATE
                  <br />
                  <span style={{ color: "#C9A35B" }}>MAGIC.</span>
                </h2>
                <div
                  className="w-12 h-px mb-6"
                  style={{ backgroundColor: "#C9A35B" }}
                />
                <p
                  className="font-montserrat text-sm leading-loose"
                  style={{ color: "#B9B2A6" }}
                >
                  Ready to immortalize your most precious moments? Reach out to
                  discuss your vision and let us craft something extraordinary
                  together.
                </p>
              </div>

              {/* Right */}
              <div
                className="p-10 lg:p-14 flex flex-col gap-6 justify-center"
                style={{ backgroundColor: "#1A2327" }}
              >
                {/* Phone */}
                <a
                  href="tel:9602352141"
                  className="flex items-center gap-4 group"
                  data-ocid="contact.phone.link"
                >
                  <div
                    className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-sm"
                    style={{
                      backgroundColor: "rgba(201,163,91,0.12)",
                      border: "1px solid rgba(201,163,91,0.3)",
                    }}
                  >
                    <Phone className="w-5 h-5" style={{ color: "#C9A35B" }} />
                  </div>
                  <div>
                    <div
                      className="font-cinzel text-[10px] tracking-widest mb-1"
                      style={{ color: "#B9B2A6" }}
                    >
                      PHONE
                    </div>
                    <div
                      className="font-montserrat text-sm font-medium group-hover:text-gold transition-colors"
                      style={{ color: "#E9E6DF" }}
                    >
                      +91 9602352141
                    </div>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/919602352141"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                  data-ocid="contact.whatsapp.button"
                >
                  <div
                    className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-sm"
                    style={{
                      backgroundColor: "rgba(201,163,91,0.12)",
                      border: "1px solid rgba(201,163,91,0.3)",
                    }}
                  >
                    <MessageCircle
                      className="w-5 h-5"
                      style={{ color: "#C9A35B" }}
                    />
                  </div>
                  <div>
                    <div
                      className="font-cinzel text-[10px] tracking-widest mb-1"
                      style={{ color: "#B9B2A6" }}
                    >
                      WHATSAPP
                    </div>
                    <div
                      className="font-montserrat text-sm font-medium group-hover:text-gold transition-colors"
                      style={{ color: "#E9E6DF" }}
                    >
                      Chat with us on WhatsApp
                    </div>
                  </div>
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/khusu_cinematic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                  data-ocid="contact.instagram.link"
                >
                  <div
                    className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-sm"
                    style={{
                      backgroundColor: "rgba(201,163,91,0.12)",
                      border: "1px solid rgba(201,163,91,0.3)",
                    }}
                  >
                    <Instagram
                      className="w-5 h-5"
                      style={{ color: "#C9A35B" }}
                    />
                  </div>
                  <div>
                    <div
                      className="font-cinzel text-[10px] tracking-widest mb-1"
                      style={{ color: "#B9B2A6" }}
                    >
                      INSTAGRAM
                    </div>
                    <div
                      className="font-montserrat text-sm font-medium group-hover:text-gold transition-colors"
                      style={{ color: "#E9E6DF" }}
                    >
                      @khusu_cinematic
                    </div>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-4">
                  <div
                    className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-sm"
                    style={{
                      backgroundColor: "rgba(201,163,91,0.12)",
                      border: "1px solid rgba(201,163,91,0.3)",
                    }}
                  >
                    <MapPin className="w-5 h-5" style={{ color: "#C9A35B" }} />
                  </div>
                  <div>
                    <div
                      className="font-cinzel text-[10px] tracking-widest mb-1"
                      style={{ color: "#B9B2A6" }}
                    >
                      LOCATION
                    </div>
                    <div
                      className="font-montserrat text-sm font-medium"
                      style={{ color: "#E9E6DF" }}
                    >
                      India
                    </div>
                  </div>
                </div>

                {/* CTA buttons */}
                <div className="flex flex-wrap gap-3 mt-2">
                  <a
                    href="https://wa.me/919602352141"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 font-cinzel text-xs tracking-widest font-semibold transition-all duration-300"
                    style={{ backgroundColor: "#C9A35B", color: "#0B0F12" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "transparent";
                      e.currentTarget.style.color = "#C9A35B";
                      e.currentTarget.style.border = "1px solid #C9A35B";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "#C9A35B";
                      e.currentTarget.style.color = "#0B0F12";
                      e.currentTarget.style.border = "1px solid #C9A35B";
                    }}
                    data-ocid="contact.book_now.primary_button"
                  >
                    BOOK NOW
                  </a>
                  <a
                    href="https://www.instagram.com/khusu_cinematic"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 font-cinzel text-xs tracking-widest font-semibold transition-all duration-300"
                    style={{
                      backgroundColor: "transparent",
                      color: "#C9A35B",
                      border: "1px solid #C9A35B",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#C9A35B";
                      e.currentTarget.style.color = "#0B0F12";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "transparent";
                      e.currentTarget.style.color = "#C9A35B";
                    }}
                    data-ocid="contact.instagram.secondary_button"
                  >
                    <Instagram className="w-4 h-4" />
                    FOLLOW US
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer
        style={{ backgroundColor: "#080C0F", borderTop: "1px solid #2A3337" }}
        className="py-12 px-4"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="/assets/uploads/e701d877-1d5d-4857-b655-d73043f6afa2-019d25eb-5766-77b4-a8bf-45a3e108a2a1-5.png"
                  alt="Khusu Cinematic"
                  className="h-8 w-auto object-contain"
                />
                <div>
                  <div
                    className="font-cinzel font-bold tracking-widest text-sm"
                    style={{ color: "#C9A35B" }}
                  >
                    KHUSU CINEMATIC
                  </div>
                  <div
                    className="font-montserrat text-[9px] tracking-[0.2em]"
                    style={{ color: "#B9B2A6" }}
                  >
                    PHOTOGRAPHY | VIDEOGRAPHY
                  </div>
                </div>
              </div>
              <p
                className="font-montserrat text-xs leading-loose"
                style={{ color: "#B9B2A6" }}
              >
                Turning your most precious moments into eternal cinematic
                memories.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4
                className="font-cinzel text-xs tracking-widest mb-5"
                style={{ color: "#C9A35B" }}
              >
                QUICK LINKS
              </h4>
              <div className="flex flex-col gap-3">
                {NAV_LINKS.map((link) => (
                  <button
                    type="button"
                    key={link.label}
                    onClick={() => handleNavClick(link.href)}
                    className="text-left font-montserrat text-xs tracking-wider transition-colors hover:text-gold"
                    style={{ color: "#B9B2A6" }}
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4
                className="font-cinzel text-xs tracking-widest mb-5"
                style={{ color: "#C9A35B" }}
              >
                CONTACT
              </h4>
              <div className="flex flex-col gap-3">
                <a
                  href="tel:9602352141"
                  className="flex items-center gap-2 font-montserrat text-xs transition-colors hover:text-gold"
                  style={{ color: "#B9B2A6" }}
                >
                  <Phone className="w-3 h-3" />
                  +91 9602352141
                </a>
                <a
                  href="https://wa.me/919602352141"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-montserrat text-xs transition-colors hover:text-gold"
                  style={{ color: "#B9B2A6" }}
                >
                  <MessageCircle className="w-3 h-3" />
                  WhatsApp Us
                </a>
                <a
                  href="https://www.instagram.com/khusu_cinematic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-montserrat text-xs transition-colors hover:text-gold"
                  style={{ color: "#B9B2A6" }}
                >
                  <Instagram className="w-3 h-3" />
                  @khusu_cinematic
                </a>
                <div
                  className="flex items-center gap-2 font-montserrat text-xs"
                  style={{ color: "#B9B2A6" }}
                >
                  <MapPin className="w-3 h-3" />
                  India
                </div>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div
            className="flex flex-col md:flex-row items-center justify-between pt-8 gap-4"
            style={{ borderTop: "1px solid #2A3337" }}
          >
            <p className="font-montserrat text-xs" style={{ color: "#B9B2A6" }}>
              &copy; {currentYear} Khusu Cinematic. All rights reserved.
            </p>
            <p className="font-montserrat text-xs" style={{ color: "#B9B2A6" }}>
              Built with <span style={{ color: "#C9A35B" }}>&#9829;</span> using{" "}
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold transition-colors"
                style={{ color: "#B9B2A6" }}
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
