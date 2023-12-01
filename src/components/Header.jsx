import Link from "next/link";

export const Header = () => {
  return (
    <header className="bg-white shadow">
      <div className="mx-auto max-w-7xl p-8">
        <div className="flex items-stretch justify-between">
          <div className="font-bold">EventMakers</div>
          <div className="space-x-4">
            <Link href={"/login"} className="link">Login</Link>
            <Link href={"/register"} className="btn-link">Sign up</Link>
          </div>
        </div>
      </div>
    </header>
  );
};
