import { Typography } from "@/app/ui/design-system/Typography/Typography";
import { ContactInfo as ContactInfoType } from "@/types/contact";

interface ContactInfoProps {
  contactInfo: ContactInfoType;
}

export const ContactInfo = ({
  contactInfo = {
    phone: "+269 XX XX XX XX",
    email: "contact@agc-assurances.km",
    address: "Moroni, Grande Comore",
  },
}: {
  contactInfo?: ContactInfoType;
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-white/20">
      <div className="text-center group hover:scale-105 transition-transform duration-200">
        <Typography
          as="link"
          href={`tel:${contactInfo.phone}`}
          variant="body-sm"
          weight="semibold"
          theme="white"
          className="flex items-center justify-center gap-2 hover:text-secondary transition-colors"
        >
          <span className="text-lg">📞</span>
          {contactInfo.phone}
        </Typography>
      </div>

      <div className="text-center group hover:scale-105 transition-transform duration-200">
        <Typography
          as="link"
          href={`mailto:${contactInfo.email}`}
          variant="body-sm"
          weight="semibold"
          theme="white"
          className="flex items-center justify-center gap-2 hover:text-secondary transition-colors"
        >
          <span className="text-lg">✉️</span>
          {contactInfo.email}
        </Typography>
      </div>

      <div className="text-center group hover:scale-105 transition-transform duration-200">
        <Typography
          variant="body-sm"
          weight="semibold"
          theme="white"
          className="flex items-center justify-center gap-2"
        >
          <span className="text-lg">📍</span>
          {contactInfo.address}
        </Typography>
      </div>
    </div>
  );
};
