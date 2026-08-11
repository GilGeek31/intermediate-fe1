import {
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";

const icons = {
  linkedin: FaLinkedin,
  facebook: FaFacebook,
  instagram: FaInstagram,
  twitter: FaXTwitter,
};

export default function SocialLinks({ links }) {
  return (
    <div className="flex items-center gap-4">
      {links.map(({ platform, href }) => {
        const Icon = icons[platform];
        return (
          <a
            key={platform}
            href={href}
            aria-label={platform}
            className="text-text-dark-primary hover:text-text-dark-disabled transition-colors"
          >
            <Icon size={25} />
          </a>
        );
      })}
    </div>
  );
}
