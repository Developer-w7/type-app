import "./style.css";

export default function ThemeOption({
  children,
  themeName,
}: {
  children?: React.ReactNode;
  themeName: string;
}) {
  return (
    <div className="theme-option" id={`theme-${themeName}`}>
      {children}
    </div>
  );
}
