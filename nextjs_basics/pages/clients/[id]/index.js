import React from "react";
import { useRouter } from "next/router";
import Link from "next/Link";

const ClientProjects = () => {
  const router = useRouter();
  const { pathname, query } = router;
  console.log(pathname);
  console.log(query);

  const items = [
    { name: "Test ABC", key: "ABC" },
    { name: "Test DEF", key: "DEF" },
    { name: "Test GHI", key: "GHI" },
  ];

  return (
    <div>
      ClientProjects <h1>{JSON.stringify(query)}</h1>
      <ul>
        {items.map(({ name, key }, i) => (
          <li>
            <Link
              href={{
                pathname: "/clients/[clientId]/[id]",
                query: { clientId: query.id, id: key },
              }}
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClientProjects;
