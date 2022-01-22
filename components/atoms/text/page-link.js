export default function PageLink({ text, href, target, style}) {
  return (
    <a href={href} target={target}>
      <p className={" font-bold " + style}>{text}</p>
    </a>
  );
}
