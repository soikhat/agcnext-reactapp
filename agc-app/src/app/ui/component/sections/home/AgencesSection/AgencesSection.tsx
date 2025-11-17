import { Typography } from "@/app/ui/design-system/Typography/Typography";
import Button from "@/app/ui/design-system/Button/Button";
import { FullSection } from "@/app/ui/design-system/Layout/Section/FullSection";
import { CenteredSection } from "@/app/ui/design-system/Layout/Section/CenteredSection";

const AgencesSection = () => (
  <FullSection className="relative bg-gray-100 bg-[url('/svg/archipelcomores_svg.svg')] bg-no-repeat bg-contain bg-center py-16 overflow-hidden">
    {/* Overlay léger pour améliorer la lisibilité */}

    <CenteredSection className="relative z-10 space-y-12">
      {/* Header principal */}
      <div className="text-center space-y-4">
        <Typography
          variant="caption2"
          className="text-primary tracking-wider"
        >
          Nos agences...
        </Typography>
        <Typography
          variant="headingS"
          className="text-gray-900 max-w-3xl mx-auto"
        >
          Ancré dans la région pour vous servir
        </Typography>
        <Typography
          variant="body-lg"
          className="text-gray-600 max-w-2xl mx-auto"
        >
          Partout où vous êtes aux Comores, nous sommes là. Une présence locale
          forte pour une relation de proximité.
        </Typography>
      </div>

      {/* Statistiques de présence locale */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
        <div className="text-center bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm">
          <Typography
            variant="headingL"
            theme="primary"
            weight="bold"
            className="mb-2"
          >
            30+
          </Typography>
          <Typography
            variant="body-sm"
            weight="semibold"
            className="text-gray-900 mb-1"
          >
            Années d'expérience
          </Typography>
          <Typography variant="caption2" theme="gray">
            Au service des Comores
          </Typography>
        </div>

        <div className="text-center bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm">
          <Typography
            variant="headingL"
            theme="primary"
            weight="bold"
            className="mb-2"
          >
            3
          </Typography>
          <Typography
            variant="body-sm"
            weight="semibold"
            className="text-gray-900 mb-1"
          >
            Îles couvertes
          </Typography>
          <Typography variant="caption2" theme="gray">
            Grande Comore, Anjouan, Mohéli
          </Typography>
        </div>

        <div className="text-center bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm">
          <Typography
            variant="headingL"
            theme="primary"
            weight="bold"
            className="mb-2"
          >
            1000+
          </Typography>
          <Typography
            variant="body-sm"
            weight="semibold"
            className="text-gray-900 mb-1"
          >
            Clients satisfaits
          </Typography>
          <Typography variant="caption2" theme="gray">
            Particuliers et entreprises
          </Typography>
        </div>

        <div className="text-center bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm">
          <Typography
            variant="headingL"
            theme="primary"
            weight="bold"
            className="mb-2"
          >
            24/7
          </Typography>
          <Typography
            variant="body-sm"
            weight="semibold"
            className="text-gray-900 mb-1"
          >
            Assistance
          </Typography>
          <Typography variant="caption2" theme="gray">
            Disponible partout
          </Typography>
        </div>
      </div>

      {/* Agences par île */}
      {/*  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {/* Grande Comore */}
      {/*}    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <Typography variant="headingM" theme="primary" weight="bold">
                🏢
              </Typography>
            </div>

            <Typography
              variant="headingM"
              weight="semibold"
              className="text-gray-900"
            >
              Grande Comore
            </Typography>

            <div className="space-y-3 text-left">
              <div>
                <Typography
                  variant="body-sm"
                  weight="semibold"
                  className="text-gray-900"
                >
                  Agence principale - Moroni
                </Typography>
                <Typography variant="caption2" theme="gray">
                  Avenue de l'Indépendance
                </Typography>
                <Typography variant="caption2" theme="gray">
                  Tél: +269 XX XX XX XX
                </Typography>
              </div>

              <div>
                <Typography
                  variant="body-sm"
                  weight="semibold"
                  className="text-gray-900"
                >
                  Agence Mitsamiouli
                </Typography>
                <Typography variant="caption2" theme="gray">
                  Centre-ville
                </Typography>
                <Typography variant="caption2" theme="gray">
                  Tél: +269 XX XX XX XX
                </Typography>
              </div>
            </div>
          </div>
        </div>

        {/* Anjouan 
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto">
              <Typography variant="headingM" theme="secondary" weight="bold">
                🏪
              </Typography>
            </div>

            <Typography
              variant="headingM"
              weight="semibold"
              className="text-gray-900"
            >
              Anjouan
            </Typography>

            <div className="space-y-3 text-left">
              <div>
                <Typography
                  variant="body-sm"
                  weight="semibold"
                  className="text-gray-900"
                >
                  Agence Mutsamudu
                </Typography>
                <Typography variant="caption2" theme="gray">
                  Place centrale
                </Typography>
                <Typography variant="caption2" theme="gray">
                  Tél: +269 XX XX XX XX
                </Typography>
              </div>
            </div>
          </div>
        </div>

        {/* Mohéli *}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <Typography variant="headingM" theme="primary" weight="bold">
                🏬
              </Typography>
            </div>

            <Typography
              variant="headingM"
              weight="semibold"
              className="text-gray-900"
            >
              Mohéli
            </Typography>

            <div className="space-y-3 text-left">
              <div>
                <Typography
                  variant="body-sm"
                  weight="semibold"
                  className="text-gray-900"
                >
                  Agence Fomboni
                </Typography>
                <Typography variant="caption2" theme="gray">
                  Centre administratif
                </Typography>
                <Typography variant="caption2" theme="gray">
                  Tél: +269 XX XX XX XX
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA principal */}
      <div className="flex flex-col sm:flex-row gap-4 text-center justify-center mt-8">
        <Button
          size="large"
          variant="accent"
          className="shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          Trouvez l'agence la plus proche
        </Button>
        <Button
          size="large"
          variant="secondary"
          className="shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          Nous contacter
        </Button>
      </div>
    </CenteredSection>
  </FullSection>
);

export default AgencesSection;
