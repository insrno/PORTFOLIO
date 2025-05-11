function Services() {
  return (
    <section id="services" className="w-full min-h-screen py-16 bg-[var(--color-bg)] text-[var(--color-text)] flex flex-col justify-center items-center">
      <div className="w-full max-w-4xl text-center mx-auto">
        <h3 className="text-3xl font-bold mb-8 text-[var(--color-primary)]">Services</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-[var(--color-accent)] rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-200 cursor-pointer">
            <h4 className="text-xl font-bold mb-2 text-[var(--color-primary)]">Product Design</h4>
            <p className="text-[var(--color-bg)]">Creating user-friendly designs for your products.</p>
          </div>
          <div className="p-6 bg-[var(--color-accent)] rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-200 cursor-pointer">
            <h4 className="text-xl font-bold mb-2 text-[var(--color-primary)]">Branding</h4>
            <p className="text-[var(--color-bg)]">Helping you establish a strong brand identity.</p>
          </div>
          <div className="p-6 bg-[var(--color-accent)] rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-200 cursor-pointer">
            <h4 className="text-xl font-bold mb-2 text-[var(--color-primary)]">Full-Stack Development</h4>
            <p className="text-[var(--color-bg)]">Building scalable and efficient web applications.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;