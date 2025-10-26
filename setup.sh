#!/bin/bash

echo "🚀 Setting up Vybout Business Admin structure..."

# --- APP STRUCTURE ---

# AUTH ROUTES
mkdir -p "app/(auth)/login" "app/(auth)/register" "app/(auth)/forgot-password" "app/(auth)/reset-password"
# DASHBOARD ROUTES
mkdir -p "app/(dashboard)/"{dashboard,users/[id],businesses/[id],posts/[id],jobs/[id],jobs/disputes,settings/{general,payment,notifications,ai,web3}}

# COMPONENTS
mkdir -p components/{ui,layout,dashboard,forms}
# CONTEXT, HOOKS, LIB, TYPES
mkdir -p context hooks lib/yupSchemas types
# PUBLIC
mkdir -p public/{images,icons}

# --- APP FILES ---

cat <<'EOF' > app/layout.tsx
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
EOF

cat <<'EOF' > app/page.tsx
export default function HomePage() {
  return <h1>Welcome to Vybout Business Admin</h1>;
}
EOF

cat <<'EOF' > app/globals.css
body {
  margin: 0;
  font-family: system-ui, sans-serif;
}
EOF

# --- AUTH FILES ---
for route in login register forgot-password reset-password; do
cat <<EOF > "app/(auth)/$route/page.tsx"
export default function ${route//-}Page() {
  return <div>${route//-/ } Page</div>;
}
EOF
done

# --- DASHBOARD PAGES ---
cat <<'EOF' > "app/(dashboard)/dashboard/page.tsx"
export default function DashboardPage() {
  return <div>Dashboard Overview</div>;
}
EOF

cat <<'EOF' > "app/(dashboard)/dashboard/layout.tsx"
export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <nav>Dashboard Sidebar</nav>
      <main>{children}</main>
    </section>
  );
}
EOF

# --- COMPONENTS ---
cat <<'EOF' > components/ui/Button.tsx
export function Button({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
    >
      {children}
    </button>
  );
}
EOF

cat <<'EOF' > components/layout/Sidebar.tsx
export default function Sidebar() {
  return <aside className="w-64 bg-gray-100 h-screen p-4">Sidebar</aside>;
}
EOF

cat <<'EOF' > components/layout/Navbar.tsx
export default function Navbar() {
  return <header className="w-full bg-white shadow p-4">Navbar</header>;
}
EOF

cat <<'EOF' > components/forms/LoginForm.tsx
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
});

export default function LoginForm() {
  const { register, handleSubmit } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data: any) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <input {...register("email")} placeholder="Email" className="border p-2 w-full" />
      <input {...register("password")} type="password" placeholder="Password" className="border p-2 w-full" />
      <button className="bg-blue-600 text-white px-4 py-2 rounded-md">Login</button>
    </form>
  );
}
EOF

# --- CONTEXTS ---
cat <<'EOF' > context/AuthContext.tsx
"use client";
import { createContext, useContext, useState } from "react";

const AuthContext = createContext<any>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState(null);
  return <AuthContext.Provider value={{ user, setUser }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
EOF

# --- HOOKS ---
cat <<'EOF' > hooks/useFetch.ts
import { useEffect, useState } from "react";

export function useFetch(url: string) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(setData)
      .finally(() => setLoading(false));
  }, [url]);

  return { data, loading };
}
EOF

# --- LIB ---
cat <<'EOF' > lib/utils.ts
export function cn(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
EOF

cat <<'EOF' > lib/constants.ts
export const APP_NAME = "Vybout Business Admin";
EOF

cat <<'EOF' > lib/yupSchemas/authSchema.ts
import * as yup from "yup";

export const loginSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
});
EOF

# --- TYPES ---
cat <<'EOF' > types/user.ts
export interface User {
  id: string;
  email: string;
  name: string;
}
EOF

# --- PUBLIC FILES ---
touch public/favicon.ico
echo "🖼️  Placeholder images and icons created."

# --- ROOT FILES ---
cat <<'EOF' > README.md
# 🏙️ Vybout Business Admin

Admin dashboard for managing businesses, posts, and creators on the Vybout platform.
Built with **Next.js**, **Yup**, and **React Hook Form**.
EOF

echo "✅ Setup complete! You can now run: npm run dev"
