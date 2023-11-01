import React from "react";
import { useRouter } from "next/router";
import Link from "next/Link";

const ClientsPage = () => {
  const items = [
    { name: "Ale", key: "ale" },
    { name: "Jhon", key: "jhon" },
    { name: "Peter", key: "peter" },
    { name: "Venom", key: "venom" },
    { name: "Toxin", key: "toxin" },
  ];
  const router = useRouter();
  const { pathname, query } = router;
  console.log(pathname);
  console.log(query);

  const loadClientHandler = () => {
    router.push({
      pathname: "/clients/[id]",
      query: { id: "ale" },
    });
  };

  return (
    <div>
      ClientsPage <h1>{JSON.stringify(query)}</h1>
      <ul>
        {items.map(({ name, key }, i) => (
          <li>
            <Link href={`/clients/${key}`}>{name}</Link>
          </li>
        ))}
      </ul>
      <button onClick={loadClientHandler}>Load Ale</button>
    </div>
  );
};

export default ClientsPage;
