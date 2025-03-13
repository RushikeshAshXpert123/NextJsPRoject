import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function Footer() {
  return (
    <footer className="bg-blue-600 text-white p-4 mt-4">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-4 mb-2">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-300 transition duration-200"
          >
            <FacebookIcon />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-300 transition duration-200"
          >
            <TwitterIcon />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-300 transition duration-200"
          >
            <InstagramIcon />
          </a>
        </div>
        <p>&copy; 2025 Hosteller. All rights reserved.</p>
        <p className="text-sm mt-1">Designed by the Hosteller</p>
      </div>
    </footer>
  );
}
