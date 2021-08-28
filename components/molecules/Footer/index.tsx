import { Icon } from "@iconify/react";
import Section from "../Section";
import socialMedia from "@constants/socialMedia";

const Footer = () => {
  return (
    <Section id="contact" bg="dark" title="Reach Out to Me!" className="pt-0">
      <div className="text-center">
        <p className="lead">
          I'm currently looking for software engineering opportunities. <br />
          Feel free to contact me if you have any position available
        </p>
        <p className="pt-2">
          {socialMedia.map((social, index) => (
            <a
              href={social.link}
              key={index}
              title={social.name}
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark"
            >
              <Icon
                icon={social.icon}
                // size="2x"
                height={32}
                className="mx-2"
                color={social.color}
              />
            </a>
          ))}
        </p>
        <p>
          Special thanks to
          <a
            href="https://github.com/hashirshoaeb/home"
            target="_blank"
            rel="noopener noreferrer"
          >
            hashirshoaeb
          </a>
          for template referencing
        </p>
      </div>
    </Section>
  );
};

export default Footer;
