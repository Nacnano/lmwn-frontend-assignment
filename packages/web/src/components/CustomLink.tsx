import React from "react";

interface CustomLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
}

const CustomLink = ({ to, children, ...rest }: CustomLinkProps) => {
  const isInternalLink = to && to.startsWith("/");
  const isAnchorLink = to && to.startsWith("#");

  if (isInternalLink) {
    return (
      <a href={to} {...rest}>
        {children}
      </a>
    );
  }

  if (isAnchorLink) {
    const scrollTo = (id: string) => {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    };
    return (
      <button onClick={() => scrollTo(to.slice(1, to.length))} {...rest}>
        {children}
      </button>
    );
  }

  return <a target="_blank" rel="noopener noreferrer" href={to} {...rest} />;
};

export default CustomLink;
