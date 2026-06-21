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
    <footer>
      <Container>
        <div className="p-4">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Logo />
              <span>Siddhant</span>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm">
                  © {new Date().getFullYear()} Siddhant Mul. All rights
                  reserved.
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
        </div>
      </Container>
    </footer>
  );
};
