import { ErrorBoundary } from "react-error-boundary";
import "./style.css";
import ErrorFallback from "../../molecules/error-fallback/Fallback";

// function MyComponent() {
//   // This component might throw an error
//   if (Math.random() > 0.5) {
//     throw new Error("I'm a simulated error!");
//   }
//   return <div>My content</div>;
// }

export default function ErrorBoundaryWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {
        // Reset the state of your app so the error doesn't happen again
      }}
    >
      {children}
    </ErrorBoundary>
  );
}
