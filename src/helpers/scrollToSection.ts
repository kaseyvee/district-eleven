"use client";

export function scrollToSection(id: string) {
  const isMobile = window.innerWidth <= 768;

  const element = document.getElementById(id);
  if (element) {
    const navbarHeight = isMobile ? 70 : 160; // Height of your navbar in pixels
    const offset = element.offsetTop - navbarHeight;
    window.scrollTo({ top: offset, behavior: 'smooth' });
  }
};
