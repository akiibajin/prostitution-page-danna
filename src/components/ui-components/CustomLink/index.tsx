import { ReactNode } from "react";
import { Link, LinkProps } from "react-router-dom";

const CustomLink = ({
  children,
  to,
  ...props
}: {
  children: ReactNode;
  props?: LinkProps;
  to: string;
}) => {
  return (
    <Link style={{ color: "black", textDecoration: "none" }} to={to} {...props}>
      {children}
    </Link>
  );
};

export default CustomLink;
