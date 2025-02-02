import Link from "next/link";

export default function Hero() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
          Custom Websites Built for You
        </h1>
        <p className="text-xl mb-8">
          We create stunning, responsive websites tailored to your needs
        </p>
        <Link
          href="#contact"
          className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/90 h-11 px-8"
        >
          Request a Quote
        </Link>
      </div>
    </section>
  );
}
