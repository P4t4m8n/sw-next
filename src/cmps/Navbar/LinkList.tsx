import LinkLine from "./LinkLine";
import { itemLink } from "./Navbar";

interface Props {
  links: itemLink[];
}
export function LinkList({ links }: Props) {
  return (
    <ul>
      {links.map((link, idx) => (
        <LinkLine key={idx} item={link} />
      ))}
    </ul>
  );
}
