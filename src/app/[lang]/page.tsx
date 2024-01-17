import Link from 'next/link'
import { Locale } from '../../../i18n-config';
import { getDictionary } from '../../../get-dictionary';

export default async function Home({ params }: { params: {lang: Locale }}) {
  const dictionary = await getDictionary(params.lang);
  return (
    <div>
      <div className="w-[500px] m-auto my-[300px] text-center">
        {/* <p className="text-[48px] font-semibold">Home page</p> */}
        <div className="flex flex-col">
          <Link href={`${params.lang}/blog`} className="mt-6 text-[24px] font-medium underline">
            {dictionary['home-page'].go_to_blog}
          </Link>
          <Link
            href={`${params.lang}/todo-list`}
            className="mt-6 text-[24px] font-medium underline"
          >
            {dictionary['home-page'].go_to_todo}
          </Link>
        </div>
      </div>
    </div>
  )
}
