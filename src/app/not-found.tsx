import { Button } from "@/components/Button";
import { Icon } from "@/components/Icon";
import { telHref, business } from "@/data/business";

export default function NotFound() {
  return (
    <section className="bg-ink text-white">
      <div className="bg-grid-dark">
        <div className="container-x flex min-h-[70vh] flex-col items-center justify-center py-20 text-center">
          <p className="text-7xl font-extrabold text-brand">404</p>
          <h1 className="mt-4 text-3xl font-bold sm:text-4xl">
            Page not found
          </h1>
          <p className="mt-4 max-w-md text-white/70">
            The page you&rsquo;re looking for doesn&rsquo;t exist or has moved.
            Let&rsquo;s get you back on the road.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/" variant="primary" size="lg">
              Back to home
            </Button>
            <Button href={telHref} variant="white" size="lg">
              <Icon name="phone" className="h-5 w-5 text-brand" />
              Call {business.phoneDisplay}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
