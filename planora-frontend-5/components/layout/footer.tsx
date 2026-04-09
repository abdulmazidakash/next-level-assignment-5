// import Link from "next/link";

// const quickLinks = [
//   { href: "/about", label: "About" },
//   { href: "/contact", label: "Contact" },
//   { href: "/privacy", label: "Privacy Policy" },
// ];

// export function Footer() {
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="border-t border-emerald-500/20 bg-emerald-950/5 text-emerald-900 dark:text-emerald-50 dark:bg-emerald-950/20">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          
//           {/* Brand Section */}
//           <div className="flex flex-col items-center md:items-start text-center md:text-left">
//             <h2 className="text-2xl font-bold tracking-tight text-emerald-600 dark:text-emerald-400">
//               Planora<span className="text-emerald-500">.</span>
//             </h2>
//             <p className="text-sm text-emerald-800/70 dark:text-emerald-200/60 mt-3 max-w-xs">
//               Discover, join, and manage events seamlessly with our specialized tools.
//             </p>
//           </div>

//           {/* Quick Links Section */}
//           <div className="flex flex-col items-center md:items-start text-center md:text-left">
//             <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700/50 dark:text-emerald-300/40">
//               Navigation
//             </h3>
//             <ul className="mt-4 space-y-3">
//               {quickLinks.map((link) => (
//                 <li key={link.href}>
//                   <Link
//                     href={link.href}
//                     className="text-sm font-medium text-emerald-800/80 dark:text-emerald-200/70 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all duration-200"
//                   >
//                     {link.label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>

//         {/* Bottom Bar */}
//         <div className="border-t border-emerald-500/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
//           <p className="text-xs text-emerald-700/60 dark:text-emerald-400/50">
//             © {currentYear} Planora. All rights reserved.
//           </p>
//           <div className="flex gap-6">
//             {/* Added a subtle placeholder for social or secondary links */}
//             <span className="h-1.5 w-1.5 rounded-full bg-emerald-500/30" />
//             <span className="h-1.5 w-1.5 rounded-full bg-emerald-500/30" />
//             <span className="h-1.5 w-1.5 rounded-full bg-emerald-500/30" />
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

"use client";

import { CalendarDays } from "lucide-react";
import Link from "next/link";
import { FaGithub, FaFacebook, FaTwitter } from "react-icons/fa";

const quickLinks = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy Policy" },
];

const resources = [
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
  { href: "/support", label: "Support" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-emerald-500/20 bg-muted/50-to-b from-emerald-950/5 to-emerald-950/20 dark:from-emerald-950/10 dark:to-emerald-950/40 text-emerald-900 dark:text-emerald-50">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2">
          <div className="h-10 w-10 rounded-lg bg-emerald-500 flex items-center justify-center">
            <CalendarDays className="h-5 w-5 text-emerald-foreground" />
          </div>
          <span className="font-semibold text-xl">Planora</span>
        </Link>
            <p className="mt-3 text-sm text-emerald-800/70 dark:text-emerald-200/60">
              Discover, join, and manage events with a modern experience.
            </p>

            {/* Social */}
            <div className="flex gap-4 mt-5 text-lg">
              <Link href="#">
                <FaGithub className="hover:text-emerald-500 transition" />
              </Link>
              <Link href="#">
                <FaTwitter className="hover:text-emerald-500 transition" />
              </Link>
              <Link href="#">
                <FaFacebook className="hover:text-emerald-500 transition" />
              </Link>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-emerald-700/60 dark:text-emerald-300/50">
              Navigation
            </h3>
            <ul className="mt-4 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-emerald-500 transition">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-emerald-700/60 dark:text-emerald-300/50">
              Resources
            </h3>
            <ul className="mt-4 space-y-3">
              {resources.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-emerald-500 transition">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-emerald-700/60 dark:text-emerald-300/50">
              Subscribe
            </h3>
            <p className="mt-3 text-sm text-emerald-800/70 dark:text-emerald-200/60">
              Get updates and latest events.
            </p>

            <div className="mt-4 flex">
              <input
                type="email"
                placeholder="Email address"
                className="w-full px-3 py-2 text-sm rounded-l-md border border-emerald-500/20 bg-transparent focus:outline-none"
              />
              <button className="px-4 py-2 bg-emerald-500 text-white text-sm rounded-r-md hover:bg-emerald-600 transition">
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-emerald-500/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-emerald-700/60 dark:text-emerald-400/50">
            © {currentYear} Planora. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm">
            <Link href="/terms" className="hover:text-emerald-500">
              Terms
            </Link>
            <Link href="/privacy" className="hover:text-emerald-500">
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}