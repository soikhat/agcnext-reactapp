'use client';
import { useState } from "react";
import { NewsletterFormData } from "../types/contact";

export const useNewsletterForm = (
  onSubmit?: (data: NewsletterFormData) => Promise<void>
) => {
  const [formData, setFormData] = useState<NewsletterFormData>({
    email: "",
    firstName: "",
    lastName: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (
    field: keyof NewsletterFormData,
    value: string
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
    // Clear error when user starts typing
    if (error) setError(null);
  };

  const validateForm = (): boolean => {
    if (!formData.email.trim()) {
      setError("L'adresse email est requise");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Veuillez entrer une adresse email valide");
      return false;
    }

    if (!formData.firstName.trim()) {
      setError("Le prénom est requis");
      return false;
    }

    if (!formData.lastName.trim()) {
      setError("Le nom est requis");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);
    setError(null);

    try {
      if (onSubmit) {
        await onSubmit(formData);
      } else {
        // Simulation d'envoi
        await new Promise((resolve) => setTimeout(resolve, 1000));
        console.log("Newsletter subscription:", formData);
      }

      setIsSuccess(true);
      setFormData({ email: "", firstName: "", lastName: "" });

      // Reset success message after 3 seconds
      setTimeout(() => setIsSuccess(false), 3000);
    } catch (err) {
      setError("Une erreur est survenue. Veuillez réessayer.");
    } finally {
      setIsLoading(false);
    }
  };

  return {
    formData,
    isLoading,
    isSuccess,
    error,
    handleInputChange,
    handleSubmit,
  };
};
