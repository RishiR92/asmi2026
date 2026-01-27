import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  const isTeamPage = location.pathname === "/team";

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-6 py-5 md:px-10">
      <Link 
        to="/" 
        className="text-xl font-semibold tracking-tight text-foreground transition-opacity hover:opacity-80"
      >
        asmi
      </Link>

      <Link
        to={isTeamPage ? "/" : "/team"}
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
      >
        {isTeamPage ? "Home" : "Team"}
      </Link>
    </nav>
  );
};

export default Navigation;
