import Link from "next/link";

export default function BackendCourseLayout({ children }: { children: React.ReactNode }) {
  return (
 
   
      <main className="w-full flex-1 flex flex-col items-center justify-start">
        {children}
      </main>
   
  );
} 