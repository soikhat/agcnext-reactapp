import { useRouter } from "next/navigation";
import { useCallback } from "react";

interface NewsletterData {
  email: string;
}

export function useHomePageHandlers() {
  const router = useRouter();

  const handleDevisClick = useCallback(() => {
    router.push("/pages/devis");
  }, [router]);

  const handleServicesClick = useCallback(() => {
    router.push("/pages/services");
  }, [router]);

  const handleContactClick = useCallback(() => {
    router.push("/pages/contact");
  }, [router]);

  const handleAboutClick = useCallback(() => {
    router.push("/pages/about");
  }, [router]);

  const handleNewsletterSubmit = useCallback(async (data: NewsletterData) => {
    try {
      console.log("Newsletter signup:", data);

      // TODO: Remplacer par votre appel API
      // const response = await fetch('/api/newsletter', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(data),
      // });

      // if (!response.ok) throw new Error('Subscription failed');

      // Utiliser votre système de toast existant
      // toast.success('Inscription réussie !');
    } catch (error) {
      console.error("Newsletter subscription error:", error);
      // toast.error('Une erreur est survenue. Veuillez réessayer.');
    }
  }, []);

  return {
    handleDevisClick,
    handleServicesClick,
    handleContactClick,
    handleAboutClick,
    handleNewsletterSubmit,
  };
}
