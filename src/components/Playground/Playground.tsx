import { Sandpack } from '@codesandbox/sandpack-react';
import { nightOwl } from '@codesandbox/sandpack-themes';

export default function ButtonPlayground() {
  return (
    <Sandpack
      template="react-ts" // or "react" if not using TypeScript
      theme={nightOwl}
      options={{
        editorHeight: 400,
        showTabs: true,
        showLineNumbers: true,
        showNavigator: true,
        showRefreshButton: true,
        closableTabs: true,
      }}
      files={{
        '/App.tsx': `
        import * as React from "react";
        import { Button } from "./Button";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center gap-8 p-8 flex-wrap">
      <Button variant="default">Default</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>

      <Button size="sm">Small</Button>
      <Button size="lg">Large</Button>

      <Button loading>Loading...</Button>
      <Button disabled>Disabled</Button>

      <Button>
        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H9a1 1 0 100 2h1v3a1 1 0 102 0v-3h1a1 1 0 100-2h-1V7z" clipRule="evenodd" />
        </svg>
        With Icon
      </Button>
    </div>
  );
}`,
        '/Button.tsx': `
import * as React from "react";        
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "./lib/utils";
import { Loader2 } from "lucide-react";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "underline-offset-4 hover:underline text-primary",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-3 rounded-md",
        lg: "h-11 px-8 rounded-md",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  loading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, loading, children, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={loading || props.disabled}
        {...props}
      >
        {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };`,
        '/lib/utils.ts': `import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}`,
        '/package.json': JSON.stringify(
          {
            dependencies: {
              react: '^18.2.0',
              'react-dom': '^18.2.0',
              'class-variance-authority': '^0.7.0',
              clsx: '^2.0.0',
              'tailwind-merge': '^2.0.0',
              'lucide-react': '^0.294.0',
            },
            devDependencies: {
              typescript: '^5.0.0',
              '@types/react': '^18.2.0',
            },
          },
          null,
          2
        ),
      }}
      customSetup={{
        dependencies: {
          'class-variance-authority': '^0.7.0',
          clsx: '^2.0.0',
          'tailwind-merge': '^2.0.0',
          'lucide-react': '^0.294.0',
        },
      }}
    />
  );
}

// import { Sandpack } from '@codesandbox/sandpack-react';
// import { nightOwl } from '@codesandbox/sandpack-themes';

// type PlaygroundProps = {
//   children: React.ReactNode;
//   title?: string;
//   height?: number;
// };

// export default function Playground({
//   children,
//   title,
//   height = 400,
// }: PlaygroundProps) {
//   // Convert children to string (this is the magic)
//   const code = childrenToCode(children);

//   return (
//     <div className="my-12 -mx-4 sm:-mx-6 lg:mx-0">
//       {title && (
//         <h3 className="mb-3 text-lg font-semibold text-foreground">{title}</h3>
//       )}
//       <Sandpack
//         template="react-ts"
//         theme={nightOwl}
//         options={{
//           editorHeight: height,
//           showNavigator: true,
//           showTabs: true,
//           showLineNumbers: false,
//           showInlineErrors: true,
//           wrapContent: true,
//           editorWidthPercentage: 55,
//           closableTabs: true,
//         }}
//         files={{
//           '/App.tsx': {
//             code: `import React from "react";
// import { Button } from "./components/Button";
// // Import other components as needed

// export default function App() {
//   return (
//     <div className="min-h-screen bg-background flex items-center justify-center p-12 gap-6 flex-wrap">
//       ${code}
//     </div>
//   );
// }`,
//             active: true,
//           },
//           // Your real components (auto-included)
//           '/components/Button.tsx': `/* @live */ ${getButtonCode()}`,
//           '/components/Input.tsx': `/* @live */ ${getInputCode()}`,
//           '/components/Card.tsx': `/* @live */ ${getCardCode()}`,
//           // Add more as you create them
//         }}
//         customSetup={{
//           dependencies: {
//             'class-variance-authority': '^0.7.0',
//             clsx: '^2.1.0',
//             'tailwind-merge': '^2.2.0',
//             'lucide-react': '^0.344.0',
//           },
//         }}
//       />
//     </div>
//   );
// }
