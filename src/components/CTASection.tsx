import { Button } from "./Button";
import { Icon } from "./Icon";
import { business, telHref, whatsappHref } from "@/data/business";

type Props = {
  title?: string;
  subtitle?: string;
};

export function CTASection({
  title = "Need us out today?",
  subtitle,
}: Props) {
  return (
    <section className="bg-ink text-white">
      <div className="bg-grid-dark">
        <div className="container-x py-16 text-center lg:py-20">
          <p className="eyebrow justify-center text-brand-light">
            <Icon name="clock" className="h-4 w-4" />
            Same-day &amp; 24/7 emergency call-out
          </p>
          <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-extrabold sm:text-4xl">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/70">
            {subtitle ??
              `We come to your home or workplace across ${business.baseCity} and the surrounding areas. Call for a free, no-obligation quote.`}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href={telHref} variant="primary" size="lg">
              <Icon name="phone" className="h-5 w-5" />
              Call {business.phoneDisplay}
            </Button>
            <Button href={whatsappHref} variant="white" size="lg">
              <Icon name="whatsapp" className="h-5 w-5 text-brand" />
              Message on WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
