'use client';
import { Typography } from "@/app/ui/design-system/Typography/Typography";
import Button from "@/app/ui/design-system/Button/Button";
import { useNewsletterForm } from "@/hooks/useNewsletterForm";
import { NewsletterFormData } from "@/types/contact";

interface NewsletterFormProps {
  onSubmit?: (data: NewsletterFormData) => Promise<void>;
}

export const NewsletterForm = ({ onSubmit }: NewsletterFormProps) => {
  const {
    formData,
    isLoading,
    isSuccess,
    error,
    handleInputChange,
    handleSubmit,
  } = useNewsletterForm(onSubmit);

  if (isSuccess) {
    return (
      <div className="text-center space-y-4 py-8">
        <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto">
          <span className="text-2xl">✅</span>
        </div>
        <Typography variant="body-lg" theme="white" weight="semibold">
          Merci pour votre inscription !
        </Typography>
        <Typography variant="body-sm" theme="white" className="opacity-80">
          Vous recevrez bientôt nos actualités et conseils.
        </Typography>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="text-center space-y-3">
        <Typography variant="headingM" theme="white" weight="semibold">
          Restez informé
        </Typography>
        <Typography variant="body-base" theme="white" className="opacity-90">
          Conseils, actualités et offres exclusives directement dans votre boîte
          mail
        </Typography>
      </div>

      <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
        <div className="space-y-3">
          <input
            type="email"
            placeholder="Votre adresse email *"
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            disabled={isLoading}
            className="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-secondary disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            required
          />

          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Prénom *"
              value={formData.firstName}
              onChange={(e) => handleInputChange("firstName", e.target.value)}
              disabled={isLoading}
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-secondary disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              required
            />
            <input
              type="text"
              placeholder="Nom *"
              value={formData.lastName}
              onChange={(e) => handleInputChange("lastName", e.target.value)}
              disabled={isLoading}
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-secondary disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              required
            />
          </div>
        </div>

        {error && (
          <div className="bg-red-500/20 border border-red-500/30 rounded-lg p-3">
            <Typography
              variant="body-sm"
              theme="white"
              className="text-red-200"
            >
              {error}
            </Typography>
          </div>
        )}

        <Button
          type="submit"
          variant="accent"
          size="large"
          className="w-full"
          disabled={isLoading}
        >
          {isLoading ? (
            <span className="flex items-center gap-2">
              <span className="animate-spin">⏳</span>
              Inscription en cours...
            </span>
          ) : (
            "Je m'abonne"
          )}
        </Button>

        <Typography
          variant="caption2"
          theme="white"
          className="opacity-70 text-center"
        >
          📧 Pas de spam, juste l\'essentiel • Désabonnement possible à tout
          moment
        </Typography>
      </form>
    </div>
  );
};
