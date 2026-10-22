import Link from "next/link";


const nav = [
  { title: "خانه", href: "/" },
  { title: "وبلاگ", href: "/Blogshow" },
  { title: "اضافه کردن  بلاگ", href: "/addblog" },
];

function Nav() {
  return (
    <div className="w-full bg-yellow-300">
  <ul className="flex my-2 px-6 gap-6 items-center justify-center">
    {nav.map(item=>(<li>
        <Link href={item.href}>
         {item.title}
        </Link>
       </li>))}
  </ul>
    </div>
  );
}

export default Nav;
