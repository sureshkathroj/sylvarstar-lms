import { trustedCompanies } from "./trusted-data";
import { TrustedLogo } from "./TrustedLogo";

export function Trusted() {
  return (
    <section className="container mx-auto px-6 py-20">
      <div className="text-center">
        <p className="mb-10 text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Trusted by learners and teams worldwide
        </p>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
          {trustedCompanies.map((company) => (
            <TrustedLogo
              key={company.id}
              name={company.name}
            />
          ))}
        </div>
      </div>
    </section>
  );
}