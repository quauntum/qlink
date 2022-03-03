export default function capitalize(text: string) {
  return text ? text[0].toUpperCase() + text.substr(1) : '';
}
