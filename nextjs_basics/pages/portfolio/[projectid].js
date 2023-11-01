import { useRouter } from 'next/router';

const Portfolio = () => {
  const router = useRouter();
  const {pathname, query} = router;
  console.log(pathname)
  console.log(query)
  

  return (
    <div>
      Portfolio item
      <h1>
        {JSON.stringify(query)}
      </h1>
    </div>
  )
}

export default Portfolio