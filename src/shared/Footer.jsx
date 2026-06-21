import { Container } from "./ui/components/Container.jsx";
import { GitHubIcon } from "./ui/components/icons/GitHubIcon.jsx";
import { LinkedInIcon } from "./ui/components/icons/LinkedInIcon.jsx";
import { XIcon } from "./ui/components/icons/XIcon.jsx";
import { Logo } from "./ui/components/Logo.jsx";
import { SocialIcon } from "./ui/pages/SocialIcon.jsx";

const socials = [
  {
    name: "X",
    href: "https://x.com/SiddhantMul24",
    icon: XIcon,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/siddhant-mul-baa259360/",
    icon: LinkedInIcon,
  },
  {
    name: "GitHub",
    href: "https://github.com/SiddhCodes",
    icon: GitHubIcon,
  },
];

export const Footer = () => {
  return (
    <footer className="border-t border-stone-200 p-4">
      <Container>
        <div className="flex flex-col items-center gap-4 p-4 md:items-start">
          <div className="flex items-center gap-2">
            <Logo />
            <span>Siddhant</span>
          </div>

          <div className="flex w-full flex-col items-center justify-between gap-4 md:flex-row md:gap-0">
            <div>
              <p className="text-sm">
                © {new Date().getFullYear()} Siddhant Mul. All rights reserved.
              </p>
            </div>
            <div className="flex items-center gap-4">
              {socials.map((social) => {
                const Icon = social.icon;

                return (
                  <SocialIcon
                    key={social.name}
                    href={social.href}
                    label={social.name}
                  >
                    <Icon />
                  </SocialIcon>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};
