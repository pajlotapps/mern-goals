import { FaExclamationTriangle } from "react-icons/fa";
import Link from "@mui/material/Link";

export default function NotFound() {
  return (
    <>
      <div>
        <div
          style={{
            display: "inline-flex",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <FaExclamationTriangle className="m-2" size="2em" />
          <h1>404</h1>
        </div>

        <p>
          {"{"}... upps, coś poszło nie tak ...{"}"}
        </p>
      </div>
      <Link href="/" sx={{ mt: 3 }}>
        Powrót do strony głównej
      </Link>
    </>
  );
}
