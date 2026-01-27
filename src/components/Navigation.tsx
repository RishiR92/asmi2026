import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  const isTeamPage = location.pathname === "/team";

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-6 py-5 md:px-10">
      <Link 
        to="/" 
        className="font-serif text-2xl italic text-foreground transition-opacity hover:opacity-70"
      >
        asmi
      </Link>

      <Link
        to={isTeamPage ? "/" : "/team"}
        className="text-xs font-medium uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
      >
        {isTeamPage ? "Home" : "Team"}
      </Link>
    </nav>
  );
};

export default Navigation;
